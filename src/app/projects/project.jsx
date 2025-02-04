import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CardContainer, CardItem, CardBody } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Contact from "../contact/contact";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="overflow">
      <hr className="h-1 bg-gradient-to-r from-blue-900 to-purple-900" />
      <h1 className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 py-6">
        Projects
      </h1>
      <hr className="h-1 bg-gradient-to-r from-blue-900 to-purple-900" />

      <div
        className="resp flex flex-wrap gap-8 justify-center p-8"
        id="project"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {/* E-Commerce Project Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-black to-gray-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-800 w-full sm:w-[30rem] h-auto rounded-xl ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              E-Commerce
            </CardItem>
            <CardItem className="w-full mt-4">
              <video
                src="/videos/webApp.mp4"
                controls
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] rounded-xl shadow-lg"
              ></video>
            </CardItem>
            <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
              <Card className="mt-6 bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">E-Commerce</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p >
                    A shopping application that allows customers to browse, filter, sort products, and create a custom shopping cart.
                  </p>
                  <p>
                    <span className="font-bold">Languages:</span> JavaScript, TypeScript
                  </p>
                  <p>
                    <span className="font-bold">Libraries:</span> React, Bootstrap, MUI, Axios, Formik, Routing
                  </p>
                  <p>
                    <span className="font-bold">Url:</span>
                  </p>
                  <Link href="https://ecommercereactmark.vercel.app/">Click Here</Link>
                  <p>Google Sign-in authentication</p>
                  <p>Chat support using Socket.io</p>
                  <p>Formik for validation and Captcha</p>
                </CardContent>
              </Card>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Video Player Project Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-black to-gray-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-800 w-full sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Video Player
            </CardItem>
            <CardItem className="w-full mt-4">
              <video
                src="/videos/Video-App.mp4"
                controls
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] rounded-xl shadow-lg"
              ></video>
            </CardItem>
            <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
              <Card className="mt-6 bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Video Player</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
  <p>
    A video application that allows users to watch videos with an admin dashboard for managing content.
  </p>
  <p>
    <span className="font-bold">Languages:</span> JavaScript, TypeScript
  </p>
  <p>
    <span className="font-bold">Libraries:</span> Next.js, Tailwind CSS, Axios, Formik, Routing
  </p>
  <p>
    <span className="font-bold">Backend:</span> Node.js
  </p>
  <p>
    <span className="font-bold">Database:</span> MongoDB
  </p>
  <p>Authentication handling with NextAuth.js</p>
  <p>Admin dashboard for CRUD operations</p>
  <p>Formik for validation and Captcha</p>
  <p>User can log in with GitHub and Google</p>
  <p>
    <span className="font-bold">Version Control:</span> Git, GitHub
  </p>
</CardContent>
              </Card>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-black to-gray-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-800 w-full sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
             3d Model Website
            </CardItem>
            <CardItem className="w-full mt-4">
              <video
                src="/videos/imfanim.mp4"
                controls
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] rounded-xl shadow-lg"
              ></video>
            </CardItem>
            <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
              <Card className="mt-6 bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Video Player</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    A 3d Model application which contains hovering effect using with React Three js, React Fiber, React Spring and Framer Motion.
                  </p>
                  <p>
                    <span className="font-bold">Languages:</span> JavaScript, TypeScript.
                  </p>
                  <p>
                    <span className="font-bold">Libraries:</span> React, Bootstrap, React Three js, React Fiber, React Spring and Framer Motion.
                  </p>
                </CardContent>
              </Card>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-black to-gray-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/20 border border-gray-800 w-full sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
             To Do App
            </CardItem>
            <CardItem className="w-full mt-4">
              <video
                src="/videos/To-do-app.mp4"
                controls
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] rounded-xl shadow-lg"
              ></video>
            </CardItem>
            <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
              <Card className="mt-6 bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">ToDo App</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    A ToDo task application that allows users to to save its daily task.
                  </p>
                  <p>
                    <span className="font-bold">Languages:</span> JavaScript
                  </p>
                  <p>
                    <span className="font-bold">Libraries and FrameWorks:</span> Nextjs, Tailwind, React Toastify, Axios, Formik, Shadcn Ui
                  </p>
                  <p>Authentication handling with nextauth.js</p>
                  <p>Formik for validation</p>
                </CardContent>
              </Card>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Contact Section */}
      <section>
          <Contact />
      </section>
    </div>
  );
}