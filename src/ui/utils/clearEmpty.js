function clearEmpty(ob) {
    for (let e in ob) {
        if (typeof (ob[e]) === 'undefined' || ob[e] === null || ob[e] === undefined || ob[e] === '' || ob[e] === "null" || ob[e].length === 0 || ob[e] === {}) {
            delete ob[e];
        } else if (ob[e].constructor === Object) {
            if (Object.keys(ob[e]).length === 0) {
                delete ob[e];
            } else {
                clearEmpty(ob[e]);
            }
        } else if (ob[e].constructor === Array) {
            ob[e].map(function (seg) {
                if (typeof (seg) === 'object') {
                    clearEmpty(seg);
                }
            });
        }
    }
    return ob;
}

export default clearEmpty;