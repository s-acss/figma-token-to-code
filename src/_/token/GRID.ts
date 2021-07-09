import CONFIG from "../CONFIG";
import objMerge from "../../ui/utils/objMerge";

const GRID = {
    getInfo: (node: SceneNode, nodeInfo) => {
        // @ts-ignore
        const result = CONFIG.getInfoById(node.gridStyleId);
        if (!result) {
            return nodeInfo;
        }
        return objMerge(nodeInfo, result);
    }
};

export default GRID;
