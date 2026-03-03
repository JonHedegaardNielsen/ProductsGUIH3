import './Hero.css'
import HeroImage from '../../assets/BooksForHero.png'
export const Hero = () => {
	return (
		<div className='hero'>
			<div>
				<h1>The Rook's Books</h1>
			</div>
			<img src={HeroImage}></img>
		</div>
	)
}

