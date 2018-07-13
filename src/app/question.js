import React from 'react';
import config from '../../common/config';

// 留学问答
export default () => (
  <div className="question-container">
    <div className="container full-height relative-container">
      <div className="text-group">
        <img src={`${config.cdn}/images/app_download/question/title-4.png`} alt="留学问答" />
      </div>
      <img className="image-left" src={`${config.cdn}/images/app_download/question/left-4.png`} alt="APP问题" />
      <img className="image-right" src={`${config.cdn}/images/app_download/question/right-4.png`} alt="APP问题详情" />
    </div>
  </div>
);
