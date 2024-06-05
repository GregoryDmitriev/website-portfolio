import { createContext, useState } from 'react'

const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
	const [isClosed, setIsClosed] = useState(true)

	const handleSidebar = () => {
		setIsClosed(prev => !prev)
	}

	return (
		<SidebarContext.Provider value={{ isClosed, handleSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}

export { SidebarProvider, SidebarContext }
