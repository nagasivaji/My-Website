
// Importing styles
import './../styles/Component Styles/Resume.css';

// importing Component
import ResumeTimeLine from './ResumeTimeLine';



function Resume(){
   return (
      <div className="_resumeArea">
         <section className="experience pt-100 pb-100" id="experience">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 mx-auto text-center">
                     <div className="section-title">
                        <h4>My Journey</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                     <div className="col-xl-12">
                        <ul className="timeline-list">
                           
                           {/* TimeLines */}
                           <ResumeTimeLine 
                              data = {
                                 {
                                    time: "July 2022 - ",
                                    designation : "Jr Software Engineer at Persistent Systems",
                                    text: "We gather your business and products information. We then determine the direction of the project and understand your goals and we combine your ideas with ours for an amazing website."
                                 }
                              }
                           />

                           {/* TimeLines */}
                           <ResumeTimeLine 
                              data = {
                                 {
                                    time: "Feb 2021 - June 2022",
                                    designation : "Intern at Persistent Systems",
                                    text: "We gather your business and products information. We then determine the direction of the project and understand your goals and we combine your ideas with ours for an amazing website."
                                 }
                              }
                           />
                           

                           {/* TimeLines */}
                           <ResumeTimeLine 
                              data = {
                                 {
                                    time: "Mar 2020 - Sep 2021",
                                    designation : "Projects Trainer at Vishnu College BVRM",
                                    text: "We gather your business and products information. We then determine the direction of the project and understand your goals and we combine your ideas with ours for an amazing website."
                                 }
                              }
                           />
                        </ul>
                     </div>
                  </div>
            </div>
         </section>
      </div>
   );
}

export default Resume;