import COLOR from "./COLOR";
import CONFIG from "../CONFIG";
import SACSS from "../SACSS";

const FILL = {
  getFill: (node: SceneNode) => {
    // @ts-ignore
    const [firstFill = null] = node.fills || [];
    // 没有设置任何颜色, 目前不支持渐变
    // @ts-ignore
    if (!firstFill || firstFill.type !== 'SOLID') {
      return null;
    }
    const color = COLOR.getRgbaByFill(firstFill);
    if (!color) {
      return null;
    }
    const className = node.type === 'TEXT' ? SACSS.addColor(color) : SACSS.addBgColor(color);
    // 文本是用颜色，其它理解为背景色
    return {
      className
    }
  },
  // 获取填充信息
  getInfo: (node: SceneNode) => {
    //@ts-ignore
    const {textClassName = '', className = '', ...rest} = CONFIG.getInfoById(node.fillStyleId) || {};
    const renderClassName = node.type === 'TEXT' ? textClassName : className;
    if (!renderClassName) {
      return FILL.getFill(node);
    }
    return {
      className: renderClassName,
      ...rest
    };
  },
};

export default FILL;
