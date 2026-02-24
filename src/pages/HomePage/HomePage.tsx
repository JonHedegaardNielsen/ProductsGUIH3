import { useEffect, useState } from 'react'
import './HomePage.css'
import type { GetProductBody } from '../../productTypes'
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getAPIBaseURL } from '../../appdata';
import { Hero } from '../../components/Hero/Hero';
import { HomeAdd } from '../../components/HomeAdd/HomeAdd';
export const HomePage = () => {
	const [products, setProducts] = useState<Array<GetProductBody>>([]);
	useEffect(() => {
		async function loadData() {
			const response = await fetch(`${getAPIBaseURL()}/Product`);
			const products: Array<GetProductBody> = await response.json()
			setProducts(products);
			console.log(products);

		};
		loadData();
	}, [])
	return (
		<div className='home-page'>
			<Hero />
			<h1 className='home-page-title'>Featured Souls</h1>
			<div className='products'>
				{products.map(product => <ProductCard product={product} />)}
			</div>
			<HomeAdd />
		</div>
	)
}

