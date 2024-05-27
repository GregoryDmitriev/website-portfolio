import { FaHome, FaCode } from 'react-icons/fa'
import { IoIosPerson } from 'react-icons/io'
import { BsFillMortarboardFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const NAV_LINKS = [
	{
		title: 'Home',
		to: '/#home',
		icon: <FaHome size={26} />,
	},
	{
		title: 'About',
		to: '/#about',
		icon: <IoIosPerson size={26} />,
	},
	{
		title: 'Skills',
		to: '/#skills',
		icon: <BsFillMortarboardFill size={26} />,
	},
	{
		title: 'Projects',
		to: '/#projects',
		icon: <FaCode size={26} />,
	},
	{
		title: 'Contact',
		to: '/#contact',
		icon: <HiOutlineMail size={26} />,
	},
]

const NAV_LINKS_BURGER = [
	{
		to: '#about',
		icon: <IoIosPerson size={26} />,
		transform: 'translate(0px,125px)',
	},
	{
		to: '#skills',
		icon: <BsFillMortarboardFill size={26} />,
		transform: 'translate(60px,105px)',
	},
	{
		to: '#projects',
		icon: <FaCode size={26} />,
		transform: 'translate(105px,60px)',
	},
	{
		to: '#contact',
		icon: <HiOutlineMail size={26} />,
		transform: 'translate(125px,0px)',
	},
]

export { NAV_LINKS, NAV_LINKS_BURGER }