import React from 'react'

function ShowReel() {
    return (
        <>
            <div className="w-full p-[120px]  z-20 flex items-center justify-center">
                <div className="w-full bg-[#fff] rounded-[32px] ">
                    {/* <img src="assets/Desktop.png" alt="" srcset="" className='w-full' /> */}
                    <iframe className='w-full rounded-[32px]' width="560" height="621" src="https://www.youtube.com/embed/grAKdEFqZYo?si=yxVQZC55Hwvq6d8a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default ShowReel