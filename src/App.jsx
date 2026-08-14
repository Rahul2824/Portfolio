import { useState } from 'react'
import './App.css'
import Experience from './Experience';
import Project from './Project';
function App() {
  return (
    <div>
      <div className='fullbody'>
      <div className="Nav">
        <h1>Mern Stack Developer</h1>
        <div className="Option">
          <h3>About</h3>
          <h3>Work</h3>
          <h3>Contact</h3></div>
      </div>
      <div className='name'>
        <h1 style={{ fontSize: "80px", color: "white",margin:"0px"}}>Hi, I'm <span style={{ color: "#7108c2" }}>Rahul</span>  </h1>
        <h2 style={{ fontSize: "30px",padding:"0px", color: "white",margin:"0px" }}>I develop full stack wep Application, using</h2>
        <h2 style={{ fontSize: "13mm",margin:"0px",padding:"0px", }}> <span className="mern">MERN </span><span className="stack">Stack</span></h2>
      </div>
      <div className='intro'>
        <h1>INTRODUCTION</h1>
        <h1 style={{ fontSize:"60px", padding: "0px", margin: "0px",color:"white" }}>Overview.</h1>
        <h2 style={{fontSize:"20px"}}>I'm a skilled software developer with experience in JavaScript, and expertise in frameworks <br />like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely  <br />with clients to create efficient, scalable, and user-friendly solutions that solve real-world  <br />problems. Let's work together to bring your ideas to life!
        </h2>
      </div>
      <br /><br />
      <br /><br />
      <div className='square'>
        <div className='card'>

          <img
            src="https://mern-rajesh-portfolio.web.app/assets/web.png"
            alt="web"
          /><h2 className='name' >
            Web <br />
            Developer
          </h2>

        </div>
        <div className='card'>

          <img
            src="https://mern-rajesh-portfolio.web.app/assets/frontend.png"
            alt="web"
          /><h2 className='name'>
            Frontend <br />
            Developer
          </h2>

        </div>
        <div className='card'>

          <img
            src="https://mern-rajesh-portfolio.web.app/assets/backend.png"
            alt="web"
          /><h2 className='name'>

            Developer
          </h2>

        </div>
        <div className='card'>

          <img
            src="https://mern-rajesh-portfolio.web.app/assets/fullStack.png"
            alt="web"
          /><h2 className='name'>
            Full Stack <br />
            Developers
          </h2>

        </div>
      </div>

      <h1 className='Skills'>Skills</h1>
      <div className='skill-logo1'>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/html.png" alt="web" height="100px" width="100px" />
          <h2>HTML</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/css.png" alt="web" height="100px" width="100px" />
          <h2>CSS</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/javascript.png" alt="web" />
          <h2>JAVA-SCRIPT</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/tailwind.png" alt="web" />
          <h2>TAILWIND</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/reactjs.png" alt="web" />
          <h2>REACT</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/nodejs.png" alt="web" />
          <h2>NODE.JS</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/expressjs.png" alt="web" />
          <h2>EXPRESS.JS</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/mongodb.png" alt="web" />
          <h2>MONGODB</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/mongoose.png" alt="web" />
          <h2>MONGOOSE</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tech/git.png" alt="web" />
          <h2>git</h2></div>
        <div className='skills-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/github.png" alt="web" />
          <h2>github</h2></div>
      </div>
      <br /><br /><br /> <br /><br />
      <span className='name2'>Tools and Software</span>
      <br /><br /><br />

      <div className='tools'>
        <div className='tools-logo1'>
        <div className='tools-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tools/vscode.png" alt="web" />
          <h2>VS Code</h2></div>
        <div className='tools-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tools/ChatGPT.png" alt="web" />
          <h2>ChatGPT</h2></div>
        <div className='tools-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tools/chrome.png" alt="web" />
          <h2>Chrome</h2></div>
        <div className='tools-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tools/Impress.png" alt="web" />
          <h2>Impress</h2></div>
        <div className='tools-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tools/mongodbCompass.png" alt="web" />
          <h2>Mongodb <br /> Compass</h2></div>
        <div className='tools-logo'>
          <img src="https://mern-rajesh-portfolio.web.app/assets/tools/postman.png" alt="web" />
          <h2>Postman</h2></div></div>
      </div> <br />
      
      </div>
      <Experience/>
      <Project/>
    </div>

  )
}

export default App;

