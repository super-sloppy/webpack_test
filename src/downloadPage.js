import React from 'react';
import ReactDOM from 'react-dom';
import Tool from './tool';
require('./downloadPage.css');
// require('layui/dist/layui.css');


class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.timeLock = false;
    this.state = {
      active: 0,
      // timeLock: false
    };
  }

  // 设置时间锁函数
  waitTime(obj) {
    if (obj.timeLock) {
      setTimeout(() => {
        obj.timeLock = false;
      }, 1000);
    }
  }

  componentDidMount() {
    // window.addEventListener('scroll', () => {
    //   console.log(this.timeLock);
    //   if (!this.state.timeLock) {
    //     const scrollTop = document.documentElement.scrollTop;
    //     if ((scrollTop % 825) < 200 && (scrollTop % 825) > 10) {
    //       const index = Math.floor(scrollTop / 825);
    //       console.log(index);
    //       window.scroll(0, (index + 1) * 825);
    //     } else if ((scrollTop % 825) > 200) {
    //       window.scroll(0, (Math.floor(scrollTop / 825) * 825));
    //     }
        
    //     this.timeLock = true;
    //     console.log(this.timeLock);

    //     this.waitTime(this);
    //     // console.log(scrollTop);
    //   }

    // else {
    //   const scrollTop = document.documentElement.scrollTop;
    //   if ((scrollTop % 825) < 200 && (scrollTop % 825) > 10) {
    //     const index = Math.floor(scrollTop / 825);
    //     // console.log(index);
    //     window.scroll(0, (index) * 825);
    //   } else if ((scrollTop % 825) > 200) {
    //     window.scroll(0, ((Math.floor(scrollTop / 825) + 1) * 825));
    //   }
    // }



    // });
  }

  render() {
    return (

      <div>

        <div className="first">
          <div className="left">
            <img src="image-1.png"></img>
          </div>
          <div className="right">
            <img src='title-1.png' className='text-title'></img>
            <a href="" className="iphone">
              <img src='iphone-1.png' style={{ height: '48px' }}></img>
            </a>
            <a href="" className="android">
              <img src='android-7.png' style={{ height: '48px' }}></img>
            </a>
            <img src='code-1.png' className='last'></img>
          </div>
        </div>

        <div className="second">
          <div className='left'>
            <img src="image-2.png"></img>
          </div>
          <div className='right'>
            <img src='text-2.png'></img>
          </div>
        </div>

        <div className="third">
          <div className='left'>
            <img src="image-3.png"></img>
          </div>
          <img src='title-3.png' className='title'></img>
          <div className='right'>
            <img src='cost-3-1.png' className='cost'></img>
            <img src='percent-3-2.png' className='percent'></img>
            <img src='time-3-3.png' className='time'></img>
          </div>
        </div>

        <div className="forth">
          <div className='title'>
            <img src='title-4.png'></img>
          </div>
          <img src='left-4.png' className='left'></img>
          <img src='right-4.png' className='right'></img>
        </div>

        <div className="fifth">
          <div className='title'>
            <img src='major-title-5.png' className='major'></img>
            <img src='school-title-5.png' className='school'></img>
            <img src='test-title-5.png' className='test'></img>
          </div>
          <div className='view'>
            <div className='image-one'>
              <img src='school-icon-5.png' />
            </div>
            <div className='image-two'>
              <img src='major-icon-5.png' />
            </div>
            <div className='image-three'>
              <img src='test-icon-5.png' />
            </div>
            
            <div className='image-four'>
              <img src='major-icon-5.png' />
            </div>
            <div className='image-five'>
              <img src='test-icon-5.png' />
            </div>
            <div className='image-six'>
              <img src='school-icon-5.png' />
            </div>


            <div className='image-1'>
              <img src='school-icon-5.png' />
            </div>
            <div className='image-2'>
              <img src='major-icon-5.png' />
            </div>
            <div className='image-3'>
              <img src='test-icon-5.png' />
            </div>


            <div className='image-4'>
              <img src='major-icon-5.png' />
            </div>
            <div className='image-5'>
              <img src='test-icon-5.png' />
            </div>
            <div className='image-6'>
              <img src='school-icon-5.png' />
            </div>



            <div className='image-middle'>
              <div className='wihite-background'>
                <img className='img-one' src='school-5.png'></img>
                <img className='img-two' src='major-5.png'></img>
                <img className='img-three' src='test-5.png'></img>
                <img className='image-background' src='iphone-5.png'></img>
              </div>

            </div>
          </div>

        </div>

        <div className="sixth">
          <div className='title'>
            <img src='title-6.png'></img>
          </div>
          <div className='arc-background'>
            <img src='circle-6-1.png' className='circle-1'></img>
            <img src='circle-6-2.png' className='circle-2'></img>
            <img src='circle-6-3.png' className='circle-3'></img>
          </div>
          <div className="bottom">
            <img src='image-6.png'></img>
          </div>
        </div>

        <div className="seventh">
          <div className='wrapper'>
            <img className='title' src='title-7.png'></img>
            <a href="" className="iphone">
              <img src='iphone-1.png' style={{ height: '48px' }}></img>
            </a>
            <a href="" className="android">
              <img src='android-7.png' style={{ height: '48px' }}></img>
            </a>
            <img src='code-7.png' className='code'></img>
          </div>
        </div>

      </div>

    );
  }
}


ReactDOM.render(<Wrapper />, document.getElementById('app'));
