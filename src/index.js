

import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './component_Folder/Header';
import Body from './component_Folder/Body';

 

const Heading =()=>{ 
  
  // React.createElement("div",{id:"parent"},
  // [  React.createElement( "div" ,{id:"child"},
  //      [ React.createElement("h1",{} ,"This is the inside in the child"),
  //         React.createElement("h2",{} ,"This is the inside in the child")]
  //       ),
    
  //       React.createElement( "div" ,{id:"child2"},
  //       [ React.createElement("h1",{} ,"This is the inside in the child"),
  //          React.createElement("h2",{} ,"This is the inside in the child")]
  //        ) 
  // ]
  //       );
}

const Applayout = ()=>{
  return(
    <div className="main">
      <Header/>
      <Body/>
    </div>
  )
  };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
 