import React from 'react'

function ForEnterprise() {
    return (
        <div className='h- flex-col flex w-full items-center justify-center font-satoshi mb-[180px]'>
            <div style={{
                backgroundImage: `url('assets/bgGradient.png')`,
                backgroundSize: 'cover', // Adjusts the image to cover the entire div
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            }} 
            className="flex w-[1104px] h-[488px]  rounded-[32px] flex-col space-y-12 items-center justify-center">
                {/* <img src="assets/bgGradient.png" alt="" srcset="" className='-z-10 absolute' /> */}

                <div className="flex space-y-6 flex-col">

                    <div className="text-6xl font-bold text-center text-white">MetaFrazo for Enterprise</div>
                    <div className="text  font-satoshi text-white">MetaFrazo for Enterprise provides you with 99% accurate translational model and up to 10 requests</div>
                </div>
                <div className="flex font-satoshi bg-white w-[144px] h-[51px] rounded-full items-center justify-center">
                    Contact Us
                </div>
            </div>
        </div>
    )
}

export default ForEnterprise