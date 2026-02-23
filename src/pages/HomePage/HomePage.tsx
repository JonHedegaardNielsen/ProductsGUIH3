import { useEffect, useState } from 'react'
import './HomePage.css'
import type { GetProductBody } from '../../productTypes'
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getAPIBaseURL } from '../../appdata';
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
		<>
			{products.map(product => <ProductCard product={product} />)}
		</>
	)
}

