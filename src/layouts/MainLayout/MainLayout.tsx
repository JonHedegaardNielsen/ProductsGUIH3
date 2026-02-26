import { Outlet } from "react-router"
import { NavBar } from "../../components/NavBar/NavBar"
import { Footer } from "../../components/Footer/Footer"

export const MainLayout = () => {
	return (
		<>
			<main >
				<NavBar />
				<Outlet />
				<Footer />
			</main>
		</>
	)
}

