import pro from "../assets/picture/vishal.jpeg"
function Hero(){
    return(
        <>
          <section className="container">
            <div className="row align-items-center min-vh-100">
                <div className="col-lg-6 ">
                    <h3 className="text-info fw-bold mb-4">Hello I'am--</h3>
                    <h1 className="display-1 fw-bold mb-3">Vishal Agrahari</h1>
                    <h3  className="text-secondary mb-4">Full stack web developer</h3>
                    <p className="text-muted fs-5 mb-4">I design and develop modern, responsive and user-friendly web applications using the latest web technologies.</p>
                    
                </div>
                <div className="col-lg-6 text-center">
                    <img className="img-fluid rounded-circle shadow"
                    src={pro} style={{ width: "500px",height:"500px"}}></img>
                </div>
            </div>
          </section>
        </>
    )
}
export default Hero