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
    const {className: classNameA = '', ignoreClassName: ignoreClassNameA = '', props: propsA = {}, ...restA} = a;
    const {className: classNameB = '', ignoreClassName: ignoreClassNameB = '', props: propsB = {}, children, ...restB} = b;
    return {
      props: {...propsA, ...propsB},
      className: `${classNameA} ${classNameB}`,
      ignoreClassName: `${ignoreClassNameA} ${ignoreClassNameB}`,
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
      // node,
      tagName: NODE.isBlockElement(node) ? 'div' : 'span',
      ignoreClassName: '',
      className: '',
      children: []
    };
    const component = COMPONENT.getInfo(node);
    const fill = FILL.getInfo(node);
    const text = TEXT.getInfo(node);
    const stroke = STROKE.getInfo(node);
    const grid = GRID.getInfo(node);
    const effect = EFFECT.getInfo(node);
    const others = OTHERS.getInfo(node);
    const flex = FLEX.getInfo(node);
    // console.log({component, fill, text, stroke, grid, effect});
    nodeInfo = NODE.extendInfo(nodeInfo, fill);
    nodeInfo = NODE.extendInfo(nodeInfo, text);
    nodeInfo = NODE.extendInfo(nodeInfo, stroke);
    nodeInfo = NODE.extendInfo(nodeInfo, grid);
    nodeInfo = NODE.extendInfo(nodeInfo, effect);
    nodeInfo = NODE.extendInfo(nodeInfo, component);
    nodeInfo = NODE.extendInfo(nodeInfo, flex);
    nodeInfo = NODE.extendInfo(nodeInfo, others);

    // @ts-ignore
    if (isStructNode || String(nodeInfo?.renderWidth) === '1') {
      nodeInfo.className += ' ' + SACSS.add('w', parseInt(String(node.width)));
    }
    // @ts-ignore
    if (isStructNode || String(nodeInfo?.renderHeight) === '1') {
      nodeInfo.className += ' ' + SACSS.add('h', parseInt(String(node.height)));
    }

    nodeInfo.children = (() => {
      if (node.type === 'TEXT') {
        return [node.characters];
      }
      const {renderChildren = 1} = component || {};
      if (isStructNode || String(renderChildren) === '0') {
        return [];
      }
      // 渲染子节点
      if (String(renderChildren) === '2') {
        // @ts-ignore
        return node.findAll(c => c.type === 'TEXT').map((c) => c.characters);
      }

      // @ts-ignore
      return NODE.getNodesInfo(node.children);
    })();
    // 整个项目都忽略的 className
    // @ts-ignore
    const {ignoreClassName = ''} = CONFIG.getCurrent() || {};
    nodeInfo.className = UTILS.clearClassName(nodeInfo.className, `${nodeInfo.ignoreClassName} ${ignoreClassName}`);
    delete nodeInfo.ignoreClassName;
    return nodeInfo;
  },
  /**
   * 获取 Tag Name
   * @param node
   */
  isBlockElement: (node: SceneNode) => {
    const parent = node.parent;
    // 没有父元素
    if (!parent) {
      return true;
    }
    // @ts-ignore
    // 和父元素宽度一样
    if (node.width === parent.width) {
      return true;
    }
    // 如果父元素是纵向 的 flex 布局
    // @ts-ignore
    if (parent.layoutMode !== "NONE") {
      return true;
    }
    return false;
  },
  sort: (nodes = []) => {
    return [...nodes].sort((a, b) => {
      if (a.y === b.y) {
        return a.x - b.x;
      }
      return a.y - b.y;
    });
  },
  getNodesInfo: (nodes = []) => {
    let info = [];
    // 需要排序一下
    const sortNodes = NODE.sort(nodes);
    for (let i = 0, len = sortNodes.length; i < len; i++) {
      const nodeInfo = NODE.getNodeInfo(sortNodes[i]);
      nodeInfo && info.push(nodeInfo);
    }
    return info;
  }
};
export default NODE;
