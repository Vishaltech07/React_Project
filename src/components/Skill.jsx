function Skill() {
    return (
        <>
            <section className="container my-5 ">
                <h1><b>My Skills</b></h1>
                <p>Technologies and tools I work with.</p>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h2 className="text-center">Frontend Skill</h2>
                        <h6>React</h6>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-success" style={{ width: "25%" }}>25%</div>
                        </div>
                        <h6>JavaScript</h6>
                        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-info" style={{ width: "50%" }}>50%</div>
                        </div>
                        <h6>Bootstrap</h6>
                        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-warning" style={{ width: "75%" }}>75%</div>
                        </div>
                        <h6>HTML</h6>
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-danger" style={{ width: "100%" }}>100%</div>
                            </div>
                   </div>
                    <div classname="col-lg-6">
                        <h2 className="text-center">Backend Skill</h2>
                        <h6>Node.js</h6>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-success" style={{ width: "25%" }}>25%</div>
                        </div>
                        <h6>Express.js</h6>
                        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-info" style={{ width: "50%" }}>50%</div>
                        </div>
                        <h6>API</h6>
                        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-warning" style={{ width: "75%" }}>75%</div>
                        </div>
                        <h6>SQL</h6>
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-danger" style={{ width: "100%" }}>100%</div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Skill