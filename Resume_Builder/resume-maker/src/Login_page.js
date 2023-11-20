import React,{ useState} from 'react'
import "./Login_page.css"
import {FcGoogle} from "react-icons/fc"
import auth from "./auth_config"
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
// import EditProfile from './EditProfile'
// import Profile from './Profile'



const Login_page = () => {
  const [isActive, setIsActive] = useState(true);
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [Password,setPassword] = useState("")
  const [confirmPassword,setconfirmPassword] = useState("")
  const [username,setUsername] = useState("")
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [user] = useAuthState(auth)

  // ***********************************________LOGIN PAGE_______________************************************************************

  const HandleEmailSignup = (e) =>{
    e.preventDefault();

// ***********************************__________CREATE NEW USER WITH EMAIL AND PASSWORD____________*************************************
      createUserWithEmailAndPassword(auth,email,Password)
          .then((userCredential)=>{
            const user = userCredential.user;
            console.log("user",user)
            const user1 = {
              Name:"",
              EmailId:user.email,
              Password:Password
            }
            localStorage.setItem("user",JSON.stringify(user1))
            // console.log("created",user1)
            navigate("/EditProfile" )
          })
          .catch((error)=>{
            
            const errorCode = error.code;
            const errorMessage = error.message
            alert("This Email is already in Use")
            console.log("error: ", errorCode, "errormsg ", errorMessage)
            
          })
    }
    


  const HandleEmailLogin = (e) =>{
    console.log("clicked")
    e.preventDefault();

    //*****************************__________________ ALREADY EXISTED USER NEED TO ENTER EMAIL, USERNAME AND PASSWORD STORE IT IN LOCAL STORAGE 
    //*****************************___________________FETCH THIS USER NAME FROM LOCAL STORAGE IN PROFILE SECTION AND STORE THE USER INFORMATION */ */
      signInWithEmailAndPassword(auth, email, Password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("log in : user ", user) 
            const user1 = {
              Name:"",
              EmailId:user.email,
              Username:username,
            }
            // localStorage.setItem("users",JSON.stringify(user1))
            navigate("/Profile", {state:user1})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("log in : error: ", errorCode,errorMessage)
            console.log("kindly create an account")
            alert("Kindly create an account")
          });
    
    }
  // console.log(user.email)
  const HandleGoogleClick=() =>{

//**********************______________LOGIN USING GOOGLE AND NEED TO ENTER THE ALL DETAIL AGAIN _______**************************/
      signInWithPopup(auth, provider)
      .then((result) => {
        console.log(user)
        const user1 = {
          Name:user.displayName,
          EmailId:user.email
        }
        localStorage.setItem("user",JSON.stringify(user1))
        navigate("/EditProfile")
      }).catch((error) => {
        console.log("error in signing up using google ")
      });
    // console.log(provider)
  }

  //*************________________PASSWORD RESET MECHANISM IMPLEMENTATION IS GOES HERE___________*********************** */

  const handleReset = async () => {
    try {
      console.log("clicked")
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error('Error sending reset email:', error.message);
    }
  };



  return (
    <div className='login-container'>
      <div className='left-main'>
        <h1>The Best Free Online Resume Builder</h1>
        <p>A Quick and Easy Way to Create Your Professional Resume.</p>
      </div>
      <div className='right-main'>
        <p>Welcome to <span>Resumebuilder</span></p>
        <div className='button-container'>
            <span className={`${isActive?"active":""}`} onClick={()=>setIsActive(!isActive)} >Sign Up</span>
            <span className={`${isActive?"":"active"}`} onClick={()=>setIsActive(!isActive)}>Login</span>
        </div>
        <div>
          {
            isActive?(
              <>
              <div className='login-google' onClick={HandleGoogleClick}>
            <FcGoogle style={{fontSize:"20px",position:"relative",top:"5px"}}/><button>Sign in with google</button>
        </div>
        <form className='auth-form' onSubmit={HandleEmailSignup}>
            <label>Email</label>
            <input placeholder='Enter your Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} type='email'/>
            <label>Password</label>
            <input placeholder='Enter your password' value={Password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
            <label> Confirm Password</label>
            <input placeholder='Confirm your password' value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} type='password'/>  
            {(Password===confirmPassword)?(
                  <button type='submit' >Sign in </button>
                ):(
                  <button>Password Missmatch</button>
                )}
            
        </form>
              </>
            ):(
              <>
                <div className='login-google' onClick={HandleGoogleClick}>
                <FcGoogle style={{fontSize:"20px",position:"relative",top:"5px"}}/><button>Login with google</button>
                </div>
                <form className='auth-form' onSubmit={HandleEmailLogin}>
                <label>Email</label>
                <input placeholder='Enter your Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} type='email'/>

                <label>Username</label>
                <input placeholder='Enter your Username' value={username} onChange={(e)=>setUsername(e.target.value)} type='username'/>

                <label>Password</label>
                <input placeholder='Enter your Password' value={Password} onChange={(e)=>setPassword(e.target.value)} type='password'/>

                <button type='submit'>Login</button>
                <h6 className='passwrod-reset'>
                  {resetSent ? (<h6 style={{fontSize:'15px'}}>Password reset email sent. Check your inbox.</h6>):(<h6 style={{fontStyle:'5px'}} onClick={handleReset} >Reset Password</h6>)}
                </h6>
                </form>
              </>
            )}

        </div>
        
      </div>
    </div>
  )
  
}

export default Login_page
