import React from 'react';
import config from '../../common/config';

// 权威排名
export default () => (
  <div className="rank-container">
    <div className="container full-height relative-container">
      <div className="left-part">
        <img src={`${config.cdn}/images/app_download/rank/image-2.png`} alt="APP排名展示" />
      </div>
      <div className="right-part">
        <img src={`${config.cdn}/images/app_download/rank/text-2.png`} alt="页面文字" />
      </div>
    </div>
  </div>
);
