import React from 'react';
import config from '../../common/config';

// 首页
export default () => (
  <div className="index-container">
    <div className="container relative-container full-height">
      <div className="left-part">
        <img className="right" src={`${config.cdn}/images/app_download/index/image-1.png`} alt="手机图片" />
      </div>
      <div className="right-part">
        <div className="text-group">
          <img className="text-title" src={`${config.cdn}/images/app_download/index/title-1.png`} alt="选校帝" />
        </div>
        <div className="download-group clearfix">
          <div className="btn-group left">
            <a className="btn-download" href={`${config.index}/sdlc?ct=pc`}><img src={`${config.cdn}/images/app_download/index/iphone-1.png`} alt="苹果图标" /></a>
            <a className="btn-download last" href={`${config.index}/sdlc?ct=pc`}><img src={`${config.cdn}/images/app_download/index/android-1.png`} alt="安卓图标" /></a>
          </div>
          <div className="code-container left">
            <img className="last" src={`${config.cdn}/images/app_download/index/code-1.png`} alt="App二维码" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

