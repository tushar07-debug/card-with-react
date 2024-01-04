import React from 'react'
import Card from './Card'
function Foreground() 
{
    const data=[
    {
        desc:"THis is the background color of the card that is displayed",
        filesize:".9mb",
        close:true, 
        tag:{isOpen:true,tagtitle:"Download Now", tagColor:"green"},
    },
    {
        desc:"THis is the background color of the card that is displayed",
        filesize:".9mb",
        close:true, 
        tag:{isOpen:true,tagtitle:"Download Now", tagColor:"green"},
    },
    {
        desc:"THis is the background color of the card that is displayed",
        filesize:".9mb",
        close:true, 
        tag:{isOpen:true,tagtitle:"Download Now", tagColor:"green"},
    },
    ];
  return (
      <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} />
        ))}
      </div>   
  )
}
export default Foreground
