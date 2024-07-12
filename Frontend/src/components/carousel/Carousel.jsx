import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

export const Carousel = ({ images }) => {
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
