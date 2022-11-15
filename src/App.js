
import './App.css';

import React, { useState } from 'react'
import Navbar from './myComponent/Navbar';
import News from './myComponent/News';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=(porps)=>{
 const pageSize = 15;
  const apiKey='1cfd5447caa144f898fbad999221ace8'
 // apiKey=process.env.REACT_APP_NEWS_API
  
 const [progress ,setProgress]=useState(0)


    return (
      <div>
         <BrowserRouter>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
       height={1.5}
      />
    <Routes>
       {/* <News setProgress ={setProgress} apiKey={apiKey}   pageSize={pageSize} category={general}/> */}
     
      <Route exact path="/" element={<News setProgress ={setProgress} apiKey={apiKey}   key='general' pageSize={pageSize} category='general'/>} />
      <Route exact path="/sports" element={<News setProgress ={setProgress} apiKey={apiKey}   key='sports' pageSize={pageSize} category='sports'/>} />
      <Route exact path="/business" element={<News setProgress ={setProgress} apiKey={apiKey}   key='business' pageSize={pageSize} category='business'/>} />
      <Route exact path="/entertainment" element={<News setProgress ={setProgress} apiKey={apiKey}   key='entertainment' pageSize={pageSize} category='entertainment'/>} />
      <Route exact path="/general" element={<News setProgress ={setProgress} apiKey={apiKey}   key='general' pageSize={pageSize} category='general'/>} />
      <Route exact path="/health" element={<News setProgress ={setProgress} apiKey={apiKey}   key='health' pageSize={pageSize} category='health'/>} />
      <Route exact path="/science" element={<News setProgress ={setProgress} apiKey={apiKey}   key='science' pageSize={pageSize} category='science'/>} />
      <Route exact path="/technology" element={<News setProgress ={setProgress} apiKey={apiKey}   key='technology' pageSize={pageSize} category='technology'/>} />

    </Routes>
  </BrowserRouter>

      </div>
    )
  
}
export default App


