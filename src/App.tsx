import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { SingleProductPage } from './pages/SingleProductPage/SingleProductPage'
import { MakeProduct } from './pages/MakeProduct/MakeProduct'
import { ProductsPage } from './pages/ProductPage/ProductsPage'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/home' element={<HomePage />} />
						<Route path='/makeProduct' element={<MakeProduct />} />
						<Route path='/singleProduct/:id' element={<SingleProductPage />} />
						<Route path='/products/:categoryId' element={<ProductsPage />} />
						<Route path='/products' element={<ProductsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
