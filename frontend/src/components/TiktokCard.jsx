import React from 'react'

function TiktokCard() {
    return (
        <>
            <>
                <div className="w-80 flex justify-between p-4 px-4 bg-[#181818] text-white text-2xl items-center rounded-sm">
                    <img src="/tik-tok.png" alt="" srcset="" className='w-[48px]' />
                    <div className="text">TikTok</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </>
        </>)
}

export default TiktokCard