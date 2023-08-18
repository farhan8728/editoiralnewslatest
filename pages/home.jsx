import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import { useState } from "react";
import Image from "next/image";

import Img from "../images/carousel_img.png";
import ImgTitle from "../images/Rectangle 12.jpg";
import Ber from "../images/Line 1.png";
import BigImg from "../images/Rectangle 28.jpg";
import Ad from "../images/Rectangle 21.jpg";
import LeftImage from "../images/Rectangle 9.jpg";
import FourPartImg from "../images/Rectangle 86.png";
import PicGallary from "../images/Rectangle 78.png";
import BinodonPic from "../images/bindon.jpeg";

import Category_img from "../images/binodon_one.jpeg";

import Binodon_left from "../images/binodon_left.jpg"

import LeftTitle from "@/comnponent/lefttitle.component";
import ImageTitle from "@/comnponent/imageTitle.component";
import ImgBefore from "@/comnponent/imgbefore.component";
import Navbar from "@/comnponent/navbar.component";
import Footer from "@/comnponent/footer.component";

import Vote from "../comnponent/owlcarousel.component";

import Styles from "../styles/home.module.css";
import Style from "../styles/binodon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [button1Color, setButton1Color] = useState("#4A6FB6");
  const [font1Color, setFont1Color] = useState("#fff");
  const [font2Color, setFont2Color] = useState("#3D3C3C");
  const [button2Color, setButton2Color] = useState("#D9D9D9");
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (button) => {
    if (button === "button1") {
      setButton1Color("#4A6FB6");
      setButton2Color("#D9D9D9");
      setFont1Color("#fff");
      setFont2Color("#3D3C3C");
      setActiveButton("button1");
    } else if (button === "button2") {
      setButton1Color("#D9D9D9");
      setButton2Color("#4A6FB6");
      setActiveButton("button2");

      setFont1Color("#3D3C3C");
      setFont2Color("#fff");
    }
  };
  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Navbar />

      <section className={Styles.body}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <Image
                      src={Img}
                      width={813}
                      height={480}
                      layout="responsive"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <Image
                      src={Img}
                      width={813}
                      height={497}
                      layout="responsive"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <Image
                      src={Img}
                      layout="responsive"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={Styles.first_part}>
                <LeftTitle
                  title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                      ব্যাংক"
                  src={LeftImage}
                  para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                      বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                      তবে এখনো তেমন সাড়া মিলছে না।"
                  titleClassName={Styles.title}
                  paraClassName={Styles.para}
                  imgClassName={Styles.imgClass}
                />
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-12">

                <LeftTitle
                title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
        ব্যাংক"
                src={LeftImage}
                para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
        বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
        তবে এখনো তেমন সাড়া মিলছে না।"
                titleClassName={Styles.title}
                paraClassName={Styles.para}
                imgClassName={Styles.imgClass}
              />

                </div>

                <div className="col-md-6 col-lg-12">

                        <LeftTitle
                        title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                        ব্যাংক"
                        src={LeftImage}
                        para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                        বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                        তবে এখনো তেমন সাড়া মিলছে না।"
                        titleClassName={Styles.title}
                        paraClassName={Styles.para}
                        imgClassName={Styles.imgClass}
                        />

                </div>
              </div>

              

              
            </div>
          </div>

          <section>
            <div className="row mt-4">
              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className={`col-md-4 col-lg-4 ${Styles.first_part}`}>
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <ImageTitle
                      src={ImgTitle}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className="col-md-6 col-lg-6">
                    <ImageTitle
                      src={ImgTitle}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className="row">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>রাজনীতি</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 col-lg-6">
                      <ImageTitle
                        src={ImgTitle}
                        imgClassName={Styles.titleimg}
                        title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                        titleClassName={Styles.title_img}
                      />
                    </div>

                    <div className="col-md-6 col-lg-6">
                      <ImgBefore
                        title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                        src={LeftImage}
                        para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                        titleClassName={Styles.title_latest}
                        paraClassName={Styles.para_latest}
                        imgClassName={Styles.imgClass}
                      />

                      <ImgBefore
                        title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                        src={LeftImage}
                        para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                        titleClassName={Styles.title_latest}
                        paraClassName={Styles.para_latest}
                        imgClassName={Styles.imgClass}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-6 col-lg-4 ${Styles.latest_news}`}>
                <div>
                  <div>
                    <button
                      style={{
                        backgroundColor: button1Color,
                        color: font1Color,
                      }}
                      onClick={() => handleButtonClick("button1")}
                      className={Styles.button_one}
                    >
                      সর্বশেষ
                    </button>
                    <button
                      style={{
                        backgroundColor: button2Color,
                        color: font2Color,
                      }}
                      onClick={() => handleButtonClick("button2")}
                      className={Styles.button_two}
                    >
                      জনপ্রিয়
                    </button>
                    {activeButton === "button1" && (
                      <div
                        className="mt-3"
                        style={{ maxHeight: "620px", overflow: "auto" }}
                      >
                        <ImgBefore
                          title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                          src={LeftImage}
                          para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                          titleClassName={Styles.title_latest}
                          paraClassName={Styles.para_latest}
                          imgClassName={Styles.imgClass}
                        />

                        <ImgBefore
                          title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                          src={LeftImage}
                          para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                          titleClassName={Styles.title_latest}
                          paraClassName={Styles.para_latest}
                          imgClassName={`img-fluid ${Styles.imgClass}`}
                        />
                        <ImgBefore
                          title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                          src={LeftImage}
                          para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                          titleClassName={Styles.title_latest}
                          paraClassName={Styles.para_latest}
                          imgClassName={Styles.imgClass}
                        />

                        <ImgBefore
                          title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                          src={LeftImage}
                          para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                          titleClassName={Styles.title_latest}
                          paraClassName={Styles.para_latest}
                          imgClassName={Styles.imgClass}
                        />

                        <ImgBefore
                          title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                          src={LeftImage}
                          para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                          titleClassName={Styles.title_latest}
                          paraClassName={Styles.para_latest}
                          imgClassName={Styles.imgClass}
                        />
                      </div>
                    )}
                    {activeButton === "button2" && (
                      <div
                        className="mt-3"
                        style={{ maxHeight: "620px", overflow: "auto" }}
                      >
                        <ImgBefore
                          title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                          src={LeftImage}
                          para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                          titleClassName={Styles.title_latest}
                          paraClassName={Styles.para_latest}
                          imgClassName={Styles.imgClass}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row my-4">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image src={Ad} layout="responsive" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-4">
                <div className="row mb-3">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h2 className={Styles.rajniti}>অর্থনীতি</h2>
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-12">
                    <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                  ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                  বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                  তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>

                  <div className="col-md-6 col-lg-12">
                    <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                  ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                  বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                  তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>

                  <div className="col-md-6 col-lg-12">
                    <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>

                  <div className={`col-md-6 col-lg-12`}>
                    <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>
                </div>


                <div className={Styles.more_btn}>
                  <p className={Styles.more}>আরও</p>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row mb-3">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h2 className={Styles.rajniti}>জাতীয়</h2>
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <ImageTitle
                      src={ImgTitle}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />

                    <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />

                    <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>

                  <div className={`col-md-6 col-lg-6 ${Styles.some}`}>
                    <Image src={BigImg} layout="responsive" />

                    <h4 className={Styles.area_news}>আমার এলাকার খবর</h4>

                    <select name="বিভাগ" id="বিভাগ" className={Styles.divison}>
                      <option value="volvo">বিভাগ</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                    <select name="জেলা" id="জেলা" className={Styles.divison}>
                      <option value="volvo">জেলা</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                    <select name="জেলা" id="জেলা" className={Styles.divison}>
                      <option value="volvo">উপজেলা</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                    <p className={Styles.search}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                      খুঁজুন
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center">
                  <Image src={Ad} layout="responsive" />
                </div>
              </div>
            </div>


            {/* binodon */}
            <div className="container mt-5 mb-5">
        <section className={Style.binodon}>
          <div className="row">
            <div className="col-4 col-sm-4 col-lg-4">

              <section className={Style.binodon_details}>

                <div
                  className="col-md-12 col-lg-6 mb-3"
                  style={{ cursor: "pointer" }}
                >
                  <div className={Style.big_img}>
                    <Image src={Category_img} className={Style.binodon_img} />
                  </div>

                  <div className={Style.big_img_title_bg}>
                    <p className={Style.big_img_title}>
                    দাম্পত্য টানা পোড়েনের মধ্যেও পরীমণিকে এ কেমন উপহার দিলেন তার স্বামী শরিফুল রাজ।
                    </p>
                  </div>

                </div>

              </section>

              <section className={Style.binodon_details_two}>

                <div
                  
                  style={{ cursor: "pointer" }}
                >
                  <div className={Style.big_img}>
                    <Image src={Category_img} className={Style.binodon_img} />
                  </div>

                  <div className={Style.big_img_title_bg}>
                    <p className={Style.big_img_title_two}>
                    দাম্পত্য টানা পোড়েনের মধ্যেও পরীমণিকে এ কেমন উপহার দিলেন তার স্বামী শরিফুল রাজ।
                    </p>
                  </div>

                </div>

              </section>


            </div>

            <div className="col-8 col-sm-8 ol-lg-8" style={{ cursor: "pointer" }}>
                <section className={Style.binodon_largeimg}>
                    <div className={Style.big_img}>
                        <Image 
                            src={Binodon_left}
                            className={Style.binodon_img_right}
                        />
                    </div>

                    <div className={Style.big_img_title_bg}>
                        <p className={Style.big_img_title_right}>
                        দাম্পত্য টানা পোড়েনের মধ্যেও পরীমণিকে এ কেমন উপহার দিলেন তার স্বামী শরিফুল রাজ।
                        </p>
                  </div>
                </section>
            </div>
          </div>
        </section>
      </div>

      {/* binodon */}

            

            <div className="row mb-4">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h2 className={Styles.rajniti}>খেলা</h2>
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>
                </div>
              </div>

              <div className=" col-lg-4">
                
                <div className="row">
                  <div className="col-md-6 col-lg-12">
                      <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>

                  <div className="col-md-6 col-lg-12">
                      <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />
                  </div>
                </div>

             
              </div>

              <div className=" col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className="col-lg-4">

                <div className="row">
                  <div className="col-md-6 col-lg-12">

                      <ImgBefore
                      title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                ব্যাংক"
                      src={LeftImage}
                      para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                তবে এখনো তেমন সাড়া মিলছে না।"
                      titleClassName={Styles.title_latest}
                      paraClassName={Styles.para_latest}
                      imgClassName={Styles.imgClass}
                    />

                  </div>

                  <div className="col-md-6 col-lg-12">
                  <ImgBefore
                  title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
            ব্যাংক"
                  src={LeftImage}
                  para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
            তবে এখনো তেমন সাড়া মিলছে না।"
                  titleClassName={Styles.title_latest}
                  paraClassName={Styles.para_latest}
                  imgClassName={Styles.imgClass}
                />
                  </div>
                </div>
               

              
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h2 className={Styles.rajniti}>আন্তর্জাতিক</h2>
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <Image src={BigImg} layout="responsive" />
              </div>

              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>

              <div className="col-md-6 col-lg-4">
                <ImageTitle
                  src={ImgTitle}
                  imgClassName={Styles.titleimg}
                  title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                  titleClassName={Styles.title_img}
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center">
                  <Image src={Ad} layout="responsive" />
                </div>
              </div>
            </div>

            <section>
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>শিক্ষা</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>চাকরি</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #3D3C3C;" }}>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>প্রযুক্তি</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #3D3C3C;" }}>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>স্বাস্থ্য</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #3D3C3C;" }}>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>
              </div>
            </section>

            <div className="row my-4">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center">
                  <Image src={Ad} layout="responsive" />
                </div>
              </div>
            </div>

            <section>
              <div className="row mt-5">
                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>শিক্ষা</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>চাকরি</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #3D3C3C;" }}>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>প্রযুক্তি</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #3D3C3C;" }}>
                    <ImageTitle
                      src={FourPartImg}
                      imgClassName={Styles.titleimg}
                      title="‘স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName={Styles.title_img}
                    />
                  </div>

                  <div className={Styles.news_edu}>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>

                  <div>
                    <h5
                      className="my-3"
                      style={{ cursor: "pointer", fontWeight: "600" }}
                    >
                      {" "}
                      তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ দেবে গবেষণায় ফেলোশিপ
                    </h5>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>ভোট</h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>

                  <Vote />

                  <p className={Styles.vote_btn}>Vote</p>
                </div>
              </div>
            </section>

            <section>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <h2 className={Styles.rajniti}>ছবি গ্যালারি </h2>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                      <Image src={Ber} layout="responsive" />

                      <Image src={Ber} layout="responsive" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-6 col-lg-6 mb-4">
                  <Image src={PicGallary} className={Styles.pic_galary} />

                  {/* <div className="row mt-4">
                    <div className="col-lg-6">
                      <Image 
                        src={PicGallary}
                        
                        className={Styles.pic_galary}
                      />
                    </div>

                    <div className="col-lg-6">
                      <Image 
                        src={PicGallary}
                        
                        className={Styles.pic_galary}
                      />
                    </div>
                  </div> */}
                </div>

                <div className="col-md-6 col-lg-6">
                  <Image src={PicGallary} className={Styles.pic_galary} />
                </div>
              </div>
            </section>

            <div className="row my-4">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center">
                  <Image src={Ad} layout="responsive" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h2 className={Styles.rajniti}>ভিডিও গ্যালারি </h2>
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <Image src={Ber} layout="responsive" />

                    <Image src={Ber} layout="responsive" />
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                <iframe
                  width="630"
                  height="315"
                  src="https://www.youtube.com/embed/J5Yz2WAXr20"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className={Styles.vedio}
                ></iframe>

                <iframe
                  width="630"
                  height="315"
                  src="https://www.youtube.com/embed/J5Yz2WAXr20"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className={Styles.vedio}
                ></iframe>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <iframe
                  width="630"
                  height="315"
                  src="https://www.youtube.com/embed/J5Yz2WAXr20"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className={Styles.vedio}
                ></iframe>

                <iframe
                  width="630"
                  height="315"
                  src="https://www.youtube.com/embed/J5Yz2WAXr20"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className={Styles.vedio}
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}
