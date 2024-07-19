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
		   {Array.isArray(images) && images.length > 0 ?(
			images.map((image, index) => (
			  <div key={index}>
				<div
				  style={{
					overflow: 'hidden',
				  }}
				>
				  <img src={image} alt={`Slide ${index}`} />
				</div>
			  </div>
			))
		  ) : (
			<div>
			  <p>No hay imágenes para mostrar en el carrusel</p>
			</div>
		  )}
		</Slider>
	  )
	}
