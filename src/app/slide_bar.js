import React, { Component } from 'react';

class SlideBar extends Component {
  // 构造函数
  constructor(props) {
    super(props);

    // 页面锁，当在页面停留小于一秒时不允许滚动
    this.timeLock = false;
  }

  componentWillMount() {
    window.onmousewheel = e => this.handleMouseWheel(e);
  }

  componentDidMount() {
    document.addEventListener && document.addEventListener('DOMMouseScroll', e => this.handleMouseWheel(e), false);
  }

  // 处理鼠标滚轮事件
  handleMouseWheel(e) {
    // 事件对象
    e = e || window.event;

    // 如果页面上锁则不允许滚动
    if (this.timeLock) {
      return;
    }

    let num = this.props.active;
    // 判断滚动方向
    const direction = e.wheelDelta || e.detail;
    const flag = direction > 0 ? 1 : -1;

    // 向上滚动
    if (flag > 0) {
      num = num === 0 ? num : num - 1;
    // 向下滚动
    } else {
      num = num === 6 ? num : num + 1;
    }

    if (num !== this.props.active) {
      this.changeActive(this.list, num);
      this.props.onSlideBarSwitch(num);
    }

    // 页面上锁
    this.timeLock = true;

    // 等待页面解锁
    this.waitTime(this);
  }

  // 处理侧边按钮点击事件
  handleClick(e) {
    // 事件对象
    e = e || window.event;
    if (this.timeLock) {
      return;
    }

    const target = e.target || window.event.target;

    if (target.tagName !== 'LI') {
      return;
    }

    const num = Number(target.dataset.page);

    if (num !== this.props.active) {
      this.changeActive(this.list, num);
      this.props.onSlideBarSwitch(num);
    }

    this.timeLock = true;
    this.waitTime(this);
  }

  // 设置时间锁函数
  waitTime(obj) {
    if (obj.timeLock) {
      setTimeout(() => {
        obj.timeLock = false;
      }, 1000);
    }
  }

  // 改变侧边激活按钮的样式
  changeActive(list, num) {
    Array.prototype.forEach.call(list.children, (item, index) => {
      if (num === index) {
        item.className = 'active';
      } else {
        item.className = '';
      }
    });
  }

  // 渲染函数
  render() {
    return (
      <div className="slide-bar-container">
        <ul className="slide-bar" onClick={e => this.handleClick(e)} ref={(ele) => { this.list = ele; }}>
          <li className="active" data-page="0"></li>
          <li data-page="1"></li>
          <li data-page="2"></li>
          <li data-page="3"></li>
          <li data-page="4"></li>
          <li data-page="5"></li>
          <li data-page="6"></li>
        </ul>
      </div>
    );
  }
}

export default SlideBar;
