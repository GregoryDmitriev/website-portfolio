import { FaCode } from 'react-icons/fa'
import { IoIosPerson } from 'react-icons/io'
import { BsFillMortarboardFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

import projectImg1 from '@/assets/images/img1.webp'
import projectImg2 from '@/assets/images/img2.webp'
import projectImg3 from '@/assets/images/img3.webp'

const NAV_LINKS = [
	{
		title: 'HOME',
		to: 'home',
	},
	{
		title: 'ABOUT',
		to: 'about',
	},
	{
		title: 'SKILLS',
		to: 'skills',
	},
	{
		title: 'PROJECTS',
		to: 'projects',
	},
	{
		title: 'CONTACT',
		to: 'contact',
	},
]

const NAV_LINKS_BURGER = [
	{
		to: 'home',
		icon: <IoIosPerson size={26} />,
		transform: 'translate(0px,125px)',
	},
	{
		to: 'skills',
		icon: <BsFillMortarboardFill size={26} />,
		transform: 'translate(60px,105px)',
	},
	{
		to: 'projects',
		icon: <FaCode size={26} />,
		transform: 'translate(105px,60px)',
	},
	{
		to: 'contact',
		icon: <HiOutlineMail size={26} />,
		transform: 'translate(125px,0px)',
	},
]

const ABOUT_CONTENT = [
	{
		text: 'Hello! I am a Front-end developer. I am currently learning React and JavaScript. I am passionate about creating beautiful and user-friendly websites.',
	},
	{
		text: 'Hello! I am a Front-end developer. I am currently learning React and JavaScript. I am passionate about creating beautiful and user-friendly websites.',
	},
]

const PROJECTS = [
	{
		title: 'Project 1',
		img: projectImg1,
		id: '1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Project 2',
		img: projectImg2,
		id: '2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Project 3',
		img: projectImg3,
		id: '3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
]

const LINK_GITHUB = 'https://github.com/GregoryDmitriev'

export { NAV_LINKS, NAV_LINKS_BURGER, ABOUT_CONTENT, PROJECTS, LINK_GITHUB }
