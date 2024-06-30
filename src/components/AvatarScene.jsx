import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

const AvatarScene = props => {
	const { animation } = props

	const { headFollow, cursorFollow } = useControls({
		headFollow: false,
		cursorFollow: false,
	})

	const group = useRef()
	const { nodes, materials } = useGLTF('models/model.glb')

	const stand = useFBX('animations/stand.fbx')
	const falling = useFBX('animations/falling.fbx')
	const fallingToLanding = useFBX('animations/fallingToLanding.fbx')


	stand.animations[0].name = 'stand'
	falling.animations[0].name = 'falling'
	fallingToLanding.animations[0].name = 'fallingToLanding'


	useEffect(() => {
		stand.animations[0].tracks.forEach(track => {
			if (track.name === 'Armature.quaternion') {
				track.name = 'Hips.quaternion' 
			}
		})
		falling.animations[0].tracks.forEach(track => {
			if (track.name === 'Armature.quaternion') {
				track.name = 'Hips.quaternion'  
			}
		})
		fallingToLanding.animations[0].tracks.forEach(track => {
			if (track.name === 'Armature.quaternion') {
				track.name = 'Hips.quaternion'  
			}
		})
	}, [stand.animations, falling.animations, fallingToLanding.animations])

	const { actions} = useAnimations(
		[stand.animations[0], falling.animations[0], fallingToLanding.animations[0]],
		group
	)

	useFrame(state => {
		if (headFollow) {
			group.current.getObjectByName('Head').lookAt(state.camera.position)
		}
		if (cursorFollow) {
			const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1)
			group.current.getObjectByName('Spine2').lookAt(target)
		}
	})

	useEffect(() => {
		actions[animation].reset().fadeIn(0.5).play()
		return () => {
			actions[animation].reset().fadeOut(0.5)
		}
	}, [animation, actions])
	

	return (
		<group {...props} ref={group} dispose={null}>
			<group>
				<primitive object={nodes.Hips} />
				<skinnedMesh
					geometry={nodes.avaturn_body.geometry}
					material={materials.avaturn_body_material}
					skeleton={nodes.avaturn_body.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.avaturn_hair_0.geometry}
					material={materials.avaturn_hair_0_material}
					skeleton={nodes.avaturn_hair_0.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.avaturn_hair_1.geometry}
					material={materials.avaturn_hair_1_material}
					skeleton={nodes.avaturn_hair_1.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.avaturn_shoes_0.geometry}
					material={materials.avaturn_shoes_0_material}
					skeleton={nodes.avaturn_shoes_0.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.avaturn_look_0.geometry}
					material={materials.avaturn_look_0_material}
					skeleton={nodes.avaturn_look_0.skeleton}
				/>
			</group>
		</group>
	)
}

export { AvatarScene }

useGLTF.preload('models/model.glb')
