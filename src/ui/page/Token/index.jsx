import "./index.less";
import Textarea from "../../component/Textarea";

const Token = ({selectionTokens, noSelection}) => {
    const tokenKeys = Object.keys(selectionTokens);
    const lenToken = tokenKeys.length;
    const isEmpty = noSelection || lenToken === 0;
    const renderData = isEmpty?"": JSON.stringify(selectionTokens, null, 2);

    return (
        <div className="f1 df fdc">
            <Textarea
                style={{backgroundColor: '#282c34', color: 'rgba(255, 255, 255, 0.8)', borderRadius: 0}}
                name="data"
                readOnly
                className="f1"
                defaultValue={renderData}
                placeholder="Please Select Something!"/>
            <div className="g_row df aic jcsb pt8 pb8 lh16 fs12 c:s bc:fff">
                <span>Matched {isEmpty ? 0 : lenToken} tokens</span>
                <span>Copy to the `Config.tokens`</span>
            </div>
        </div>
    );
};
export default Token;
