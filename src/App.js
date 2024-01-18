import "./App.css";
import heroImageText from "./assets/Hero-text.png";
import heroElipse from "./assets/Ellipse-1.png";
import meBlackAndWhiteImage from "./assets/me-blackandwhite.png";
import SkillsFrame from './assets/skills/skills Frame 8.png'
import SkillsPoints from './assets/skills/skills points Frame 9.png'
import Project1Img from './assets/project1img.png'
import Project2Img from './assets/project2img.png'
import ALittileAboutMe from './assets/a-little-about-me-image.png';
import IGicon from './assets/socials/InstagramLogo.png'
import FBicon from './assets/socials/FacebookLogo.png'
import BehanceIcon from './assets/socials/Behance.png'
import RadialGraphic from './assets/RadialGraphic.png'

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

      <div id="skills-container">
        <h2>What about my skills</h2>
        <div className="skills-and-points-wrapper">
          <img src={SkillsFrame} alt="" />
          <img src={SkillsPoints} alt="" />
        </div>
      </div>

      <div id="projects-container">
        <div>
          <img src={Project1Img} alt="" />
          <p>In my entrepreneurial spirit, I’ve embarked on a journey of running my own Shopify e-commerce stores, where I sell a variety of jewelry catering to different niche markets.
          </p>
        </div>
        <div>
          <img src={Project2Img} alt="" />
          <p>I’m excited to share that my children’s jewelry store is currently up and running.

            I’m eagerly looking forward to opening a soccer-themed store soon, with many more ideas brewing in the pipeline!</p>
        </div>
      </div>

      <div id="a-little-about-me-container">
        <div className="a-little-about-me-text">
          <h2>A little more about me...</h2>
          <p>I love creating designs that are both beautiful and easy to use, ensuring everyone has a great experience.

            I believe in creating designs that are not just visually appealing, but also user-friendly, ensuring a delightful experience for every user.</p>
        </div>
        <div>
          <img src={ALittileAboutMe} alt="" />
          <p className="a-little-about-me-caption">Ai Generated Image</p>
        </div>
      </div>
      <div id="contact-container">
        <h1>Contact</h1>
        <div className="contact-img-container">
          <img className="contact-radial-graphic" src={RadialGraphic} alt="" />
        </div>
        <h3>Interested in working together?</h3>
        <h3>Get started</h3>
        <h3>myemail@business.com</h3>
        <h3>250-000-0000</h3>
        <div className="contact-socials-container">
          <a href="#">
            <img src={IGicon} alt="" />
          </a>
          <a href="#">
            <img className="contact-fb-icon" src={FBicon} alt="" />
          </a>
          <a href="#">
            <img className="contact-behance-icon" src={BehanceIcon} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
