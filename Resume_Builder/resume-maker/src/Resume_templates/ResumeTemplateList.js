import React from 'react';
import image01 from 'D:/Full_stack/Resume_Builder/resume-maker/src/images/image01.jpg';
import { useNavigate } from 'react-router-dom';
import './ResumeTemplateList.css'

const imageUrls = [
  { id: 1, imgUrl: image01 },
  { id: 2, imgUrl: image01 },
];



const ResumeTemplateList = () => {
  const navigate = useNavigate();
  // const data = {name: "john", age: "30", id:23}
  const sendData = (id) => {
    console.log(id);
    // Do something with the id if needed
    navigate('/ResumeEdit', { state:id });
  };

  const handleButtonClick = (id) => {
    sendData(id);
  };

  return (
    <div className="template-list">
      <header className="template-list-header">
        <h1>Welcome to our Resume Building Website</h1>
        <p>Here are our most popular Resume templates</p>
      </header>
      <ul className="image-list">
        {imageUrls.map((props) => (
          <li key={props.id}>
            <img src={props.imgUrl} alt={`${props.id + 1}`} onClick={() => handleButtonClick(props.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeTemplateList;
