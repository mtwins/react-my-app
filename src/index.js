//import react and react dom libraries
import React from  'react';
import ReactDOM from 'react-dom';

//create a react componenets
function getButtonText(){
  return 'Click on me';
}

const App = () => {
  return (
    <div>
   <label className="label" htmlFor= "name">Enter name</label>
   <input name="name" type="text"/>
   <button style={{backgroundColor:'blue', color:'white'}}>
   {getButtonText()}
   </button>
  </div>
);
}
//Take the react componenet and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
