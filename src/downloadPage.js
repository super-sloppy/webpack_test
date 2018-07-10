import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slider-light';
require('./downloadPage.css');


/* // <div>
//   <div className="first">
//     <div className="left">
//       <img src="image-1.png"></img>
//     </div>
//     <div className="right">
//       <img src='title-1.png' className='text-title'></img>
//       <a href="" className="iphone">
//         <img src='iphone-1.png' style={{height: '48px'}}></img>
//       </a>
//       <a href="" className="android">
//         <img src='android-7.png' style={{height: '48px'}}></img>
//       </a>
//       <img src='code-1.png' className='last'></img>

//     </div>
//   </div>
//   <div className="second">这是第二页</div>
//   <div className="third">这是第3页</div>
//   <div className="forth">这是第4页</div>
//   <div className="fifth">这是第5页</div>
//   <div className="sixth">这是第6页</div>
//   <div className="seventh">这是第7页</div>

// </div> */

class Wrapper extends React.Component {

  render() {
    return (
      <div style={{height: '825px'}}>

        <Slider dots={true}>
          <div style={{height: '825px'}}>page1</div>
          <div style={{height: '825px'}}>page2</div>
        </Slider >
      </div>
    );
  }
}


ReactDOM.render(<Wrapper />, document.getElementById('app'));
