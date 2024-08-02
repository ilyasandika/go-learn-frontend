import { Swiper, SwiperSlide } from 'swiper/react';


const NewArticle = () => {
    const slides = [
        { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Slide 2" },
        { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Slide 2" },
        { src: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5", alt: "Slide 1" },
    ];

    return (

        <div className="bg-gray-100 min-w-max my-10 mx-[-1000px] px-[1000px] ">
            <div className="container-xl flex max-w-screen-xl flex-row w-full justify-between pr-28 py-6 gap-10 items-center my-8">
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
                                    className="flex flex-row gap-6 justify-between p-8 border w-full h-52 shadow-lg rounded bg-white overflow-hidden">
                                    <img className="w-36 h-36 object-cover rounded" src={slide.src}
                                         alt={slide.alt}/>
                                    <div className="w-2/3 text-left h-/4">
                                        <p className="text-sm">Oleh Si Abdul</p>
                                        <h2 className="text-xl font-bold">Golang Backend Developer</h2>
                                        <p className="line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing
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
