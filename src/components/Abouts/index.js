
import {Header} from "../header";
import "./style.css"
import workimage from "../../Assets/work-image.gif"


export const Abouts = () => {
  return (

      <div className="exp_container">
         <Header  name="AISHWARIYA GHOSAL"/>
<div className="image-container">
<h1>ABOUTS</h1>
  <img alt="" src={workimage}/>
</div>
        <div className="experience">
      
            <h1 style={{ color: "white",
                    textShadow: "2px 0px #e91e63",marginBottom:"10px",
                    fontSize: "30px",}}>Experience</h1>
                    <div className="underline"></div>
            <ul>
<li><p>March,2022–September,2022</p>

<p><strong>Frontend Developer</strong> • Attosol Technologies Pvt Ltd</p>

<p>In Attosol Technologies, I worked on a feature where there will be some unique, reusable and dynamic snippets and those can be used by growing entrepreneur to build their own websites.</p></li>
<li><p>February,2021–February,2022</p>
<p><strong>Javascript Developer</strong> • Isten Technologia(OPC)</p>
<p>In Isten Technologia I was in the team of UI developers, I started with HTML,CSS JAVASCRIPT to design their website and later on I got chance to contribute in their react project.</p></li>
<li><p>June,2019–July,2019</p>
<p><strong>Internship</strong> • Larsen and Toubro</p></li>
</ul>
          </div>
          <div className="education">
      
      <h1 style={{ color: "white",
              textShadow: "2px 0px #e91e63",marginBottom:"10px",
              fontSize: "30px",}}>Education</h1>
              <div className="underline"></div>
      <ul>
<li><p><strong>College : Calcutta Institute of Engineering and Management</strong></p>

<p><strong>Year of pass-out</strong> : 2021</p>

<p><strong>Stream : Electronics and Communication Engineering</strong></p>
<p>DGPA : 8.32</p></li>
<li><p><strong>School : Ariadaha Sarbamangala Balika Vidyalaya</strong></p>
<p><strong>Higher Secondary : 2017</strong></p>
<p><strong>Secondary : 2015</strong></p>
</li>
</ul>
    </div>
      </div>

  );
};
