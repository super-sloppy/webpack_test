import React from 'react';
import config from '../../common/config';

// 我的选校
export default () => (
  <div className="school-container">
    <div className="container full-height relative-container">
      <div className="text-group">
        <img src={`${config.cdn}/images/app_download/school/title-6.png`} alt="我的选校" />
      </div>
      <div className="arc-background">
        <img className="circle circle-1" src={`${config.cdn}/images/app_download/school/circle-6-1.png`} alt="冲刺" />
      </div>
      <div className="image-group">
        <img className="bottom-img" src={`${config.cdn}/images/app_download/school/image-6.png`} alt="APP选择学校" />
        <img className="circle circle-2" src={`${config.cdn}/images/app_download/school/circle-6-2.png`} alt="核心" />
        <img className="circle circle-3" src={`${config.cdn}/images/app_download/school/circle-6-3.png`} alt="保底" />
      </div>
    </div>
  </div>
);
