import { CardContainer, CardItem, CardBody } from "@/components/ui/3d-card";
import Contact from "../contact/contact";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="overflow">
      <hr className="h-1 bg-blue-900" />
      <h1 className="flex justify-center text-lg sm:text-xl md:text-2xl lg:text-6xl">Project</h1>
      <hr className="h-1 bg-blue-900" />
      <div className="resp flex flex-wrap gap-5 justify-center" id="project" ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>

        <CardContainer className="inter-var border rounded">
          <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl font-bold dark:text-white"
            >
                E-Commerce
            </CardItem>

            <CardItem
     
              className="w-full mt-4"
            >
              <video
                src="/videos/webApp.mp4"
                controls
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] rounded-xl"
              ></video>
            </CardItem>

            <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
              <div className="flex flex-col mt-10">
                <div className="">
                  <h5 className="card-title text-lg sm:text-xl">E-Commerce</h5>
                  <p className="card-text text-sm sm:text-base">
                    Understanding how to design a shopping online application that allows
                    customers to browse, filter, sort products and create a custom
                    shopping cart.
                  </p>
                  <p className="card-text text-sm sm:text-base">
                    <span className="font-bold">Languages used:</span> JavaScript and TypeScript.
                  </p>
                  <p className="card-text text-sm sm:text-base">
                    <span className="font-bold">Libraries used:</span> React with Bootstrap, MUI, Axios, Formik & Routing.
                  </p>
                  <p className="card-text text-sm sm:text-base">Handling the Google Sign-in auth.</p>
                  <p className="card-text text-sm sm:text-base">Implementation of Chat support using Socket Io.</p>
                  <p className="card-text text-sm sm:text-base">Formik Library for Validation and Captcha.</p>
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var border rounded">
          <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl font-bold dark:text-white"
            >
              Video Player
            </CardItem>

            <CardItem
          
              className="w-full mt-4"
            >
              <video
                src="/videos/videoEditor.mp4"
                controls
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] rounded-xl"
              ></video>
            </CardItem>

            <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
              <div className="flex flex-col mt-10">
                <div className="">
                  <h5 className="card-title text-lg sm:text-xl">Video Player</h5>
                  <p className="card-text text-sm sm:text-base">
                    Understanding how to design a Video App that allows
                    users to watch the videos.
                  </p>
                  <p className="card-text text-sm sm:text-base">
                    <span className="font-bold">Languages used:</span> JavaScript and TypeScript.
                  </p>
                  <p className="card-text text-sm sm:text-base">
                    <span className="font-bold">Libraries used:</span> React with Bootstrap, MUI, Axios, Formik & Routing.
                  </p>
                  <p className="card-text text-sm sm:text-base">Handling the Authentication.</p>
                  <p className="card-text text-sm sm:text-base">Implementation of the Admin Dashboard where admin can create, update and delete the videos.</p>
                  <p className="card-text text-sm sm:text-base">Formik Library for Validation and Captcha.</p>
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <section>
        <Contact/>
      </section>
    </div>
  );
}
