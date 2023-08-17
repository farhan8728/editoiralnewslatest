import React from 'react'
import Image from 'next/image'

export default function LeftTitle({title,titleClassName,para,paraClassName,src,imgClassName}) {
  return (
    <>
       <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <h2 className={titleClassName} style={{fontFamily: 'SolaimanLipi',cursor:"pointer"}}> {title} </h2>
                <p className={paraClassName} style={{fontFamily: 'SolaimanLipi',cursor:"pointer"}}>{para}</p>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-6">

                <div>
                    <Image 
                    
                        src={src}
                        width={165}
                        height={140}
                        className={imgClassName}
                        

                    />
                </div>

            </div>
       </div>
    </>
  )
}
