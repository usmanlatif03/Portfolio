import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,FreeMode } from 'swiper/modules';

export default function Projects() {
    const [swiperRef, setSwiperRef] = useState(null);
     const slideVideos = [
        {title:"Intro Video", video:"https://youtu.be/IddEalpBlZc", alt:"https://ethnc.com/", type:'AE/ME/Topaz'},
        {title:"Car content", video:"https://youtu.be/as1QpLT3T18", alt:"https://image1993.com/", type:'AE/ME/Topaz'},
        {title:"Short VFX", video:"https://youtu.be/S4VyKzTlkgQ", alt:"https://www.nuriyaa.com/", type:'AE/ME/PS/Topaz'},
        {title:"Podcast Reel", video:"https://youtu.be/g4xqJGVXbug", alt:"https://scrubser-shop.com/", type:'AE/ME/Topaz'},
        {title:"Iman Ghazi Style", video:"https://youtu.be/pEH5u6eveWk", alt:"https://maryumnmariauae.com/", type:'AE/ME/Topaz'},
        {title:"Advertise and Commercial", video:"https://youtu.be/dnvSKdifals", alt:"https://outfitters.com.pk/", type:'AE/ME/Topaz'},
        {title:"Time Remap Edit", video:"https://youtu.be/tEnA3VeEt8U", alt:"https://sparx.pk/", type:'AE/ME/Topaz'},
        {title:"Face Quality Edit", video:"https://youtu.be/T6_znLeEqgg", alt:"https://vyntage.com/", type:'AE/ME/Topaz'},
        {title:"Lobby Edit", video:"https://youtu.be/TIdFFnWdkGY", alt:"https://shop.panthertyres.com/", type:'Blender/AE/ME/Topaz'},
        {title:"Gameplay Edit", video:"https://youtu.be/jow5oDO83gE", alt:"", type:'AE/ME/Topaz'},
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
                {slideVideos.map((slide, index) => {
                    // Convert YouTube link to embed format
                    const isYouTube = slide.video.includes("youtube.com") || slide.video.includes("youtu.be");
                    let embedUrl = "";

                    if (isYouTube) {
                        const videoId = slide.video.includes("youtu.be")
                            ? slide.video.split("youtu.be/")[1]
                            : slide.video.split("v=")[1]?.split("&")[0];
                        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
                    }

                    return (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="project-card pos-relative">
                                <a className="project-link" href={slide.alt} target="_blank" aria-label={slide.title}>
                                    {isYouTube ? (
                                        <iframe
                                            className="project-video"
                                            src={embedUrl}
                                            title={slide.title}
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                            frameBorder="0"
                                        ></iframe>
                                    ) : (
                                        <video
                                            className="project-video"
                                            src={slide.video}
                                            controls
                                            loop
                                            autoPlay
                                            playsInline
                                            muted
                                        />
                                    )}
                                    <span className="type-badge">{slide.type}</span>
                                    <p className="project-title">{slide.title}</p>
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
        </div>
    </>
  );
}
