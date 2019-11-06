import React from 'react';
import './App.css';
import Menu from './menu';


let arr = [
  {
    text: "Home",
    link: "1",
    active: true
  },
  {
    text: "Services",
    link: "2",
    active: false,
    subMenu: [
      "For entrepreneurs",
      "For students",
      "For hobbyists"
    ]
  },
  {
    text: "Contact",
    link: "3",
    active: false
  }
]


function App() {
  return (
    <div className="App">
      <Menu tab={arr} />

    </div>
  );
}


export default App;
