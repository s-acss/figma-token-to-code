import CONFIG from "../CONFIG";
import objMerge from "../../ui/utils/objMerge";

const EFFECT = {
    getInfo: (node: SceneNode, nodeInfo) => {
        // @ts-ignore
        const result = CONFIG.getInfoById(node.effectStyleId);
        if (!result) {
            return nodeInfo;
        }
        return objMerge(nodeInfo, result);
    }
};

export default EFFECT;
