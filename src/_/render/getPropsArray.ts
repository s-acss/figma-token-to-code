const getPropsArray = (props = {}) => {
    const arrProps = [];
    for (const [key, value] of Object.entries(props)) {
        const item = ((key, value) => {
            if (value === '' || value === false || value === 'false') {
                return '';
            }
            if (value === true || value === 'true') {
                return key;
            }
            if (typeof value === 'string' || typeof value === 'number') {
                return `${key}="${value}"`;
            }
            return `${key}={${JSON.stringify(value)}}`;
        })(key, value);
        item && arrProps.push(item);
    }
    return arrProps;
};

export default getPropsArray;
