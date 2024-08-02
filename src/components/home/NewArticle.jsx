import { Swiper, SwiperSlide } from 'swiper/react';


const NewArticle = () => {
    const slides = [
        { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Slide 2" },
        { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Slide 2" },
        { src: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5", alt: "Slide 1" },
    ];

    return (

        <div className="bg-gray-100 mt-8 py-4">
            <div className="flex max-w-screen-lg mx-auto flex-row w-full justify-between py-6 gap-10 items-center">
                <div className="w-4/12 text-left">
                    <h1 className="text-2xl font-semibold mb-2">Artikel terbaru kami</h1>
                    <p>Berkolaborasi dengan mitra kami, kami memberikan berbagai artikel menarik untuk mendukung
                        pengembangan karier developer Indonesia.</p>
                </div>
                <div className="w-8/12 overflow-visible">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.5}
                        centeredSlides={true}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="flex flex-row gap-6 items-center p-7 border w-full shadow-lg rounded bg-white">
                                    <img className="w-32 h-32 object-cover rounded" src={slide.src}
                                         alt={slide.alt}/>
                                    <div className="text-left">
                                        <p className="text-sm">Oleh Si Abdul</p>
                                        <h2 className="text-lg font-bold">Golang Backend Developer</h2>
                                        <p className="text-sm line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Corporis eos exercitationem facilis iste libero magnam numquam
                                            perspiciatis temporibus vero</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default NewArticle;
