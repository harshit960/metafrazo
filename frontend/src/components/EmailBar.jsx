import React from 'react'

function EmailBar() {
    return (
        <>
            <div
                style={{
                    boxShadow: "0px 0px 64px 0px #0A47F226"
                }}
                className="lg:w-[728px] w-11/12 flex rounded-full bg-white lg:h-[67px]  justify-between items-center ">
                <div className="lg:text-[18px] text-[14px] lg:px-[32px] p-4 text-[#0E0E0C] opacity-50 font-satoshiMed">E-mail</div>
                <button className="lg:text-[18px] text-[14px] p-3 font-bold font-satoshi bg-[#0A47F2] flex items-center justify-center text-white rounded-full w-[107px] mr-2">Send</button>
            </div>
        </>)
}

export default EmailBar