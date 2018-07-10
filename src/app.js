import React from 'react';
import { Spin, DatePicker } from 'antd';
import { Button, Radio, Icon } from 'antd';
import 'antd/dist/antd.min.css';
import { Input } from 'antd';

const App = () => {
  return (
    <div>
      <Spin />
      <DatePicker />
      <p>这是一个测试文件！真得是动态更新啊</p>
      <div>好棒棒啊</div>
    </div>
  );
};
function calculate(first, second, operation) {
  // 传入的原始string
  // let result = null;
  switch (operation) {
    case '+':
      return (Number(first) + Number(second)).toString();
    case '-':
      return (Number(first) - Number(second)).toString();
    case '*':
      return (Number(first) * Number(second)).toString();
    case '/':
      return (Number(first) / Number(second)).toString();

    default:
      break;
  }
}
class ButtonSize extends React.Component {
  state = {
    size: 'large',
    disabled: true,
    first: '',
    second: '',
    operation: '',
    displayValue: '0'
  };
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  handleInput = (e) => {
    const numberSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']);
    const getValue = e.target.value;
    const first = this.state.first;
    let second = this.state.second;
    const operation = this.state.operation;
    if (numberSet.has(getValue)) {
      if (this.state.operation === '') {
        if (getValue === '.') {
          this.setState({ first: this.state.first === '' ? '0.' : this.state.first + getValue });
        } else {
          this.setState({ first: this.state.first + getValue });
        }
      } else if (this.state.operation !== '' && this.state.first !== '') {
        if (getValue === '.') {
          second === '' ? '0.' : this.state.second + getValue;
          this.setState({ second: second });
        }
        second += getValue;
        this.setState({ second: this.state.second + getValue, displayValue: second });
      }
      if (second === '') {
        this.setState({ displayValue: this.state.first + getValue });
      } else {
        this.setState({ displayValue: this.state.second + getValue });
      }
    } else {
      switch (getValue) {
        case '/':
          if (second === '') {
            this.setState({ operation: '/' });
          } else {
            let result = calculate(first, second, operation);
            this.setState({
              first: result,
              operation: '/',
              second: '',
              displayValue: result
            });
          }
          break;
        case '*':
          if (second === '') {
            this.setState({ operation: '*' });
          } else {
            let result = calculate(first, second, operation);
            this.setState({
              first: result,
              operation: '*',
              second: '',
              displayValue: result
            });
          }
          break;
        case '-':
          if (second === '') {
            this.setState({ operation: '-' });
          } else {
            let result = calculate(first, second, operation);
            this.setState({
              first: result,
              operation: '-',
              second: '',
              displayValue: result
            });
          }
          break;
        case '+':
          if (second === '') {
            this.setState({ operation: '+' });
          } else {
            let result = calculate(first, second, operation);
            this.setState({
              first: result,
              operation: '+',
              second: '',
              displayValue: result
            });
          }
          break;
        case '=':
          // const result = calculate(first, second, operation);
          this.setState({
            first: calculate(first, second, operation),
            operation: '',
            second: '',
            displayValue: calculate(first, second, operation)
          });
          break;
        case 'c':
          this.setState({
            first: '',
            second: '',
            operation: '',
            displayValue: ''
          });
          break;

        default:
          break;
      }
    }
  }
  render() {
    const size = this.state.size;
    return (

      <div>
        <Input style={{ width: `${170}px`, height: `${50}px`, borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', textAlign: 'right', border: 'solid 5px orange', background: '#9CF' }} disabled={this.state.disabled} value={this.state.displayValue} />
        <br />
        <div style={{ width: `${170}px`, border: 'solid 5px orange', background: '#999', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>

          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="7" size={size}>7</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="8" size={size}>8</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="9" size={size}>9</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="/" size={size}>/</Button>
          <br />
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="4" size={size}>4</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="5" size={size}>5</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="6" size={size}>6</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="*" size={size}>*</Button>
          <br />
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="1" size={size}>1</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="2" size={size}>2</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="3" size={size}>3</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="-" size={size}>-</Button>
          <br />
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="0" size={size}>0</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="." size={size}>.</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="c" size={size}>c</Button>
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} shape="circle" value="+" size={size}>+</Button>
          <br />
          <Button style={{ background: '#CCC' }} type="primary" onClick={this.handleInput} style={{ width: `${160}px` }} value="=">=</Button>
        </div>
      </div>
    );
  }

}



// export default hot(module)(ButtonSize); // 修改
// ReactDOM.render(<ButtonSize />, document.getElementById("app"));
