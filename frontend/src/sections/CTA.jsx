import React from 'react'
import CTABtn from '../components/CTABtn'

function CTA() {
    return (
        <>
            <div className=" bg-[#F0F3F6] h-[757px] w-full flex flex-col items-center justify-center">
                <div className="lg:text-[56px] text-[40px] z-20 px-4 font-bold my-6 text-center leading-[67px] font-satoshi">Unlock the power of AI to translate <br /> your video materials</div>
                <div className="lg:text-[20px] text-[14px] px-12 z-20 text-center font-satoshiMed">
                Experience the video translation tool you'll love. It's the only one you'll ever need.                </div>
                <div className="mt-6 z-20">
                    <CTABtn />
                </div>
                <img src="assets/BG.png" alt="" srcset="" className='absolute max-h-full w-full' />
            </div>
        </>)
}

export default CTA