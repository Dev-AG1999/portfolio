
export const Card=({image,link,source})=>{
    return(
      <>
<a   target="_blank" rel="noreferrer" href={link} >
<div className="card">
        <img src={image} alt=""/>
        <a  target="_blank" rel="noreferrer" href={source}><button style={{backgroundColor:"#e91e63",color:"white",padding:"5px",cursor:"pointer",width:"100%",border:"none"}}>Source Code</button></a>

      </div>
</a>

    </>
    )
}