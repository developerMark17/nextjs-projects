"use client";
import '../experience/experience.css'
import '../experience/experienceResponsiveness.css'
import Skills from '../skills/page';
import { CardContainer,CardBody,CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Experience(){
  const ref = useRef(null);
    const isInView = useInView(ref);
    return(
        <div id="experience" className="container-fluid" >
           <section className="main-section" ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
          <hr className="h-1 bg-blue-900" />
           <h1 className="flex justify-center text-lg sm:text-xl md:text-2xl lg:text-6xl">Experience</h1>
           <hr className="h-1 bg-blue-900" />

            <div>
                
            <h1 className="flex justify-center"> Full Stack Developer Intern
            </h1>
             
                 <h3 className="flex justify-center">Naresh IT Hyderabad</h3>
            <article className="flex justify-center mb-14">Duration: [March, 2023]  [June, 2023]</article>
           
                <div className="d-flex justify-content-between main-div">
                <CardContainer className="inter-var">
      <CardBody className="bg-black-50 relative card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
       
        <CardItem translateZ="100" className="w-full mt-4">
         <img src="/images/naresh.png" alt="" 
        //   height="1000"
        //   width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
       
         
        </div>
      </CardBody>
    </CardContainer>
            <ul className="details">
                
                <li>In this Project We Have Created an E-commerce Store
 Using Web Technologies Both Frontend And Backend,
 Where User Can Create Account, Log in And Log Out, User
 Can Add The Products in Cart In Buy Section. </li>
 <li><span className="fw-bold">Frontend Development:</span> Utilized HTML, CSS, JavaScript, and React.js to create a responsive and user-friendly interface.</li>
 <li><span className="fw-bold">Backend Development:</span> Built server-side logic with Node.js and Express.js, and managed data storage with MongoDB.</li>
 <li>
    <span  className="fw-bold">Technologies Used: </span> Git, GitHub, RESTful APIs, JWT, third-party payment gateways</li>
 <li><span className="fw-bold">Achievements: </span> 
Successfully delivered the project within the internship period.
Gained practical experience in both frontend and backend development.</li>
<li>Developed the project under the guidance of <span className="fw-bold">Durga Prasad Naresh IT</span></li>
                <ol className="intern">
                    <li>

                     Deployment Of User Log In Module.
                    </li>
                    <li> Developing The User Interface. </li>
                    <li> Implemented All API Through Axios Library. </li>
                     </ol>
               
                
            </ul>
            </div>
            </div>
           </section>


           <section className="skills">
            <Skills/>
          </section>
          
        </div>
    )
}