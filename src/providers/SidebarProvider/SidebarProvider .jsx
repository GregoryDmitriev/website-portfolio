import { createContext, useState, useContext } from 'react'

const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
	const [isClosed, setIsClosed] = useState(true)

	const handleSidebar = () => {
		setIsClosed(!isClosed)
	}

	return (
		<SidebarContext.Provider value={{ isClosed, handleSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}

export { SidebarProvider, SidebarContext }
