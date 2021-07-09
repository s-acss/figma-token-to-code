import COMPONENT from "./COMPONENT";
import FILL from "./token/FILL";
import TEXT from "./token/TEXT";
import STROKE from "./token/STROKE";
import GRID from "./token/GRID";
import FLEX from "./token/FLEX";
import SACSS from "./SACSS";
import UTILS from "./UTILS";
import EFFECT from "./token/EFFECT";
import OTHERS from "./token/OTHERS";
import CONFIG from "./CONFIG";

const NODE = {
    /**
     * 合并两个info
     * @param a
     * @param b
     */
    extendInfo: (a, b) => {
        if (!b) {
            return a;
        }
        const {
            className: classNameA = '',
            ignoreClassName: ignoreClassNameA = '',
            componentProps: componentPropsA = {},
            props: propsA = {},
            htmlProps: htmlPropsA = {},
            ...restA
        } = a;
        const {
            className: classNameB = '',
            ignoreClassName: ignoreClassNameB = '',
            componentProps: componentPropsB = {},
            props: propsB = {},
            htmlProps: htmlPropsB = {},
            children,
            ...restB
        } = b;
        return {
            className: `${classNameA} ${classNameB}`.trim(),
            ignoreClassName: `${ignoreClassNameA} ${ignoreClassNameB}`.trim(),
            htmlProps: {...htmlPropsA, ...htmlPropsB},
            componentProps: {...componentPropsA, ...componentPropsB},
            ...restA,
            ...restB
        };
    },
    /**
     * 如果一个元素内部只有几何图形，那么只显示其结构
     */
    isStructNode: (node: SceneNode) => {
        // 以#号开头
        if (node.name.startsWith("#")) {
            return true;
        }
        const yesTypes = ['RECTANGLE', 'VECTOR', 'STAR', 'LINE', 'POLYGON', 'ELLIPSE', 'SLICE'];
        // 如果本身就是这些元素那么也是直接输出
        if (yesTypes.indexOf(node.type) > -1) {
            return true;
        }
        if (node.type === 'TEXT') {
            return false;
        }
        // @ts-ignore
        const {children = []} = node;
        if (!children.length) {
            return true;
        }
        // 找到了不合法元素（不在上面的几何列表里面）
        const gotNo = children.find((item) => item.visible && yesTypes.indexOf(item.type) === -1);
        return !gotNo;
    },
    isRenderChildren: (node: SceneNode) => {
        if (!(node.type === 'INSTANCE' || node.type === 'COMPONENT')) {
            return false;
        }
        // 只有一个子元素
        if (node.children.length !== 1) {
            return false;
        }
        // const onlyChildren = node.children[0];
        // if (onlyChildren.type === 'INSTANCE') {
        //   return true;
        // }
        return false;
    },
    getNodeInfo: (node: SceneNode) => {
        if (!node.visible || node.name.startsWith("_")) {
            return null;
        }
        // 直接渲染子元素
        if (NODE.isRenderChildren(node)) {
            // @ts-ignore;
            return NODE.getNodeInfo(node.children[0]);
        }
        const isStructNode = NODE.isStructNode(node);
        let nodeInfo = {
            ignoreClassName: [],
            className: [],
            children: []
        };
        if (isStructNode) {
            // @ts-ignore
            nodeInfo.tagName = 'i';
        }
        nodeInfo = COMPONENT.getInfo(node, nodeInfo);
        nodeInfo = FILL.getInfo(node, nodeInfo);
        nodeInfo = TEXT.getInfo(node, nodeInfo);
        nodeInfo = STROKE.getInfo(node, nodeInfo);
        nodeInfo = GRID.getInfo(node, nodeInfo);
        nodeInfo = EFFECT.getInfo(node, nodeInfo);
        nodeInfo = OTHERS.getInfo(node, nodeInfo);
        nodeInfo = FLEX.getInfo(node, nodeInfo);

        // @ts-ignore
        if ((isStructNode && String(nodeInfo?.renderHeight) !== '0') || String(nodeInfo?.renderWidth) === '1') {
            nodeInfo.className.push(SACSS.add('w', parseInt(String(node.width))));
        }
        // @ts-ignore
        if ((isStructNode && String(nodeInfo?.renderHeight) !== '0') || String(nodeInfo?.renderHeight) === '1') {
            nodeInfo.className.push(SACSS.add('h', parseInt(String(node.height))));
        }

        nodeInfo.children = (() => {
            if (node.type === 'TEXT') {
                const texts = TEXT.getTextChildren(node);
                // 多段文本这里要修复一下嵌套的标签，有可能变成 strong > p 这样的结构
                // @ts-ignore
                if (texts[0]?.tagName === 'p') {
                    // @ts-ignore
                    nodeInfo.tagName = "div";
                }
                return texts;
            }
            if (isStructNode || nodeInfo.children === null) {
                return [];
            }
            // 渲染文字节点
            // if (String(nodeInfo.children) === 'TEXT') {
            //     // @ts-ignore
            //     return node.findAll(c => c.type === 'TEXT' && c.visible).map((c) => c.characters);
            // }
            // @ts-ignore
            return NODE.getNodesInfo(node.children);
        })();

        // 整个项目都忽略的 className
        // @ts-ignore
        const {ignoreClassName = []} = CONFIG.getCurrent() || {};
        nodeInfo.className = UTILS.clearClassName(nodeInfo.className, [...nodeInfo.ignoreClassName, ...ignoreClassName]);
        delete nodeInfo.ignoreClassName;

        if ((nodeInfo.children instanceof Array) && nodeInfo.children.length === 1) {
            const childrenInfo = nodeInfo.children[0];
            // 如果父元素和子元素 tagName 相同合并 className
            // @ts-ignore
            if (typeof childrenInfo !=='string' && childrenInfo.tagName === nodeInfo.tagName) {
                childrenInfo.className =[...childrenInfo.className, ...nodeInfo.className];
                return childrenInfo;
            }
        }

        // console.log({nodeInfo});
        return nodeInfo;
    },
    sort: (nodes = []) => {
        return [...nodes].sort((a, b) => {
            const aY = a.y + a.height;
            const bY = b.y + b.height;
            if (a.y === b.y) {
                return a.x - b.x;
            }
            return aY - bY;
        });
    },
    getNodesInfo: (nodes = []) => {
        let info = [];
        // 需要排序一下
        const sortNodes = NODE.sort(nodes);
        // console.log(nodes, sortNodes);
        for (let i = 0, len = sortNodes.length; i < len; i++) {
            const nodeInfo = NODE.getNodeInfo(sortNodes[i]);
            if (!nodeInfo) {
                continue;
            }
            if (nodeInfo instanceof Array) {
                info = [...info, ...nodeInfo];
            } else {
                info.push(nodeInfo);
            }
        }
        return info;
    }
};
export default NODE;
