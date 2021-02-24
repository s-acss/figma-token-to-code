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
    const classNames = [];
    // 如果是纵向的 这里可以不使用 flex 布局
    if (layoutMode === 'VERTICAL') {
      // 当是纵向布局当时候
      classNames.push({
        // "MIN": "",
        "CENTER": "tac",
        "MAX": "tar",
        // "SPACE_BETWEEN": "jcsb",
      }[counterAxisAlignItems]);
    } else {
      classNames.push('df');
      classNames.push({
        // "MIN": "",
        "CENTER": "jcc",
        "MAX": "jcfe",
        "SPACE_BETWEEN": "jcsb",
      }[primaryAxisAlignItems] || "");
      classNames.push({
        //"MIN": "",
        "CENTER": "aic",
        "MAX": "aife",
      }[counterAxisAlignItems] || "");
    }
    return {
      classNames
    };
  },
  getInfoFromParent: (node: FrameNode) => {
    const parent = node.parent;
    if (!parent || !FLEX.isFlex(parent)) {
      return null;
    }
    // @ts-ignore
    const {layoutMode, primaryAxisAlignItems, itemSpacing} = parent;
    // 两端对其表示不需要这些
    if (primaryAxisAlignItems === "SPACE_BETWEEN") {
      return null;
    }
    const classNames = [];
    const ignoreClassNames = [];

    const isLastChildren = parent.children.indexOf(node) === (parent.children.length - 1);
    // 为子元素添加间距
    if (itemSpacing > 0 && !isLastChildren) {
      const gutterMap = {
        "VERTICAL": "mb",
        "HORIZONTAL": "mr"
      };
      classNames.push(SACSS.add(gutterMap[layoutMode], itemSpacing));
    }

    if (node.layoutGrow === 1) {
      classNames.push('f1');
      ignoreClassNames.push(`w${node.width}`);
    }
    return {
      classNames,
      ignoreClassNames
    };
  },
  getInfo: (node: SceneNode) => {
    // @ts-ignore
    const {classNames: c1 = [], ignoreClassNames: ic1 = []} = FLEX.getThisInfo(node) || {};
    // @ts-ignore
    const {classNames: c2 = [], ignoreClassNames: ic2 = []} = FLEX.getInfoFromParent(node) || {};
    return {
      classNames: [...c1, ...c2],
      ignoreClassNames: [...ic1, ...ic2]
    };
  }
};

export default FLEX;
