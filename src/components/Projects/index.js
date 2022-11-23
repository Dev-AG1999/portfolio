
import {Header} from "../header"
import instagramClone from "../../Assets/instagram-project.png";
import debounce from "../../Assets/debounce.png";
import creative from "../../Assets/creative.png";
import cart from "../../Assets/cart.png";
import ikken from "../../Assets/ikken.png";
import todo from "../../Assets/todo.png";
import form from "../../Assets/form.png";
import "../Projects/style.css"

import {Card} from "../cards"

export const Projects = () => {
  return (
    
      <div className="projects">
        <Header  name="AISHWARIYA GHOSAL"/>
        <div className="project_wrapper" style={{display:"flex",height:"100%",width:"80%",margin:"auto",padding:"50px 0 0 0",flexDirection:"column"
      }}>
         <div className="Heading">
         <h1 style={{color:"white",marginTop:"20px",fontFamily:"cursive"}}>Projects</h1>
         <div className="underline"></div>
         </div>
         <div className="project_info">
          <span style={{color:"#968b8b",fontFamily:"cursive"}}>Please go to the following links to view all my projects in Github</span>
          <div className="project_container" style={{    display: "flex",justifyContent:"center",
    flexWrap: "wrap", margin:"20px 0"}}>
      <Card  source="https://github.com/Dev-AG1999/instagram-clone" link="https://instagram-clonify.netlify.app/" image={instagramClone}/>
      <Card source="https://github.com/Dev-AG1999/debouncing" link="https://musical-daifuku-ef3cb7.netlify.app/" image={debounce}/>
      <Card source="https://github.com/Dev-AG1999/MY-TODO" link="https://peaceful-sprite-82da4f.netlify.app/" image={todo}/>
      <Card source="https://github.com/Dev-AG1999/Creative-site-dark-theme-" link="https://majestic-sorbet-317212.netlify.app/" image={creative}/>
      <Card source="https://github.com/Dev-AG1999/saath-care-test" link="https://saath-care-interview.netlify.app/" image={form}/>
      <Card source="https://github.com/Dev-AG1999/ikken-light-theme" link="https://starlit-torte-8d0470.netlify.app/" image={ikken}/>
      <Card source="https://github.com/Dev-AG1999/MyCart" link="https://practical-spence-030a31.netlify.app/" image={cart}/>

          </div>
         </div>
        </div>
      </div>
   
  );
};
