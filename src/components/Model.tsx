// import React, { useRef  } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model( props:any ) {
  const { nodes } = useGLTF( '/carro_bombero.glb' ) 
  return (
  <group  { ...props } dispose={null}>
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''_iz-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''_iz-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''_iz-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''_iz-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''_iz-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''_iz-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_aro_8''-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_base_manguera-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_base_manguera-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_base_manguera-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_base_manguera-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Boquilla_Manguera-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Boquilla_Manguera-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_camara-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_camara-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Camera_GoProHero-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Camera_GoProHero-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_carcasa-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_carcasa-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_cuadrado_delante-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_cuadrado_delante-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_estructura_carro-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_estructura_carro-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_extintor-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_extintor-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_extintor-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_extintor-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-4'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_foco_cuadrado-4'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_llanta-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_llanta-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_llanta-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_llanta-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_llanta-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_llanta-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_llanta-4'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_llanta-4'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_llanta-5'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_llanta-5'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_llanta-6'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_llanta-6'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_luces-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_luces-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_luces-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_luces-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_luces-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_luces-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Manguera2-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Manguera2-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Mangueras-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Mangueras-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-4'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-4'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-5'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-5'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-6'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Motoreductor_grande-6'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_poste-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_poste-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_SOPORTE_EJE-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_SOPORTE_EJE-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_SOPORTE_EJE-4'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_SOPORTE_EJE-4'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_SOPORTE_EJE-5'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_SOPORTE_EJE-5'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-1'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-1'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-2'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-2'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-3'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-3'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-4'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-4'].material} position={[0.04, 0.02, -0.1,]}   />
    <mesh castShadow receiveShadow geometry={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-5'].geometry} material={nodes['Ensamblaje_DE_BOMBERO_-_Spindle_150W_12V-5'].material} position={[0.04, 0.02, -0.1,]}   />
  </group>
  )
}

useGLTF.preload('/carro_bombero.glb')
