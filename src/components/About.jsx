import pic from "../assets/picture/About.webp"
function About(){
    return(
        <>
          <section className="container text-center py-5 bg-light ">
            <h1 className="mb-2">About me</h1>
            <h6 className="text-secondary">Learn more about my background and experience.</h6>
            <div className="row">
              <div className="col-lg-5 mt-5 mb-lg-0 ">
                <img className="img-fluid rounded shadow" style={{width:"500px",height:"530px"}}
                  src={pic}/>
                  
              </div>
               <div className=" col-lg-7 ps-lg-5 ">
                <div className="row align-item-center mt-5">
                  <h1 className="fw-bold mb-3">FullStack web developer</h1>
                  <p className="text-muted mb-4">Passionate developer with experience in building responsive websites and web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js and MySQL.</p>
                  <div className="col-md-6 ps-0">
                    <p><strong>Name:</strong> Vishal Ahrahari</p>
                    <p><strong>Email:</strong> tech@gmail.com</p>
                    <p><strong>Phone:</strong> +1234567890</p>
                    <button className="btn btn-info text-white mt-3"> Downlode resume</button>
                  </div>
                  <div className="col-md-6">
                     <p><strong>Experience:</strong> Fresser</p>
                    <p><strong>Location:</strong> Lucknow</p>
                    <p><strong>Freelance:</strong> in future</p>
                  </div>
                </div>
                  


                
              </div>
            </div>
            

          </section>
        </>
    )
}
export default About