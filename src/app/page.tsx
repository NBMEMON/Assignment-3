import Image from "next/image";
import HeaderFunc from "./components/header";
import MyPic from "./images/myimage.jpg";
import pr1 from "./images/project 2.jpg";
import pr2 from "./images/project 1.jpg";
import pr3 from "./images/project 3.jpg";
import pr4 from "./images/project 4.jpg";

export default function Home() {
  return (
    <div>
      <HeaderFunc />
      <div className="intro-div">
        <div className="left-section">
          <h2>I’m Naeeb Sohail</h2>
          <h4>Front-End Developer</h4>
          <p>
            Hi! I’m a front-end developer who loves creating responsive,
            user-friendly interfaces that look great and work seamlessly across
            devices.
          </p>
          <button className="btn">Click To See My Projects</button>
        </div>
        <div className="right-section">
          <Image
            src={MyPic}
            alt="My Picture"
            className="my-pic"
          />
          <div className="intro-content">
            <h4 id="about-me">About Me</h4>
            <p>
              I'm a dedicated <em>front-end developer</em> with a passion for
              building clean, <em>responsive</em>, and <em>user-friendly</em>{" "}
              websites. With a strong foundation in <em>HTML</em>, <em>CSS</em>,
              and <em>JavaScript</em>, I strive to create seamless and engaging
              interfaces that work beautifully across all devices. I’m
              constantly learning and adapting to new technologies to bring
              fresh ideas and <em>functionality</em> to every project. My goal
              is to bridge <em>design</em> with <em>functionality</em>, making
              sure that every user has a positive and intuitive experience.
            </p>
          </div>
        </div>
      </div>
      <div className="Services-Skills-div">
        <div className="services-div">
          <h4 id="services">Services</h4>
          <div className="skillset-main-div">
            <div className="skillset">
              <strong className="skillset-heading">Graphic Designing</strong>
              <p className="skillset-p">
                <strong>Description:</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                <strong>Key Features</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="skillset">
              <strong className="skillset-heading">Front-End Dev</strong>
              <p className="skillset-p">
                <strong>Description:</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                <strong>Key Features</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="skillset">
              <strong className="skillset-heading">Amazon VA</strong>
              <p className="skillset-p">
                <strong>Description:</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                <strong>Key Features</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="skills-div">
          <h4 id="skill">Skills</h4>
          <div className="skills-name">
            <strong className="skill-heading">Programming</strong>
            <h5>Html:</h5>
            <div className="progress-bar">
              <div id="progress-bar1"></div>85%
            </div>
            <h5>Css:</h5>
            <div className="progress-bar">
              <div id="progress-bar2"></div>85%
            </div>
            <h5>Typescript:</h5>
            <div className="progress-bar">
              <div id="progress-bar3"></div>65%
            </div>
            <h5>Next.js:</h5>
            <div className="progress-bar">
              <div id="progress-bar4"></div>65%
            </div>
            <h5>Python:</h5>
            <div className="progress-bar">
              <div id="progress-bar5"></div>65%
            </div>
          </div>
          <div className="skills-name">
            <strong className="skill-heading">Designing</strong>
            <h5>Photoshop:</h5>
            <div className="progress-bar">
              <div id="progress-bar6"></div>85%
            </div>
            <h5>Illustrator:</h5>
            <div className="progress-bar">
              <div id="progress-bar7"></div>85%
            </div>
            <h5>Canva:</h5>
            <div className="progress-bar">
              <div id="progress-bar8"></div>65%
            </div>
            <h5>Adobe XD:</h5>
            <div className="progress-bar">
              <div id="progress-bar9"></div>60%
            </div>
          </div>
          <div className="skills-name">
            <strong className="skill-heading">E-commerce</strong>
            <h5>Shopify:</h5>
            <div className="progress-bar">
              <div id="progress-bar11"></div>85%
            </div>
            <h5>WooCommerce:</h5>
            <div className="progress-bar">
              <div id="progress-bar12"></div>60%
            </div>
            <h5>Amazon:</h5>
            <div className="progress-bar">
              <div id="progress-bar13"></div>60%
            </div>
          </div>
        </div>
      </div>
      <div className="project-div">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="each-project">
            <h3>Tic Tac Toe</h3>
            <Image src={pr1} className="project-pic" alt="" />
          </div>
          <div className="each-project">
            <h3>Resume Builder</h3>
            <Image src={pr2} className="project-pic" alt="" />
          </div>
          <div className="each-project">
            <h3>Blogging Website</h3>
            <Image src={pr3} className="project-pic" alt="" />
          </div>
          <div className="each-project">
            <h3>E-commerce Website</h3>
            <Image src={pr4} className="project-pic" alt="" />
          </div>
        </div>
      </div>
      <div className="contact-form-div">
        <div className="contact-form-container">
          <h2 id="contactus">Contact Us</h2>
          <form className="contact-form" action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
