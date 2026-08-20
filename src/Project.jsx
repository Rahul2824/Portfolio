
function Project() {
    return(
        <>
        <div className="fullbody">
        <div className="Project-info">
        <h1> My work</h1>
        <h2>Projects.</h2> 
        <h5>Following projects showcases my skills and experience through real-world 
         examples of my work. Each project is briefly described with links to code 
          repositories and live demos in it. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.</h5>
            </div>
            
            <div className="Project-box">
            <div className="Project-box-1">
                <div className="Project-photo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHK9GfkGaUh1__GL9TB35fjOe6PL9Tl-N1RFdyCqCN6Q&s=10" alt="" /> </div>
                <div className="Project-box-1-note">
                <h2>Digital Alchol Shopkipper</h2>
                <h3>Digital Alcohol Shopkeeper is a web-based management system for shopkeepers. It helps manage customers, alcohol brands, purchase records, sales, and stock. The system stores customer details and purchase history with date and time. It also provides a countdown for the next allowed purchase.</h3>
               </div>
               <button className="button" onClick={()=> window.location.href ="https://alchol-shopkipper.onrender.com"}>open</button>
            </div>
            <div className="Project-box-1">
                <div className="Project-photo">
                    <img src="https://repository-images.githubusercontent.com/741466477/97646b96-7850-47eb-afbc-c10bfc3eed25" alt="" /> </div>
                <div className="Project-box-1-note">
                <h2>Portfolio</h2>
                <h3>My portfolio features a collection of projects that showcase my skills in developing modern, user-friendly, and efficient web applications. Each project reflects my commitment to clean design, practical functionality, and delivering reliable web solutions while continuously improving my development skills.</h3>
               </div>
                              <button className="button" onClick={()=> window.location.href = "https://portfolio-3e43.onrender.com/"}>open</button>

            </div>
            </div>
        </div>
        
      
        
        </>
    )
}
export default Project ;
