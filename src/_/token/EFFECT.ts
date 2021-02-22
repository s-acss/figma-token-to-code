import CONFIG from "../CONFIG";

const EFFECT = {
    getInfo: (node: SceneNode) => {
        // @ts-ignore
        return CONFIG.getInfoById(node.effectStyleId);
    }
};

export default EFFECT;
