import React from 'react';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import '../App.css';

const data = [
    {
      value: '1',
      label: '경기',
    }, {
      value: '2',
      label: '서울',
    },
    {
      value: '3',
      label: '대전',
      isLeaf: true,
    },
    {
      value: '4',
      label: '대전',
      isLeaf: true,
    },
    {
      value: '5',
      label: '대전',
      isLeaf: true,
    },
    
  ];

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initData: '',
      show: false,
      categoryName: '지역별',
      data: data,
    };
  }
  onChange = (value) => {
    let label = '';
    this.props.data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: this.props.data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
        
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );

    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent={this.props.categoryName}
            mode="dark"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
          >
            
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}

export default Button;