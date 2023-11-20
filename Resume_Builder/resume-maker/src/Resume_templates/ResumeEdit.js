import React, { useMemo, useState } from 'react';
import './resumeEdit.css';
import Resume_1 from './Resume_1';
import Resume_2 from './Resume_2';
import { useLocation } from 'react-router-dom';

const ResumeEdit = () => {
  const location = useLocation();
  const data = location.state;
//   console.log(data)
  const [inputvalue, setInputValue] = useState('')
  const [key_skills, setKey_skills] = useState([]);           //userdata          key_skills     professionalData
 
  const [userdata, setuserdata] = useState({
    firstname : '',
    lastname : '',
    job_title:'',
    phone_no:'',
    email_address:'',
    address:'',
    city:'',
    postcode:'',
    state_name:'',
    country_name:'',
    experience_summary: '',
    qualification_name:'',
    university_name:'',
    joined_date:'',
    completed_date:'',
  })


  // localStorage.setItem('namefirst',JSON.stringify(userdata.firstname))
// console.log(userdata.key_skills)

  const [professionalData, setProfessionalData] = useState([
    { id: 1, companyName: '', jobRole: '', startDate: '', endDate: '', summary:''},
  ]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newData = {
      id: professionalData.length + 1,
      companyName: '',
      jobRole: '',
      startDate: '',
      endDate: '',
      summary: '',
    };
    setProfessionalData([...professionalData, newData]);
    
    setProfessionalData((prevData) =>
    prevData.map((u) => (u.id === newData.id ? newData : u))
  );
  };

  const handleSkills = (e) => {
    setInputValue(e.target.value);
  };


  const handleSkillsbutton = (e) =>{
    e.preventDefault();
    setKey_skills([...key_skills, inputvalue])
    setInputValue('');
  }
//   console.log(key_skills)


  const handleSaveButton = (e) =>{
    e.preventDefault();
    if(userdata.firstname){
       const ResumeData = userdata
       console.log(ResumeData) 

      //  const key_skill = key_skills
       localStorage.setItem('namefirst' ,JSON.stringify(userdata.firstname))
       localStorage.setItem('key_skills',JSON.stringify(key_skills))
       localStorage.setItem('professionalData',JSON.stringify(professionalData))

       fetch('http://127.0.0.1:8000/api/resumes/',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(ResumeData)
       })
    }else{
        alert("Kindly fill all fields")
    }
  }



  


//   const details = localStorage.setItem('datas',JSON.stringify(professionalData))

  const ResumeTemplate = useMemo(() => {
    const Templates = [
        { id: 1, template: Resume_1 },
        { id: 2, template: Resume_2 },
    ];

    const templateSelected = Templates.find((t) => t.id === data);
    return templateSelected ? templateSelected.template : null;
  }, [data]);

//   if (!ResumeTemplate) {
//     return <div>Loading...</div>; // or some other fallback UI
//   }

  return (
    <div className='edit-form-container'>
        <div className='left-top'>
            <h1>Personal Details</h1>
            <p>Get started with the basics: your name and contact information.</p>
            <form >
                <div className="left-edit-side">
                <div className='firstname-field'>
                    <label>First Name</label>
                    <input type='text' required='required' value={userdata.firstname} onChange={(e)=>setuserdata({...userdata, firstname:e.target.value})}/>
                </div>
                <div className='lastname-field'>
                    <label>Last Name</label>
                    <input type='text' required='required' value={userdata.lastname} onChange={(e)=>setuserdata({...userdata, lastname:e.target.value})}/>
                </div>
                <div className='job-title-field'>
                    <label>Job Title</label>
                    <input type='text' required='required' value={userdata.job_title} onChange={(e)=>setuserdata({...userdata, job_title:e.target.value})}></input>
                </div>
                <div className='phone-field'>
                    <label>Phone</label>
                    <input type='phone' value={userdata.phone_no} onChange={(e)=>setuserdata({...userdata, phone_no:e.target.value})}></input>
                </div>
                <div className='email-field'>
                    <label>Email Address</label>
                    <input type='email' value={userdata.email_address} onChange={(e)=>setuserdata({...userdata, email_address:e.target.value})}></input>
                </div>
                <div className='address-field'>
                    <label>Address</label>
                    <input type='text' value={userdata.address} onChange={(e)=>setuserdata({...userdata, address:e.target.value})}></input>
                </div>
                <div className='city-field'>
                    <label>City</label>
                    <input type='text' value={userdata.city} onChange={(e)=>setuserdata({...userdata, city:e.target.value})}></input>
                </div>
                <div className='postcode-field'>
                    <label>Post Code</label>
                    <input type='text' value={userdata.postcode} onChange={(e)=>setuserdata({...userdata, postcode:e.target.value})}></input>
                </div>
                <div className='state-field'>
                    <label >State</label>
                    <input type='text' value={userdata.state_name} onChange={(e)=>setuserdata({...userdata, state_name:e.target.value})}></input>
                </div>
                <div className='country-field'>
                    <label >Country</label>
                    <input type='text' value={userdata.country_name} onChange={(e)=>setuserdata({...userdata, country_name:e.target.value})}></input>
                </div>
                {/* ******************_______________POSITION OF USER_______________**************************/}
            </div>


{professionalData.map((user) => (
          <div className='positions-container' key={user.id}>
            <div className='position-field'>
              <label>Position Title</label>
              <input
                type='text'
                value={user.jobRole}
                onChange={(e) =>
                  setProfessionalData((prevData) =>
                    prevData.map((u) =>
                      u.id === user.id ? { ...u, jobRole: e.target.value } : u
                    )
                  )
                }
              />
            </div>
            <div className='company-name-field'>
              <label>Company Name</label>
              <input
                type='text'
                value={user.companyName}
                onChange={(e) =>
                  setProfessionalData((prevData) =>
                    prevData.map((u) =>
                      u.id === user.id ? { ...u, companyName: e.target.value } : u
                    )
                  )
                }
              />
            </div>
            <div className='position-startDate'>
              <label>Start Date</label>
              <input
                type='date'
                value={user.startDate}
                onChange={(e) =>
                  setProfessionalData((prevData) =>
                    prevData.map((u) =>
                      u.id === user.id ? { ...u, startDate: e.target.value } : u
                    )
                  )
                }
              />
            </div>
            <div className='position-endDate'>
              <label>End Date</label>
              <input
                type='date'
                value={user.endDate}
                onChange={(e) =>
                  setProfessionalData((prevData) =>
                    prevData.map((u) =>
                      u.id === user.id ? { ...u, endDate: e.target.value } : u
                    )
                  )
                }
              />
            </div>
            <div className='work-summary'>
              <label>Work Summary</label>
              <textarea
              placeholder='Enter Your work summary...'
                type='text'
                value={user.summary}
                onChange={(e) =>
                  setProfessionalData((prevData) =>
                    prevData.map((u) =>
                      u.id === user.id ? { ...u, summary: e.target.value } : u
                    )
                  )
                }
              />
            </div>
            
          </div>
        ))}
         <button className='add-button' onClick={(e)=>handleAdd(e)}>Add Professional Data</button>
         <div className='experience-sum'>
            <label>Experience Summary</label>
            <textarea type='text' placeholder='Enter Your Job experience summary...' value={userdata.experience_summary} onChange={(e)=>setuserdata({...userdata, experience_summary:e.target.value})} className='text-area-experience' col='3' rows={4} ></textarea>
         </div>
         <div className='key-skills-fields'>
                <label>Key skills</label>
                <input type='text' value={inputvalue} onChange={handleSkills}/>
                <button onClick={(e)=>handleSkillsbutton(e)}>Add skills</button>
         </div>
         <div className='education-details-field'>
            <div className='qualification-name'>
                <label>Highest Education qualilfication</label>
                <input type='text' value={userdata.qualification_name} onChange={(e)=>setuserdata({...userdata, qualification_name:e.target.value})}></input>

            </div>
            <div className='university-name'>
                <label>University with city name</label>
                <input type='text' value={userdata.university_name} onChange={(e)=>setuserdata({...userdata, university_name:e.target.value})}></input>

            </div>
           <div className='joined-date'>
                <label>Joined year</label>
                <input type='number' value={userdata.joined_date} onChange={(e)=>setuserdata({...userdata, joined_date:e.target.value})}></input>

           </div>
            <div className='completed-date'>
                 <label>Completed year</label>
                 <input type='number' value={userdata.completed_date} onChange={(e)=>setuserdata({...userdata, completed_date:e.target.value})}></input>
            </div>
         </div>
         <button className='download-save' type='submit' onClick={handleSaveButton}>Save</button>        
        </form>
        </div>

      <div className='right-preview-side'>
        <ResumeTemplate data={userdata} professionalData={professionalData} key_skills={key_skills}/>
      </div>
    </div>
  );
};

export default ResumeEdit;







































// eslint-disable-next-line no-lone-blocks
{/* {professionalData.map(user => (
                    <>
                    <div className='position-field'>
                    <label>Position Title</label>
                    <input type="text" value={user.jobRole} onChange={(e) => setProfessionalData({...user, jobRole : e.target.value} )} />
                </div>
                <div className='company-name-field'>
                    <label>Comapany Name</label>
                    <input type="text" value={user.companyName} onChange={(e) => setProfessionalData({...user, companyName : e.target.value} )} />
                </div>
                <div className='position-startDate'>
                    <label>Start Date</label>
                    <input type="date" value={user.startDate} onChange={(e) => setProfessionalData({...user, startDate : e.target.value} )} />
                </div>
                <div className='position-endDate'>
                    <label>End Date</label>
                    <input type="date" value={user.endDate} onChange={(e) => setProfessionalData({...user, endDate : e.target.value} )} />
                </div>
                </>
                ))} */}