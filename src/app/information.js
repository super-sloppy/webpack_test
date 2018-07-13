import React from 'react';
import config from '../../common/config';

// 院校信息
export default () => (
  <div className="information-container">
    <div className="container full-height relative-container">
      <div className="left-part">
        <img src={`${config.cdn}/images/app_download/information/image-3.png`} alt="APP学校信息" />
      </div>
      <div className="right-part">
        <div className="title-group">
          <img src={`${config.cdn}/images/app_download/information/title-3.png`} alt="具有参考意义的院校信息" />
        </div>
      </div>
      <div className="items-group clearfix">
        <div className="item-box left">
          <img src={`${config.cdn}/images/app_download/information/cost-3-1.png`} alt="花费金额" />
        </div>
        <div className="item-box left">
          <img src={`${config.cdn}/images/app_download/information/percent-3-2.png`} alt="录取率" />
        </div>
        <div className="item-box last left">
          <img src={`${config.cdn}/images/app_download/information/time-3-3.png`} alt="时间节点" />
        </div>
      </div>
    </div>
  </div>
);
