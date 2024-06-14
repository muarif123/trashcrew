"use client";
import React from 'react'
import Data from "../../page.jsx"


import Dropo from '../Dropdown2/page.jsx';

import Card2 from '../Sold/page';
import Image from 'next/image';

const Recent = () => {
  return (
    <div className='w-full py-20 bg-black'>
    <div className='w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12  mx-auto'>
    <div className='w-full ho'>
        <div className='w-max py-4 sm:py-4 md:py-4 lg:py-1 xl:py-0 2xl:py-0'>
            <h1 className='text-white text-4xl' style={{ fontWeight: "700",  whiteSpace: "nowrap" }}>
                RECENTLY <span className='hovo'>SOLD</span>
            </h1>
        </div>
        <div className='w-max mt-4'>
    <Dropo/>


        </div>

    </div>

    </div>
    <div className='w-10/12 mx-auto mt-10 flex flex-wrap justify-between'>
    {Data.slice(0,4).map((item,index)=>{
      return(
        <>
        <Card2 image={item.image} />
        
        </>
      )
    })}

    </div>
    <div className='relative top-10 mx-auto w-max'>
      <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718170015/Vector_1_qkydab.png"} alt='' height={200} width={200}/>
      <div className='absolute top-3 left-10 text-white font-semibold'>
        View All
      </div>

    </div>
 
  
   
</div>

  )
}

export default Recent