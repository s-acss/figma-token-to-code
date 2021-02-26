const getPropsString = (props = {}) => {
  const arrProps = [];
  for (const [key, value] of Object.entries(props)) {
    const item = ((key, value) => {
      const strValue = String(value);
      if (strValue === '' || value === 'false') {
        return '';
      }
      if (value === 'true') {
        return `${key}="true"`;
      }
      if (typeof value === 'string' || typeof value === 'number') {
        return `${key}="${value}"`;
      }
      return "";
    })(key, value);
    item && arrProps.push(item);
  }
  return arrProps.join(' ');
};

export default getPropsString;
