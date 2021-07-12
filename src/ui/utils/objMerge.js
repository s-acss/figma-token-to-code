function objMerge(a = {}, b) {
    const result = a;
    for (const [key, value] of Object.entries(b)) {
        const item = a[key];
        if (!item || !value) {
            result[key] = value;
        } else if ((item instanceof Array) && (value instanceof Array)) {
            result[key] = [...item, ...value];
        } else if (item && item instanceof Object) {
            result[key] = objMerge(item, value);
        } else {
            result[key] = value;
        }
    }
    return result;
};

export default objMerge;