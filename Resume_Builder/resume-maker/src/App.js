import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Home';
import ChooseTemplates from './Choose_template';
import ResumeTemplates from './Resume_template'
import LoginPage from './Login_page';
import Profile from './Profile';
import EditProfile from './EditProfile'
import ResumeTemplateList from './Resume_templates/ResumeTemplateList'
import ResumeEdit from './Resume_templates/ResumeEdit';
// import ResumeTemplateList from './Resume_templates/ResumeTemplatePreview';

const App = () => {
  return (
    <div>
      <Router>
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='EditProfile' element={<EditProfile/>}></Route>
          <Route path='Choose_templates' element={< ChooseTemplates/>}></Route>
          <Route path='Resume_templates' element={<ResumeTemplates/>}></Route>
          <Route path='log_in' element={<LoginPage/>}></Route>
          <Route path='Template_list' element={<ResumeTemplateList/>}></Route>
          <Route path='ResumeEdit' element={<ResumeEdit/>}></Route>
          <Route path='ResumeEdit/log_in' element={<LoginPage/>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
