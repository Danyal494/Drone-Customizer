
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Camethree(props) {
  const { nodes, materials } = useGLTF('/public/model/cam/Cam3.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.297, 0.977]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials.Camara}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_1.geometry}
          material={materials.Cristal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_2.geometry}
          material={materials.Cables}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_3.geometry}
          material={materials.Carcasa}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/public/model/cam/Cam3.gltf')