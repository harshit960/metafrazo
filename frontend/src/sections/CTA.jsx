import React from 'react'
import CTABtn from '../components/CTABtn'

function CTA() {
    return (
        <>
            <div className=" bg-[#F0F3F6] h-[757px] w-full flex flex-col items-center justify-center">
                <div className="text-[56px] z-20 font-bold my-6 text-center leading-[67px] font-satoshi">Unlock the power of AI to translate <br /> your video materials</div>
                <div className="text-[20px] z-20 text-center font-satoshiMed">
                    Try first video translation tool that you’ll love. And the last one you’ll ever need.
                </div>
                <div className="mt-6 z-20">
                    <CTABtn />
                </div>
                <img src="assets/BG.png" alt="" srcset="" className='absolute max-h-full w-full' />
            </div>
        </>)
}

export default CTA