
import {Header} from "../header"
import "../Contact/style.css"
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
  return (
<>      <Header  name="AISHWARIYA GHOSAL"/>
<div className="contacts" >
  
<div className="contact_wrapper">
    
<h1>Contact</h1>
<div  className="underline"></div>
<div className="contact_details">
<div className="address" style={{display:"flex"}}>
<HomeIcon></HomeIcon> : &nbsp;&nbsp;
 22 Joykrishna Ghosal road Kolkata 700057 
</div>
<div className="number"> <LocalPhoneIcon></LocalPhoneIcon> :  &nbsp;&nbsp;
8777895872</div>
<div className="mail"> <EmailIcon></EmailIcon> :  &nbsp;&nbsp;
 	<a className="links" href="Aishwariya.ghosal04@gmail.com">Aishwariya.ghosal04@gmail.com</a></div>
<div className="linkedin"> <LinkedInIcon></LinkedInIcon> : &nbsp;  &nbsp; 
	 	<a className="links" href="https://www.linkedin.com/in/aishwariya-ghosal-25a597184">https://www.linkedin.com/in/aishwariya-ghosal-25a597184</a>/</div>
</div>

</div>

  </div></>
   

  );
};
