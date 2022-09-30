
// Importing styles 
import './../styles/Component Styles/Projects.css';

// Importing components
import Project from './Project';

function Projects(){
    return(
        <div className="_projectsArea">
            <section className="timeline_area section_padding_130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                            {/* <!-- Section Heading--> */}
                            <div className="section_heading text-center">
                                <h4>My Projects</h4>
                                <p>A brief stories of my projects</p>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Timeline Area--> */}
                            <div className="apland-timeline-area">

                                {/* Adding a year */}
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" >
                                        <p>Near Future</p>
                                    </div>
                                    <div className="row">
                                        {/* Adding Project */}
                                        <Project />
                                        <Project />
                                        <Project />
                                    </div>
                                </div>

                                {/* Adding a year */}
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" >
                                        <p>Near Future</p>
                                    </div>
                                    <div className="row">
                                        {/* Adding Project */}
                                        <Project />
                                        <Project />
                                        
                                    </div>
                                </div>

                                {/* Adding a year */}
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" >
                                        <p>Near Future</p>
                                    </div>
                                    <div className="row">
                                        {/* Adding Project */}
                                        <Project />
                                        <Project />
                                        <Project />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;