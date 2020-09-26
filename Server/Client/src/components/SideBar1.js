import './SideBar1.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const navLinks = [
    { url: '/about-us', name: 'About Us' },
    { url: '/projects', name: 'Projects' },
    { url: '/services', name: 'Services' },
    { url: '/contact-us', name: 'Contact Us' },
  ];
  
  class Menu extends React.Component {  
    constructor(){
      super();
      this.state = {
        style:"menu",
        menuStatus:"open"
      };
      this.handleClick = this.handleClick.bind(this);
    };
  
    handleClick() {
      switch(this.state.menuStatus)
      {
        case "open":
          this.setState({
            menuStatus:"close",
            style:"menu active"
          });
          break;
        case "close":
          this.setState({
            menuStatus:"open",
            style:"menu"
          });
          break;
      }        
    }
  
    render() {
      return (      
        <div>
          <button onClick={this.handleClick}>menu</button>
          <div className={this.state.style}>               
            <ul>
              {navLinks.map(({ url, name }) => (
                <li>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Menu />,
    document.querySelector('#app')
  );

export default SideBar1;