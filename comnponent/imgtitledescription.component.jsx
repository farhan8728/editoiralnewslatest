import React from 'react'
import Image from 'next/image';

export default function ImgTitleDescription({src,imgClassName,title,titleClassName,para,paraClassName}) {
  return (
    <>
        <div style={{cursor:"pointer",marginBottom:"10px"}}>
        <div className='img-fluid mb-3'>
          <Image 
              src={src}
              className={imgClassName}
              
              
          />
        </div>

        <h4 className={titleClassName}>{title}</h4>
        <p className={paraClassName}>{para}</p>
        </div>
    </>
  )
}
