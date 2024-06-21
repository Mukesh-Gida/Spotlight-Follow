'use client'
import styles from '@/app/component/spotlight-follow/styles/SpotlightFollow.module.css'
import { useEffect, useState } from 'react';
export default function SpotlightFollow({label, handleOnClick, onAnimationComplete}:{
    label: string;
    handleOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    onAnimationComplete: () => void,
}){
    function changeBP(){
        const str = isInvoked === true ? 'left' : 'right';
        return str;
    }
    const [isInvoked, setIsInvoked] = useState(false);

    if(label.length > 6){label = label.slice(0,6)+ '...'}
    const spotlightLabel = `Spotlight on ${label}`
    return(
    <div className={styles['container']}>
        <div className={styles['full-tab']}
        style={{
            backgroundPosition: changeBP()
        }}
        >
            <div className={styles['tab-contents']}>
                <div className={styles['label']}>
                    <p>{spotlightLabel}</p>
                </div>
                <div className={styles['follow']}
                onClick={(e) => handleOnClick(e)}
                >
                    <p>Follow</p>
                </div>
            </div>
        </div>
        <button
            onClick={() => {
                setTimeout(()=> {
                    onAnimationComplete;
                }, 5000)
                setIsInvoked(true)}}>
            click me!
        </button>
        
    </div>
);
}