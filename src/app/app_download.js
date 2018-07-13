import React, { Component } from 'react';
import { connect } from 'react-redux';
import mixin from 'react-mixin';
import { addScrollListener, removeScrollListener } from 'funcs';
import Index from './index';
import Rank from './rank';
import Information from './information';
import Question from './question';
import Tool from './tool';
import School from './school';
import Foot from './foot';
import SlideBar from './slide_bar';

import mixinGetData from '../../mixins/get_data';
import config from '../../common/config';
import Icon from '../../components/icon';

// 尾页
class AppDownload extends Component {
  // 构造函数
  constructor(props) {
    super(props);

    // 记录当前展示的哪个页面
    this.state = {
      active: 0
    };
  }

  // 挂载完成
  componentDidMount() {
    if (global.document) {
      this.refs.downloadTitle.style.height = `${document.body.offsetHeight}px`;
    }
    this.setState({
      listenerId: addScrollListener(this.listenPageScroll()),
    });

    this.listenPageScroll(true)();
  }

  // 获取数据
  getData() {
    if (global.document) {
      this.refs.downloadTitle.style.height = `${document.body.offsetHeight}px`;
    }
  }

  // 卸载
  componentWillUnmount() {
    removeScrollListener(this.state.listenerId);
  }

  // 监听页面滚动
  listenPageScroll(forceUpdate) {
    return (e) => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      // 第三个页面动画
      if (scrollTop >= 1200) {
        if (global.document && document.body.offsetWidth <= 999) {
          this.refs.appSchoolDetail.style.transform = 'scaleX(1.5) scaleY(1.5)';
          this.refs.appSchoolDetail.style.boxShadow = '4px 4px 10px #979797';
        } else {
          setTimeout(() => {
            this.refs.appSchoolDetail.style.transform = 'scaleX(1.8) scaleY(1.8) translate(50px)';
            this.refs.appSchoolDetail.style.boxShadow = '4px 4px 10px #979797';
          }, 200);
        }
      } else {
        setTimeout(() => {
          this.refs.appSchoolDetail.style.transform = 'translateX(0) translateY(0) scaleX(1) scaleY(1)';
          this.refs.appSchoolDetail.style.boxShadow = 'none';
        }, 200);
      }
    };
  }

  // 动画函数
  animate(obj, attrs, interval, sp, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
      // 判断所有动画是否完成
      let flag = true;

      Object.keys(attrs).map((attr) => {
        // 初始化当前样式
        let cur = 0;

        if (attr === 'opacity') {
          cur = Math.round(parseFloat(this.getStyle(obj, attr)) * 100);
        } else {
          cur = parseFloat(this.getStyle(obj, attr));
        }


        let speed = (attrs[attr] - cur) * sp;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur !== attrs[attr]) {
          flag = false;
        }

        if (attr === 'opacity') {
          obj.style.filter = `alpha(opacity : ${cur + speed})`;
          obj.style.opacity = (cur + speed) / 100;
        } else {
          obj.style[attr] = `${cur + speed}px`;
        }
        return null;
      });

      if (flag) {
        clearInterval(obj.timer);

        if (callback) {
          callback();
        }
      }
    }, interval);
  }

  // 获取当前元素CSS属性
  getStyle(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr]; // ie
    }
    return document.defaultView.getComputedStyle(obj, null)[attr];
    
  }

  // 处理页面滚动逻辑
  handleSlideBarSwitch(num) {
    this.list.children[this.state.active].className = 'list-item';
    this.setState({
      active: num
    });

    // 可视窗口的高度
    const visibleHeight = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight;
    const position = -1 * num * visibleHeight;
    this.animate(this.list, { top: position }, 10, 0.1);

    // 为各个页面添加进入动画效果
    switch (num) {
      case 1:
        this.list.children[1].className = 'list-item animate-rank';
        break;
      case 2:
        this.list.children[2].className = 'list-item animate-information';
        break;
      case 3:
        this.list.children[3].className = 'list-item animate-question';
        break;
      case 4:
        this.list.children[4].className = 'list-item animate-tool';
        break;
      case 5:
        this.list.children[5].className = 'list-item animate-school';
        break;
      default:
    }
  }

  // 渲染函数
  render() {
    return (
      <div className="container-app-download">
        <div className="download-page-pc view-window" ref={(ele) => { this.test = ele; }}>
          <SlideBar onSlideBarSwitch={num => this.handleSlideBarSwitch(num)} active={this.state.active} />
          <ul className="page-list" style={{ top: 0 }} ref={(ele) => { this.list = ele; }}>
            <li className="list-item"><Index /></li>
            <li className="list-item"><Rank /></li>
            <li className="list-item"><Information /></li>
            <li className="list-item"><Question /></li>
            <li className="list-item"><Tool /></li>
            <li className="list-item"><School /></li>
            <li className="list-item"><Foot /></li>
          </ul>
        </div>

        <div className="download-page-phone">
          <div className="container-app-download-wrapper">
            <div ref="downloadTitle" className="download-title">
              <div className="page-dot-navigation">
                <div ref="dot1" className="dot active"></div>
                <div ref="dot2" className="dot"></div>
                <div ref="dot3" className="dot"></div>
                <div ref="dot4" className="dot"></div>
              </div>

              <div className="download-title-container">
                <div className="mobile-title-container">
                  <div>智能选校神器</div>
                  <div>美英加澳留学院校全覆盖、世界大学排名一目了然、申请条件、申请材料让你有迹可循！</div>
                </div>
                <div className="right-content">
                  <div className="cell">
                    <img ref="qrcode" className="qrcode" src={`${config.cdn}/images/app-1-qrcode.png`} alt="app-1-qrcode" />
                    <img ref="app1" src={`${config.cdn}/images/app-1.png`} alt="app-1" />
                  </div>
                </div>
                <div className="mobile-title-container">
                  <a href={`${config.index}/sdlc?ct=pc`}>
                    <Icon id="apple" />
                    <span>iPhone下载</span>
                  </a>
                </div>
                <div className="left-content">
                  <div className="cell">
                    <img className="logo" src={`${config.cdn}/images/app_logo.png`} alt="app-logo" />
                    <div className="sub-title">留学申请，智能选校神器</div>
                    <div className="des">美英加澳大学/世界大学排名/录取条件/申请材料统统都有！</div>
                    <a href={`${config.index}/sdlc?ct=pc`}>
                      <Icon id="apple" />
                      <span>iPhone下载</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="download-content intro-position">
              <div className="page-dot-navigation">
                <div ref="dot1" className="dot"></div>
                <div ref="dot2" className="dot active"></div>
                <div ref="dot3" className="dot"></div>
                <div ref="dot4" className="dot"></div>
              </div>

              <div className="item">
                <div className="mobile-title-container">
                  <div>美英加澳大学全覆盖</div>
                  <div>留学美国、英国、澳大利亚、加拿大？查查看...</div>
                </div>
                <div className="right-content">
                  <div className="cell">
                    <img ref="app2" className="img" src={`${config.cdn}/images/app-2.png`} alt="app-2" />
                  </div>
                </div>
                <div className="left-content">
                  <div className="cell">
                    <div className="intro-position-pics">
                      <img src={`${config.cdn}/images/icon-usa.png`} alt="icon-usa" />
                      <img src={`${config.cdn}/images/icon-uk.png`} alt="icon-uk" />
                      <img src={`${config.cdn}/images/icon-canada.png`} alt="icon-canada" />
                      <img src={`${config.cdn}/images/icon-australia.png`} alt="icon-australia" />
                    </div>
                    <div className="title">
                      美英加澳全覆盖，你想找的这里一定有！
                    </div>
                    <div className="des">
                      查找海外高校很吃力？快用“选校帝”试一试，美英加澳所有的学校都在这里，挨个看，挨个对比总有你喜欢的
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref="downloadIntro" className="download-content intro-rank">
              <div className="page-dot-navigation">
                <div ref="dot1" className="dot"></div>
                <div ref="dot2" className="dot"></div>
                <div ref="dot3" className="dot active"></div>
                <div ref="dot4" className="dot"></div>
              </div>

              <div className="item">
                <div className="mobile-title-container">
                  <div>最全世界大学排名</div>
                  <div>USNEWS、QS、泰晤士、上交大全都有</div>
                </div>
                <div className="right-content">
                  <div className="cell">
                    <img ref="app3" src={`${config.cdn}/images/app-3.png`} alt="app-3" />
                    <img
                      className="school-detail"
                      ref="appSchoolDetail"
                      src={`${config.cdn}/images/school-intro-detail.png`} alt="school-intro-detail"
                    />
                    <img
                      className="mobile-school-detail"
                      src={`${config.cdn}/images/mobile-school-detail.png`} alt="mobile-school-detail"
                    />
                  </div>
                </div>
                <div className="left-content">
                  <div className="cell">
                    <div className="title">
                      世界大学排名，有没有实力一查就知道！
                    </div>
                    <div className="des">
                      好不容易找到一个喜欢的学校，但是又不知道它综合实力怎么样？试一试最新的大学排名吧！国内大学排名、世界大学排名，实力如何一目了然
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="download-content intro-position">
              <div className="page-dot-navigation">
                <div ref="dot1" className="dot"></div>
                <div ref="dot2" className="dot"></div>
                <div ref="dot3" className="dot"></div>
                <div ref="dot4" className="dot active"></div>
              </div>

              <div className="item">
                <div className="mobile-title-container">
                  <div>全方位的学校介绍</div>
                  <div>学校简介、录取率、学费、申请材料等应有尽有</div>
                </div>
                <div className="right-content">
                  <div className="cell school-detail-content">
                    <div className="app-feature-pics">
                      <div className="pic-item">
                        <Icon id="school-data" />
                        <span>院校数据</span>
                      </div>
                      <div className="pic-item">
                        <Icon id="school-life" />
                        <span>校园生活</span>
                      </div>
                      <div className="pic-item">
                        <Icon id="school-major" />
                        <span>院系专业</span>
                      </div>
                      <div className="pic-item">
                        <Icon id="school-apply" />
                        <span>申请要求</span>
                      </div>
                      <div className="pic-item">
                        <Icon id="school-admission" />
                        <span>招生办信息</span>
                      </div>
                    </div>
                    <img ref="app4" src={`${config.cdn}/images/app-4.png`} alt="app-4" />
                  </div>
                </div>
                <div className="left-content intro-detail-left">
                  <div className="cell">
                    <div className="title">
                      详尽的院校信息，你想知道的我们都有！
                    </div>
                    <div className="des">
                      申请要求、申请材料、截至日期、招生办信息、院系专业、学校简介应有尽有
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

mixin(AppDownload.prototype, mixinGetData);
export default connect()(AppDownload);
