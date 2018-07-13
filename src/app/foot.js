import React from 'react';
import config from '../../common/config';

// 尾页
export default () => (
  <div className="foot-container">
    <div className="container full-height relative-container">
      <div className="foot-wrapper">
        <div className="title-image-box">
          <img src={`${config.cdn}/images/app_download/foot/title-7.png`} alt="轻松出国，简单留学。" />
        </div>
        <div className="download-group clearfix">
          <div className="btn-group left">
            <a className="btn-download" href={`${global.document && document.location.protocol === 'http:' ? 'http://' : 'https://'}itunes.apple.com/cn/app/id1230298344`}><img src={`${config.cdn}/images/app_download/foot/iphone-7.png`} alt="苹果图标" /></a>
            <a className="btn-download last" href={`${config.api.school}/android/version/latest`}><img src={`${config.cdn}/images/app_download/foot/android-7.png`} alt="安卓图标" /></a>
          </div>
          <div className="code-container left">
            <img src={`${config.cdn}/images/app_download/foot/code-7.png`} alt="App二维码" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

