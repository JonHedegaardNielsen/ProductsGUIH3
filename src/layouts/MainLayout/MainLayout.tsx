import { Outlet } from "react-router"
import { Header } from "../../components/Header/Header"
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

