import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';
import './index.css';

gsap.registerPlugin(ScrollTrigger)

function App() {
    const comp = useRef()

    useGSAP(() => {
        // Logo Scale & Header Text Hide
        const tl = gsap.timeline()
        tl.from('.nav_logo', {
            y: "-90%",
            width: "100%",
            duration: 1,
            scrollTrigger: {
                trigger: '.section.is--hero',
                // trigger element - viewport
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        }).to('.header_text-move', {
            y: "100%",
            duration: 3,
            stagger: {
                each: 1
            },
            scrollTrigger: {
                trigger: '.header_text',
                // trigger element - viewport
                start: "top 30%",
                end: "bottom top",
                scrub: 0.8,
            }
        })

        // Sticky Circle Grow
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.sticky-circle_wrap',
                // trigger element - viewport
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        })
        tl1.fromTo('.sticky-circle_element', {
            width: "35em",
            height: "35em",
            borderRadius: "35em",
            duration: 1
        }, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0em",
            duration: 1
        })

        // Dark to Light Color Change
        const targetElement = gsap.utils.toArray('.bg-page, .section.is--nav')
        const triggerElement_tl2 = gsap.utils.toArray('.grid_wrapper:nth-of-type(2n + 1), .sticky-circle_wrap')

        triggerElement_tl2.forEach(el => {
            gsap.to(targetElement, {
                backgroundColor: "#e8e2da",
                color: "#2e2a27",
                duration: 0.5,
                scrollTrigger: {
                    trigger: el,
                    // trigger element - viewport
                    // can also use "20px 80%"
                    start: "top top",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse",
                }
            })
        })

        // Grid Title Change
        const arrGridPositionWrapper = gsap.utils.toArray('.grid_wrapper')
        const gridTextTime = gsap.utils.toArray('.grid_text-item')
        arrGridPositionWrapper.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top bottom",
                end: "bottom bottom",

                onEnter: () => {
                    gridTextTime.forEach((e) => {
                        e.classList.remove("is--active");
                    });
                    gridTextTime[i].classList.add("is--active");
                },
                onEnterBack: () => {
                    gridTextTime.forEach((e) => {
                        e.classList.remove("is--active");
                    });
                    gridTextTime[i].classList.add("is--active");
                }
            });
        })

        // Grid Image Move 1
        const grid_item1 = gsap.utils.toArray('.grid_item:nth-child(3n+1)')
        const tl4 = gsap.timeline()
        grid_item1.forEach(el => {
            tl4.to(el, {
                y: '-30%',
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            })
        })

        // Grid Image Move 2
        const grid_item2 = gsap.utils.toArray('.grid_item:nth-child(3n+2)')
        const tl5 = gsap.timeline()
        grid_item2.forEach(el => {
            tl5.to(el, {
                y: "-50%",
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            })
        })

        // Grid Image Move 3
        const tl6 = gsap.timeline()
        const grid_item3 = gsap.utils.toArray('.grid_item:nth-child(3n+3)')
        grid_item3.forEach(el => {
            tl6.to(el, {
                y: '-70%',
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                }
            })
        })

    }, { scope: comp })

    return (
        <>
            <section ref={comp}>
                <section className='bg-page'>
                    <div className="section is--hero"><img
                        src="https://assets.website-files.com/61a993eb9a24396d472b7770/61a99a988b4f23100cbdaaf2_image1.jpg"
                        loading="lazy" alt="" sizes="100vw"
                        srcSet="https://assets.website-files.com/61a993eb9a24396d472b7770/61a99a988b4f23100cbdaaf2_image1-p-500.jpeg 500w, https://assets.website-files.com/61a993eb9a24396d472b7770/61a99a988b4f23100cbdaaf2_image1-p-800.jpeg 800w, https://assets.website-files.com/61a993eb9a24396d472b7770/61a99a988b4f23100cbdaaf2_image1.jpg 1080w"
                        className="hero_img" /></div>
                    <div className="wrapper">
                        <section className="section is--nav">
                            <div className="container is--nav">
                                <div className="nav_top">
                                    <div className="nav_logo-contain">
                                        <a href="#A" className="nav_logo w-inline-block">
                                            <div className="nav_logo-img w-embed">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                                    viewBox="0 0 1858.626 221.712">
                                                    <path id="Path_2" data-name="Path 2"
                                                        d="M-763.029-212.176l-27.714,90.294c-4.768,16.986-9.834,36.058-14.3,53.64-4.47-17.284-9.536-35.76-14.6-52.746l-28.012-91.188h-75.394V0h47.978V-62.282c0-33.972-.3-65.858-1.49-102.214,4.172,16.092,8.344,29.8,14.006,47.978L-825.907,0h41.124l36.654-116.518c5.662-18.178,9.834-32.184,14.3-48.276-1.49,36.356-1.788,68.54-1.788,102.512V0h47.978V-212.176Zm91.486,40.826h44.4v-39.336h-44.4ZM-672.735,0h46.488V-153.768h-46.488Zm155.258-157.344c-22.35,0-38.144,11.026-48.276,25.33v-21.754h-45.3V0h46.488V-85.824c0-22.648,14.9-31.886,29.2-31.886,17.284,0,24.734,9.238,24.734,26.224V0h46.488V-100.724C-464.135-138.868-487.081-157.344-517.477-157.344Zm69.434-14.006h44.4v-39.336h-44.4ZM-449.235,0h46.488V-153.768h-46.488Zm246.446-157.344c-21.158,0-37.548,12.218-47.978,27.714-8.344-17.88-25.33-27.714-47.68-27.714-20.264,0-33.972,10.728-43.806,25.33v-21.754h-45.3V0h46.488V-84.93c0-23.542,12.814-32.78,26.82-32.78,16.39,0,22.946,9.238,22.946,25.926V0h46.488V-84.93c0-23.542,12.516-32.78,26.522-32.78,16.39,0,22.946,9.238,22.946,25.926V0h46.488V-99.83C-148.851-136.782-169.711-157.344-202.789-157.344ZM14.155,0C9.983-5.96,7.9-16.986,7.9-28.31v-81.652c0-29.2-20.264-47.382-68.54-47.382-49.468,0-71.222,19.37-73.606,53.342h46.19c1.49-15.794,8.94-20.264,27.118-20.264,18.476,0,23.542,6.258,23.542,15.5,0,9.834-6.854,13.708-19.966,15.2L-81.5-91.486c-44.4,3.874-60.2,21.456-60.2,47.978,0,30.694,23.84,47.084,56.024,47.084,22.648,0,39.336-7.748,49.17-20.86.3,6.854,1.788,13.41,3.874,17.284ZM-71.669-27.714c-14.6,0-22.648-6.854-22.648-17.582s6.556-16.688,22.35-18.476l19.072-2.086c7.152-.894,12.218-2.384,15.5-5.96v11.324C-37.4-36.356-53.789-27.714-71.669-27.714ZM20.413,0H66.9V-212.176H20.413ZM189.677-118.306V-78.97h47.084c-3.576,24.436-24.734,40.23-50.66,40.23-36.356,0-57.812-25.33-57.812-67.348s20.86-67.348,55.428-67.348c26.224,0,43.508,12.516,49.468,32.78h51.554c-6.854-47.084-46.19-76.288-101.32-76.288-67.05,0-107.578,43.508-107.578,110.856S116.071,4.768,177.459,4.768c29.5,0,54.534-11.026,68.838-32.78L252.257,0h35.164V-118.306ZM377.715,3.576c48.872,0,80.46-31.588,80.46-80.46s-31.588-80.46-80.46-80.46c-49.17,0-80.758,31.588-80.758,80.46S328.545,3.576,377.715,3.576Zm0-37.25c-20.86,0-33.674-14.006-33.674-43.21s12.814-43.21,33.674-43.21c20.562,0,33.376,14.006,33.376,43.21S398.277-33.674,377.715-33.674Zm163.6,37.25c48.872,0,80.46-31.588,80.46-80.46s-31.588-80.46-80.46-80.46c-49.17,0-80.758,31.588-80.758,80.46S492.147,3.576,541.317,3.576Zm0-37.25c-20.86,0-33.674-14.006-33.674-43.21s12.814-43.21,33.674-43.21c20.562,0,33.376,14.006,33.376,43.21S561.879-33.674,541.317-33.674Zm194.892-178.5v76.884c-9.834-13.708-24.436-22.052-45-22.052-41.72,0-67.05,31.588-67.05,80.46s25.33,80.46,67.05,80.46c21.456,0,36.356-8.94,46.19-23.542V0h45.3V-212.176Zm-32.184,178.5c-20.562,0-32.78-12.814-32.78-42.018s12.218-44.4,32.78-44.4c20.86,0,33.078,14.006,33.078,43.21S724.885-33.674,704.025-33.674ZM862.263,4.47c46.19,0,73.308-17.88,73.308-49.766,0-27.416-17.582-42.018-53.938-47.68l-22.946-3.278c-14.9-2.384-22.35-6.258-22.35-15.5,0-8.94,6.854-14.6,23.542-14.6s27.714,5.066,28.31,21.754H931.4c-1.49-30.1-19.668-52.746-71.52-52.746-45,0-69.136,17.88-69.136,48.574,0,27.416,19.37,42.018,51.852,47.084l19.966,3.278c20.86,3.278,26.522,7.748,26.522,16.986s-7.152,14.9-25.926,14.9c-19.37,0-27.714-5.662-29.5-22.35h-45.3C791.041-10.728,815.179,4.47,862.263,4.47Z"
                                                        transform="translate(923.055 216.944)" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="nav_side">
                                        <a href="#A" className="nav_link w-inline-block">
                                            <p className="nav_link-text">Articles</p>
                                        </a>
                                        <a href="#A" className="nav_link w-inline-block">
                                            <p className="nav_link-text">Shop</p>
                                        </a>
                                        <a href="#A" className="nav_link w-inline-block">
                                            <p className="nav_link-text">Submit</p>
                                        </a>
                                    </div>
                                    <div className="nav_side is--right">
                                        <p className="nav_link-text">(2021), All rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section is--header">
                            <div className="container is--header">
                                <div className="header_text">
                                    <div className="header_text-wrap">
                                        <div className="header_text-move">
                                            <h1>Discover</h1>
                                        </div>
                                    </div>
                                    <div className="header_text-wrap">
                                        <div className="header_text-move">
                                            <h1 className="is--alt-text">the best in</h1>
                                        </div>
                                    </div>
                                    <div className="header_text-wrap">
                                        <div className="header_text-move">
                                            <h1>minimal</h1>
                                        </div>
                                    </div>
                                    <div className="header_text-wrap">
                                        <div className="header_text-move is--last">
                                            <h1>design</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="sticky-circle_wrap">
                                    <div className="sticky-circle">
                                        <div className="sticky-circle_element"><img
                                            src="https://assets.website-files.com/61a993eb9a24396d472b7770/61a9acabe07361ebdee22b3a_image3.jpg"
                                            loading="lazy" alt="" sizes="100vw"
                                            srcSet="https://assets.website-files.com/61a993eb9a24396d472b7770/61a9acabe07361ebdee22b3a_image3-p-500.jpeg 500w, https://assets.website-files.com/61a993eb9a24396d472b7770/61a9acabe07361ebdee22b3a_image3-p-800.jpeg 800w, https://assets.website-files.com/61a993eb9a24396d472b7770/61a9acabe07361ebdee22b3a_image3.jpg 1080w"
                                            className="sticky-circle_img" /></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section is--catories">
                            <div className="container is--categories">
                                <div className="categories"><a href="#A" className="categories_link w-inline-block">
                                    <div className="categories_border"></div>
                                    <p className="categories_link-text">Travel</p>
                                </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Home</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Office</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Kitchen</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Fashion</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Furniture</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Books</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Lighting</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Tech</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Decor</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">Bath &amp; Bed</p>
                                    </a><a href="#A" className="categories_link w-inline-block">
                                        <div className="categories_border"></div>
                                        <p className="categories_link-text">More</p>
                                    </a></div>
                            </div>
                        </section>
                        <section className="section is--grid">
                            <div className="container is--grid">
                                <div className="grid_text-wrap w-dyn-list">
                                    <div role="list" className="grid_text-list w-dyn-items">
                                        <div role="listitem" className="grid_text-item grid_text-item1 w-dyn-item">
                                            <p className="grid_text-title">Furniture</p>
                                        </div>
                                        <div role="listitem" className="grid_text-item grid_text-item2 w-dyn-item">
                                            <p className="grid_text-title">Decor</p>
                                        </div>
                                        <div role="listitem" className="grid_text-item grid_text-item3 w-dyn-item">
                                            <p className="grid_text-title">Office</p>
                                        </div>
                                        <div role="listitem" className="grid_text-item grid_text-item4 w-dyn-item">
                                            <p className="grid_text-title">Tech</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid_wrapper-contain">
                                    <div className="grid_wrapper grid_wrapper1 w-dyn-list">
                                        <div role="list" className="grid_list w-dyn-items">
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f375fb3b2487762e34b_furniture4.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f375fb3b2487762e34b_furniture4-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f375fb3b2487762e34b_furniture4.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f29da4f9f67e8a96c62_furniture3.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f29da4f9f67e8a96c62_furniture3-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f29da4f9f67e8a96c62_furniture3.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f1b3ba972c74f0c68a1_furniture2.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f1b3ba972c74f0c68a1_furniture2-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f1b3ba972c74f0c68a1_furniture2.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f0fd78e9995d9b714ee_furniture1.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f0fd78e9995d9b714ee_furniture1-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f0fd78e9995d9b714ee_furniture1.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_wrapper w-dyn-list">
                                        <div role="list" className="grid_list w-dyn-items">
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f9f007ec2ccc6825634_lighting6.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f91d645e7308f9b5dae_lighting5.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f84388c67087f759d3f_lighting4.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f786d7824cf60e46d52_lighting3.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f69f10376fa9f1b520c_lighting2.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f5c1c86978218435d5f_lighting1.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f5c1c86978218435d5f_lighting1-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f5c1c86978218435d5f_lighting1.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_wrapper w-dyn-list">
                                        <div role="list" className="grid_list w-dyn-items">
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fd24de55716766ac7d2_office4.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fc651de80cb9502383f_office3.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fc651de80cb9502383f_office3-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fc651de80cb9502383f_office3.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fbc5fb3b265f362e35d_office2.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fbc5fb3b265f362e35d_office2-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fbc5fb3b265f362e35d_office2.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99faf237415ee73ed1ece_office1.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99faf237415ee73ed1ece_office1-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a99faf237415ee73ed1ece_office1.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid_wrapper is--alt w-dyn-list">
                                        <div role="list" className="grid_list w-dyn-items">
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a0473ba97226060c68d7_tech6.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a03c007ec2d9c68258da_tech5.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a03c007ec2d9c68258da_tech5-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a03c007ec2d9c68258da_tech5.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a0346d78241fdce46d73_tech4.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a023624de5a4e75d4694_tech3.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a001e07361cb66e2082c_tech2.jpeg"
                                                    loading="lazy" alt="" sizes="29vw"
                                                    srcSet="https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a001e07361cb66e2082c_tech2-p-500.jpeg 500w, https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a001e07361cb66e2082c_tech2.jpeg 800w"
                                                    className="grid_img" /></div>
                                            </div>
                                            <div role="listitem" className="grid_item w-dyn-item">
                                                <div className="grid_element"><img
                                                    src="https://assets.website-files.com/61a99f057627efc50e6b701e/61a99ff451de807fa30238a8_tech1.jpeg"
                                                    loading="lazy" alt="" className="grid_img" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

            </section>

        </>
    );
}

export default App;
