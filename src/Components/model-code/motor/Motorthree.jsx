import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Motorthree({ color = "#ff0000", ...props }) {
  const { nodes, materials } = useGLTF('/model/motor/Motor3.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.318, 0.309, 1.272]} scale={0.744}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle037.geometry}
          material={materials.Motor1}
        >
           <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle037_1.geometry}
          material={materials.Plateado}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/motor/Motor3.gltf')