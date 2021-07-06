import CONFIG from "../CONFIG";

const GRID = {
    getInfo: (node: SceneNode) => {
        // @ts-ignore
        return CONFIG.getInfoById(node.gridStyleId);
    }
};

export default GRID;
