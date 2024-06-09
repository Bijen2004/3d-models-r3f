import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'

const DogHouse = () => {
  return (
    <>
    <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
      <Model />
      <Environment preset='sunset'/>
      </Canvas>
    </>
  )
}

export default DogHouse