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
          <h1 className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 dark:text-blue-500 bg-clip-text my-4"> Experience</h1>
           <hr className="h-1 bg-blue-900" />

            <div>
                
            <h1 className="flex justify-center"> Full Stack Developer Intern
            </h1>
             
                 <h3 className="flex justify-center">Naresh IT Hyderabad</h3>
            <article className="flex justify-center mb-14">Duration: [March, 2023]  [June, 2023]</article>
           
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 main-div">
            <CardContainer className="inter-var">
              <CardBody className="bg-gradient-to-br relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/images/naresh.png"
                    alt="Naresh IT"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <ul className="details space-y-4 text-gray-300">
              <li>
                In this project, we created an E-commerce store using web
                technologies for both frontend and backend. Users can create
                accounts, log in, log out, and add products to their cart in the
                buy section.
              </li>
              <li>
                <span className="font-bold text-blue-400">Frontend Development:</span> Utilized HTML, CSS, JavaScript, and
                React.js to create a responsive and user-friendly interface.
              </li>
              <li>
                <span className="font-bold text-blue-400">Backend Development:</span> Built server-side logic with Node.js and
                Express.js, and managed data storage with MongoDB.
              </li>
              <li>
                <span className="font-bold text-blue-400">Technologies Used:</span> Git, GitHub, RESTful APIs, JWT, and
                third-party payment gateways.
              </li>
              <li>
                <span className="font-bold text-blue-400">Achievements:</span> Successfully delivered the project within the
                internship period and gained practical experience in both
                frontend and backend development.
              </li>
              <li>
                Developed the project under the guidance of{" "}
                <span className="font-bold text-blue-400">Durga Prasad (Naresh IT)</span>.
              </li>
              <ol className="intern list-disc list-inside space-y-2">
                <li>Deployment of User Log In Module.</li>
                <li>Developing the User Interface.</li>
                <li>Implemented all APIs through the Axios library.</li>
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