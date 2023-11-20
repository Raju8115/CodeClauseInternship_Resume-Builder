import React, { useEffect, useState } from 'react'
import "./resume_2.css"
import html2pdf from 'html2pdf.js'


const Resume_1 = (props) => {

  const [usersResumeData, setUsersresumeData] = useState({})
  const [ProfessionalData, setProfessionalData] = useState({})
  const [key_skills, setKeySkills] = useState([])



//   const dataObject = props.data;
//   const key_skills = professionalData.0;
  // Access the 'name' and 'job' properties from the data object
  const firstname = usersResumeData.firstname;
  const lastname = usersResumeData.lastname
  const job_title = usersResumeData.job_title;
  const phone_no = usersResumeData.phone_no;
  const email_address = usersResumeData.email_address;
  const address = usersResumeData.address;
  const city = usersResumeData.city;
  const postcode = usersResumeData.postcode;
  const country_name = usersResumeData.country_name;
  const state_name = usersResumeData.state_name;
  const experience_summary = usersResumeData.experience_summary;
  const qualification_name = usersResumeData.qualification_name;
  const university_name = usersResumeData.university_name;
  const joined_date = usersResumeData.joined_date;
  const completed_date = usersResumeData.completed_date;


  
// console.log("key-skills", key_skills)

//   console.log(usersResumeData, ProfessionalData)

    useEffect(()=>{
        const firstName = JSON.parse(localStorage.getItem('namefirst'))
        if(firstName){
            fetch(`http://127.0.0.1:8000/api/resumes/${firstName}/`)
            .then((response)=>response.json()).then((data)=>setUsersresumeData(data))

            setProfessionalData(JSON.parse(localStorage.getItem('professionalData')))
            setKeySkills(JSON.parse(localStorage.getItem('key_skills')))
        }
    },[])


  const generatePDF = () => {
    const element = document.getElementById('resume-container');
    html2pdf(element, { backgroundColor: 'white' });
  };


  return (
    <div>
      <div className='Outter-container' id='resume-container'>
        <div className='inner-left-2'>
            <div className='user-name-2'>
                {firstname ? (<h1>{firstname} {lastname}</h1>):<h1>Chris</h1>}
            </div>
            <div className='user-role-2'>
                {job_title ? <p>{job_title}</p>:<p>Human Resource Manager</p>}
            </div>
            <div className='user-address-2'>
                {(email_address||address||city||phone_no||postcode||country_name||state_name)? (<p>{address} {city} {state_name} {country_name} {postcode} {email_address} {phone_no} </p>):(<p>4759 Sunnydale Lane Plano, TX 75071 email@youremail.com (469) 385-2948</p>) }
            </div>
            <div className='Experience-summary-2'>
                { experience_summary ? (<p>{experience_summary}</p>) : (<p>Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.</p>
)}
            </div>
            <div className='key-skill-2'>
                <h1>Key Skills</h1>
            </div>
            <div className='skills-list-2'>
                <ul>
                    {key_skills ? (
                        key_skills.map((value,index) => (
                            <li key={index}>{value}</li>
                        ))
                    ):(
                        <>
                    <li>Detail oriented</li>
                    <li>Well-versed in Texas employment law</li>
                    <li>Excellent written and oral communication skills</li>
                    <li>Develops positive workplace relationships</li>
                         </>)}
                    
                </ul>
            </div>
        </div>
        <div className='inner-right-2'>
            <div className='professional-experience'>
                <h1>Professional Experience</h1>
            </div>
            {/* **********************************************************************************************************************/}
            {(ProfessionalData[0]) ? (
            ProfessionalData.map((user)=>(
                <div key={user.id}>
                     <div className='right-job-role'>
                        <div className='role-name'>
                            <p>{user.jobRole}</p>
                        </div>
                        <div className='role-location'>
                           <p>{user.companyName} | {user.startDate} to {user.endDate}</p>
                        </div>
                    </div>
                <div className='job-experience'>
                    <ul>
                        <li>{user.summary}</li>
                    </ul>
                </div>
            </div>
            ))):(
                <>
            <div className='right-job-role'>
                <div className='role-name'>
                    <p>Human Resources Manager</p>
                </div>
                <div className='role-location'>
                    <p>Jim's Widget Factory, Plano, TX | January 2016 - Present</p>
                </div>
            </div>
            <div className='job-experience'>
                <ul>
                    <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                    <li>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li>
                    <li>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policiesMonitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</li>
                    <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                </ul>
            </div>
            
            <div className='right-job-role'>
                <div className='role-name'>
                    <p>Human Resources Manager</p>
                </div>
                <div className='role-location'>
                    <p>Jim's Widget Factory, Plano, TX | January 2016 - Present</p>
                </div>
            </div>
            <div className='job-experience'>
                <ul>
                    <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                    <li>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li>
                    <li>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policiesMonitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</li>
                    <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                </ul>
            </div>
            </>)}

            <div className='education'>
                <h1>Education</h1>
            </div>
            <div className='education-container'>
                <div className='education-qualilfication'>
                    {qualification_name ? (<p>{qualification_name}</p>):(<p>Masters in Human Resources</p>)}
                </div>
                <div className='education-location'>
                    {university_name ? (<p>{university_name} | {joined_date} to {completed_date}</p>) : (<p>The University of Texas, Dallas | September 2007 - May 2011</p>)}
                </div>
            </div>
        </div>
      </div>
      <button className="generate-pdf-button" onClick={generatePDF}>Generate PDF</button>
    </div>
  )
}

export default Resume_1
