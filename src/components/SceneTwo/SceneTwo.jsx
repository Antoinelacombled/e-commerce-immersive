import "./scenetwo.scss";

function SceneTwo() {
  return (
    <>
      <div className="scene-two-container">
        <div className="sphere-wrapper" style={{ top: "80%", left: "50%" }}>
          <div className="modal" style={{ top: "22px" }}>
            Speaker Meta-Human
          </div>
          <div className="pulse"></div>
          <div className="sphere"></div>
        </div>

        <div className="sphere-wrapper" style={{ top: "50%", left: "50%" }}>
          <div className="modal" style={{ top: "22px" }}>
            iMac 27' Intel
          </div>
          <div className="pulse"></div>
          <div className="sphere"></div>
        </div>

        <div className="sphere-wrapper" style={{ top: "73%", left: "16%" }}>
          <div className="modal" style={{ top: "22px" }}>
            Guitare Gibson Dove Experience
          </div>
          <div className="pulse"></div>
          <div className="sphere"></div>
        </div>

        <div className="sphere-wrapper" style={{ top: "73%", left: "78%" }}>
          <div className="modal" style={{ top: "22px" }}>
            Siège Ikea Glubu
          </div>
          <div className="pulse"></div>
          <div className="sphere"></div>
        </div>
      </div>
    </>
  );
}

export default SceneTwo;
