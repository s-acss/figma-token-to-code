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
                if (matchNode.type === 'TEXT') {
                    results.push(matchNode);
                }
            }
            return node;
        });
        return results;
    },
    getTextAlignClassByProp: function (textAlignHorizontal) {
        const stringMap = {
            "LEFT": false,
            "CENTER": 'tac',
            "RIGHT": 'tar',
            "JUSTIFIED": 'taj'
        };
        return stringMap[textAlignHorizontal];
    },
    getTextDecorationClassByProp: function (textDecoration) {
        const stringMap = {
            "NONE": false,
            "UNDERLINE": 'tdu',
            "STRIKETHROUGH": 'td'
        };
        return stringMap[textDecoration];
    },
    getTextCaseClassByProp: function (textCase) {
        const stringMap = {
            "ORIGINAL": false,
            "LOWER": 'tac',
            "UPPER": 'tar',
            "TITLE": 'taj'
        };
        return stringMap[textCase];
    },
    getTextFontStyleArrayClassByProp: function ({ style }) {
        if (!style) {
            return [];
        }
        const classArray = [];
        const fontStyleMap = {
            "UltraLight": 'fw100',
            "Thin": 'fw200',
            "Light": 'fw300',
            "Regular": false,
            "Medium": 'fw500',
            "SemiBold": 'fw600',
            "Bold": 'fw700',
            "Black": 'fw900',
            "Italic": 'fsi',
            "Oblique": 'fsi'
        };
        const fontStyleArray = style.split(' ');
        fontStyleArray.map((item) => {
            const fontStyleClass = fontStyleMap[item];
            fontStyleClass && classArray.push(fontStyleClass);
            return item;
        });
        return classArray;
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
    getNodeClassArray: function (node) {
        let classArray = [];
        // textAlign
        const textAlignClass = this.getTextAlignClassByProp(node.textAlignHorizontal);
        textAlignClass && classArray.push(textAlignClass);
        // textCase
        const textCase = this.getPropByNode(node, 'textCase');
        const textCaseClass = this.getTextCaseClassByProp(textCase);
        textCaseClass && classArray.push(textCaseClass);
        // textDecoration
        const textDecoration = this.getPropByNode(node, 'textDecoration');
        const textDecorationClass = this.getTextDecorationClassByProp(textDecoration);
        textDecorationClass && classArray.push(textDecorationClass);
        // color
        const paintStyle = figma.getLocalPaintStyles().find((item) => item.id === node.fillStyleId);
        paintStyle && classArray.push('c_' + paintStyle.name.toLowerCase());
        // fontStyle 
        const fontName = this.getPropByNode(node, 'fontName');
        const fontStyleClassArray = this.getTextFontStyleArrayClassByProp(fontName);
        classArray = classArray.concat(fontStyleClassArray);
        // fontSize 
        const fontSize = this.getPropByNode(node, 'fontSize');
        if (typeof fontSize === 'number' && fontSize > 11) {
            classArray.push('fs' + fontSize);
        }
        // lineHeight 
        const lineHeight = this.getPropByNode(node, 'lineHeight');
        if (lineHeight.unit === "PIXELS" && lineHeight.value > fontSize) {
            classArray.push('lh' + lineHeight.value);
        }
        else if (lineHeight.unit === "PERCENT" && lineHeight.value > 100) {
            classArray.push('lh' + lineHeight.value + 'p');
        }
        return classArray;
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
    getHtmlByTextNode: function (node) {
        console.log(node);
        let containerClassArray = this.getNodeClassArray(node);
        const containerClassString = this.getClassPropsString(containerClassArray);
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
            html += `    <p${pMarginClassString}>${pragraph}</p>\n`;
        });
        return `<div${containerClassString}>\n${html}</div>`;
    },
    getHtmlByTextNodes: function (nodes) {
        let html = "";
        nodes.map((node) => {
            html += this.getHtmlByTextNode(node);
            return node;
        });
        return html;
    },
    start: function () {
        const selections = figma.currentPage.selection;
        const selectLength = selections.length;
        if (!selectLength) {
            return '😢 Please select something';
        }
        const textNodes = this.getNodesByType({
            type: 'TEXT',
            nodes: selections
        });
        const html = this.getHtmlByTextNodes(textNodes);
        figma.ui.postMessage({ type: 'showHtml', data: html });
        console.log(html);
    },
    getStyleInfo: function () {
        const names = [];
        const paintStyles = figma.getLocalPaintStyles();
        paintStyles.forEach((style) => {
            const name = style.name;
            (name[0] !== '_') && names.push({ name, value: '' });
        });
        figma.ui.postMessage({ type: 'showStyleInfo', data: names, msg: '👏 Get styles success' });
    },
    saveSetting: function (data) {
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
        // const colorNames = this.getColorNames();
        // if (!(colorNames && colorNames.length > 0)) {
        //   figma.closePlugin("😭 Plese Set Color Styles On Right Sidebar 👉");
        //   return;
        // }
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
