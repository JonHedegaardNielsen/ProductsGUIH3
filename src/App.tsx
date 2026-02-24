import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { SingleProductPage } from './pages/SingleProductPage/SingleProductPage'
import { MakeProduct } from './pages/MakeProduct/MakeProduct'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/home' element={<HomePage />} />
						<Route path='/makeProduct' element={<MakeProduct />} />
						<Route path='/singleProduct/:id' element={<SingleProductPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
