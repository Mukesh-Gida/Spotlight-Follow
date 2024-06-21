'use client'
import Link from "next/link";
import SpotlightFollow from "./component/spotlight-follow/SpotlightFollow"
export default function Home(){
  const label = 'Jolineqd';
  function handleOnClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    console.log(e);
  }
  function onAnimationComplete(){
    console.log('Animation Completed in 5 seconds')
  }
  return(
      <SpotlightFollow label={label} handleOnClick={handleOnClick} onAnimationComplete={onAnimationComplete}/>
      
  )
}