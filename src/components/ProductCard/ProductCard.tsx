import type { Product } from '../../productTypes'
import './ProductCard.css'

type ProductCardProp = {
	product: Product
}

export const ProductCard = ({ product }: ProductCardProp) => {
	return (
		<div className='product-card'>
			<img src={product.imageBase64}></img>
			<h3>{product.title}</h3>
			<p>{product.price}</p>
		</div>
	)
}

