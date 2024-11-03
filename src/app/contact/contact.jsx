import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


// Stars component for background
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// StarsCanvas component as a background layer
const StarsCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

// 3D Earth component
const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Main Contact component
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60igyvp",
        "template_x0arc9d",
        e.target,
        "nFpVEp87LmSPZPs1d"
      )
      .then(
        (result) => {
          setFormData({ email: "", message: "" }); // Clear the form after submission
          showAnimatedAlert("Message sent successfully!");
        },
        (error) => {
          showAnimatedAlert("Failed to send message, please try again.");
        }
      );
  };

  const showAnimatedAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col items-center"
      id="contact"
      ref={ref}
    >
      <hr className="h-1 w-full bg-blue-900" />
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-6xl text-center mt-4">
        Contact
      </h1>
      <hr className="h-1 w-full bg-blue-900 mb-8" />

      <StarsCanvas />

      {/* Alert message */}
      {showAlert && (
        <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Message Sent Successfully!
        </AlertDescription>
      </Alert>
      )}

      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="w-full sm:w-[320px] md:w-[380px] lg:w-[460px]] mx-auto p-4 shadow-input bg-black border border-blue-300 rounded-2xl">
            <h2 className="font-bold text-xl text-white">Contact Us</h2>
            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input id="email" placeholder="Enter your email" type="email" name="user_email"
                  value={formData.email}
                  onChange={handleChange} required/>
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="message" className="text-white " name="message">
                  Message
                </Label>
                <Input id="message" placeholder="Message" type="text" name='message' value={formData.message}
                  onChange={handleChange} required />
              </LabelInputContainer>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>

          <div className="h-[460px] w-[360px] max-w-lg">
            <Canvas
              shadows
              dpr={[1, 2]}
              gl={{ preserveDrawingBuffer: true }}
              camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
            >
              <Suspense>
                <OrbitControls
                  autoRotate
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <Preload all />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

// BottomGradient component for button styling
const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

// LabelInputContainer component for form styling
const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);
