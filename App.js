import React from 'react';
import Navbar from './modules/Navbar';
import News from './modules/News';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (<>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<News keyWord={`general`} key="general"/>}/>
          <Route path='/gaming' element={<News keyWord={`gaming`} key="gaming"/>}/>
          <Route path='/business' element={<News keyWord={`business`} key="business"/>}/>
          <Route path='/entertainment' element={<News keyWord={`entertainment`} key="entertainment"/>}/>
          <Route path='/health' element={<News keyWord={`health`} key="health"/>}/>
          <Route path='/science' element={<News keyWord={`science`} key="science"/>}/>
          <Route path='/sport' element={<News keyWord={`sport`} key="sport"/>}/>
        </Routes>
      </BrowserRouter>
    </>)
  }
}


export default App;
