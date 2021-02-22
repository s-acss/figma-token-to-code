import ACSS from "../ACSS";

const OTHERS = {
    gerBorderRadiusClassNames: (node) => {
        const tl = node.topLeftRadius || 0;
        const tr = node.topRightRadius || 0;
        const br = node.bottomRightRadius || 0;
        const bl = node.bottomLeftRadius || 0;
        // 全部为 0
        if ((tl + tr + br + bl) === 0) {
            return [];
        }
        // 如果四个值都相等
        if ((tl === tr) && (tl === br) && (tl === bl)) {
            return [ACSS.add('br', tl)];
        }
        const classNames = [];
        tl && classNames.push(ACSS.add('btlr', tl));
        tr && classNames.push(ACSS.add('btrr', tr));
        br && classNames.push(ACSS.add('bbrr', br));
        bl && classNames.push(ACSS.add('bblr', bl));
        return classNames;
    },
    getPaddingClassNames: (node) => {
        return [
            ACSS.add('pt', node.paddingTop),
            ACSS.add('pr', node.paddingRight),
            ACSS.add('pb', node.paddingBottom),
            ACSS.add('pl', node.paddingLeft),
        ];
    },
    getInfo: (node) => {
        const padding = OTHERS.getPaddingClassNames(node);
        const radius = OTHERS.gerBorderRadiusClassNames(node);
        return {
            classNames: [...padding, ...radius]
        };
    }
};
export default OTHERS;
