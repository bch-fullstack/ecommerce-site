import React from 'react'

class LandingPage extends React.Component {
    render() {
        return (
            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="main-slider" className="owl-carousel owl-theme">
                                    <div className="item"><img src="img/main-slider1.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider2.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider3.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider4.jpg" alt="" className="img-fluid" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="advantages">
                        <div className="container">
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                                        <div className="icon"><i className="fa fa-heart"></i></div>
                                        <h3><a href="#" id="slogan">We love our customers</a></h3>
                                        <p className="mb-0">We are known to provide best possible service ever</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                                        <div className="icon"><i className="fa fa-tags"></i></div>
                                        <h3><a href="#">Best prices</a></h3>
                                        <p className="mb-0">You can check that the height of the boxes adjust when longer text like this one is used in one of them.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                                        <div className="icon"><i className="fa fa-thumbs-up"></i></div>
                                        <h3><a href="#">100% satisfaction guaranteed</a></h3>
                                        <p className="mb-0">Free returns on everything for 3 months.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="hot">
                        <div className="box py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="mb-0">Hot this week</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="product-slider owl-carousel owl-theme">
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product1.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product1_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">Fur coat with very but very very long name</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                    </p>
                                        </div>

                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">White Blouse Armani</a></h3>
                                            <p className="price">
                                                <del>$280</del>$143.00
                    </p>
                                        </div>

                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">Black Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                    </p>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">Black Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                    </p>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">White Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>

                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product1.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product1_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">Fur coat</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>

                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product2.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product2_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">White Blouse Armani</a></h3>
                                            <p className="price">
                                                <del>$280</del>$143.00
                                            </p>
                                        </div>

                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background"></div>
                                        </div>

                                    </div>

                                </div>
                                <div className="item">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front"><a href="/detail"><img src="img/product3.jpg" alt="" className="img-fluid" /></a></div>
                                                <div className="back"><a href="/detail"><img src="img/product3_2.jpg" alt="" className="img-fluid" /></a></div>
                                            </div>
                                        </div><a href="/detail" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid" /></a>
                                        <div className="text">
                                            <h3><a href="/detail">Black Blouse Versace</a></h3>
                                            <p className="price">
                                                <del></del>$143.00
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>


                    <div className="container">
                        <div className="col-md-12">
                            <div className="box slideshow">
                                <h3>Get Inspired</h3>
                                <p className="lead">Get the inspiration from our world className designers</p>
                                <div id="get-inspired" className="owl-carousel owl-theme">
                                    <div className="item"><a href="#"><img src="img/getinspired1.jpg" alt="Get inspired" className="img-fluid" /></a></div>
                                    <div className="item"><a href="#"><img src="img/getinspired2.jpg" alt="Get inspired" className="img-fluid" /></a></div>
                                    <div className="item"><a href="#"><img src="img/getinspired3.jpg" alt="Get inspired" className="img-fluid" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box text-center">
                        <div className="container">
                            <div className="col-md-12">
                                <h3 className="text-uppercase">From our blog</h3>
                                <p className="lead mb-0">What's new in the world of fashion? <a href="blog.html">Check our blog!</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-12">
                            <div id="blog-homepage" className="row">
                                <div className="col-sm-6">
                                    <div className="post">
                                        <h4><a href="post.html">Fashion now</a></h4>
                                        <p className="author-category">By <a href="#">John Slim</a> in <a href="">Fashion and style</a></p>
                                        <hr />
                                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a></p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="post">
                                        <h4><a href="post.html">Who is who - example blog post</a></h4>
                                        <p className="author-category">By <a href="#">John Slim</a> in <a href="">About Minimal</a></p>
                                        <hr />
                                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage