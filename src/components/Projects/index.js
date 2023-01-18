
import {Header} from "../header"
import instagramClone from "../../Assets/instagram-project.png";
import debounce from "../../Assets/debounce.png";
import creative from "../../Assets/creative.png";
import cart from "../../Assets/cart.png";
import ikken from "../../Assets/ikken.png";
import todo from "../../Assets/todo.png";
import form from "../../Assets/form.png";
import "../Projects/style.css"
import bagPencil from "../../Assets/briefcase.gif"
import {Card} from "../cards"
import bubblyChat from "../../Assets/bubblyChat.png"
import ecomApp from "../../Assets/ecom-app.png"

export const Projects = () => {


  
  return (
    
      <div className="projects">
        <Header  name="AISHWARIYA GHOSAL"/>
        <div className="image-container">
          <h1>PROJECTS</h1>
          <img alt="" src={bagPencil}/>
         </div>
        <div className="project_wrapper" style={{display:"flex",height:"100%",width:"80%",margin:"auto",padding:"0",flexDirection:"column"
      }}>
         <div className="Heading">
         <h1 style={{color:"white",marginTop:"20px"}}>Projects</h1>
         <div className="underline"></div>
         </div>
       
         <div className="project_info">
          <span style={{color:"#968b8b"}}>Please go to the following links to view all my projects in Github</span>
          <div className="project_container" style={{    display: "flex",justifyContent:"center",
    flexWrap: "wrap", margin:"20px 0"}}>
            <Card abouts="Bubbly Chat - A real time chat application (reactJs,hooks,javascript,context,firebase)." source="https://github.com/Dev-AG1999/bubble-chat" link="https://bubble-chatapp.netlify.app/" image={bubblyChat}/>
            <Card abouts="E-commerce website - A E-Commerce website with basic functionality like authentication,validation,product lists,category wise product search,product page,add to cart option with specific id of product to cart page and with remove cart option as well as pagination and while clicking add product for cart, incrementing the no of products in cart (reactJs,hooks,javascript,context,firebase,fetch)." source="https://github.com/Dev-AG1999/vetron__assesment" link="https://beamish-wisp-a3d9c0.netlify.app/" image={ecomApp}/>
      <Card abouts="Instagram clone - Basic CRUD functionality using firebase database" source="https://github.com/Dev-AG1999/instagram-clone" link="https://instagram-clonify.netlify.app/" image={instagramClone}/>
      <Card abouts="Implementation of Debounce and Throttle method"source="https://github.com/Dev-AG1999/debouncing" link="https://musical-daifuku-ef3cb7.netlify.app/" image={debounce}/>
      <Card abouts="Todo-List - with full CRUD funtionality"source="https://github.com/Dev-AG1999/MY-TODO" link="https://peaceful-sprite-82da4f.netlify.app/" image={todo}/>
      <Card abouts="A landing page in dark theme ,using HTML,CSS,JAVASCRIPT"source="https://github.com/Dev-AG1999/Creative-site-dark-theme-" link="https://majestic-sorbet-317212.netlify.app/" image={creative}/>
      <Card abouts="Form - Using REACT.JS and TYPESCRIPT"source="https://github.com/Dev-AG1999/saath-care-test" link="https://saath-care-interview.netlify.app/" image={form}/>
      <Card abouts="Random Website clone using HTML,CSS,JAVASCRIPT"source="https://github.com/Dev-AG1999/ikken-light-theme" link="https://starlit-torte-8d0470.netlify.app/" image={ikken}/>
      <Card abouts="A Cart Page - using REACT.JS and TYPESCRIPT"source="https://github.com/Dev-AG1999/MyCart" link="https://practical-spence-030a31.netlify.app/" image={cart}/>

          </div>
         </div>
        </div>
      </div>
   
  );
};
