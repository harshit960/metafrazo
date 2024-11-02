import React from 'react'
import CTAWideBtn from '../components/CTAWideBtn'

function Benefits() {
    return (
        <>
            <div className=" flex w-full justify-center items-center flex-col py-40">
                <img src="assets/Union.png" alt="" srcset="" className='absolute -translate-ys-[14s0px] scale-150 -z-10 mt-96 overflow-hidden' />

                <img src="assets\Benifits.png" alt="" srcset="" className='w-[48px] ' />
                <div className="text-[40px] font-bold my-6 font-satoshi text-white">Benefits</div>
                <div className="text-[20px] text-center font-satoshiMed text-white">
                    Our intuitive platform makes it easy for anyone to create multilingual content, helping you <br />
                    connect with audiences around the world like never before.
                </div>
                <div className=" flex flex-wrap justify-center mt-16 my-[64px]">
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">Time-Saving</div>
                            <img src="assets/TimeSaving.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">User-Friendly</div>
                            <img src="assets/UserFriendly.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">Global Reach</div>
                            <img src="assets/GlobalReach.png" alt="" srcset="" className='' />
                            <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">Cost-Saving</div>
                            <img src="assets/CostSaving.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    </div>
                    <div className="w-[540px] h-[840px] bg-white rounded-[32px] m-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">Create your own plan</div>
                            <img src="assets/CreateYourOwnPlan.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Create your own subscription that perfectly fits your needs and budget</div>
                        </div>
                    </div>
                </div>
                {/* <CTAWideBtn /> */}
            </div>
        </>
    )
}

export default Benefits