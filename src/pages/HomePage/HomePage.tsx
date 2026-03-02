import { useEffect, useState } from 'react'
import './HomePage.css'
import type { GetProductBody } from '../../productTypes'
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getAPIBaseURL, getProductsAPIBaseURL } from '../../appdata';
import { Hero } from '../../components/Hero/Hero';
import { HomeAdd } from '../../components/HomeAdd/HomeAdd';

export const HomePage = () => {
	const [products, setProducts] = useState<Array<GetProductBody>>([]);
	useEffect(() => {
		async function loadData() {
			const response = await fetch(`${getProductsAPIBaseURL()}`);
			const products: Array<GetProductBody> = await response.json()
			setProducts(products);
		};
		loadData();
	}, [])
	return (
		<div className='home-page'>
			<Hero />
			<h1 className='home-page-title'>Featured Books</h1>
			<div className='products'>
				{products.map(product => <ProductCard key={product.productId} product={product} />)}
			</div>
			<HomeAdd />
		</div>
	)
}

