import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import { Button } from "antd";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function UserInfo({ match }) {
  const { users } = useSelector((state) => state.usersReducer);

  const user = users.find((user) => user._id == match.params.id);

  const uem = user.email

  const uname = user.firstName

  const handle = async () =>{
    emailjs.send("service_dh0mc4g","template_dwr4hti",{
      to_mail: String(uem),
      name: String(uname)
    },'user_eG3NM5NS2O4sqQZwWh4NH');
    
  }

  const gen = async () =>{
    const input = document.getElementById('toprint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
       
        pdf.save("Resume.pdf");
      })
  }

  return (
    <div>
      <DefaultLayout>
        {user && (
          <div id="toprint">
            <h3>
              <b>Personal inforamtion</b>
            </h3>
            <p>
              <b>First name : </b>
              {user.firstName}
            </p>
            <p>
              <b>Last name : </b>
              {user.lastName}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>Mobile Number : </b>
              {user.mobileNumber}
            </p>
           

            <hr />
            <h3>
              <b>Skills</b>
            </h3>

            {user.skills.map((skill) => {
              return <li>{skill}</li>;
            })}

            <hr />
            <h3>
              <b>Education</b>
            </h3>
            {user.education.map((education) => {
              return <li>{education}</li>;
            })}
            <hr />

            <h3>
              <b>Projects</b>
            </h3>
            {user.projects.map((project) => {
              return <li>{project}</li>;
            })}

            <hr />
            <h3>
              <b>Experience</b>
            </h3>
            {user.experience.map((experience) => {
              return <li>{experience}</li>;
            })}

            <hr/> 
            <div>
              <Link to='/confirm'><button className="mail-btn1"  onClick={handle}>Select Candidate</button></Link>
              <button className="mail-btn2" onClick={gen}>Download Resume</button>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default UserInfo;


