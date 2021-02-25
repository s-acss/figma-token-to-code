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
  clearClassName: (className = '', ignoreClassName = '') => {
    if (!className) {
      return '';
    }
    const classNames = className.split(' ');
    const result = [];
    classNames.forEach((item = '') => {
      if (item && item !== 'null' && result.indexOf(item) === -1 && ignoreClassName.indexOf(item) === -1) {
        result.push(item);
      }
    });
    return result.join(' ');
  }
};
export default UTILS;
