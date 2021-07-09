import COLOR from "./COLOR";
import CONFIG from "../CONFIG";
import SACSS from "../SACSS";
import objMerge from "../../ui/utils/objMerge";

const FILL = {
    getFill: (node: SceneNode) => {
        // @ts-ignore
        const [firstFill] = (typeof node.getRangeFills === 'function' ? node.getRangeFills(0, 1) : node.fills) || [];
        // 没有设置任何颜色, 目前不支持渐变
        // @ts-ignore
        if (!firstFill || firstFill.type !== 'SOLID') {
            return "";
        }
        const color = COLOR.getRgbaByFill(firstFill);
        if (!color) {
            return "";
        }
        const className = node.type === 'TEXT' ? SACSS.addColor(color) : SACSS.addBgColor(color);
        // 文本是用颜色，其它理解为背景色
        return className;
    },
    // 获取填充信息
    getInfo: (node: SceneNode, nodeInfo = {}) => {
        // console.log(node);
        // @ts-ignore
        const id = typeof node.getRangeFillStyleId === 'function' ? node.getRangeFillStyleId(0, 1) : node.fillStyleId;
        //@ts-ignore
        const token = CONFIG.getInfoById(id, node.type) || {};
        if (token) {
            return objMerge(nodeInfo, token);
        }
        const classColor = FILL.getFill(node);
        return objMerge(nodeInfo, {
            className: [classColor]
        });
    },
};

export default FILL;
