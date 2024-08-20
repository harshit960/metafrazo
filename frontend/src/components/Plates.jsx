import React from 'react'
import IgCard from './IgCard'
import TiktokCard from './TiktokCard'
import YoutubeCard from './YoutubeCard'

function Plates() {
    return (
        <>
            <div className="flex w-full  justify-center mt-14">
                <div className="absolute transform -translate-x-72 z-20 -rotate-[6deg] -translate-y-8 hover:rotate-0 duration-200">
                    <IgCard />
                </div>
                <div className="absolute transform -translate-x-0 z-0" >
                    <TiktokCard />
                </div>
                <div className="absolute transform translate-x-72 z-20 -rotate-[6deg] -translate-y-16 hover:rotate-0 duration-200">
                    <YoutubeCard />
                </div>
            </div>
        </>
    )
}

export default Plates