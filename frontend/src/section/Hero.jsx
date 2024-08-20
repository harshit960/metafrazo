import React from 'react'
import NavBar from '../components/NavBar'
import MainText from '../components/MainText'
import UploadBtn from '../components/UploadBtn'

export default function Hero() {
    return (
        <>
            <div className="bg-[#0B1215] h-screen w-full px-10 flex flex-col justify-center items-center">
                <NavBar />
                <MainText/>
                <UploadBtn/>
            </div>
        </>
    )
}
