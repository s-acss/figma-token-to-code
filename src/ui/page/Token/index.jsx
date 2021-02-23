import * as React from "react";
import {useEffect, useState} from "react";
import Button from "../../component/Button";
import saveJSON from "../../utils/saveJSON";
import "./index.less";

const Token = () => {
  const [config, setConfig] = useState({});
  const {token = {}} = config || {};
  const tokenKeys = Object.keys(token) || [];

  useEffect(() => {
    onmessage = (({data: {pluginMessage} = {}}) => {
      const {gotAllTokens = null} = pluginMessage;
      (gotAllTokens !== null) && setConfig(gotAllTokens);
    });
  }, []);

  const handleDownloadAll = (e) => {
    e.preventDefault();
    saveJSON(config, config.name);
  };
  return (
    <>
      <div className="f1 oa">
        {tokenKeys.map((id, key) => {
          const item = token[id];
          const isLast = key === tokenKeys.length - 1;
          return (
            <div key={id} className={`${isLast ? '' : 'g_hr'} df pt12 pb12 g_row fs14 g_high_light:h`}>
              <em className="c:s mr8">{item.type}</em>
              <strong className="f1 ell tar">{item.name}</strong>
            </div>
          );
        })}
      </div>
      <div className="g_row pt12 pb12 bc:fff g_hr_t">
        <p className="fs14 mb8 tac c:s">Custom and Upload at 「 Project 」</p>
        <Button disabled={!tokenKeys.length} block onClick={handleDownloadAll}>Download Pure Token</Button>
      </div>
    </>
  )
};

export default Token;
