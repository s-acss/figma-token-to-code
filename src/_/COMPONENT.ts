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
  getComponentName: (node: InstanceNode | ComponentNode) => {
    const {name = ''} = COMPONENT.getMainComponent(node);
    if (!name) {
      return '';
    }
    return COMPONENT.stringToComponentName(name);
  },
  getComponentPropsByString: (strProp) => {
    const props = {};
    if (strProp && typeof strProp === 'string') {
      // 去掉单双引号
      const legalProps = strProp.replace(/\"/g, '').replace(/\'/g, '');
      legalProps.split(",").forEach((item) => {
        const [key, value] = item.split("=");
        const trimValue = String(value).trim();
        // false 表示没有这个值 不做处理
        if (trimValue === "false") {
          return;
        }
        props[String(key).trim()] = value ? trimValue : 'true';
      });
    }
    return props;
  },
  getComponentProps: (node: InstanceNode) => {
    // console.log('getComponentProps', node);
    const isVariant = COMPONENT.isVariant(node);
    // 没有变体表示没有 props
    if (!isVariant) {
      return {};
    }
    const {name} = node.mainComponent;
    return COMPONENT.getComponentPropsByString(name);
  },
  getInfo: (node: SceneNode) => {
    // @ts-ignore
    const id = COMPONENT.getComponentId(node);
    const matchToken = CONFIG.getInfoById(id);
    // console.log(id, matchToken, node);
    if (!matchToken) {
      return null;
    }

    matchToken.props = {
      // @ts-ignore
      ...COMPONENT.getComponentProps(node),
      ...COMPONENT.getComponentPropsByString(matchToken.props || '')
    };

    // 用户没有指定表示要渲染
    if (!('renderChildren' in matchToken)) {
      matchToken.renderChildren = '1';
    }
    // 用户没有指定表示要渲染
    if (!('renderWidth' in matchToken)) {
      matchToken.renderWidth = '0';
    }
    // 用户没有指定表示要渲染
    if (!('renderHeight' in matchToken)) {
      matchToken.renderHeight = '0';
    }
    // console.log(matchToken);
    return matchToken;
  }
};

export default COMPONENT;
