import SpotlightFollow from '@/app/component/spotlight-follow/SpotlightFollow';
import React from 'react'

export const page2 = () => {
    const label = 'Jolineqd';
    function handleOnClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
      console.log(e);
    }
  return (
    <>
    <div>page2</div>
    <SpotlightFollow label={label} handleOnClick={handleOnClick}/>

    </>
  )
}
