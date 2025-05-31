import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,FreeMode } from 'swiper/modules';

export default function Projects() {
    const [swiperRef, setSwiperRef] = useState(null);
     const slideVideos = [
        {title:"Intro Video", video:"/assets/Comp 1.mp4", alt:"https://ethnc.com/", type:'AE/ME/Topaz'},
        {title:"Car content", video:"/assets/mk5.mp4", alt:"https://image1993.com/", type:'AE/ME/Topaz'},
        {title:"Short VFX", video:"/assets/SNOOKER VFX.mp4", alt:"https://www.nuriyaa.com/", type:'AE/ME/PS/Topaz'},
        {title:"Podcast Reel", video:"/assets/podcast.mp4", alt:"https://scrubser-shop.com/", type:'AE/ME/Topaz'},
        {title:"Iman Ghazi Style", video:"/assets/SAMPLE 2.mp4", alt:"https://maryumnmariauae.com/", type:'AE/ME/Topaz'},
        {title:"Advertise and Commercial", video:"/assets/Commercial and Advertising 1.mp4", alt:"https://outfitters.com.pk/", type:'AE/ME/Topaz'},
        {title:"Time Remap Edit", video:"/assets/PAL PAL.mp4", alt:"https://sparx.pk/", type:'AE/ME/Topaz'},
        {title:"Face Quality Edit", video:"/assets/FACE FINAL.mp4", alt:"https://vyntage.com/", type:'AE/ME/Topaz'},
        {title:"Lobby Edit", video:"/assets/FF!!.mp4", alt:"https://shop.panthertyres.com/", type:'Blender/AE/ME/Topaz'},
        {title:"Gameplay Edit", video:"/assets/KAMBOJ 5.mp4", alt:"", type:'AE/ME/Topaz'},
    ];
  return (
      <>
      <div className='project-container' id="Projects">
        <div className='project-heading text-start color-white'>
            <h5>Case Studies</h5>
            <h2>Projects</h2>
        </div>
        <div className='project-swiper-container'>
            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={2.9}
                spaceBetween={20}
                freeMode={true} // ✅ Enables smooth scrolling
                loop={true} // ✅ Makes it infinite
                autoplay={{
                    delay: 0, // ✅ No delay, continuous scroll
                    disableOnInteraction: false ,
                    pauseOnMouseEnter: true, // ✅ Keeps autoplay even if user interacts
                }}
                speed={3000}
                 breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2.9,
                        },
                    }}
                className="mySwiper"
            >
                {slideVideos.map ((slide , index) => (
                    <SwiperSlide className='swiper-slide ' >
                        <div className='project-card pos-relative' >
                            <a className='project-link'  target="_blank" aria-label={slide.title}>
                                <video
                                    className='project-video'
                                    src={slide.video}
                                    controls
                                    loop
                                    autoPlay
                                    playsInline
                                    muted
                                />
                                <span className='type-badge'>{slide.type}</span>
                                <p className='project-title'>{slide.title}</p>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
    </>
  );
}
