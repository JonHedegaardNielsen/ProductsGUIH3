import { useState } from 'react'
import './HomePage.css'
import type { Product } from '../../productTypes'
import { ProductCard } from '../../components/ProductCard/ProductCard';
export const HomePage = () => {
	const [products, setProducts] = useState<Array<Product>>([]);
	return (
		<>
			{products.map(product => <ProductCard product={product} />)}
		</>
	)
}

