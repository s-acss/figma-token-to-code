const COLOR = {
    getRgbaByFill: ({color, opacity, visible}) => {
        // 如果不可见
        if (!visible || opacity === 0) {
            return null;
        }
        const r = parseInt(String(color.r * 255));
        const g = parseInt(String(color.g * 255));
        const b = parseInt(String(color.b * 255));
        const a = String(opacity).indexOf('.') > -1 ? opacity.toFixed(1) : opacity;
        return [r, g, b, a];
    },
};
export default COLOR;
