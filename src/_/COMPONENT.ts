import CONFIG from "./CONFIG";

const COMPONENT = {
  isVariant: (node: InstanceNode | ComponentNode) => {
    // @ts-ignore
    return node.mainComponent?.parent?.type === 'COMPONENT_SET';
  },
  isComponent: (node: SceneNode) => {
    return node.type === 'INSTANCE' || node.type === 'COMPONENT';
  },
  getMainComponent: (node: InstanceNode | ComponentNode) => {
    if (node.type === 'COMPONENT') {
      return node;
    }
    // @ts-ignore
    const isVariant = COMPONENT.isVariant(node);
    // console.log(node, {isVariant});
    return isVariant ? node.mainComponent.parent : node.mainComponent;
  },
  getComponentId: (node) => {
    const {id = ''} = COMPONENT.getMainComponent(node) || {};
    return id;
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
  getComponentName: (node: InstanceNode | ComponentNode) => {
    const {name = ''} = COMPONENT.getMainComponent(node);
    if (!name) {
      return '';
    }
    return COMPONENT.stringToComponentName(name);
  },
  getComponentProps: (node: InstanceNode) => {
    // console.log('getComponentProps', node);
    const isVariant = COMPONENT.isVariant(node);
    // 没有变体表示没有 props
    if (!isVariant) {
      return {};
    }
    const {name} = node.mainComponent;
    const props = {};
    if (typeof name === 'string' && name.indexOf('=') > -1) {
      name.split(",").forEach((item) => {
        const [key, value] = item.split("=");
        // false 表示没有这个值 不做处理
        if (value === "false") {
          return;
        }
        props[key.trim()] = value.trim();
      });
    }
    return props;
  },
  getInfo: (node: SceneNode) => {
    // @ts-ignore
    const id = COMPONENT.getComponentId(node);
    const matchToken = CONFIG.getInfoById(id);
    // console.log(id, matchToken, node);
    if (!matchToken) {
      return null;
    }
    // @ts-ignore
    matchToken.props = COMPONENT.getComponentProps(node);
    return matchToken;
  }
};

export default COMPONENT;
