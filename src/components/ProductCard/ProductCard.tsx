import type { GetProductBody } from '../../productTypes'
import './ProductCard.css'

type ProductCardProp = {
	product: GetProductBody
}

export const ProductCard = ({ product }: ProductCardProp) => {
	return (
		<div className='product-card'>
			<img src={`data:image/png;base64,${product?.imageFile?.contentBase64}`}></img>
			<h3>{product.title}</h3>
			<p>{product.price}</p>
		</div>
	)
}

