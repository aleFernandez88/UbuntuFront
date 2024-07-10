import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

const images = [
	'https://i.ibb.co/NFPxYtV/card-ejemplo-publicacion-imagen1.jpg',
	'https://i.ibb.co/RGw5WKK/card-ejemplo-publicacion-imagen2.jpg',
	'https://i.ibb.co/xggY5rF/card-ejemplo-publicacion-imagen3.jpg',
	// Agrega más URLs de imágenes aquí
]

export const Carousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<box
					key={index}
					sx={{
						overFlow: 'hidden',
					}}
				>
					<img src={image} />
				</box>
			))}
		</Slider>
	)
}
