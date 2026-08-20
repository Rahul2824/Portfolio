function Contact() {
    return (
        <>
        <div className="fullbody">

            <div className="contact">
            <div className="contact-div-1">
                 <h3>Get in touch</h3>
                <h1>Contact.</h1>
                <div className="button-2">
                <button onClick={()=>window.location.href="mailto:rahulpatil121734@outlook.com"} >EMAIL</button>
                <button onClick={()=>window.location.href="https://www.linkedin.com/in/rahul-patil-4a29b932b/"}>LINKDIN</button>
                <button onClick={()=>window.location.href="https://github.com/Rahul2824?tab=overview&from=2026-08-01&to=2026-08-20"}>GITHUB</button>
                </div>
            </div>
            <div className="contact-div-2">
<img src="https://mern-rajesh-portfolio.web.app/assets/contact.jpeg" />      
      </div>
            </div>
            </div>
        </>
    )
}
export default Contact;