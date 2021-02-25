import CONFIG from "../CONFIG";
import SACSS from "../SACSS";

const TEXT = {
  unitMap: {
    'PERCENT': '%'
    // "PIXELS":""
  },
  getFontNameClass: (node: TextNode) => {
    const {fontName} = node;
    // @ts-ignore
    const {style} = fontName;
    if (typeof style !== 'string') {
      return '';
    }
    const fontMap = {
      "ULTRALIGHT": "fw100",
      "THIN": 'fw200',
      "LIGHT": "fw300",
      "REGULAR": "",
      "MEDIUM": "fw500",
      "SEMIBOLD": "fw600",
      "BOLD": "fw700",
      "BLACK": "fw900",
      "ITALIC": "fsi",
      "OBLIQUE": "fsi"
    };
    const className = style.split(' ').map((item: string) => fontMap[item.toUpperCase()] || '');
    return className.filter(item => item).join(' ');
  },
  getACSSSInfo: (node: TextNode) => {
    const className = [];
    if (["string", "number"].indexOf(typeof node.fontSize) > -1) {
      // @ts-ignore
      className.push(SACSS.add('fs', node.fontSize));
    }
    // 杭高
    // @ts-ignore
    if (node.lineHeight?.value) {
      // @ts-ignore
      const {value, unit} = node.lineHeight;
      // @ts-ignore
      className.push(SACSS.add('lh', value, TEXT.unitMap[unit]));
    }

    // 字间距
    // @ts-ignore
    if (node.letterSpacing?.value) {
      // @ts-ignore
      const {value, unit} = node.letterSpacing;
      className.push(SACSS.add('ls', value, TEXT.unitMap[unit]));
    }
    // font-weight font-style
    const fnClass = TEXT.getFontNameClass(node);
    fnClass && className.push(fnClass);

    // @ts-ignore
    if (node.fontName?.family) {
      // @ts-ignore
      className.push(SACSS.addFontFamily(node.fontName.family));
    }

    // text-align
    const taClass = {
      "LEFT": '',
      "CENTER": 'tac',
      "RIGHT": 'tar',
      "JUSTIFIED": 'taj',
    }[node.textAlignHorizontal];
    taClass && className.push(taClass);

    // vertical-align
    const vaClass = {
      "TOP": '',
      "CENTER": 'vam',
      "BOTTOM": 'vab',
    }[node.textAlignVertical];
    vaClass && className.push(vaClass);

    // tt
    const ttClass = {
      "ORIGINAL": '',
      "UPPER": 'ttu',
      "LOWER": 'ttl',
      "TITLE": 'ttc',
    }[node.textCase];
    ttClass && className.push(ttClass);

    // td
    const tdClass = {
      "NONE": "",
      "UNDERLINE": 'tdu',
      "STRIKETHROUGH": 'tdl'
    }[node.textDecoration];
    tdClass && className.push(tdClass);

    return className.join(' ');
  },
  // 文本组件
  getInfo: (node: SceneNode) => {
    if (node.type !== 'TEXT') {
      return null;
    }
    // @ts-ignore
    const {className = '', ignoreClassName = ''} = CONFIG.getInfoById(node.textStyleId) || {};
    const result = {
      className: className.length ? className : TEXT.getACSSSInfo(node),
      ignoreClassName: ignoreClassName
    };
    // console.log(node, result);
    return result;
  },
};

export default TEXT;
