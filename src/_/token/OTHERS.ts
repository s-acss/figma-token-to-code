import SACSS from "../SACSS";

const OTHERS = {
  gerBorderRadiusClassName: (node) => {
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
    const className = [];
    tl && className.push(SACSS.add('btlr', tl));
    tr && className.push(SACSS.add('btrr', tr));
    br && className.push(SACSS.add('bbrr', br));
    bl && className.push(SACSS.add('bblr', bl));
    return className;
  },
  getPaddingClassName: (node) => {
    return [
      SACSS.add('pt', node.paddingTop),
      SACSS.add('pr', node.paddingRight),
      SACSS.add('pb', node.paddingBottom),
      SACSS.add('pl', node.paddingLeft),
    ];
  },
  getInfo: (node) => {
    const padding = OTHERS.getPaddingClassName(node);
    const radius = OTHERS.gerBorderRadiusClassName(node);
    return {
      className: [...padding, ...radius].join(' ')
    };
  }
};
export default OTHERS;
