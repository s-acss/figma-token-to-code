const getComponentPropsByString=(strProp) => {
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
};

export default getComponentPropsByString;

