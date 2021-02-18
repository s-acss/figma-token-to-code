import ACSS from "../ACSS";

const PADDING = {
  getInfo: (node) => {
    return {
      classNames: [
        ACSS.add('pt', node.paddingTop),
        ACSS.add('pr', node.paddingRight),
        ACSS.add('pb', node.paddingBottom),
        ACSS.add('pl', node.paddingLeft),
      ]
    };
  }
};
export default PADDING;
