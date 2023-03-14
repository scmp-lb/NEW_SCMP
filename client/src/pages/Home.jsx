import React,{useEffect} from "react";
import Nav from "../components/Nav";
import LoremIpsum from "react-lorem-ipsum";
import Hero from "../assets/images/Banner/energycover.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineBulb } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdExplore } from 'react-icons/md';
import { IoIosCash } from 'react-icons/io';
import Footer from "../components/footer"
import Image from "../assets/images/venture.webp";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [500])
  return (
    <div className="Home-page">
      <Nav />
      <img src={Hero} alt=" Hero Image"></img>
      <h1>
        IMAGINE&nbsp;&nbsp;<span>  IT !</span>
        <br></br>
        PLAN&nbsp; &nbsp; <span>  IT !</span>
        <br></br>
        MAKE IT&nbsp;&nbsp;  <span>   HAPPEN !</span>
      </h1>

      <div className="about-us">
        <h2  data-aos="fade-up">
          ABOUT <span>US</span>
        </h2>
       
        <div className="About-us-cont">
          <div data-aos="fade-up" className="About-us-image">
            <img src={Image}></img>
          </div>
          <div className="About-us-text">
          <h3>SCIENTIFIC CENTER OF &nbsp;<span>MANUFACTURING&nbsp;</span> AND&nbsp; <span>PRODUCTION</span></h3>
            <p>
              <LoremIpsum />
            </p>
          </div>
        </div>
      </div>
      <div className="Offer-container">
        <div className="Offer">
          <h2 data-aos="fade-up">
            WHAT WE <span>OFFER</span>
          </h2>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="icon">
              {" "}
              <FaLaptopCode />
            </div>{" "}
            <h3>Technology</h3>
          </div>
          <div className="card">
          <div className="icon">
              {" "}
              <MdExplore/>
            </div>{" "}
            <h3>Research</h3>
          </div>
          <div className="card">
          <div className="icon">
              {" "}
              <IoIosCash />

            </div>{" "}
            <h3>Investment Funding</h3>
          </div>
          <div className="card">
          <div className="icon">
              {" "}
              <AiOutlineBulb/>
            </div>{" "}
            <h3>Incubate Ideas</h3>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
