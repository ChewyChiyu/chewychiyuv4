import { React } from 'react';
import $ from "jquery"
import { useEffect } from 'react';
const Navigation = () => {

    function handleScroll() {
        var scrollTopButton = document.getElementById("scroll-top-button")
        if (window.pageYOffset > 800) {
            scrollTopButton.classList.add("show-cc")
        } else {
            scrollTopButton.classList.remove("show-cc")
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <div class="container py-4 d-flex flex-row flex-wrap justify-content-center align-items-center">
                <h1 class="display-6" style={{ letterSpacing: "1rem", paddingLeft: "1rem", fontWeight: 400 }}> CHEWYCHIYU </h1>
                <span class="flex-fill d-none d-md-block" />
                <div>
                    <a className="btn" href="https://www.instagram.com/chewychiyu/" role="button" target="_blank" rel="noreferrer noopener"><i className="bi-facebook"></i></a>
                    <a className="btn" href="https://www.instagram.com/chewyceramics/" role="button" target="_blank" rel="noreferrer noopener"><i className="bi-instagram"></i></a>
                    <a className="btn" href="https://www.twitter.com/chewychiyu/" role="button" target="_blank" rel="noreferrer noopener"><i className="bi-twitter"></i></a>
                </div>

            </div>
            <button id="scroll-top-button" class="btn position-fixed scroll-top-button text-white py-0 px-2 shadow-none" onClick={() => $("html, body").animate({ scrollTop: 0 }, "fast")}> <p style={{ fontSize: "150%", fontWeight: 200 }}>&#65087;</p> </button>
        </>

    )
}

export default Navigation