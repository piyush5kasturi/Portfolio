import React,{useState} from 'react';
import swal from 'sweetalert';
import{db} from "../firebase";

export const Main = () => {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [subject, setSubject]=useState("");
    const [message, setMessage]=useState("");

    const [loading,setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)


        db.collection('contacts').add({
            name: name,
            email: email,
            subject: subject,
            message: message,
        })
        .then(()=>{
            swal("Thank you!", "Your message has been submitted.", "success");
            setLoader(false);
        })
        .catch((error)=> {
            swal("Error!", error.message, "error");
            setLoader(false);
        });


        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    
    }


    let styleHero={
        "backgroundImage": "url(assets/img/hero-bg1.jpeg)"
    }
    let stylebar1={
        "width": "85%"
    }
    let stylebar2={
        "width": "75%"
        
    }
    let stylebar3={
        "width": "60%"
    }
    let stylebar4={
        "width": "50%"
    }
    let stylebar5={
        "width": "30%"
    }
    let styleim={
        "hight": "516px"
    }
    let styleContact={
        "backgroundImage":" url(assets/img/overlay-bg.jpg"
    }
    let styleTest={
        "backgroundImage": "url(assets/img/overlay-bg.jpg)"
    }
    let styleCounter={
        "backgroundImage":" url(assets/img/counters-bg.jpg)"
    }


    return (

        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    {/* <h1 className="logo"><a href="index.html">Portfolio</a></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                     <a href="index.html" className="logo"><img src="https://media.istockphoto.com/vectors/digital-letter-p-icon-symbol-template-in-gradients-style-blue-yellow-vector-id1138789322?k=6&m=1138789322&s=612x612&w=0&h=I96L9Svm64Kv7Hi_ObLKzqQED3cg8zpGeEWHfNlbn0U=" alt="" className="img-fluid"/></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#work">Work</a></li>
                            <li><a className="nav-link scrollto " href="#team">Team</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle "></i>
                    </nav>
                    {/* <!-- .navbar --> */}

                </div>
            </header>
            {/* <!-- End Header --> */}

            {/* <!-- ======= Hero Section ======= --> */}
            <div id="hero" className="hero route bg-image" style={styleHero}>
                <div className="overlay-itro"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            {/* <!--<p className="display-6 color-d">Hello, world!</p>--> */}
                            <h1 className="hero-title mb-4">I am Piyush</h1>
                            <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer"></span></p>
                            {/* <!-- <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <main id="main">

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-5">
                                                    <div className="about-img work-box work-img ">
                                                        <img src="assets/img/testimonial-21.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
                      </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-7">
                                                        <div className="about-info">
                                                            <p><span className="title-s">Name: </span> <span>Piyush</span></p>
                                                            <p><span className="title-s">Profile: </span> <span>Web developer</span></p>
                                                            <p><span className="title-s">Email: </span> <span>piyush5kasturi@gmail.com</span></p>
                                                            <p><span className="title-s">Phone: </span> <span>(+91) 7009180157</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-mf">
                                                    <p className="title-s">Skill</p>
                                                    <span>HTML</span> <span className="pull-right ">85%</span>
                                                    <div className="progress ">
                                                        <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={stylebar1} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span>CSS3</span> <span className="pull-right">75%</span>
                                                    <div className="progress">
                                                        <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={stylebar2} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span>PYTHON</span> <span className="pull-right">60%</span>
                                                    <div className="progress">
                                                        <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={stylebar3} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span>JAVASCRIPT</span> <span className="pull-right">50%</span>
                                                    <div className="progress">
                                                        <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={stylebar4} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span>REACT</span> <span className="pull-right">30%</span>
                                                    <div className="progress">
                                                        <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={stylebar5} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <span>BOOTSTRAP</span> <span className="pull-right">85%</span>
                                                    <div className="progress">
                                                        <div className="progress-bar  progress-bar-striped progress-bar-animated" role="progressbar" style={stylebar1} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="about-me pt-4 pt-md-0">
                                                    <div className="title-box-2">
                                                        <h5 className="title-left">
                                                            About me
                      </h5>
                                                    </div>
                                                    <p className="lead">
                                                    I am a Bachelor of Technology student in the Department of Computer Science at the Punjabi University , Patiala  graduating in May 2023.
                                                     I have a Diploma from the Thaper Polytechnic college, Patiala.
                    </p>
                                                    <p className="lead">
                                                    Previously, I worked at WIPRO Limited, India as a Software Support Engineer,  After complete my diploma.
                                                    where I worked on MAXIMO Web application which is IBM product.I provide training to the client on there different localites.
                    </p>
                                                    <p className="lead">
                                                        Currently, I am working to brush up my web Development skills. My main focus is to learn React.
                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </section>
                    {/* <!-- End About Section --> */}

                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services-mf pt-5 route">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="title-box text-center">
                                        <h3 className="title-a">
                                            Services
              </h3>
                                        <p className="subtitle-a">
                                           We provide over best to the client's.
              </p>
                                        <div className="line-mf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-ico">
                                            <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
                                        </div>
                                        <div className="service-content">
                                            <h2 className="s-title">Web Design</h2>
                                            <p className="s-description text-center">
                                            A web designer works on the appearance, layout, and, in some cases, content of a website. 
                                            Appearance, for instance, relates to the colors, font, and images used.
                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-ico">
                                            <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                                        </div>
                                        <div className="service-content">
                                            <h2 className="s-title">Web Development</h2>
                                            <p className="s-description text-center">
                                            Web development is the building and maintenance of websites;
                                             it’s the work that happens behind the scenes to make a website look great,
                                             work fast and perform well with a seamless user experience..
                </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-ico">
                                            <span className="ico-circle"><i className="bi bi-binoculars"></i></span>
                                        </div>
                                        <div className="service-content">
                                            <h2 className="s-title">Responsive Design</h2>
                                            <p className="s-description text-center">
                                            Responsive web design is about creating web pages that look good on all devices!
                                            A responsive web design will automatically adjust for different screen sizes and viewports.
                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Services Section --> */}


                    {/* <!-- ======= Portfolio Section ======= --> */}
                    <section id="work" className="portfolio-mf sect-pt4 route">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="title-box text-center">
                                        <h3 className="title-a">
                                            Portfolio
              </h3>
                                        {/* <p className="subtitle-a">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p> */}
                                        <div className="line-mf"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="work-box">
                                        <a href="https://i.pinimg.com/originals/73/e8/45/73e84536f3fdd3eefed7472ef7a5db0a.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                            <div className="work-img">
                                                <img src="https://i.pinimg.com/originals/73/e8/45/73e84536f3fdd3eefed7472ef7a5db0a.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </a>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">Wedding Gallery</h2>
                                                    <div className="w-more">
                                                        <span className="w-ctegory">Web Design</span> / <span className="w-date">24 April. 2021</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="w-like">
                                                        <a href="https://photogallery-3a21e.web.app/" target="_blank"> <span className="bi bi-plus-circle"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="work-box">
                                        <a href="https://papers.co/wallpaper/papers.co-nh16-light-road-wood-forest-way-nature-flare-40-wallpaper.jpg" style={styleim} data-gallery="portfolioGallery" className="portfolio-lightbox">
                                            <div className="work-img">
                                                <img src="https://papers.co/wallpaper/papers.co-nh16-light-road-wood-forest-way-nature-flare-40-wallpaper.jpg" style={styleim} alt="" className="img-fluid" />
                                            </div>
                                        </a>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">More projects on the way..</h2>
                                                    
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="w-like">
                                                        <a href="portfolio-details.html" > <span className="bi bi-plus-circle"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Portfolio Section --> */}

                    {/* <!-- ======= Testimonials Section ======= --> */}
                    <div id="team" className="testimonials paralax-mf bg-image" style={styleTest}>
                        <div className="overlay-mf"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                                        <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                <div className="testimonial-box">
                                                    <div className="author-test">
                                                        <img src="assets/img/tarun.jpeg" alt="" className="rounded-circle b-shadow-a" />
                                                        <span className="author">Tarun Kumar Mittal</span>
                                                    </div>
                                                    <div className="content-test">
                                                        <p className="description lead">
                                                            He can manage front-end and as well as back-end.
                      </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End testimonial item --> */}

                                            <div className="swiper-slide">
                                                <div className="testimonial-box">
                                                    <div className="author-test">
                                                        <img src="assets/img/fin.jpeg" alt="" className="rounded-circle b-shadow-a" />
                                                        <span className="author">Finashu Khallar</span>
                                                    </div>
                                                    <div className="content-test">
                                                        <p className="description lead">
                                                           He can design web sites.
                      </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End testimonial item --> */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-box">
                                                    <div className="author-test">
                                                      <a href="http://arshresume.epizy.com" target="_blank">  <img src="assets/img/arsh.jpeg" alt="" className="rounded-circle b-shadow-a" /> </a>
                                                        <span className="author">Arshdeep Singh</span>
                                                    </div>
                                                    <div className="content-test">
                                                        <p className="description lead">
                                                            PHP Developer.
                      </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End testimonial item --> */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-box">
                                                    <div className="author-test">
                                                        <img src="assets/img/jaskaran.jpg" alt="" className="rounded-circle b-shadow-a" />
                                                        <span className="author">Jaskaran Singh</span>
                                                    </div>
                                                    <div className="content-test">
                                                        <p className="description lead">
                                                            Working on PYTHON.
                      </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End testimonial item --> */}
                                            
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>

                                     {/* <div id="testimonial-mf" className="owl-carousel owl-theme">

                                                                        </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Testimonials Section --> */}


                    {/* <!-- ======= Contact Section ======= --> */}
                    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={styleContact}>
                        <div className="overlay-mf"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="contact-mf">
                                        <div id="contact" className="box-shadow-full">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="title-box-2">
                                                        <h5 className="title-left">
                                                            Send Message Us
                      </h5>
                                                    </div>
                                                    <div>
                                                        <form onSubmit={handleSubmit} role="form" className="php-email-form">
                                                            <div className="row">
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Your Name" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Your Email" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" placeholder="Subject" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" placeholder="Message" required></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 text-center my-3">
                                                                    {/* <div className="loading">Loading</div>
                                                                    <div className="error-message"></div>
                                                                    <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                                                </div>
                                                                <div className="col-md-12 text-center">
                                                                    <button type="submit" style={{background : loading ? "#ccc": "#0078ff"}} className="button button-a button-big button-rouded">Send Message</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="title-box-2 pt-4 pt-md-0">
                                                        <h5 className="title-left">
                                                            Get in Touch
                      </h5>
                                                    </div>
                                                    <div className="more-info">
                                                        <p className="lead">
                                                            Our team is happy to answer your questions. Fill out the form and 
                                                            we'll be in touch as soon as possible. Never mind to contact us. Thank You.
                      </p>
                                                        <ul className="list-ico">
                                                            <li><span className="bi bi-geo-alt"></span> 1308 Rajpura,Punjab , India</li>
                                                            <li><span className="bi bi-phone"></span> (+91) 7009180157</li>
                                                            <li><span className="bi bi-envelope"></span> piyush5kasturi@gmail.com</li>
                                                        </ul>
                                                    </div>
                                                    <div className="socials">
                                                        <ul>
                                                            <li><a href=""><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                                                            <li><a href=""><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                                                            <li><a href=""><span className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
                                                            <li><a href="https://www.linkedin.com/in/piyush-kasturi-ba442020b/" target="_blank"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Contact Section --> */}

  </main>
                {/* <!-- End #main --> */}

                {/* <!-- ======= Footer ======= --> */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright-box">
                                    <p className="copyright">&copy; Copyright <strong>Portfolio</strong>. All Rights Reserved</p>
                                    <div className="credits">
              Designed by <a href="#">Piyush</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- End  Footer --> */}

                <div id="preloader"></div>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


                                                                                    </div>

    )
}
