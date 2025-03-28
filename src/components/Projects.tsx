import { useEffect } from "react"
import Store from "store/Store"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const Projects = () => {
    type Project = {
        name: string;
        homepage: string;
    };

    const { data, fetchData } = Store() as { data: Project[]; fetchData: () => void };


    const previews = [
        'Preview/boulevard.png',
        'Preview/burger.png',
        'Preview/cinephile.png',
        'Preview/gotrip.png',
        'Preview/grayson.png',
        'Preview/clean.png',
        'Preview/oku.png',
        'Preview/parallax.png',
        'Preview/portfolio.png',
        'Preview/weather.png',
        'Preview/clocks.png',
        'Preview/todo.png',
        'Preview/totembo.png',
        'https://avatars.githubusercontent.com/u/121661702?v=4',
        'Preview/vue.png',
        'Preview/xzone.png'
    ]

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <section className="projects">
            <h3>Projects</h3>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                navigation
                slidesPerView={1}
                className="projects__cards"
            >
                {data && data.map((item, idx) => (
                    <SwiperSlide key={idx} className="projects__cards-item">
                        <div className="projects__cards-item-img">
                            <img src={previews[idx]} alt="" />
                        </div>
                        <a href={item.homepage}>
                            <p>CLICK HERE TO VISIT</p>
                            <h4>{item.name}</h4>
                            <img className="arrow" src="arrow.svg" alt="" />
                        </a>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default Projects