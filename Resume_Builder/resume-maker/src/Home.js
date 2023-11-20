import React from 'react'
import {Link} from "react-router-dom"
import Logo from "./images/Logo.png"
import "./Home.css"
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "./auth_config"
// import image01 from "./images/image01.jpg"




const Home = () => {
    const [user] = useAuthState(auth)
    // console.log(user.displayName)
    
  return (
    <header className='header container'>
        <nav className='navigation'>
            <div className='logo-text'>
                <Link to="/">
                    <img src={Logo} className='logo' alt=''/>
                    <h1 className='logo-name'>Resume Builder</h1>
                </Link>
            </div>
            <ul className='nav-items'>
                {/* <li><Link to="Choose_templates" >Resume Builder App</Link></li> */}
                {/* <li><Link to="Resume_templates">Resume Templates</Link></li> */}
                <li><Link to="Template_list">Resume Templates</Link></li>
                {user?(<li><Link to={"profile "}>Profile</Link></li>):(<li><Link to="log_in" >Log In</Link></li>)}
                
            </ul>
        </nav>

        <div className='main-content'>
            <div className='main-head'>
                <h1>The Best Online Resume Builder</h1>
            </div>
            <div className='main-body'>
                <p>Empower your career with our cutting-edge resume builder, creating visually appealing and ATS-friendly resumes effortlessly. Our user-friendly platform, rich text editing, and professional templates ensure your unique skills stand out. Join the ranks of successful candidates who trust us to make their resumes shine. Visit our platform and embark on your journey to career success today!</p>
                
            </div>
            <div className='main-way'>
                <Link to="Template_list">CREATE MY RESUME NOW</Link>
            </div>
        </div>
    </header>
  )
}

export default Home
