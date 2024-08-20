import React from 'react'
import NavBar from '../components/NavBar'
import MainText from '../components/MainText'
import UploadBtn from '../components/UploadBtn'
import Plates from '../components/Plates'

export default function Hero() {
    return (
        <>
            <div className="bg-[#000] h-screen w-full px-10 flex flex-col justify-center items-center">
                <NavBar />
                <MainText />
                <div className="my-5 hover:scale-110 duration-150 cursor-pointer ">

                    <UploadBtn />
                </div>
                <Plates />
            </div>
        </>
    )
}
