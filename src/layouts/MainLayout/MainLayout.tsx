import { Outlet } from "react-router"
import { Header } from "../../components/NavBar/NavBar"
import { Footer } from "../../components/Footer/Footer"

export const MainLayout = () => {
	return (
		<>
			<main >
				<Header />
				<Outlet />
				<Footer />
			</main>
		</>
	)
}

