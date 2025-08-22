import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Motortwo({ color = "#ff0000", ...props }) {
  const { nodes, materials } = useGLTF('/public/model/motor/Motor2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.02, 0.293, -0.112]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle047.geometry}
          material={materials['Motor1.001']}
        >
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle047_1.geometry}
          material={materials.Plateado}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/public/model/motor/Motor2.gltf')
