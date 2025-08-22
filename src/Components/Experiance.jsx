
import { Canvas } from '@react-three/fiber'

import { Base } from './model-code/Base'
import { Environment, OrbitControls } from '@react-three/drei'
import { Cameone } from './model-code/cam/Camone'
import { Camethree } from './model-code/cam/Camethree'
import { CamTwo } from './model-code/cam/Cametwo'
import { useControls } from 'leva'
import { Helicethree } from './model-code/helices/Helicesthree'
import { Helicetwo } from './model-code/helices/Helicestwo'
import { Heliceone } from './model-code/helices/HelicesOne'
import { Motorthree } from './model-code/motor/Motorthree'
import { Motortwo } from './model-code/motor/Motortwo'
import { Motorone } from './model-code/motor/Motorone'

const Experiance = () => {

  const { activeCamera } = useControls("Cameras", {
    activeCamera: {
      value: "CamOne",
      options: ["CamOne", "CamTwo", "CamThree", "None"],
    },
  })


  const { activeMotors } = useControls("Motors", {
    activeMotors: {
      value: "MotorOne",
      options: ["MotorOne", "MotorTwo", "MotorThree", "None"],
    },
  })

 
  const { activeHelices } = useControls("Helices", {
    activeHelices: {
      value: "HelicesOne",
      options: ["HelicesOne", "HelicesTwo", "HelicesThree", "None"],
    },
  })

  
  const { wingColor } = useControls("Colors", {
    wingColor: "#FFD93D", 
  })
  const { MotorColor } = useControls("Colors", {
    MotorColor: "#3A86FF", 
  })

  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "100vh" }}
      className="w-full max-w-full transition-all ease-in"
    >
   
      <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      <Environment preset="city" />
      <color attach="background" args={["lightblue"]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

     
      <Base />

    
      {activeCamera === "CamOne" && <Cameone />}
      {activeCamera === "CamTwo" && <CamTwo />}
      {activeCamera === "CamThree" && <Camethree />}

    
      {activeMotors === "MotorOne" && <Motorone color={MotorColor} />}
      {activeMotors === "MotorTwo" && <Motortwo color={MotorColor} />}
      {activeMotors === "MotorThree" && <Motorthree color={MotorColor} />}

     
      {activeHelices === "HelicesOne" && <Heliceone color={wingColor} />}
      {activeHelices === "HelicesTwo" && <Helicetwo color={wingColor} />}
      {activeHelices === "HelicesThree" && <Helicethree color={wingColor} />}
    </Canvas>
  )
}

export default Experiance
