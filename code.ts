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
  getNodeFontStyleInfo: function (node: any) {
    const { style } = this.getPropByNode(node, 'fontName');
    if (!style) {
      return false;
    }

    const fontStyleMap = {
      "ULTRALIGHT": {
        name: 'font-weight',
        value: '100',
        className: 'fw100',
      },
      "THIN": {
        name: 'font-weight',
        value: '200',
        className: 'fw200',
      },
      "LIGHT": {
        name: 'font-weight',
        value: '300',
        className: 'fw300',
      },
      "REGULAR": false,
      "MEDIUM": {
        name: 'font-weight',
        value: '500',
        className: 'fw500',
      },
      "SEMIBOLD": {
        name: 'font-weight',
        value: '600',
        className: 'fw600',
      },
      "BOLD": {
        name: 'font-weight',
        value: '700',
        className: 'fw700',
      },
      "BLACK": {
        name: 'font-weight',
        value: '900',
        className: 'fw900',
      },
      "ITALIC": {
        name: 'font-style',
        value: 'italic',
        className: 'fsi',
      },
      "OBLIQUE": {
        name: 'font-style',
        value: 'italic',
        className: 'fsi',
      }
    };
    // font family 有可能是两个字符 
    const fontStyleArray = style.split(' ');
    const result = {};
    fontStyleArray.map((item: string) => {
      const matchStyle = fontStyleMap[item.toUpperCase()];
      if (matchStyle && matchStyle.className) {
        result[matchStyle.className] = { name: matchStyle.name, value: matchStyle.value };
      }
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
    const stringMap = {
      "LEFT": false,
      "CENTER": { value: 'center', className: 'tac' },
      "RIGHT": { value: 'right', className: 'tar' },
      "JUSTIFIED": { value: 'justify', className: 'taj' },
    };
    const { value = '', className = '' } = stringMap[node.textAlignHorizontal];
    if (!value || !className) {
      return false;
    }
    return {
      [className]: {
        name: 'text-align',
        value
      }
    };
  },
  getNodeTextTransformInfo: function (node: any) {
    const stringMap = {
      "ORIGINAL": false,
      "LOWER": { value: 'lowercase', className: 'ttl' },
      "UPPER": { value: 'uppercase', className: 'ttu' },
      "TITLE": { value: 'capitalize', className: 'ttc' }
    };
    const { value = '', className = '' } = stringMap[this.getPropByNode(node, 'textCase')];
    if (!value || !className) {
      return false;
    }
    return {
      [className]: {
        name: 'text-transform',
        value
      }
    };
  },
  getNodeTextDecorationInfo: function (node: any) {
    const stringMap = {
      "NONE": false,
      "UNDERLINE": { value: 'underline', className: 'tdu' },
      "STRIKETHROUGH": { value: 'line-through', className: 'tdlt' },
    };
    const { value = '', className = '' } = stringMap[this.getPropByNode(node, 'textDecoration')];
    if (!value || !className) {
      return false;
    }
    return {
      [className]: {
        name: 'text-decoration',
        value
      }
    };
  },
  getNodeFontSizeInfo: function (node: any) {
    const fontSize = this.getPropByNode(node, 'fontSize');
    if (typeof fontSize === 'number' && fontSize > 11) {
      return {
        ['fs' + fontSize]: {
          name: 'font-size',
          value: fontSize + 'px'
        }
      };
    }
    return false;
  },
  getNodeLineHeightInfo: function (node: any) {
    const fontSize = this.getPropByNode(node, 'fontSize');
    const lineHeight = this.getPropByNode(node, 'lineHeight');
    let className: string;
    let value: string;
    if (lineHeight.unit === "PIXELS" && lineHeight.value > fontSize) {
      className = 'lh' + lineHeight.value;
      value = lineHeight.value + 'px';
    } else if (lineHeight.unit === "PERCENT" && lineHeight.value > 100) {
      value = lineHeight.value + '%';
      className = 'lh' + lineHeight.value + 'p'
    }
    if (!className) {
      return false;
    }
    return {
      [className]: {
        name: 'line-height',
        value
      }
    };
  },
  getSettingClassByStyleId: function (id: string, setting: {}) {
    if (typeof id !== 'string' || !id) {
      return false;
    }
    const { name } = figma.getStyleById(id);
    if (typeof name === 'string') {
      return setting[name];
    }
    return false;
  },
  getCSSStringByCSSObject: function (cssObj: {}) {
    const resultArray = Object.keys(cssObj).sort().map((className) => {
      const item = cssObj[className];
      if (!item.length) {
        return `.${className}{ ${item.name}:${item.value}; }`;
      }
      const propsStringArray = item.map(({ name, value }) => `${name}:${value};`);
      return `.${className}{ \n  ${propsStringArray.join('\n  ')}\n}`;
    });
    return resultArray.join('\n') + '\n';
  },
  getHtmlByTextNode: function (node: any, setting: {}) {
    const { fillStyleId, textStyleId } = node;
    const colorClass = this.getSettingClassByStyleId(fillStyleId, setting);
    const textClass = this.getSettingClassByStyleId(textStyleId, setting);

    const styleInfo = {
      ...this.getNodeFontStyleInfo(node),
      ...this.getNodeTextAlignInfo(node),
      ...this.getNodeTextTransformInfo(node),
      ...this.getNodeTextDecorationInfo(node),
      ...this.getNodeFontSizeInfo(node),
      ...this.getNodeLineHeightInfo(node)
    };
    let cssObj = {};

    if (colorClass) {
      cssObj[colorClass] = {
        name: 'color',
        value: this.getNodeColor(node)
      };
    }

    if (textClass) {
      cssObj[textClass] = Object.keys(styleInfo).map((key) => {
        return styleInfo[key];
      });
    } else {
      cssObj = { ...cssObj, ...styleInfo };
    }

    const classArray = Object.keys(cssObj);
    let html = '';
    const containerClassString = this.getClassPropsString(classArray);
    const pragraphs = node.characters.split('\n');

    // 只有一段
    if (pragraphs.length === 1) {
      return {
        html: `<p${containerClassString}>${pragraphs[0]}</p>`,
        cssObj
      }
    }

    // 多段
    let pMarginClassString = '';
    const paragraphSpacing = this.getPropByNode(node, 'paragraphSpacing');
    if (paragraphSpacing > 0) {
      cssObj[`mb${paragraphSpacing}`] = {
        name: 'margin-bottom',
        value: paragraphSpacing + 'px',
      }
      pMarginClassString = ` class="mb${paragraphSpacing}"`;
    }
    // 多段
    const pragraphsHtml = pragraphs.map((pragraph: string) => {
      return `<p${pMarginClassString}>${pragraph}</p>`;
    });
    html = `<div${containerClassString}>\n  ${pragraphsHtml.join('\n  ')} \n</div>`;

    return {
      html,
      cssObj
    };
  },
  getHtmlByTextNodes: function (nodes: any[], setting: {}) {
    let htmlText = "";
    let cssAllObj = {};
    nodes.map((node: SceneNode) => {
      const { html = '', cssObj = {} } = this.getHtmlByTextNode(node, setting);
      htmlText += html + '\n';
      cssAllObj = { ...cssAllObj, ...cssObj };
      return node;
    });
    return {
      html: htmlText,
      css: this.getCSSStringByCSSObject(cssAllObj)
    };
  },
  getHtml: function () {
    const selections = figma.currentPage.selection;
    const selectLength = selections.length;
    if (!selectLength) {
      const msg = '😢 Please select text first';
      figma.ui.postMessage({
        type: 'showHtml', data: {
          html: '',
          css: ''
        }, msg
      });
      return msg;
    }
    const textNodes = this.getNodesByType({
      type: 'TEXT',
      nodes: selections
    });
    figma.clientStorage.getAsync('AcssSetting').then((data) => {
      const html = this.getHtmlByTextNodes(textNodes, data);
      figma.ui.postMessage({ type: 'showHtml', data: html });
    }).catch(() => {
      const html = this.getHtmlByTextNodes(textNodes);
      figma.ui.postMessage({ type: 'showHtml', data: html });
    });
  },
  getStyleInfo: function () {
    const textStyles = figma.getLocalTextStyles();
    const paintStyles = figma.getLocalPaintStyles();
    const textNames = [{ name: '/* Text style names */', value: '' }];
    textStyles.forEach(({ name = '' }) => {
      !!name && (name[0] !== '_') && textNames.push({ name, value: '' });
    });

    const paintNames = [{ name: '/* Color style names */', value: '' }];
    paintStyles.forEach(({ name = '' }) => {
      !!name && (name[0] !== '_') && paintNames.push({ name, value: '' });
    });
    const names = [].concat(textNames, paintNames);
    figma.ui.postMessage({ type: 'showStyleInfo', data: names, msg: '👏 Get local styles success' });
  },
  saveSetting: function (data: String) {
    const dataArray = data.split('\n');
    const dataObj = {};
    dataArray.map(item => {
      const [name, value] = item.split(':');
      if (!!name && !!value) {
        dataObj[name.trim()] = value.trim();
      }
    });

    figma.clientStorage.setAsync('AcssSetting', dataObj);
    figma.ui.postMessage({ type: 'showSetting', data: this.data2array(dataObj), msg: '👏 Save setting success' });
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
      figma.ui.postMessage({ type: 'showSetting', data: this.data2array(data), msg: '👏 Get setting success' });
    }).catch(() => {
      figma.ui.postMessage({ type: 'showSetting', data: [], msg: '👏 Get setting success' });
    });
  }
};

figma.showUI(__html__, {
  width: 400,
  height: 592
});

figma.ui.onmessage = ({ type, data }) => {
  _api[type] && _api[type](data);
};