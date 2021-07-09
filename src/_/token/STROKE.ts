import CONFIG from "../CONFIG";
import objMerge from "../../ui/utils/objMerge";

const STROKE = {
    // 文本组件
    getInfo: (node: SceneNode, nodeInfo) => {
        // @ts-ignore
        const result = CONFIG.getInfoById(node.strokeStyleId);
        if (!result) {
            return nodeInfo;
        }
        return objMerge(nodeInfo, result);
    },
};

export default STROKE;
