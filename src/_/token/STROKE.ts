import CONFIG from "../CONFIG";

const STROKE = {
    // 文本组件
    getInfo: (node: SceneNode) => {
        // @ts-ignore
        return CONFIG.getInfoById(node.strokeStyleId);
    },
};

export default STROKE;
