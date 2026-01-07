import "./ShowPagePopularity.css"
import BlockBook from "../BlockBook/BlockBook"
import { books, calcSalary } from "../../Data/book"
import BanerBookBlock from "../BanerBookBlock/BanerBookBlock"
import { BanerProps } from "../BanerBookBlock/BanerBookBlock"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper'
import { useRef } from "react"

export default function ShowPagePopularity({ textBaner }: BanerProps) {

    const swiperRef = useRef<SwiperType | null>(null)

    return (
        <>
            <div className="">
                <div className="block_popular">
                    <h1>{textBaner}</h1>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={20}
                        modules={[Navigation, Pagination]}
                        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
                        className="swiperPage"
                    >
                        {books.map(book =>
                            book.price > 300 ? (
                                <SwiperSlide className="slidePage">
                                    <BlockBook
                                        book={book}
                                        childrenBaner={<BanerBookBlock textBaner={textBaner} />}
                                    />
                                </SwiperSlide>

                            ) : null
                        )}

                    </Swiper>


                </div>
            </div >
        </>
    )
}
