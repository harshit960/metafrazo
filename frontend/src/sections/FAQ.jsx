import React from 'react'
import Question from '../components/Question'

function FAQ() {
    return (
        <>

            <div className="bg-[#F0F3F6] py-40 text-black flex flex-col items-center justify-center">
                <img src="assets/FAQ.png" alt="" srcset="" className='w-[48px]' />
                <div className="lg:text-[56px] text-[32px] font-bold my-6 font-satoshi text-center">Questions & Answers</div>
                <div className="lg:text-[20px] text-[14px] text-center font-satoshiMed px-12">Find answers to common questions about MetaFrazo. We’ve got you covered on everything <br /> from how the platform works to tips for getting the best results.</div>
                <div className="flex flex-col w-full items-center justify-center mt-16 space-y-6">
                    <Question title="What sets MetaFrazo apart from other translation services?"/>
                    <Question title="What languages does MetaFrazo support?"/>
                    <Question title="How secure is my content on MetaFrazo?"/>
                    <Question title="How can I get started with using MetaFrazo?"/>
                    <Question title="Can MetaFrazo handle large-scale translation projects for enterprises?"/>
                    
                </div>
            </div>

        </>)
}

export default FAQ