export const Card = ({ image, link, source, abouts }) => {
  return (
    <>
      <a
        style={{ width: "350px" }}
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <div className="card">
          <img src={image} alt="" />
          <div className="project_about">
            <p className="normal_text">{abouts}</p>
            <p className="hover_text">{abouts}</p>
          </div>
          <a target="_blank" rel="noreferrer" href={source}>
            <button
              style={{
                backgroundColor: "#e91e63",
                color: "white",
                padding: "5px",
                cursor: "pointer",
                width: "100%",
                border: "none",
              }}
            >
              Source Code
            </button>
          </a>
        </div>
      </a>
    </>
  );
};
