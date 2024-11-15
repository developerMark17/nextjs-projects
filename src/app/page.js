'use client'



import { useState,useRef,Suspense ,useEffect} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import '../app/style.css';
import About from './About/about';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { SparklesCore } from '@/components/ui/sparkles';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { BackgroundLines } from '@/components/ui/background-lines';
import Link from 'next/link';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Html, useProgress,Preload } from "@react-three/drei"


function Computers({isMobile}){
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'   />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 :1.5}
        position={isMobile ? [1, 0, 0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export function Loader(){
  const {progress} = useProgress();

  return(
          <Html>
              <span className="canvas-load"></span>
              <p
              style={{fontSize:14,
                  color: 'white',
                  fontWeight:300,
                  marginTop:40

          
              }}>{progress.toFixed(2)}%</p>
          </Html>        
  )
}

export default function Home() {
  const ref = useRef(null);
    const isInView = useInView(ref);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  const firstLineWords = [
    {
      text: "Hey",
      className: "text-blue-500 text-white"
    },
    {
      text: "I'am",
      className: "text-blue-500 text-white"
    },
    {
      text: "Mark",
      className: "text-blue-500 text-white"
    },
    {
      text: "Iam ",
      className: "text-blue-500 text-white"
    },
    {
      text: "a.",
      className: "text-blue-500 text-white"
    },
  ];

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Web Developer.",
      "React Developer.",
      "Angular Developer.",
    ],
    loop: true,
    delaySpeed: 2000,
  });



  return (
<main className="flex flex-col items-center justify-between h-auto ">
 <div className=" w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md h-screen" ref={ref} style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
 <div className="flex flex-col items-center justify-center w-full h-full bg-cover bg-center bg-no-repeat"  
      style={{ backgroundImage: "url('/images/bg-3.jpg')" }} id='home'>
     
 <Canvas 
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
     style={{height:"300px"}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
      <TypewriterEffect words={firstLineWords} />
          <div className="text-blue-500 dark:text-blue-500 text-xl md:text-3xl lg:text-5xl font-bold">
            {text}
            <span className="inline-block bg-blue-500 h-5 md:h-10 w-[4px] ml-1 animate-blink"></span>
          </div>
   
   </div>
   

     
          
        </div>
               
   <section>
    <About/>
   </section>
    </main>
  );
}