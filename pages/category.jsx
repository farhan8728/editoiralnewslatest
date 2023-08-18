import React from "react";
import Category_img from "../images/big_img_category.png";
import Image from "next/image";

import Style from "../styles/category.module.css";

import Main_Pic from "../images/Rectangle 92.jpg";
import Add from "../images/1.png";
import Long_Add from "../images/Rectangle 21.jpg";
import LeftImage from "../images/Rectangle 9.jpg";

import ImgTitleDescription from "../comnponent/imgtitledescription.component";
import ImgBefore from "@/comnponent/imgbefore.component";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Category() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 col-lg-6 mb-3"
            style={{ cursor: "pointer" }}
          >
            <div className={Style.big_img}>
              <Image src={Category_img} className="img-fluid" />
            </div>

            <div className={Style.big_img_title_bg}>
              <p className={Style.big_img_title}>
                ডিজিটাল নিরাপত্তা উন্নত নয় বলেই হ্যাক হচ্ছে, তথ্য চলে যাচ্ছে:
                ফখরুল
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <ImgTitleDescription
              src={Main_Pic}
              title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
              titleClassName={Style.title_rightside}
              para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
              paraClassName={Style.para_rightside}
              imgClassName={`img-fluid ${Style.details_img}`}
            />
          </div>

          <div className="col-md-6 col-lg-3 ">
            <span className={`d-flex justify-content-center align-items-center ${Style.ad}`}>
              <Image src={Add} className={Style.ad_mid} />
            </span>
          </div>
        </div>

        <div className="row mt-4 mb-4">
          <div className="col-md-6 col-lg-3">
            <ImgTitleDescription
              src={Main_Pic}
              title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
              titleClassName={Style.title_rightside}
              para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
              paraClassName={Style.para_rightside}
              imgClassName={`img-fluid ${Style.details_img}`}
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <ImgTitleDescription
              src={Main_Pic}
              title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
              titleClassName={Style.title_rightside}
              para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
              paraClassName={Style.para_rightside}
              imgClassName={`img-fluid ${Style.details_img}`}
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <ImgTitleDescription
              src={Main_Pic}
              title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
              titleClassName={Style.title_rightside}
              para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
              paraClassName={Style.para_rightside}
              imgClassName={`img-fluid ${Style.details_img}`}
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <ImgTitleDescription
              src={Main_Pic}
              title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
              titleClassName={Style.title_rightside}
              para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
              paraClassName={Style.para_rightside}
              imgClassName={`img-fluid ${Style.details_img}`}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center">
              <Image src={Long_Add} className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row mt-4 mb-4">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <ImgBefore
                  title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                            ব্যাংক"
                  src={LeftImage}
                  para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                  titleClassName={Style.title_latest}
                  paraClassName={Style.para_latest}
                  imgClassName={`img-fluid ${Style.imgClass}`}
                />

                <ImgBefore
                  title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                            ব্যাংক"
                  src={LeftImage}
                  para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                  titleClassName={Style.title_latest}
                  paraClassName={Style.para_latest}
                  imgClassName={`img-fluid ${Style.imgClass}`}
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
                  titleClassName={Style.title_latest}
                  paraClassName={Style.para_latest}
                  imgClassName={`img-fluid ${Style.imgClass}`}
                />

                <ImgBefore
                  title="রুপিতে লেনদেনে গ্রাহক খুঁজছে
                            ব্যাংক"
                  src={LeftImage}
                  para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                  titleClassName={Style.title_latest}
                  paraClassName={Style.para_latest}
                  imgClassName={`img-fluid ${Style.imgClass}`}
                />
              </div>
            </div>

            <p className={Style.more}>আরও</p>
          </div>

          <div className="col-lg-4">
          <span className={`d-flex justify-content-center align-items-center ${Style.ad}`}>
              <Image src={Add} className={Style.ad_mid} />
            </span>

            <span className={`d-flex justify-content-center align-items-center ${Style.ad}`}>
              <Image src={Add} className={`mt-4 ${Style.ad_mid}`} />
            </span>
          </div>
        </div>


        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center">
              <Image src={Long_Add} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
