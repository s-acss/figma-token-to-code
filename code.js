const _api = {
    // This is a generator that recursively produces
    // all the nodes in subtree starting at the given node
    walkTree: function* (node) {
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
        nodes.map((node) => {
            let walker = this.walkTree(node);
            let res;
            while (!(res = walker.next()).done) {
                const matchNode = res.value;
                if (matchNode.type === type) {
                    results.push(matchNode);
                }
            }
            return node;
        });
        return results;
    },
    getNodeFontStyleInfo: function (node) {
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
        fontStyleArray.map((item) => {
            const matchStyle = fontStyleMap[item.toUpperCase()];
            if (matchStyle && matchStyle.className) {
                result[matchStyle.className] = { name: matchStyle.name, value: matchStyle.value };
            }
            return item;
        });
        return result;
    },
    getPropByNode: function (node, name) {
        const nameMap = {
            'textCase': 'getRangeTextCase',
            'lineHeight': 'getRangeLineHeight',
            'letterSpacing': 'getRangeLetterSpacing',
            'fontSize': 'getRangeFontSize',
            'textDecoration': 'getRangeTextDecoration',
            'fontName': 'getRangeFontName',
            'fills': 'getRangeFills'
        };
        if (typeof node[name] === 'symbol' && nameMap[name] && typeof node[nameMap[name]] === 'function') {
            return node[nameMap[name]](0, 1);
        }
        return node[name];
    },
    getColorValue: function (color, opacity) {
        // Convert color to web rgba format
        const r = color.r * 255;
        const g = color.g * 255;
        const b = color.b * 255;
        const a = opacity === 1 ? 1 : parseFloat(Number(opacity).toFixed(3));
        const rgba = `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a})`;
        return rgba;
    },
    getNodeColor: function (node) {
        const { fills = [] } = node;
        const { color, opacity = 1 } = fills[0];
        if (!color) {
            return false;
        }
        return this.getColorValue(color, opacity);
    },
    getClassPropsString: function (classArray) {
        if (!classArray.length) {
            return '';
        }
        if (classArray.length === 1) {
            return ` class="${classArray[0]}"`;
        }
        return ` class="${classArray.join(' ')}"`;
    },
    getNodeTextAlignInfo: function (node) {
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
    getNodeTextTransformInfo: function (node) {
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
    getNodeTextDecorationInfo: function (node) {
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
    getNodeFontSizeInfo: function (node) {
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
    getNodeLineHeightInfo: function (node) {
        const fontSize = this.getPropByNode(node, 'fontSize');
        const lineHeight = this.getPropByNode(node, 'lineHeight');
        let className;
        let value;
        if (lineHeight.unit === "PIXELS" && lineHeight.value > fontSize) {
            className = 'lh' + lineHeight.value;
            value = lineHeight.value + 'px';
        }
        else if (lineHeight.unit === "PERCENT" && lineHeight.value > 100) {
            value = lineHeight.value + '%';
            className = 'lh' + lineHeight.value + 'p';
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
    getSettingClassByStyleId: function (id, setting) {
        if (!setting) {
            return false;
        }
        if (typeof id !== 'string' || !id) {
            return false;
        }
        const { name } = figma.getStyleById(id);
        if (typeof name === 'string') {
            return setting[name];
        }
        return false;
    },
    getCSSStringByCSSObject: function (cssObj) {
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
    getHtmlByTextNode: function (node, setting) {
        const { fillStyleId, textStyleId } = node;
        const colorClass = this.getSettingClassByStyleId(fillStyleId, setting);
        const textClass = this.getSettingClassByStyleId(textStyleId, setting);
        const styleInfo = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getNodeFontStyleInfo(node)), this.getNodeTextAlignInfo(node)), this.getNodeTextTransformInfo(node)), this.getNodeTextDecorationInfo(node)), this.getNodeFontSizeInfo(node)), this.getNodeLineHeightInfo(node));
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
        }
        else {
            cssObj = Object.assign(Object.assign({}, cssObj), styleInfo);
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
            };
        }
        // 多段
        let pMarginClassString = '';
        const paragraphSpacing = this.getPropByNode(node, 'paragraphSpacing');
        if (paragraphSpacing > 0) {
            cssObj[`mb${paragraphSpacing}`] = {
                name: 'margin-bottom',
                value: paragraphSpacing + 'px',
            };
            pMarginClassString = ` class="mb${paragraphSpacing}"`;
        }
        // 多段
        const pragraphsHtml = pragraphs.map((pragraph) => {
            return `<p${pMarginClassString}>${pragraph}</p>`;
        });
        html = `<div${containerClassString}>\n  ${pragraphsHtml.join('\n  ')} \n</div>`;
        return {
            html,
            cssObj
        };
    },
    getHtmlByTextNodes: function (nodes, setting) {
        let htmlText = "";
        let cssAllObj = {};
        nodes.map((node) => {
            const { html = '', cssObj = {} } = this.getHtmlByTextNode(node, setting);
            htmlText += html + '\n';
            cssAllObj = Object.assign(Object.assign({}, cssAllObj), cssObj);
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
    getNameById: function (id) {
        if (typeof id !== 'string' || !id) {
            return false;
        }
        const { name } = figma.getStyleById(id);
        if (typeof name === 'string') {
            return name;
        }
        return false;
    },
    getStyleInfo: function () {
        const _it = this;
        const textNames = {};
        figma.getLocalTextStyles().forEach(({ name = '' }) => {
            if (!!name && (name[0] !== '_')) {
                textNames[name] = '';
            }
        });
        const paintNames = {};
        figma.getLocalPaintStyles().forEach(({ name = '' }) => {
            if (!!name && (name[0] !== '_')) {
                paintNames[name] = '';
            }
        });
        let walker = this.walkTree(figma.currentPage);
        let count = 0;
        let res;
        while (!(res = walker.next()).done) {
            let node = res.value;
            if (node.type === 'TEXT') {
                const { fillStyleId, textStyleId } = node;
                const matchPaintName = _it.getNameById(fillStyleId);
                if (matchPaintName) {
                    paintNames[matchPaintName] = '';
                }
                const matchTextName = _it.getNameById(textStyleId);
                if (matchTextName) {
                    textNames[matchTextName] = '';
                }
            }
            if (++count === 10000) {
                break;
            }
        }
        const arrText = Object.keys(textNames);
        const arryColor = Object.keys(paintNames);
        let styleInfoString = '/*\n';
        styleInfoString += ' * I walk thought ' + count + ' elements \n';
        styleInfoString += ' * Find ' + arrText.length + ' Text style names width \'g_\' start\n';
        styleInfoString += ' * And ' + arryColor.length + ' Text color names width \'c_\' start\n';
        styleInfoString += ' * Copy text blow and paste them after setting \n';
        styleInfoString += ' */ \n\n';
        arrText.map((item) => {
            const name = item.trim();
            const value = 'g_' + name.toLocaleLowerCase().replace(/ /g, "_");
            styleInfoString += name + ': ' + value + '\n';
            return item;
        });
        arryColor.map((item) => {
            const name = item.trim();
            const value = 'c_' + name.toLocaleLowerCase().replace(/ /g, "_");
            styleInfoString += name + ': ' + value + '\n';
            return item;
        });
        figma.ui.postMessage({ type: 'showStyleInfo', data: styleInfoString, msg: '👏 Get local styles success' });
    },
    saveSetting: function (data) {
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
    data2array: function (data) {
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
            figma.ui.postMessage({ type: 'showSetting', data: this.data2array(data) });
        }).catch(() => {
            figma.ui.postMessage({ type: 'showSetting', data: [] });
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
