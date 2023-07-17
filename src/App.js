
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import  Login  from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import AdminPannel from './Components/AdminPannel';
import AdminTimeline from './Components/AdminTimeline';
import AdminYoutube from './Components/AdminYoutube';
import AdminProject from './Components/AdminProject';
function App() {
  const dispatch  = useDispatch();


  const {isAuthenticated} = useSelector((state)=>state.login);
  const {loading,user}  = useSelector((state)=>state.user)


  useEffect(()=>{
    dispatch(getUser())
    dispatch(loadUser())
  },[dispatch])


  return (
    <div className="App">
     <Router>
      {loading?<div>Loading</div>:(
        <>
        <Header />
      <Routes>
        <Route path='/' element={<Home youtubes={user.youtube} timelines={user.timeline} skills={user.skills}/>} />
        <Route path='/about' element={<About about={user.about} />} />
        <Route path='/projects' element={<Projects projects={user.projects} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/account' element={isAuthenticated? <AdminPannel /> :<Login />} />
        <Route path='/admin/timeline' element={isAuthenticated? <AdminTimeline /> :<Login />} />
        <Route path='/admin/youtube' element={isAuthenticated? <AdminYoutube /> :<Login />} />
        <Route path='/admin/project' element={isAuthenticated? <AdminProject /> :<Login />} />
      </Routes>
      <Footer />
        </>
      )}
     </Router>
    </div>
  );
}

export default App;
