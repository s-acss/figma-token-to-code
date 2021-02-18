const UTILS = {
  isBlock: (tagName = '') => {
    const blockTag = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
    return blockTag.indexOf(tagName) > -1;
  },
  isSelfTag: (tagName = '') => {
    const selfTag = ['img', 'link', 'meta', 'br', 'br', 'hr', 'input', 'col', 'frame', 'area', 'param', 'object', 'embed', 'keygen', 'source'];
    return selfTag.indexOf(tagName) > -1;
  },
  /**
   * 去重和去空
   * @param arrStr
   */
  clearStingArray: (arrStr = []) => {
    if (!arrStr || !arrStr.length) {
      return [];
    }
    const result = [];
    arrStr.forEach((item) => {
      if (item && result.indexOf(item) === -1) {
        result.push(item);
      }
    });
    return result;
  }
};

export default UTILS;
