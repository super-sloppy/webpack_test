import React from 'react';
import ReactDOM from 'react-dom';

require('./game.css');


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleFieldColor = this.handleFieldColor.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  state = {
    color: '',
    grade: 0
  }
  

  // componentDidMount() {
  //   console.log('Square, componentDidMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    let grade = this.state.grade;
    console.log(nextState.color);
    console.log(nextProps);
    if (this.state.color === nextState.color) {
      return false;
    }
    if (nextState.color === '#E88282') {
      this.setState({ grade: --grade });
      console.log(grade);
    }
    return true;
  }

  handleClick() {
    if (this.state.color === '') {
      this.setState({ color: '#E88282' });// 红色
      // 这里发送扣分消息
      this.props.onClick(this.props.id, -1);
      setTimeout(() => {
        this.setState({ color: '' });
      }, 1000);
    } else if (this.state.color === '#7EB2EF') { // 蓝色
      this.setState({ color: '#A8E564' }); // 绿色
      this.props.onClick(this.props.id, 1);
      setTimeout(() => {
        this.setState({ color: '' });
      }, 1000);
    } else if (this.state.color === '#E88282') { // 红色
      return;
    }
  }

  componentWillMount() {
    console.log(this.props.statecolor);
  }

  handleFieldColor(fieldId, value) {
    console.log('handleFieldColor');
    console.log(value);
    if (value === '#A8E564') {
      this.setState({ color: value });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('11111111');
    console.log(nextProps);
  }

  render() {
    if (this.state.color === '') {
      return <button statecolor={this.handleFieldColor} onClick={this.handleClick} style={{ background: this.props.type === 'odd' ? '#DEDEDE' : '#F0F0F0' }} />;
    }
    return <button statecolor={this.handleFieldColor} onClick={this.handleClick} style={{ background: this.state.color }} />;
  }
}





class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.initGame = this.initGame.bind(this);
    this.arry = this.initGame();

    this.state = {
      sum: 0,
      data: '#A8E564',
    };
  }
  componentDidMount() {
    // console.log('我只想渲染一次');
    // setTimeout(() => {
    //   this.setState({});
    // }, 2000);
  }
  // subGrade(grade) {
  //   this.setState({ sum: this.state.sum + 1 });
  // }

  getGrade() {
    const squareList = this.arry.filter(x => x.key.length < 3);
    console.log(squareList[0]);
  }

  handleFieldChange(fieldId, value) {
    let grade = this.state.sum;
    if (value === -1) {
      this.setState({ sum: --grade });
    } else if (value === 1) {
      this.setState({ sum: ++grade });
    }
  }

  handleColor() {

  }

  initGame() {
    console.log('init game');
    const arry = [];

    
    for (let i = 0; i < 25; i += 1) {
      if (Number.isInteger((i + 2) / 2)) {
        arry.push(<Square statecolor={this.handleColor} onClick={this.handleFieldChange} type="odd" key={i + 1} />);
      } else {
        arry.push(<Square statecolor={this.handleColor} onClick={this.handleFieldChange} type="even" key={i + 1} />);
      }
      if (Number.isInteger((i + 1) / 5)) {
        arry.push(<br key={`${i + 1}_br`} />);
      }
    }
    setInterval(() => {
      while (true) {
        const randomNum = Math.floor(Math.random() * 10000) % 29;
        if ((randomNum + 1) % 6 !== 0) {
          console.log('我要变绿');
          arry[randomNum].props.statecolor(this.props.id, '#A8E564');
          console.log(arry[randomNum].props.statecolor);
          
          
          // arry[randomNum].props.statecolor(arry[randomNum].props.id, '#A8E564');
          // arry[randomNum].props.data = this.state.data;
          // arry[randomNum].props.style.background = '#A8E564';
          break;
        }
      }
    }, 2000);

    return arry;
  }
  // getcomposedata() {
  //   const { a, b } = this.state;
  //   const data = { a, b };
  //   fetch('/Url', { data }).then(res => {
  //     if (res.code === 0) {
  //       this.setState({
  //         data: res.data
  //       });
  //     } else {
  //       message.error(res.errmsg);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <div className="score" value="Score" disabled="true">
          Score:{this.state.sum}
        </div>
        <div className="container">
          {this.arry}
        </div>

      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById('app'));
// ReactDOM.render(<Game />, document.getElementById('app1'));