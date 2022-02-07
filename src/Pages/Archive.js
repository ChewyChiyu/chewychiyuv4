import { React } from 'react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactImageMagnify from 'react-image-magnify';
import Helmet from 'react-helmet';
import { Modal } from 'react-bootstrap';
const Archive = () => {

    const [clickedImg, setClickedImg] = useState()
    const [showModal, setShowModal] = useState(false)
    const [imgs, setImgs] = useState([])
    const count = 20
    const maxCount = 179


    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        var fetchCount = Math.min(count, maxCount - imgs.length)
        var nextBatch = Array.from(Array(fetchCount).keys()).map(i => { return "images/SmallAssests/no" + (imgs.length + i) + " Small.jpeg" })
        setImgs([...imgs].concat([...nextBatch]))
    }
    function onClickImg(img) {
        setClickedImg("images/Assests/no" + ("" + img).replace(/[^0-9]/g, '') + ".jpeg")
        setShowModal(true)
    }

    function onModalLoad() {
        document.getElementById("modal-placeholder").style.display = "none"
        document.getElementById("modal-img").style.display = "block"
    }

    return (
        <>

            <Helmet>
                <title>CHEWYCHIYU | An Exhibition Of Artworks | Functional Contemporary Ceramic Art </title>
                <meta name="title" content="CHEWYCHIYU | An Exhibition Of Artworks | Functional Contemporary Ceramic Art " />

                <meta name="description" content="CHEWYCHIYU | Chiyu - Exhibits Functional Contemporary Ceramic Art Pieces. Discover An Inspiring Art Style. Explore An Extensive Collection of Works. " />

                <meta property="og:url" content="https://chewychiyu.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="CHEWYCHIYU | An Exhibition Of Artworks | Functional Contemporary Ceramic Art " />
                <meta property="og:description" content="CHEWYCHIYU | Chiyu - Exhibits Functional Contemporary Ceramic Art Pieces. Discover An Inspiring Art Style. Explore An Extensive Collection of Works. " />
                <meta property="og:image" content="https://chewychiyu.com/images/websiteIcon.jpeg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="chewychiyu.com" />
                <meta property="twitter:url" content="https://www.chewychiyu.com" />
                <meta name="twitter:title" content="CHEWYCHIYU | An Exhibition Of Artworks | Functional Contemporary Ceramic Art " />
                <meta name="twitter:description" content="CHEWYCHIYU | Chiyu - Exhibits Functional Contemporary Ceramic Art Pieces. Discover An Inspiring Art Style. Explore An Extensive Collection of Works. " />
                <meta name="twitter:image" content="https://chewychiyu.com/images/websiteIcon.jpeg" />

                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
            </Helmet>


            <Modal show={showModal} onHide={() => setShowModal(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="p-0">
                    <img src="/images/placeholder.jpeg" id="modal-placeholder" alt="placeholder" className="img-fluid shimmer" style={{ opacity: 0.15, height: "100%", width: "100%" }} />
                    <div id="modal-img" style={{ display: "none" }}>
                        <ReactImageMagnify
                            isHintEnabled={true}
                            enlargedImagePosition={"over"}
                            className="show-cc"
                            {...{
                                smallImage: {
                                    alt: clickedImg,
                                    isFluidWidth: true,
                                    onLoad: () => onModalLoad(),
                                    src: clickedImg,
                                },
                                largeImage: {
                                    alt: clickedImg,
                                    src: clickedImg,
                                    width: 1800,
                                    height: 1800,
                                },
                            }} />
                    </div>
                </Modal.Body>
            </Modal>

            <InfiniteScroll
                dataLength={imgs.length}
                next={fetchData}
                hasMore={imgs.length < maxCount}
                scrollThreshold={"50%"}
                loader={
                    <div className="container">
                        <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
                            {
                                [...Array(count).keys()].map((i) => {
                                    return (
                                        <img key={"" + i} src="/images/placeholder.jpeg" alt="Placeholder" draggable="false" className="shimmer img-fluid p-1" style={{ opacity: 0.15 }} />
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            >
                <div className="container">
                    <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
                        {imgs && imgs.map(img => {
                            return (
                                <div key={"" + img} class="p-1 grow-cc show-cc">
                                    <img id={"" + img} src={img} className="img-fluid" alt="Ceramic Art Piece" draggable="false" onClick={() => onClickImg(img)} />
                                </div>
                            )
                        })
                        }
                    </div>

                </div>
            </InfiniteScroll>

        </>

    )
}

export default Archive