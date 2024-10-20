import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://www.vcdistrictattorney.com/wp-content/uploads/2023/08/Mental-Health-Diversion-e1690234600708-1024x411-1.png" alt="img" className='caro-img' />
        </div>
        <div>
        <img src="https://icahn.mssm.edu/files/ISMMS/Assets/Education/Residencies-Fellowships/List/MSH-Geriatric-Psychiatry-Fellowship/ISMMS-Residencies-MSH-Geriatric-Psychiatry-Carousel-1280x512.jpg" alt="img" className='caro-img' />
        </div>
        <div>
        <img src="https://medicine.umich.edu/sites/default/files/styles/alt_carousel/public/carousel-images/Maust_PR_Carousel.jpg?itok=d4aV5fqE" alt="img" className='caro-img' />
        </div>
        <div>
        <img src="https://th.bing.com/th/id/OIP.GK80DlxcFXRw1_EjeJTsugHaC0?rs=1&pid=ImgDetMain" alt="img" className='caro-img' />
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick