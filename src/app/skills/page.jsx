'use client'

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import Project from '../projects/project';
import '../skills/skills.css'
// Define the skills data
const skillsData = [
  { name: 'HTML', icon: "/asset/tech/html.png" },
  { name: 'CSS', icon: "/asset/tech/css.png" },
  { name: 'Tailwind', icon: "/asset/tech/tailwind.png" },
  { name: 'Bootstrap', icon: "/asset/tech/bootstrap.png" },
  { name: 'JavaScript', icon: "/asset/tech/javascript.png" },
  { name: 'TypeScript', icon: "/asset/tech/typescript.png" },
  { name: 'Material UI', icon: "/asset/tech/material.svg" },
  { name: 'React', icon: "/asset/tech/react.png" },
  { name: 'Redux', icon: "/asset/tech/redux.png" },
  { name: 'Node Js', icon: "/asset/tech/nodejs.png" },
  { name: 'Express Js', icon: "/asset/tech/expresss.webp" },
  { name: 'MongoDB', icon: "/asset/tech/mongodb.png" },
  { name: 'Git', icon: "/asset/tech/git.png" },
  { name: 'Github', icon: "/asset/tech/github-2.png" },
  { name: 'Java', icon: "/asset/tech/java.png" },
  { name: 'Vs Code', icon: "/asset/tech/vscode.png" },
  { name: 'Socket', icon: "/asset/tech/socket.png" },
  { name: 'Framer', icon: "/asset/tech/framer.png" },
  // Add more skills as needed
];

export default function Skills() {
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <hr className="h-1 bg-blue-900" />
            <h1 className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 dark:text-blue-500 bg-clip-text my-4">Skills</h1>
            <hr className="h-1 bg-blue-900" />
            <section id="skills" className='container' ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className="skillsRes">
                    <div className="top-image">
                        <CardContainer className="inter-var top-image">
                            <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img src="/images/logo.png" alt="Skills Logo"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                   
                    <div className='hex-grid mt-10'>
                        {skillsData.map((skill, index) => (
                            <div key={index} className="hexagon">
                                <CardContainer className="inter-var">
                                    <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 border">
                                        <CardItem
                                            translateZ="100"
                                            className="w-full h-full flex flex-col items-center justify-center"
                                        >
                                            <img 
                                                src={skill.icon} 
                                                alt={`${skill.name} icon`}
                                                className="w-16 h-16 object-contain mb-2"
                                            />
                                            <span className="text-sm font-medium text-center dark:text-white">
                                                {skill.name}
                                            </span>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <Project />
            </section>
        </div>
    );
}