import { ReactNode, useRef } from "react";
import { books } from "../../Data/book";
import { BooksParam } from "../../Data/book";
import BlockBook from "../BlockBook/BlockBook";
import "./Main.css";
import ShowPagePopularity from "../ShowPagePopularity/ShowPagePopularity";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper'

type MainProps = {
    children?: ReactNode;
}

export default function Main({ children }: MainProps) {

    const swiperRef = useRef<SwiperType | null>(null)



    return (
        <main>
            {children}
            <div className="swiperContainer">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={40}
                    modules={[Navigation, Pagination]}
                    pagination={{ type: 'progressbar' }}
                    onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
                    className="swiperMain"
                >
                    <SwiperSlide className="slideMain" />
                    <SwiperSlide className="slideMain" />
                    <SwiperSlide className="slideMain" />
                    <SwiperSlide className="slideMain" />
                    <SwiperSlide className="slideMain" />
                </Swiper>

                <button
                    className="prevSlide"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    ‹
                </button>

                <button
                    className="nextSlide"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    ›
                </button>
            </div>


            <ShowPagePopularity textBaner={'Ексклюзив'} />
            <ShowPagePopularity textBaner={'Новинка'} />
        </main>
    )
}