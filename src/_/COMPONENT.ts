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
    return isVariant ? node.mainComponent.parent : node.mainComponent;
  },
  getComponentId: (node) => {
    if (COMPONENT.isComponent(node)) {
      const {id = ''} = COMPONENT.getMainComponent(node);
      return id;
    }
    return '';
  },
  getComponentName: (node: InstanceNode | ComponentNode) => {
    const {name = ''} = COMPONENT.getMainComponent(node);
    if (!name) {
      return '';
    }
    const strName = name.replace(/[\W]/g, '');
    return strName.charAt(0).toUpperCase() + strName.slice(1);
  },
  getComponentProps: (node: InstanceNode) => {
    // console.log('getComponentProps', node);
    const isVariant = COMPONENT.isVariant(node);
    // 没有变体表示没有 props
    if (!isVariant) {
      return {};
    }
    const { name } = node.mainComponent;
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
    if (!COMPONENT.isComponent(node)) {
      return null;
    }
    // @ts-ignore
    const matchToken = CONFIG.getInfoById(COMPONENT.getComponentId(node));
    if (!matchToken) {
      return null;
    }
    // @ts-ignore
    matchToken.props = COMPONENT.getComponentProps(node);
    return matchToken;
  }
};

export default COMPONENT;
