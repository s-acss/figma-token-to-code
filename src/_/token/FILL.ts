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
    const getInfo = CONFIG.getInfoById(node.fillStyleId);

    if (!getInfo) {
      return FILL.getFill(node);
    }
    const {textClassName = '', className = '', ...rest} = getInfo;
    return {
      className: node.type === 'TEXT' ? textClassName : className,
      ...rest
    };
  },
};

export default FILL;
