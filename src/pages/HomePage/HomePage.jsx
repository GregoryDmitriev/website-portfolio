import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
	ContactShadows,
	Environment,
	OrbitControls,
	Scroll,
	ScrollControls,
	Sky,
} from '@react-three/drei'
import { useControls } from 'leva'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'
import { AvatarScene } from '@/components/AvatarScene'
import { Canvas } from '@react-three/fiber'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
	const { animation } = useControls({
		animation: {
			value: 'stand',
			options: ['stand', 'falling', 'fallingToLanding'],
		},
	})

	return (
		<Canvas shadows camera={{ position: [1, 1, 10], fov: 30 }}>
			<OrbitControls
				makeDefault
				minPolarAngle={0}
				maxPolarAngle={Math.PI / 2.5}
				minDistance={1}
				maxDistance={6}
			/>
			<group position={[1, -1, -1]}>
				<ContactShadows
					opacity={0.42}
					scale={10}
					blur={1}
					far={10}
					resolution={256}
					color='#000000'
				/>

				<AvatarScene animation={animation} />
			</group>

			<ambientLight intensity={2} />
		</Canvas>
	)
}

export { HomePage }
