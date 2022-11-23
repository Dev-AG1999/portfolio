import "../header/style.css";
import { useState} from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";




export const Header = ({ name }) => {
  const [open, setOpen] = useState(false);


  const history = useNavigate();



  const handleClick=()=>{

    history('/home');

  }

  const handleClickProject=()=>{
    
    history('/projects')

  }
  const handleClickAbouts=()=>{
    
    history('/abouts')
  }


  const handleClickContact=()=>{
    
    history('/contact')

  }


  const clickMenu = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const closeMenu = (e) => {
    e.preventDefault();
    history('/')
    setOpen(false);
  
  };

  return (
<div className="header_wrapper">
      <div className="header_name">
       <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aishwariya-ghosal-25a597184"> <h3 className="name">{name}</h3></a>
      </div>

      <ul className="nav">
        <li> <a><button  onClick={()=>handleClick()}>Home</button></a></li>
        <li> <a><button onClick={()=>handleClickAbouts()}>Abouts</button></a></li>
        <li><a><button onClick={()=>handleClickProject()}>Projects</button></a></li>
        <li> <a><button onClick={()=>handleClickContact()}>Contact</button></a></li>
      </ul>
      <button className="hamburger_button" onClick={clickMenu}>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="open_menu">
            <div className="close_menu">
          <button onClick={closeMenu}>+</button>  
            </div>
            <ul className="modal_nav">
            <li> <a><button onClick={()=>handleClick()}>Home</button></a></li>
            <li> <a><button onClick={()=>handleClickAbouts()}>Abouts</button></a></li>
        <li><a><button onClick={()=>handleClickProject()}>Projects</button></a></li>
        <li> <a><button onClick={()=>handleClickContact()}>Contact</button></a></li>
 
        
            </ul>
          </div>
        </Modal>
        <ul className="hamburger_menu">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </button>
    </div>


  );
};

