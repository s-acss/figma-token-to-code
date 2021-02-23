import CONFIG from "../CONFIG";
import ACSS from "../ACSS";

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
    const classNames = style.split(' ').map((item: string) => fontMap[item.toUpperCase()] || '');
    return classNames.filter(item => item).join(' ');
  },
  getACSSSInfo: (node: TextNode) => {
    const classNames = [];
    if (["string", "number"].indexOf(typeof node.fontSize) > -1) {
      // @ts-ignore
      classNames.push(ACSS.add('fs', node.fontSize));
    }
    // 杭高
    // @ts-ignore
    if (node.lineHeight?.value) {
      // @ts-ignore
      const {value, unit} = node.lineHeight;
      // @ts-ignore
      classNames.push(ACSS.add('lh', value, TEXT.unitMap[unit]));
    }

    // 字间距
    // @ts-ignore
    if (node.letterSpacing?.value) {
      // @ts-ignore
      const {value, unit} = node.letterSpacing;
      classNames.push(ACSS.add('ls', value, TEXT.unitMap[unit]));
    }
    // font-weight font-style
    const fnClass = TEXT.getFontNameClass(node);
    fnClass && classNames.push(fnClass);

    // @ts-ignore
    if (node.fontName?.family) {
      // @ts-ignore
      classNames.push(ACSS.addFontFamily(node.fontName.family));
    }

    // text-align
    const taClass = {
      "LEFT": '',
      "CENTER": 'tac',
      "RIGHT": 'tar',
      "JUSTIFIED": 'taj',
    }[node.textAlignHorizontal];
    taClass && classNames.push(taClass);

    // vertical-align
    const vaClass = {
      "TOP": '',
      "CENTER": 'vam',
      "BOTTOM": 'vab',
    }[node.textAlignVertical];
    vaClass && classNames.push(vaClass);

    // tt
    const ttClass = {
      "ORIGINAL": '',
      "UPPER": 'ttu',
      "LOWER": 'ttl',
      "TITLE": 'ttc',
    }[node.textCase];
    ttClass && classNames.push(ttClass);

    // td
    const tdClass = {
      "NONE": "",
      "UNDERLINE": 'tdu',
      "STRIKETHROUGH": 'tdl'
    }[node.textDecoration];
    tdClass && classNames.push(tdClass);

    return classNames;
  },
  // 文本组件
  getInfo: (node: SceneNode) => {
    if (node.type !== 'TEXT') {
      return null;
    }
    // @ts-ignore
    const {classNames = [], ignoreClassNames = []} = CONFIG.getInfoById(node.textStyleId) || {};
    // @ts-ignore
    return {
      classNames: classNames.length ? classNames : TEXT.getACSSSInfo(node),
      ignoreClassNames: ignoreClassNames
    };
  },
};

export default TEXT;
