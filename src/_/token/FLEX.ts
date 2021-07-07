import SACSS from "../SACSS";
// import CONFIG from "./CONFIG";

const FLEX = {
    isFlex: (node) => {
        // 这几个元素都不做 Flex 判断处理
        if (['TEXT'].indexOf(node.type) > -1) {
            return false;
        }
        return node?.layoutMode !== "NONE";
    },
    getThisInfo: (node: FrameNode) => {
        if (!FLEX.isFlex(node)) {
            return null;
        }
        const {layoutMode, primaryAxisAlignItems, counterAxisAlignItems, children = []} = node;
        // 没有子元素 flex 布局没有意义
        if (!children.length) {
            return null;
        }
        const className = [];
        // 如果是纵向的 这里可以不使用 flex 布局
        if (layoutMode === 'VERTICAL') {
            // 当是纵向布局当时候
            className.push({
                // "MIN": "",
                "CENTER": "tac",
                "MAX": "tar",
                // "SPACE_BETWEEN": "jcsb",
            }[counterAxisAlignItems]);
        } else {
            className.push({
                // "MIN": "",
                "CENTER": "jcc",
                "MAX": "jcfe",
                "SPACE_BETWEEN": "jcsb",
            }[primaryAxisAlignItems] || "");
            className.push({
                //"MIN": "",
                "CENTER": "aic",
                "MAX": "aife",
            }[counterAxisAlignItems] || "");

            className.push('df');
        }
        return {
            className: className.join(' ')
        };
    },
    getInfoFromParent: (node: FrameNode) => {
        const parent = node.parent;
        if (!parent || !FLEX.isFlex(parent)) {
            return null;
        }
        // @ts-ignore
        const {layoutMode, primaryAxisAlignItems, itemSpacing} = parent;
        // 两端两端对齐表示不需要这些
        if (primaryAxisAlignItems === "SPACE_BETWEEN") {
            return null;
        }

        const className = [];
        const ignoreClassName = [];
        const {id = ''} = parent.children.filter(c => c.visible).pop() || {};
        const isLastChildren = id === node.id;

        // 父元素是纵向的flex 布局，因为忽略掉了 df
        // 这里让自己有 db 实现纵向布局
        if(layoutMode=== 'VERTICAL'){
            className.push('db');
        }
        // 为子元素添加间距
        if (itemSpacing > 0 && !isLastChildren) {
            const gutterMap = {
                "VERTICAL": "mb",
                "HORIZONTAL": "mr"
            };
            className.push(SACSS.add(gutterMap[layoutMode], itemSpacing));
        }
        if (node.layoutGrow === 1) {
            className.push('f1');
            ignoreClassName.push(`w${node.width}`);
        }
        return {
            className: className.join(' '),
            ignoreClassName: ignoreClassName.join(' ')
        };
    },
    getInfo: (node: SceneNode) => {
        // @ts-ignore
        const {className: c1 = '', ignoreClassName: ic1 = ''} = FLEX.getThisInfo(node) || {};
        // @ts-ignore
        const {className: c2 = '', ignoreClassName: ic2 = ''} = FLEX.getInfoFromParent(node) || {};
        return {
            className: `${c1} ${c2}`,
            ignoreClassName: `${ic1} ${ic2}`
        };
    }
};

export default FLEX;
