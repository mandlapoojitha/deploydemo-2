import Teasercard from '@/components/Teasercard'
import React from 'react'
import { data } from "@/data/data.json";

const page = () => {

    const jqdata = data.filter(item=> item.techname == 'Jquery')
  
  return (
    <div className='flex flex-wrap pl-14'>{
      jqdata.map((item, index) => (
        <Teasercard
          key={index}
          id={item.id}
          techname={item.techname}
          blogname={item.blogname}
          authorname={item.authorname}
          color={item.color}
        />
      ))}
      
     
    </div>
   
  )
}

export default page