import CONFIG from "../CONFIG";
import SACSS from "../SACSS";

// @ts-ignore
const TEXT = {
  unitMap: {
    'PERCENT': '%'
    // "PIXELS":""
  },
  // @ts-ignore
  getFontNameClassByStyle: (style) => {
    if (typeof style !== 'string' || !style) {
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
  getPropByNode: (node: any, name: string) => {
    const nameMap = {
      'textCase': 'getRangeTextCase',
      'lineHeight': 'getRangeLineHeight',
      'letterSpacing': 'getRangeLetterSpacing',
      'fontSize': 'getRangeFontSize',
      'textDecoration': 'getRangeTextDecoration',
      'fontName': 'getRangeFontName',
      'fills': 'getRangeFills',
      'textStyleId': 'getRangeTextStyleId'
    }
    if (typeof node[name] === 'symbol' && nameMap[name] && typeof node[nameMap[name]] === 'function') {
      return node[nameMap[name]](0, 1);
    }
    return node[name];
  },
  getACSSSInfo: (node: TextNode) => {
    const className = [];

    // 文字大小
    const fontSize = TEXT.getPropByNode(node, 'fontSize');
    if (fontSize > 1) {
      className.push(SACSS.add('fs', fontSize));
    }

    // 行高
    const lineHeight = TEXT.getPropByNode(node, 'lineHeight');
    // @ts-ignore
    if (lineHeight?.value) {
      // @ts-ignore
      const {value, unit} = lineHeight;
      // @ts-ignore
      className.push(SACSS.add('lh', value, TEXT.unitMap[unit]));
    }

    // 字间距
    const letterSpacing = TEXT.getPropByNode(node, 'letterSpacing');
    // @ts-ignore
    if (letterSpacing?.value) {
      // @ts-ignore
      const {value, unit} = letterSpacing;
      className.push(SACSS.add('ls', value, TEXT.unitMap[unit]));
    }

    const fontName = TEXT.getPropByNode(node, 'fontName');

    // font-weight font-style
    const fnClass = TEXT.getFontNameClassByStyle(fontName.style);
    fnClass && className.push(fnClass);

    // @ts-ignore
    if (fontName?.family) {
      // @ts-ignore
      className.push(SACSS.addFontFamily(fontName.family));
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


    const textCase = TEXT.getPropByNode(node, 'textCase');
    // tt
    const ttClass = {
      "ORIGINAL": '',
      "UPPER": 'ttu',
      "LOWER": 'ttl',
      "TITLE": 'ttc',
    }[textCase];
    ttClass && className.push(ttClass);

    const textDecoration = TEXT.getPropByNode(node, 'textDecoration');
    // td
    const tdClass = {
      "NONE": "",
      "UNDERLINE": 'tdu',
      "STRIKETHROUGH": 'tdl'
    }[textDecoration];
    tdClass && className.push(tdClass);

    const strClassName = className.join(' ');
    const isStrong = ['fw500', 'fw600', 'fw700', 'fw800', 'fw900'].findIndex((item) => strClassName.indexOf(item) > -1) > -1;
    return {
      className: strClassName,
      tagName: isStrong ? 'strong' : 'span'
    };
  },
  getTextChildren: (node: TextNode) => {
    const {characters = ''} = node;
    const legalP = characters.split('\n').filter(item => item.trim());
    // 有回车表示多段落
    if (legalP.length > 1) {
      const mbClass = node.paragraphSpacing > 0 ? SACSS.add('mb', node.paragraphSpacing) : '';
      const ps = legalP.map((item, key) => {
        const isLast = key === legalP.length - 1;
        return {
          tagName: 'p',
          className: isLast ? '' : mbClass,
          children: [item]
        };
      });
      return ps;
    }
    return [characters];
  },
  // 文本组件
  getInfo: (node: SceneNode) => {
    if (node.type !== 'TEXT') {
      return null;
    }
    const id = TEXT.getPropByNode(node, 'textStyleId');
    // @ts-ignore
    const getInfo = CONFIG.getInfoById(id) || {};
    const acssInfo = TEXT.getACSSSInfo(node);
    const result = {
      className: getInfo.className || acssInfo.className || '',
      tagName: getInfo.tagName || acssInfo.tagName || '',
      ignoreClassName: getInfo.ignoreClassName || ''
    };
    return result;
  },
};

export default TEXT;
