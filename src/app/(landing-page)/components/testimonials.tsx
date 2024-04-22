/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

'use client';

import { Icons } from '@/components/common/icons';
import PageWrapper from '@/components/containers/page-wrapper';
import { individualImages } from '@/lib/utils';
import arrowBackground from '@/public/arrow-background.svg';
import arrow from '@/public/arrow.svg';
import { siteContent } from 'next.json';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { v4 as uuidv4 } from 'uuid';

const Testimonials = () => {
    let sliderRef = useRef(null);
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //         window.location.reload();
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    const next = () => {
        // @ts-expect-error unknown error
        sliderRef.slickNext();
    };
    const previous = () => {
        // @ts-expect-error unknown error
        sliderRef.slickPrev();
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        // initialSlide: 0,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1
                },
            },
        ],
    };
    return (
        <section className="overflow-hidden bg-lightAccentGreen pb-[29px] pt-[85px]">
            <PageWrapper className="md:mx-0 md:ml-auto">
                <Slider
                    {...settings}
                    ref={(slider) => {
                        // @ts-expect-error unknown error
                        sliderRef = slider;
                    }}
                >
                    {siteContent?.trustedByPeople?.map((individual) => (
                        <div
                            key={uuidv4()}
                            className="group relative h-[462px] w-full cursor-pointer overflow-hidden rounded-[30px] border border-primary md:w-[379px]"
                        >
                            {/* group-hover:h-full group-hover:w-full  */}
                            <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-y-3 rounded-[30px] bg-black/50 text-[#FCFCFC] opacity-0 transition-opacity duration-300 ease-in-out group-hover:flex  group-hover:opacity-100 md:gap-y-[30px]">
                                <Icons.videoIcon className="size-14 md:size-[116px]" />
                                <div className="text-center">
                                    <p className="font-millik text-base md:text-2xl">
                                        Hear From {individual?.name}
                                    </p>
                                    <p className="font-redHatDisplay text-xs font-bold">
                                        {individual?.role}
                                    </p>
                                </div>
                            </div>
                            <Icons.videoIcon className="absolute right-4 top-4 z-10" />
                            <div className="absolute bottom-0 z-10 flex h-[91px] w-full flex-col justify-center rounded-bl-[30px] rounded-br-[30px] bg-black/30 pl-[14px] text-white">
                                <h3 className="font-millik text-2xl">{individual?.name}</h3>
                                <p className="font-redHatDisplay text-xs font-bold">
                                    {individual?.role}
                                </p>
                            </div>
                            <Image
                                src={
                                    individualImages[
                                    individual.id as keyof typeof individualImages
                                    ]
                                }
                                alt=""
                                className="h-full w-full rounded-[30px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:transform"
                            />
                        </div>
                    ))}
                </Slider>
            </PageWrapper>
            <PageWrapper>
                <div className="mt-5 flex justify-end gap-x-4 md:mt-[60px]">
                    <button className="relative" onClick={previous}>
                        <Image src={arrowBackground} alt="" />
                        <Image
                            src={arrow}
                            alt=""
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
                        />
                    </button>
                    <button className="relative" onClick={next}>
                        <Image src={arrowBackground} alt="" />
                        <Image
                            src={arrow}
                            alt=""
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </button>
                </div>
            </PageWrapper>
        </section>
    );
};

export default Testimonials;
