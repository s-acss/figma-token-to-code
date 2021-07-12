import transTokens from "./transTokens";

function transProject({isJSX = false, ignoreClassName = "", name, token = {}}) {
    return {
        isJSX,
        _name: name,
        _ignoreClassName: ignoreClassName.split(" "),
        tokens: transTokens(token)
    };
};
export default transProject;