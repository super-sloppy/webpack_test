import React from 'react';
import config from '../../common/config';

// 智能选校
export default () => (
  <div className="tool-container">
    <div className="container relative-container full-height">
      <div className="text-group">
        <img className="title-one" src={`${config.cdn}/images/app_download/tool/school-title-5.png`} alt="智能选校" />
        <img className="title-two" src={`${config.cdn}/images/app_download/tool/major-title-5.png`} alt="智能选专业" />
        <img className="title-three" src={`${config.cdn}/images/app_download/tool/test-title-5.png`} alt="录取率测试" />
      </div>
      <div className="show-group">
        <div className="relative-container">
          <div className="view-window">
            <div className="image-box clearfix">
              <div className="image-item image-one left"><img src={`${config.cdn}/images/app_download/tool/school-icon-5.png`} alt="" /></div>
              <div className="image-item image-two left"><img src={`${config.cdn}/images/app_download/tool/major-icon-5.png`} alt="" /></div>
              <div className="image-item image-three left"><img src={`${config.cdn}/images/app_download/tool/test-icon-5.png`} alt="" /></div>
              <div className="image-item image-four left"><img src={`${config.cdn}/images/app_download/tool/school-icon-5.png`} alt="" /></div>
              <div className="image-item image-five left"><img src={`${config.cdn}/images/app_download/tool/major-icon-5.png`} alt="" /></div>
              <div className="image-item image-six left"><img src={`${config.cdn}/images/app_download/tool/test-icon-5.png`} alt="" /></div>
              <div className="image-item image-seven left"><img src={`${config.cdn}/images/app_download/tool/school-icon-5.png`} alt="" /></div>
              <div className="image-item image-eight left"><img src={`${config.cdn}/images/app_download/tool/major-icon-5.png`} alt="" /></div>
            </div>
          </div>
          <div className="image-middle">
            <div className="white-background"></div>
            <img className="image-item image-one" src={`${config.cdn}/images/app_download/tool/school-5.png`} alt="选学校" />
            <img className="image-item image-two" src={`${config.cdn}/images/app_download/tool/major-5.png`} alt="选专业" />
            <img className="image-item image-three" src={`${config.cdn}/images/app_download/tool/test-5.png`} alt="结果测试" />
            <img className="image-background" src={`${config.cdn}/images/app_download/tool/iphone-5.png`} alt="iphone背景" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
