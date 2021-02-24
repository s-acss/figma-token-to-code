import SACSS from "../SACSS";

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
            return [SACSS.add('br', tl)];
        }
        const classNames = [];
        tl && classNames.push(SACSS.add('btlr', tl));
        tr && classNames.push(SACSS.add('btrr', tr));
        br && classNames.push(SACSS.add('bbrr', br));
        bl && classNames.push(SACSS.add('bblr', bl));
        return classNames;
    },
    getPaddingClassNames: (node) => {
        return [
            SACSS.add('pt', node.paddingTop),
            SACSS.add('pr', node.paddingRight),
            SACSS.add('pb', node.paddingBottom),
            SACSS.add('pl', node.paddingLeft),
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
