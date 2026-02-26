import { Link, useParams } from 'react-router'
import type { GetProductBody, Product } from '../../productTypes'
import './SingleProductPage.css'
import { useEffect, useState } from 'react';
import { getAPIBaseURL } from '../../appdata';
export const SingleProductPage = () => {
	let { id } = useParams();
	const [product, setProduct] = useState<GetProductBody>();

	useEffect(() => {
		async function loadProduct() {
			const response = await fetch(`${getAPIBaseURL()}/Product/${id}`)
			const getProductBody: GetProductBody = await response.json();
			setProduct(getProductBody);
			console.log(getProductBody)
		}
		loadProduct()
	}, [])
	return (
		<div className='single-product'>
			<div className='single-product-image'>
				<Link to='/home' className='go-back-link'>
					<header>
						Go Back
					</header>
				</Link>
				<img src={`data:image/png;base64,${product?.imageFile?.contentBase64}`}></img>
			</div>
			<div className='single-product-info'>
				<h2>{product?.category?.title}</h2>
				<h1>{product?.title}</h1>
				<p className='product-price' >{product?.price} .kr</p>
				<button>Add to Cart</button>
				<header className='description-title'>Description</header>
				<p>
					dscription
				</p>
			</div>
		</div>
	)
}

