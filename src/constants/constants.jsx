import { FaCode } from 'react-icons/fa'
import { IoIosPerson } from 'react-icons/io'
import { BsFillMortarboardFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

// import projectImg from ''

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

const PROJECTS = [
	{
		title: 'Project 1',
		// img: projectImg,
		id: '1',
	},
	{
		title: 'Project 2',
		// img: projectImg,
		id: '2',
	},
	{
		title: 'Project 3',
		// img: projectImg,
		id: '3',
	},
]

export { NAV_LINKS, NAV_LINKS_BURGER, PROJECTS }
