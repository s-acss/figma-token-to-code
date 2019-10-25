const _api = {

  // This is a generator that recursively produces
  // all the nodes in subtree starting at the given node
  walkTree: function* (node: { children: any; }) {
    yield node;
    let children = node.children;
    if (children) {
      for (let child of children) {
        yield* this.walkTree(child);
      }
    }
  },
  getNodesByType: function ({ type, nodes }) {
    let results = [];
    nodes.map((node: any) => {
      let walker = this.walkTree(node);
      let res: { value: any; };
      while (!(res = walker.next()).done) {
        const matchNode = res.value;
        if (matchNode.type === 'TEXT') {
          results.push(matchNode);
        }
      }
      return node;
    });
    return results;
  },
  getNodeFontStyleArray: function (node: any) {
    const { style } = this.getPropByNode(node, 'fontName');
    if (!style) {
      return [];
    }
    const fontStyleMap = {
      "UltraLight": {
        name: 'font-weight',
        value: '100',
        className: 'fw100',
      },
      "Thin": {
        name: 'font-weight',
        value: '200',
        className: 'fw200',
      },
      "Light": {
        name: 'font-weight',
        value: '300',
        className: 'fw300',
      },
      "Regular": false,
      "Medium": {
        name: 'font-weight',
        value: '500',
        className: 'fw500',
      },
      "SemiBold": {
        name: 'font-weight',
        value: '600',
        className: 'fw600',
      },
      "Bold": {
        name: 'font-weight',
        value: '700',
        className: 'fw700',
      },
      "Black": {
        name: 'font-weight',
        value: '900',
        className: 'fw900',
      },
      "Italic": {
        name: 'font-style',
        value: 'italic',
        className: 'fsi',
      },
      "Oblique": {
        name: 'font-style',
        value: 'italic',
        className: 'fsi',
      }
    };
    // font family 有可能是两个字符 
    const fontStyleArray = style.split(' ');
    const result = [];
    fontStyleArray.map((item: string) => {
      const result = fontStyleMap[item];
      result && result.push(result);
      return item;
    });
    return result;
  },
  getPropByNode: function (node: any, name: string): string {
    const nameMap = {
      'textCase': 'getRangeTextCase',
      'lineHeight': 'getRangeLineHeight',
      'letterSpacing': 'getRangeLetterSpacing',
      'fontSize': 'getRangeFontSize',
      'textDecoration': 'getRangeTextDecoration',
      'fontName': 'getRangeFontName',
      'fills': 'getRangeFills'
    }
    if (typeof node[name] === 'symbol' && nameMap[name] && typeof node[nameMap[name]] === 'function') {
      return node[nameMap[name]](0, 1);
    }
    return node[name];
  },
  getColorValue: function (color: RGB, opacity: number): string {
    // Convert color to web rgba format
    const r = color.r * 255;
    const g = color.g * 255;
    const b = color.b * 255;
    const a = opacity === 1 ? 1 : parseFloat(Number(opacity).toFixed(3));
    const rgba = `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a})`;
    return rgba;
  },
  getNodeColor: function (node: any) {
    const { fills = [] } = node;
    const { color, opacity = 1 } = fills[0];
    if (!color) {
      return false;
    }
    return this.getColorValue(color, opacity);
  },
  getClassPropsString: function (classArray: any[]) {
    if (!classArray.length) {
      return '';
    }
    if (classArray.length === 1) {
      return ` class="${classArray[0]}"`;
    }
    return ` class="${classArray.join(' ')}"`;
  },
  getNodeTextAlignInfo: function (node: any) {
    const value = node.textAlignHorizontal;
    const stringMap = {
      "LEFT": false,
      "CENTER": { value: 'center', className: 'tac' },
      "RIGHT": { value: 'right', className: 'tar' },
      "JUSTIFIED": { value: 'justify', className: 'taj' },
    };
    if (!value || !stringMap[value]) {
      return false;
    }
    return {
      name: 'text-align',
      ...stringMap[value]
    };
  },
  getNodeTextTransformInfo: function (node: any) {
    const value = this.getPropByNode(node, 'textCase');
    const stringMap = {
      "ORIGINAL": false,
      "LOWER": { value: 'lowercase', className: 'ttl' },
      "UPPER": { value: 'uppercase', className: 'ttu' },
      "TITLE": { value: 'capitalize', className: 'ttc' }
    };
    if (!value || !stringMap[value]) {
      return false;
    }
    return {
      name: 'text-transform',
      ...stringMap[value]
    };
  },
  getNodeTextDecorationInfo: function (node: any) {
    const value = this.getPropByNode(node, 'textDecoration');
    const stringMap = {
      "NONE": false,
      "UNDERLINE": { value: 'underline', className: 'tdu' },
      "STRIKETHROUGH": { value: 'line-through', className: 'tdlt' },
    };
    if (!value || !stringMap[value]) {
      return false;
    }
    return {
      name: 'text-decoration',
      ...stringMap[value]
    };
  },
  getNodeFontSizeInfo: function (node: any) {
    const fontSize = this.getPropByNode(node, 'fontSize');
    if (typeof fontSize === 'number' && fontSize > 11) {
      return {
        name: 'font-size',
        value: fontSize + 'px',
        className: 'fs' + fontSize
      };
    }
    return false;
  },
  getNodeLineHeightInfo: function (node: any) {
    const fontSize = this.getPropByNode(node, 'fontSize');
    const lineHeight = this.getPropByNode(node, 'lineHeight');
    if (lineHeight.unit === "PIXELS" && lineHeight.value > fontSize) {
      return {
        name: 'line-height',
        value: lineHeight.value + 'px',
        className: 'lh' + lineHeight.value
      }
    } else if (lineHeight.unit === "PERCENT" && lineHeight.value > 100) {
      return {
        name: 'line-height',
        value: lineHeight.value + '%',
        className: 'lh' + lineHeight.value + 'p'
      };
    }
    return false;
  },
  getNodeStyleInfoArray: function (node: any) {
    const { textStyleId } = node;
    let styleInfoArray = [];

    // fontStyle
    const fontStyleArray = this.getNodeFontStyleArray(node);
    if (fontStyleArray.length > 0) {
      styleInfoArray = styleInfoArray.concat(fontStyleArray);
    }

    // textAlign
    const textAlign = this.getNodeTextAlignInfo(node);
    textAlign && styleInfoArray.push(textAlign);

    // textCase
    const textCase = this.getNodeTextTransformInfo(node);
    textCase && styleInfoArray.push(textCase);

    // textDecoration
    const textDecoration = this.getNodeTextDecorationInfo(node);
    textDecoration && styleInfoArray.push(textDecoration);

    // fontSize 
    const fontSize = this.getNodeFontSizeInfo(node);
    fontSize && styleInfoArray.push(fontSize);

    // lineHeight 
    const lineHeight = this.getNodeLineHeightInfo(node);
    lineHeight && styleInfoArray.push(lineHeight);
    return styleInfoArray;
  },
  getHtmlByClassArray: function (node: any, classArray: []) {
    const containerClassString = this.getClassPropsString(classArray);
    const pragraphs = node.characters.split('\n');

    // 只有一段
    if (pragraphs.length === 1) {
      return `<p${containerClassString}>${pragraphs[0]}</p>`;
    }

    // 段间距
    let pMarginClassString = '';
    const paragraphSpacing = this.getPropByNode(node, 'paragraphSpacing');
    if (paragraphSpacing > 0) {
      pMarginClassString = ` class="mb${paragraphSpacing}"`;
    }

    // 多段
    let html = '';
    pragraphs.map((pragraph) => {
      html += `  <p${pMarginClassString}>${pragraph}</p>\n`;
    });

    return `<div${containerClassString}>\n${html}</div>`;
  },
  getSettingClassByStyleId: function (id: string, setting: {}) {
    if (!id) {
      return false;
    }
    const { name } = figma.getStyleById(id);
    return setting[name];
  },
  getCSSByStyleArray: function (styleArray: []) {
    const resultArray = styleArray.map(({ className, name, value, props = [] }) => {
      if (!props.length) {
        return `.${className}{ ${name}:${value}; }`
      }
      const propsStringArray = props.map(({ name, value }) => `${name}:${value};`);
      return `.${className}{ \n  ${propsStringArray.join('\n  ')}\n}`;
    });
    return resultArray.join('\n');
  },
  getHtmlByTextNode: function (node: any, setting: {}) {
    const { fillStyleId, textStyleId } = node;
    const colorClass = this.getSettingClassByStyleId(fillStyleId, setting);
    const textClass = this.getSettingClassByStyleId(textStyleId, setting);
    const classArray = [];
    const styleArray = [];
    const styleInfoArray = this.getNodeStyleInfoArray(node);
    if (colorClass) {
      classArray.push(colorClass);
      styleArray.push({
        className: colorClass,
        name: 'color',
        value: this.getNodeColor(node)
      });
    }
    if (textClass) {
      classArray.push(textClass);
      styleArray.push({
        className: textClass,
        props: styleInfoArray
      });
    } else {
      styleInfoArray.map((item: { className: any; }) => {
        classArray.push(item.className);
        styleArray.push(item);
      });
    }
    return {
      html: this.getHtmlByClassArray(node, classArray),
      css: this.getCSSByStyleArray(styleArray)
    };
  },
  getHtmlByTextNodes: function (nodes: any[], setting: {}) {
    let htmlText = "";
    let cssText = '';
    nodes.map((node: SceneNode) => {
      const { html = '', css = '' } = this.getHtmlByTextNode(node, setting);
      htmlText += html;
      cssText += css;
      return node;
    });
    return {
      html: htmlText,
      css: cssText
    };
  },
  getHtml: function () {
    const selections = figma.currentPage.selection;
    const selectLength = selections.length;
    if (!selectLength) {
      const msg = '😢 Please select something';
      figma.ui.postMessage({ type: 'showMsg', msg });
      return msg;
    }
    const textNodes = this.getNodesByType({
      type: 'TEXT',
      nodes: selections
    });
    figma.clientStorage.getAsync('AcssSetting').then((data) => {
      const html = this.getHtmlByTextNodes(textNodes, data);
      figma.ui.postMessage({ type: 'showHtml', data: html, msg: '😊 ctrl+c and get the html' });
    }).catch(() => {
      const html = this.getHtmlByTextNodes(textNodes);
      figma.ui.postMessage({ type: 'showHtml', data: html, msg: '😊 ctrl+c and get the html' });
    });
  },
  getStyleInfo: function () {
    const names = [];
    const paintStyles = figma.getLocalPaintStyles();
    paintStyles.forEach((style: PaintStyle) => {
      const name = style.name;
      (name[0] !== '_') && names.push({ name, value: '' });
    });
    figma.ui.postMessage({ type: 'showStyleInfo', data: names, msg: '👏 Get styles success' });
  },
  saveSetting: function (data: String) {
    const dataArray = data.split('\n');
    const dataObj = {};
    dataArray.map(item => {
      const [name, value] = item.split(':');
      if (!!name) {
        dataObj[name] = value;
      }
    });
    figma.clientStorage.setAsync('AcssSetting', dataObj);
    figma.ui.postMessage({ type: 'showMsg', msg: '👏 Save setting success' });
  },
  data2array: function (data: {}) {
    const result = Object.keys(data).map(key => {
      return {
        name: key,
        value: data[key]
      };
    });
    return result;
  },
  getSetting: function () {
    figma.clientStorage.getAsync('AcssSetting').then((data) => {
      console.log('AcssSetting', data);
      figma.ui.postMessage({ type: 'showSetting', data: this.data2array(data), msg: '👏 Get setting success' });
    }).catch(() => {
      figma.ui.postMessage({ type: 'showSetting', data: [], msg: '👏 Get setting success' });
    });
  }
};

figma.showUI(__html__, {
  width: 400,
  height: 800
});

figma.ui.onmessage = ({ type, data }) => {
  _api[type] && _api[type](data);
};