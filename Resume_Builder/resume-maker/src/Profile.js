import React, { useEffect, useState } from 'react'
import "./Profile.css"
import auth from './auth_config'
// import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
  

const Profile = () => { 
    // const[usersData, setUsersData] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const[userName, setUserName] = useState("")
    // const [user] = useAuthState(auth);
    const [selectedOption, setSelectedOption] = useState('');
    const navigation = useNavigate();

    const location = useLocation();
    const userInfo = location.state;

    localStorage.setItem('userInfo',JSON.stringify(userInfo))
    // console.log(userInfo)

    
  
    useEffect(()=>{
      const users = JSON.parse(localStorage.getItem('userInfo'))
      console.log("username : ",users.Username)

      const loadusers = async () =>{
        console.log("started")
        await fetch(`http://127.0.0.1:8000/api/users/${users.Username}/`)
        .then((Response)=>Response.json())
        .then((data)=>{
          setName(data.Firstname + "  " + data.Lastname)
          setEmail(data.EmailId)
          setUserName(data.Username)
        })
      }

     loadusers()   
  },[])

    // setUserName(user.displayName)
    //  console.log("set ",usersData)
    const logout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Successfully logged out")
            localStorage.clear();
            navigation("/")
          }).catch((error) => {
            // An error happened.
            console.log("Error on log out")
          });
    }

    const handleDropdownChange = (e) =>{
        const selectedvalue = e.target.value;
        setSelectedOption(selectedOption)
        console.log(selectedvalue);
        if(selectedvalue==="option2")
        logout();
        if(selectedvalue==="option1")
        navigation("/EditProfile")
    }

  return (
    <div>
      <div className='profile-container'>
        
        <div className='user-profile'>
            {/* <button onClick={logout}>Log out</button> */}
            <div className='select'>
                <select value={selectedOption} onChange={handleDropdownChange}>
                <option >Settings</option>
                <option value="option1">Edit Profile</option>
                <option value="option2">Log out</option>
            </select>
            </div>
            

            <div className='header'><h1>My Account</h1></div>
            <div className='body'>
                <p>Name: <span>{name}</span></p>
                <p>Username : <span>{userName}</span></p>
                <p>Email : <span>{email}</span></p>
            </div>
        </div>
        <div className='user-resumes'>

        </div>
      </div>
    </div>
  )
}

export default Profile

























    // useEffect(()=>{
    //   // const usersData = []
    //     const users = JSON.parse(localStorage.getItem('update'))
    //     try{
    //         if(users.Username){
    //             console.log(users.Username)
    //             async function fetch(){
    //               const result = await fetch(`http://127.0.0.1:8000/api/users/${users.Username}/`)
    //               .then((Response)=>Response.json())
    //               .then((data)=> setUsersData(data))
    //                }
    //                console.log(usersData) 
    //           }
    //     }catch{
    //       console.log("Some error while fetching user details from local storage")
    //     }
    //     fetch()
    //     console.log(name,userName,email)
        

    //     // console.log(users)
    //     if(usersData){
    //         setName(usersData.firstname+(" ",usersData.lastname))
    //         setEmail(usersData.email)
    //         setUserName(usersData.email)
    //     }

    // },[])