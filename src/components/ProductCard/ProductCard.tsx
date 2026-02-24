import { Link } from 'react-router'
import type { GetProductBody } from '../../productTypes'
import './ProductCard.css'
import { useNavigate } from 'react-router'

export const ProductCard = ({ product }: { product: GetProductBody }) => {
	const navigate = useNavigate();
	return (
		<div className='product-card' onClick={() => navigate(`/singleProduct/${product.productId}`)}>
			<img src={`data:image/png;base64,${product?.imageFile?.contentBase64}`}></img>
			<h3>{product.title}</h3>
			<p>kr. {product.price}</p>
		</div>
	)
}

