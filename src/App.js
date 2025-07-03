import { useState } from 'react';
import './App.css';
import { contents } from './Data';


const App = () => {
  const [buttonNumber,setbuttonNumber] = useState(0)

  const Topics = ["Why React","core features", "Related Resources","React vs Js" ]

  const clickedButton = (index) => {
    setbuttonNumber(index)
  }

  return (
    <div className='basicFrame'>
      <header>
        <img src="logo192.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          {Topics.map((topic,index)=><button onClick={()=>clickedButton(index)} key={index}>{topic}</button>)}
        </menu>
      </div>
      <div>
        {contents[buttonNumber].map((content)=>
        <li>{content}</li>
        )}
      </div>
    </div>
  )
}

export default App;
