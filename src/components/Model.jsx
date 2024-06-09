'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/dog_house_free.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DogHouse_PBR_0.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      />
    </group>
  )
}

useGLTF.preload('/dog_house_free.glb')
