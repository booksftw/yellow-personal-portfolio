import "./App.css";
import heroImageText from "./assets/Hero-text.png";
import heroElipse from "./assets/Ellipse-1.png";
import meBlackAndWhiteImage from "./assets/me-blackandwhite.png";

function App() {
  return (
    <>
      <div className="hero-section">
        <img className="hero-image-text" src={heroImageText} alt="" />
        <img className="hero-elipse" src={heroElipse} alt="" />
        <p className="hero-elipse-text">
          Years of experience working with CMS and development systems merging
          into design
        </p>
        <p className="hero-section-small-text">
          "Design is the silent ambassador of your vision."
        </p>
      </div>

      <div className="outter-about-me-container">
        <div className="me-text">
          <h2>
            “I’m trying to learn something new everyday and challenge myself to
            be better.”
          </h2>
        </div>
        <div id="about-me-invis-div"></div>
        <div className="inner-about-me-section d-flex">
          <div id="about-me-intro-container">
            <h3 className="about-me-intro-header">A short introduction</h3>
            <p className="about-me-description">
              My fascination with technology, especially computers, traces back
              to my childhood. I spent countless hours exploring and learning on
              my own, and it seemed almost inevitable that I would pursue a
              career that revolves around computers. UI/UX design has captured
              my imagination, and even though I’m still a student, I am
              committed to learning something new every day, constantly honing
              my skills and expanding my knowledge in this ever-evolving field.
            </p>
          </div>

          <div>
            <img className="me-about-image" src={meBlackAndWhiteImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
