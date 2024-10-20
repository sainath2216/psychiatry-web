import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Reviews = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className='review-card'>
                        <h1 className='quaot'>"</h1>
                        <p className='quaot-description'>"Psychiatric took a lot of Anxiety and strees out of the equation. i was able to easily sort the directory
                            and the provider profiles were so helpful in giving me a sense of their energy approach"
                        </p>
                        <div className='info-card'>
                            <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjWRTNSrMKGHX9taneOMvSowIntNWSwXMcV4txM-wCIIbvZ6YI0%3Ds120-c-rp-mo-br100&w=256&q=100"
                                alt="img" className='review-img' />
                            <div>
                                <h1 className='profile-name'>Carl Rowan</h1>
                                <p className='profile-location'>Anlets Inc</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='review-card'>
                        <h1 className='quaot'>"</h1>
                        <p className='quaot-description'>"Psychiatric took a lot of Anxiety and strees out of the equation. i was able to easily sort the directory
                            and the provider profiles were so helpful in giving me a sense of their energy approach"
                        </p>
                        <div className='info-card'>
                            <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjWRTNSrMKGHX9taneOMvSowIntNWSwXMcV4txM-wCIIbvZ6YI0%3Ds120-c-rp-mo-br100&w=256&q=100"
                                alt="img" className='review-img' />
                            <div>
                                <h1 className='profile-name'>Carl Rowan</h1>
                                <p className='profile-location'>Anlets Inc</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='review-card'>
                        <h1 className='quaot'>"</h1>
                        <p className='quaot-description'>"Psychiatric took a lot of Anxiety and strees out of the equation. i was able to easily sort the directory
                            and the provider profiles were so helpful in giving me a sense of their energy approach"
                        </p>
                        <div className='info-card'>
                            <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjWRTNSrMKGHX9taneOMvSowIntNWSwXMcV4txM-wCIIbvZ6YI0%3Ds120-c-rp-mo-br100&w=256&q=100"
                                alt="img" className='review-img' />
                            <div>
                                <h1 className='profile-name'>Carl Rowan</h1>
                                <p className='profile-location'>Anlets Inc</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='review-card'>
                        <h1 className='quaot'>"</h1>
                        <p className='quaot-description'>"Psychiatric took a lot of Anxiety and strees out of the equation. i was able to easily sort the directory
                            and the provider profiles were so helpful in giving me a sense of their energy approach"
                        </p>
                        <div className='info-card'>
                            <img src="https://www.adapsychiatry.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjWRTNSrMKGHX9taneOMvSowIntNWSwXMcV4txM-wCIIbvZ6YI0%3Ds120-c-rp-mo-br100&w=256&q=100"
                                alt="img" className='review-img' />
                            <div>
                                <h1 className='profile-name'>Carl Rowan</h1>
                                <p className='profile-location'>Anlets Inc</p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </Slider>
        </div>
    )
}

export default Reviews