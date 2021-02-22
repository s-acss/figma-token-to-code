import ACSS from "../ACSS";
// import CONFIG from "./CONFIG";

const FLEX = {
    getFlex: (node: FrameNode) => {
        const {layoutMode, primaryAxisAlignItems, counterAxisAlignItems, itemSpacing} = node;
        // 没有是用 Flex 布局
        if (layoutMode === "NONE") {
            return null;
        }
        // 没有子元素 flex 布局没有意义
        const {children = []} = node;
        if (!children.length) {
            return null;
        }
        const classNames = [];
        const gutterClass = [];
        // 为子元素添加间距
        if (itemSpacing > 0 && primaryAxisAlignItems !== "SPACE_BETWEEN") {
            const gutterMap = {
                "VERTICAL": "mb",
                "HORIZONTAL": "mr"
            };
            gutterClass.push(ACSS.add(gutterMap[layoutMode], itemSpacing));
        }
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
            }[primaryAxisAlignItems]);
            classNames.push({
                //"MIN": "",
                "CENTER": "aic",
                "MAX": "aife",
            }[counterAxisAlignItems] || "");
        }
        return {
            classNames,
            gutterClass
        };
    },
    addClassNodes: (arrNode = [], gutterClass = []) => {
        if (!gutterClass?.length) {
            return arrNode;
        }
        return arrNode.map((item, key) => {
            const {classNames = []} = item;
            // 最后一个元素不做任何处理
            if (key !== arrNode.length - 1) {
                item.classNames = [...classNames, ...gutterClass];
            } else {
                item.classNames = classNames;
            }
            return item;
        });
    },
    getInfo: (node: SceneNode) => {
        // 这几个元素都不做处理
        if (['TEXT'].indexOf(node.type) > -1) {
            return null;
        }
        // @ts-ignore
        return FLEX.getFlex(node);
    }
};

export default FLEX;
