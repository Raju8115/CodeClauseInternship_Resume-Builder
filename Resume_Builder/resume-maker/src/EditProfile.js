import React, { useState } from 'react'
import "./EditProfile.css"
import { useNavigate } from 'react-router-dom'
// import login_page from "./Login_page"


const EditProfile = (props) => {

    // const [isChangePassword,setChangePassword] = useState(false)
    const navigate = useNavigate();
    const val = JSON.parse(localStorage.getItem('user'))
    console.log("local",val)
    const [formData, setFormData] = useState({
        Firstname:'',
        Lastname:'',
        Username:'',
        EmailId:val.EmailId,
    });
    // const [password, setPassword] = useState("")

    
    async function checkUserstatus(){
         try{
            await fetch(`http://127.0.0.1:8000/api/users/${formData.Username}/`)
            .then((Response)=>Response.json()).then((data)=>{
            if(data.Username){
                setFormData.Username(data.Username)
            }else{
                console.log("You are a new user")
            }
        })
    }catch{
        console.log("Error in fetching data")
    }
   
    }
 checkUserstatus();

    if(val.Username){
        console.log("User already exists")
    }

    // *********************____________SENDING THE FINAL DATA ENTERED BY USER IN THE FORM to local storage_______________*****************
    localStorage.setItem('users',JSON.stringify(formData))


    const submitData = (e) =>{
        e.preventDefault();

            fetch("http://127.0.0.1:8000/api/", {
                 method : 'POST',
                 headers: {
                     'Content-Type': 'application/json', 
                   },
                 body : JSON.stringify(formData),
                
            }).then((Response)=>{
                if(Response.ok){
                    alert(" Successfully sent")
                }else{
                    alert("This username is already exists ")
                    navigate("/log_in")
                }
            })
        // / localStorage.setItem("user",JSON.stringify(user))
        // console.log(user)
        navigate("/profile", {state:formData})
    }
    
    // console.log("forma data 1st " , formData)

    

  return (
    <div>
      <div className='form-container'>
        {/* <button type='submit' value="submit">Save</button> */}
        <div className='header-name'>
            <h1>My Profile</h1>
        </div>
        <form className='form' onSubmit={submitData}>
            <div className='firstName entity'>
                <label className='label' htmlFor='Firstname' >First Name</label>
                <input className='input' id='Firstname' value={formData.Firstname} onChange={(e)=>setFormData({...formData, Firstname:e.target.value})} type='text' name='Firstname' required="required"/>
            </div>
            <div className='lastName entity'>                
                <label className='label' htmlFor='Lastname'>Last Name</label>
                <input className='input' id='Lastname' value={formData.Lastname} onChange={(e)=>setFormData({...formData, Lastname:e.target.value})} type='text' name='Lastname' required="required"/>
            </div>
            <div className='username entity'>
                <label className='label' htmlFor='Username'>Username</label>
                <input className='input' id='Username' value={formData.Username||val.Username} onChange={(e)=>setFormData({...formData, Username:e.target.value})} type='text' name='Username' required="required"/>
            </div>
            <div className='email_address entity'>
                <label className='label' htmlFor='EmailId'>Email Address</label>
                <input className='input' id='EmailId' value={val.EmailId} /*onChange={(e)=>setFormData({...formData, EmailId:e.target.value})}*/ type='email' name='EmailId' required="required"/> 
            </div>
            <button type='submit' className='datasubmit'>Submit</button>
        </form>
        
            {/* <div className='password-header entity'>
                <h1>Password</h1>
            </div>
        <div className='password-container'>
            <div className='new-password entity'>
                <label className='label'>New Password</label>
                <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
            </div>
            {
                isChangePassword ? (
                    <div className='confirm-password entity'>
                        <label className='label'>Confirm Password</label>
                        <input className='input'  type='password'/>
                    </div>
                ):(
                    <h1 className='changePassword' onClick={(e)=>setChangePassword(!isChangePassword)}>Change password?</h1>
                )
            }
           
        </div> */}
      </div>
    </div>
  )
}

export default EditProfile
