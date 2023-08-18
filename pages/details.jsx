import React from 'react'

import Style from "../styles/details.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

import Main_Pic from "../images/Rectangle 102.jpg"
import Add from "../images/Rectangle 28.jpg"
import Long_Add from "../images/Rectangle 21.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes,faPrint} from '@fortawesome/free-solid-svg-icons';

import { faFacebook,faTwitter,faSquareshare } from '@fortawesome/free-brands-svg-icons'


import ImgTitleDescription from "../comnponent/imgtitledescription.component"


export default function Details() {
  return (
    <>
        <div className="container">
            <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
            <Image 
                src={Long_Add}
                className='img-fluid'
            />
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <h4 className={Style.title}>রাজনীতি</h4>
                    <h2 className={Style.headline}>হঠাৎ সচিব সভার বৈঠক ডাকলেন মন্ত্রি
                    পরিষদ সচিব</h2>

                    


                    <div className="row">
                        <div className="col-7 col-sm-7 col-lg-8">

                            <div>
                                <p className={Style.editor_name}>নিজস্ব প্রতিবেদক <br />
                                ঢাকা <br />
                                প্রকাশ: ২৪ জুলাই ২০২৩, <span>০৯: ৫০</span> </p>
                            </div>
                            
                        </div>

                        <div className={`col-5 col-sm-5 col-lg-4 d-flex justify-content-end align-items-end`} >
                            

                          
                                <div className={Style.icon}>
                                    <FontAwesomeIcon icon={faFacebook} style={{color: "#075ae9", cursor:"pointer",fontSize:"24px"}} />
                                </div>

                                <div className={Style.icon}>
                                    <FontAwesomeIcon icon={faTwitter} style={{color: "#125fe2", cursor:"pointer",fontSize:"24px"}} />
                                </div>

                                <div className={Style.icon}>
                                    <FontAwesomeIcon icon={faShareNodes} style={{color: "#4b5f81", cursor:"pointer",fontSize:"24px"}} />
                                </div>

                                <div className={Style.icon}>
                                    <FontAwesomeIcon icon={faPrint} style={{color: "#0e5eaa", cursor:"pointer",fontSize:"24px"}} />
                                </div>

                           
                                

                        </div>
                    </div>

                    <div className={Style.border}>

                    </div>


                    <p className={Style.description}>
                     <Image 
                        src={Main_Pic}
                        
                        className={`img-fluid ${Style.main_pic}`}
                     /> <span className={Style.phone_title}>
                        হঠাৎ করে সব সচিবদের ডেকেছেন মন্ত্রিপরিষদ সচিব মাহবুব হোসেন। সচিব সভার বৈঠকটি আজ সোমবার সকাল দশটায় সচিবালয়ে শুরু হওয়ার কথা জাতীয় নির্বাচনের মাত্র কয়েকমাস আগে অনুষ্ঠিতব্য এই সচিব সভাকে গুরুত্বপূর্ণ মনে করা হচ্ছে একাধিক সচিব প্রথম আলোকে বলেন, হঠাৎ করে গতকাল রোববার বিকেলে তাঁদের সচিব কমিটির সভার কথা জানানো হয় কী নিয়ে আলোচনা হবে, তা বলা হয়নি।
                     আগামীকাল মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল। সেখানে মোট ছয়টি আলোচসূচি ছিল। সাধারণত,

                     হঠাৎ করে সব সচিবদের ডেকেছেন মন্ত্রিপরিষদ সচিব মাহবুব হোসেন। সচিব সভার বৈঠকটি আজ সোমবার সকাল দশটায় সচিবালয়ে শুরু হওয়ার কথা জাতীয় নির্বাচনের মাত্র কয়েকমাস আগে অনুষ্ঠিতব্য এই সচিব সভাকে গুরুত্বপূর্ণ মনে করা হচ্ছে একাধিক সচিব প্রথম আলোকে বলেন, হঠাৎ করে গতকাল রোববার বিকেলে তাঁদের সচিব কমিটির সভার কথা জানানো হয় কী নিয়ে আলোচনা হবে, তা বলা হয়নি।
                     আগামীকাল মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল। সেখানে মোট ছয়টি আলোচসূচি ছিল। মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল। মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল।
                     </span>

                     <span className={Style.ad}>
                        <Image 
                            src={Add}
                        />
                     </span>

                     হঠাৎ করে সব সচিবদের ডেকেছেন মন্ত্রিপরিষদ সচিব মাহবুব হোসেন। সচিব সভার বৈঠকটি আজ সোমবার সকাল দশটায় সচিবালয়ে শুরু হওয়ার কথা জাতীয় নির্বাচনের মাত্র কয়েকমাস আগে অনুষ্ঠিতব্য এই সচিব সভাকে গুরুত্বপূর্ণ মনে করা হচ্ছে একাধিক সচিব প্রথম আলোকে বলেন, হঠাৎ করে গতকাল রোববার বিকেলে তাঁদের সচিব কমিটির সভার কথা জানানো হয় কী নিয়ে আলোচনা হবে, তা বলা হয়নি।
                     আগামীকাল মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল। সেখানে মোট ছয়টি আলোচসূচি ছিল। সাধারণত,

                     হঠাৎ করে সব সচিবদের ডেকেছেন মন্ত্রিপরিষদ সচিব মাহবুব হোসেন। সচিব সভার বৈঠকটি আজ সোমবার সকাল দশটায় সচিবালয়ে শুরু হওয়ার কথা জাতীয় নির্বাচনের মাত্র কয়েকমাস আগে অনুষ্ঠিতব্য এই সচিব সভাকে গুরুত্বপূর্ণ মনে করা হচ্ছে একাধিক সচিব প্রথম আলোকে বলেন, হঠাৎ করে গতকাল রোববার বিকেলে তাঁদের সচিব কমিটির সভার কথা জানানো হয় কী নিয়ে আলোচনা হবে, তা বলা হয়নি।
                     আগামীকাল মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল। সেখানে মোট ছয়টি আলোচসূচি ছিল। মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল। মঙ্গলবার প্রশাসনিক উন্নয়ন সংক্রান্ত সচিব কমিটির বৈঠক হওয়ার কথা ছিল।


                     
                    
                    </p>


                    <p className={Style.same_category}> রাজনীতি নিয়ে আরও পড়ুন</p>
                   

                    <div className="row">
                   
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <ImgTitleDescription 
                        src={Main_Pic}
                        title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                        titleClassName={Style.title_rightside}
                        para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                        paraClassName={Style.para_rightside}
                        imgClassName={Style.details_img}
                        />

                        <ImgTitleDescription 
                        src={Main_Pic}
                        title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                        titleClassName={Style.title_rightside}
                        para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                        paraClassName={Style.para_rightside}
                        imgClassName={Style.details_img}
                        />
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <ImgTitleDescription 
                        src={Main_Pic}
                        title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                        titleClassName={Style.title_rightside}
                        para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                        paraClassName={Style.para_rightside}
                        imgClassName={Style.details_img}
                        
                        />

                        <ImgTitleDescription 
                            src={Main_Pic}
                            title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                            titleClassName={Style.title_rightside}
                            para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                            paraClassName={Style.para_rightside}
                            imgClassName={Style.details_img}
                        />
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                        <span className={Style.ad}>
                            <Image 
                                src={Add}
                                className={Style.ad_mid}
                            />
                        </span>

                        <p className={Style.same_topic}>সরকার নিয়ে আরও পড়ুন</p>


                        <div className="row">
                            <div className="col-md-6 col-lg-12">

                                <ImgTitleDescription 
                                src={Main_Pic}
                                title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                                titleClassName={Style.title_rightside}
                                para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                                paraClassName={Style.para_rightside}
                                imgClassName={Style.details_img}
                                />

                            </div>
                            

                            <div className="col-md-6 col-lg-12">

                            <ImgTitleDescription 
                            src={Main_Pic}
                            title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                            titleClassName={Style.title_rightside}
                            para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                            paraClassName={Style.para_rightside}
                            imgClassName={Style.details_img}
                            />

                            </div>

                        <span className={Style.ad}>
                            <Image 
                                src={Add}
                                className={Style.ad_mid}
                            />
                        </span>

                        <div className="col-md-6 col-lg-12">

                                <ImgTitleDescription 
                                src={Main_Pic}
                                title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                                titleClassName={Style.title_rightside}
                                para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                                paraClassName={Style.para_rightside}
                                imgClassName={Style.details_img}
                                />

                            </div>

                            <div className="col-md-6 col-lg-12">

                                <ImgTitleDescription 
                                src={Main_Pic}
                                title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                                titleClassName={Style.title_rightside}
                                para="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                                paraClassName={Style.para_rightside}
                                imgClassName={Style.details_img}
                                />

                            </div>

                            
                        </div>

                        



                      

                        


                      

               
                </div>


                <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
            <Image 
                src={Long_Add}
                className='img-fluid'
            />
            </div>

                


            </div>
        </div>
        
    </>
  )
}
