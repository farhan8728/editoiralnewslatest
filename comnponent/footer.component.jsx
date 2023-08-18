import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import Style from "../styles/footer.module.css"

export default function Footer() {
  return (
    <>
        <section className={Style.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <p className={Style.title}>সম্পাদক ও প্রকাশক: EditorialNews24</p>
                    </div>

                    <div className="col-3 col-sm-3 col-md-2 col-lg-2">
                       <section className={Style.footer_second_part}>    
                            <p className={Style.bd}>বাংলাদেশ</p>
                                <p className={Style.bd_two}>বহিবিশ্ব</p>
                                <p className={Style.bd_two}>খেলাধুলা</p>
                       </section>
                    </div>

                    <div className="col-3 col-sm-3 col-md-2 col-lg-2">
                       <section className={Style.footer_second_part}>    
                            <p className={Style.bd}>বিনোদন</p>
                                <p className={Style.bd_two}>সম্পাদকীয়</p>
                                <p className={Style.bd_two}>সাহিত্য</p>
                       </section>
                    </div>

                    <div className="col-6 col-sm-6 col-md-2 col-lg-2">
                       <section className={Style.footer_second_part}>    
                            <p className={Style.bd}>ফটো গ্যালারি</p>
                                <p className={Style.bd_two}>ভিডিও গ্যালারি</p>
                                <p className={Style.bd_two}>আর্কাইভ</p>
                       </section>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <p className={Style.info}>ফোন: 01610656553 <br />
                            ই-মেইল: info@editorialnews24.com <br />
                            ঢাকা</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
