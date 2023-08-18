import React from "react";

import Category_img from "../images/binodon_one.jpeg";
import Image from "next/image";
import Binodon_left from "../images/binodon_left.jpg"

import "bootstrap/dist/css/bootstrap.min.css";
import Style from "../styles/binodon.module.css";
import { ST } from "next/dist/shared/lib/utils";

export default function Binodon() {
  return (
    <>
      <div className="container mt-5">
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
    </>
  );
}
