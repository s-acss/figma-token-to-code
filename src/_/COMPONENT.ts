import CONFIG from "./CONFIG";
import objMerge from "../ui/utils/objMerge.js";

const COMPONENT = {
    isComponent: (node: SceneNode) => {
        // 'COMPONENT_SET' 目前不能作为组件的判断标准
        return node.type === 'INSTANCE' || node.type === 'COMPONENT';
    },
    getMainComponent: (node: InstanceNode | ComponentNode | ComponentSetNode) => {
        if (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') {
            return node;
        }
        // console.log(node, {isVariant});
        return node.mainComponent;
    },
    getComponentId: (node) => {
        // console.log(node);
        // @ts-ignore
        const {key = ''} = COMPONENT.getMainComponent(node) || {};
        return key;
    },
    stringToComponentName: (name = '') => {
        const trimName = name.trim();
        if (!trimName) {
            return '';
        }
        const strName = trimName.replace(/[\W]/g, '');
        const firstChar = strName.charAt(0).toUpperCase();
        if (strName.length === 1) {
            return firstChar;
        }
        return firstChar + strName.slice(1);
    },
    getInfo: (node: SceneNode, nodeInfo = {}) => {
        // @ts-ignore
        const id = COMPONENT.getComponentId(node);
        const matchToken = id ? CONFIG.getToken()[id] : '';
        if (!matchToken) {
            return nodeInfo;
        }
        const {DEFAULT = {}} = matchToken;
        return objMerge(nodeInfo, DEFAULT);
    }
};

export default COMPONENT;