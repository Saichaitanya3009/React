// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { Component } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx username="Chaithu"/>
//       </div>
//     )
//   }
// }

// props.children
// import React from 'react'
// import PropsChildrenex from './propsex/PropsChildrenex'
// import SubChildProps from './propsex/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="Chaithu" company = "Deloitte"> 
//         <h1>This data is passing as a props children to child component</h1>
//        <SubChildProps/>
//       </PropsChildrenex>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// const App = () => {
//   return (
//     <div>
//       <CBCStateEx/>
//     </div>
//   )
// }
// export default App
// import CBCStateEx from './stateexamples/CBCStateEx';
// const App=()=> {
  
//     return (
//       <div>
//         <CBCStateEx/>
//       </div>
      
//     )
//   }

// export default App;

// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// import FBCStateEx from './stateexamples/FBCStateEx'
// import FunctionalComponents from './components/FunctionalComponents'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/>
//       <FBCStateEx/> */}
//       <FunctionalComponents/>
//     </div>
//   )
// }


//Code not working bro

// import React from 'react'
// import FunctionalComponents from './components/FunctionalComponents'
// function App(){
//   return(
//     <div className="App">
//       <h1 class = 'heading'>Hello</h1>
//       <h2 class = {}
//     </div>
//   )
// }
// export default App

import React from 'react'
import RefExample from './HookExample/RefExample'
export const App = () => {
  return (
    <div>App
        <RefExample/>
    </div>
  )
}
export default App