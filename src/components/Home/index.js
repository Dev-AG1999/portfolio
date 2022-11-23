import "../Home/style.css";
import profilePhoto from "../../Assets/profile-photo.JPG";
import resume from "../../Assets/Aishwariya-new-cv.pdf";
import { Header } from "../header";

export const Home = ({ name }) => {
  
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = resume;
            alink.click();
        })
    })
}
  return (
    <>
              <Header name="AISHWARIYA GHOSAL" />
      <div className="home">

        <div className="home_wrapper">
          <div className="profile_wrapper">
            <div
            className="profile_photo"
          
          >
            <img
              style={{
                borderRadius: "100%",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={profilePhoto}
              alt=""
            />
          </div>
          <div className="Name">
            <h1 style={{ color: "white" }}>{name}</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              <h3 style={{ color: "#e91e63", marginTop: "10px" }}>
                <strong
                  style={{
                    color: "white",
                    textShadow: "2px 0px #e91e63",
                    fontSize: "30px",
                  }}
                >
                  Hi !
                </strong>
              </h3>
              <h3 style={{ color: "#e91e63", marginTop: "10px" }}>
                <strong
                  style={{
                    color: "white",
                    textShadow: "2px 0px #e91e63",
                    fontSize: "30px",
                  }}
                >
                  I
                 </strong>
                 &ensp; am Aishwariya Ghosal. I am a frontend Developer / React.Js
                Developer
              </h3>
            </div>
          </div>
          <div className="button_container"><button className="download" onClick={onButtonClick}>Download My Resume</button></div>   </div>
  
       
         
        </div>
      </div>
    </>
  );
};
