import car from "../assets/picture/use.webp"
import pet from "../assets/picture/tour22.webp"
import mar from "../assets/picture/Bank.webp"


function Project() {
    return (
        <>
            <section className="container mt-5 text-center">
                <h1>My Projects</h1>
                <p>Here are some of my recent projects.</p>
                <div className="row">
                    <div className="col-lg-4">

                        <div className="card shadow">
                            <img className=" card-img-top " src={car} alt="Project"></img>
                            <div className="card-body">
                                <h5 className="card-title">Portfolio Website</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <span className="badge bg-primary me-2">React</span>
                                <span className="badge bg-secondary">Bootstrap</span>
                                <div className="mt-3">
                                    <a href="#" className="btn btn-info me-2">
                                        Live Demo
                                    </a>

                                    <a href="#" className="btn btn-outline-secondary">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        <div className="card shadow">
                            <img className="card-img-top" src={pet} alt="Project"></img>
                            <div className="card-body ">
                                <h5 className="card-title">Bank Management System</h5>
                                <p className="card-text">Responsive portfolio website built using React and Bootstrap.</p>
                                <span className="badge bg-success me-2">React</span>
                                <span className="badge bg-warning text-dark">
                                    JavaScript
                                </span>
                                <div className="mt-3">
                                    <a href="#" className="btn btn-success me-2">
                                        Live Demo
                                    </a>

                                    <a href="#" className="btn btn-outline-secondary">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="card shadow">
                            <img className="card-img-top" src={mar} alt="Project"></img>
                            <div className="card-body">
                                <h5 className="card-title">Tourist Website</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <span className="badge bg-danger me-2">HTML</span>
                                <span className="badge bg-info">CSS</span>
                                <div className="mt-3">
                                    <a href="#" className="btn btn-danger me-2">
                                        Live Demo
                                    </a>

                                    <a href="#" className="btn btn-outline-secondary">
                                        GitHub
                                    </a>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Project