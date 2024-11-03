'use client'
import { useState, useEffect } from 'react';

import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import Project from '../projects/project';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import BallCanvas from '@/components/Ball/ball';
import { technologies } from '../../../constants';
import { Alert } from '@/components/ui/alert';

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
            <h2 className="mx-3 flex justify-center text-lg sm:text-xl md:text-2xl lg:text-6xl">Skills</h2>
            <hr className="h-1 bg-blue-900" />
            <section id="skills" className='container' ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className="skillsRes">
                    <div className="top-image">
                        <CardContainer className="inter-var top-image" ref={ref} style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                            <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img src="/images/logo.png" alt=""
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
               
                    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
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