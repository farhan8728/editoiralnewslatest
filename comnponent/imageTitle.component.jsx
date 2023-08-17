import React from 'react'

import Image from 'next/image'

export default function ImageTitle({imgClassName,src,title,titleClassName}) {
  return (
    <>
        <Image 
            src={src}
            className={imgClassName}
            layout='responsive'
            style={{cursor:"pointer"}}
           
        />

        <h2 className={titleClassName} style={{fontFamily: 'SolaimanLipi', cursor:"pointer"}}> {title}</h2>


    </>
  )
}
