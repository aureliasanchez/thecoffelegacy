'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Home() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
            {/* Sidebar Page Container */}
            <div className="sidebar-page-container">
                <div className="section-text">yummy</div>
                <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        
                        {/* Content Side */}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-classNameic">
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-16.jpg" alt="" />
                                            {/* Overlay Box */}
                                            <div className="overlay-box">
                                                <div className="overlay-inner">
                                                    <div className="content">
                                                        <Link href="assets/images/resource/news-16.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category">Blog</div>
                                            <h3><Link href="news-detail">El Origen de Nuestro Café</Link></h3>
                                            {/* <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul> */}
                                            <div className="text">Desde los campos hasta tu taza, trabajamos de la mano con pequeños productores de café de origen único, garantizando una experiencia auténtica y llena de sabor.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">Blog</div>
                                            <h3><Link href="news-detail">El Arte del Latte</Link></h3>
                                            {/* <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul> */}
                                            <div className="text">Cada taza de latte en The Coffee Legacy es una obra de arte. Con dedicación y técnica, nuestros baristas crean diseños únicos que elevan cada sorbo.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-17.jpg" alt="" />
                                            {/* Overlay Box */}
                                            <div className="overlay-box">
                                                <div className="overlay-inner">
                                                    <div className="content">
                                                        <Link href="assets/images/resource/news-17.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category">Blog</div>
                                            <h3><Link href="news-detail">Postres para Consentirte </Link></h3>
                                            {/* <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul> */}
                                            <div className="text">Desde brownies hasta crepas rellenas, nuestros postres son el acompañamiento perfecto para tu café, hechos con los mejores ingredientes para satisfacer tu antojo.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-18.jpg" alt="" />
                                            <a onClick={() => setOpen(true)} className="lightbox-image video-overlay-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category">Blog</div>
                                            <h3><Link href="news-detail">Café para Llevar</Link></h3>
                                            {/* <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul> */}
                                            <div className="text">Tu rutina no tiene que sacrificar el sabor. Llévate una taza de café de especialidad para disfrutarlo mientras te mueves por la ciudad.</div>
                                        </div>
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
                                
                                {/* News Block Four */}
                                <div className="news-block-four">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-19.jpg" alt="" />
                                            {/* <div className="content">
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                                <div className="designation">Michael John</div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Three */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <Swiper {...swiperOptions} className="single-item-carousel ">
                                            <SwiperSlide>
                                            <div className="slide">
                                                <div className="image">
                                                    <img src="assets/images/resource/news-20.jpg" alt="" />
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide">
                                                <div className="image">
                                                    <img src="assets/images/resource/news-20.jpg" alt="" />
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide">
                                                <div className="image">
                                                    <img src="assets/images/resource/news-20.jpg" alt="" />
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="lower-content">
                                            <div className="category">Blog</div>
                                            <h3><Link href="news-detail">Explora Nuevos Sabores</Link></h3>
                                            {/* <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul> */}
                                            <div className="text">Nuestra carta de bebidas siempre tiene algo nuevo que ofrecer. Descubre sabores únicos y creaciones especiales diseñadas para sorprender a tu paladar.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Styled Pagination */}
                                {/* <ul className="styled-pagination text-center">
                                    <li><Link href="#">01</Link></li>
                                    <li><Link href="#" className="active">02</Link></li>
                                    <li><Link href="#">03</Link></li>
                                    <li className="next"><Link href="#"><span className="fa fa-angle-right"></span></Link></li>
                                </ul>                 */}
                                {/* End Styled Pagination */}
                                
                            </div>
                        </div>
                            
                        {/* Sidebar Side */}
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar sticky-top">
                                
                                {/* Search */}
                                {/* <div className="sidebar-widget search-box">
                                    <div className="sidebar-title">
                                        <h6>Search Course</h6>
                                    </div>
                                    <form method="post" >
                                        <div className="form-group">
                                            <input type="search" name="search-field"  placeholder="Your search"/>
                                            <button type="submit"><span className="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div> */}
                                
                                {/* About Widget */}
                                <div className="sidebar-widget about-widget">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Sobre Nosotros</h6>
                                        </div>
                                        <div className="text">En The Coffee Legacy, nos dedicamos a ofrecer una experiencia única a través del café de especialidad. Cada taza representa nuestra pasión por el sabor, la calidad y la conexión con nuestros productores. Nuestra misión es brindarte momentos inolvidables en cada visita.</div>
                                    </div>
                                </div>
                                
                                {/* Category Widget */}
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Categorías de Productos</h6>
                                        </div>
                                        <ul className="cat-list">
                                            <li><Link href="#">Café de Especialidad</Link></li>
                                            <li><Link href="#">Bebidas Refrescantes</Link></li>
                                            <li><Link href="#">Postres y Snacks</Link></li>
                                            <li><Link href="#">Desayunos</Link></li>
                                            <li><Link href="#">Hamburguesas y Pizzas</Link></li>
                                            <li><Link href="#">Crepas</Link></li>
                                            <li><Link href="#">Cervezas, Vinos y Cócteles</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Popular Posts */}
                                <div className="sidebar-widget popular-posts">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Productos</h6>
                                        </div>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/resource/post-thumb-1.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                            <div className="text"><Link href="news-detail">Flat White</Link></div>
                                            <div className="post-info">$55</div>
                                        </article>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/resource/post-thumb-2.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                            <div className="text"><Link href="news-detail">Brownie de Chocolate</Link></div>
                                            <div className="post-info">$45</div>
                                        </article>
                                        
                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/resource/post-thumb-3.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                            <div className="text"><Link href="news-detail">Frappé de Caramelo</Link></div>
                                            <div className="post-info">$65</div>
                                        </article>
                                        
                                    </div>
                                </div>
                                
                                {/* Tags Posts */}
                                <div className="sidebar-widget tags-posts">
                                    <div className="widget-content">
                                        <div className="sidebar-title">
                                            <h6>Etiquetas Populares</h6>
                                        </div>
                                        <ul className="tag-list clearfix">
                                            <li><Link href="#">Café</Link></li>
                                            <li><Link href="#">Fruit Bowl</Link></li>
                                            <li><Link href="#">Frappé</Link></li>
                                            <li><Link href="#">Postres</Link></li>
                                            <li><Link href="#">Crepas</Link></li>
                                            <li><Link href="#">Bebidas Refrescantes</Link></li>
                                            <li><Link href="#">Especialidades</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Social Widget */}
                                <div className="sidebar-widget social-widget">
                                    <div className="sidebar-title">
                                        <h6>Síguenos</h6>
                                    </div>
                                    <ul className="social-list">
                                        <li><Link href="#"><span className="icon fa fa-facebook"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-twitter"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                        <li><Link href="#"><span className="icon fa fa-dribbble"></span></Link></li>
                                    </ul>
                                </div>
                                
                            </aside>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="outer-container">
                    <GallerySlider1/>
                </div>
            </section>
            {/* End Gallery Section */}

            </Layout>
        </>
    )
}