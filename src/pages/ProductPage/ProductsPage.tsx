import { useParams } from 'react-router'
import './ProductsPage.css'
import { useEffect, useState } from 'react';
import { getAPIBaseURL, getProductsAPIBaseURL } from '../../appdata';
import type { GetProductBody, Product } from '../../productTypes';
import { ProductCard } from '../../components/ProductCard/ProductCard';
export const ProductsPage = () => {
	let { categoryId } = useParams();
	const [products, setProducts] = useState<Array<GetProductBody>>([]);
	useEffect(() => {
		async function LoadData() {
			let response: Response
			if (categoryId == undefined) {
				response = await fetch(`${getProductsAPIBaseURL()}`);
			}
			else {
				response = await fetch(`${getProductsAPIBaseURL()}/FromCategoryId/${categoryId}`);
			}
			const products = await response.json();
			setProducts(products);
		}
		LoadData();
	}, [])
	return (
		<div className='products'>
			{products.map(product => <ProductCard product={product} />)}
		</div>
	)
}

