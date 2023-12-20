import React from 'react'

export default function Foot() {
    return (
        <div>
            <div className=' container-fluid '>
                <div className="container border border-1">
                    <div className="container mt-3">
                        <h2>Contact Details</h2>
                        <div className=' d-flex'>
                            <div className='mt-3'>
                                <div className=' d-flex '><i class="bi bi-geo-alt-fill"></i>  <p className=' ms-2'>Harda</p></div>
                                <div className=' d-flex'><i class="bi bi-telephone-fill"></i>   <p className='ms-2'>9826217121</p></div>
                                <div className=' d-flex'><i class="bi bi-envelope-at-fill"></i> <p className='ms-2'>VIPHARDA@GMAIL.COM</p></div>
                            </div>
                            <div className='border border-1'>
                                <img src="/images/computer.jpg" alt="hyy" />
                            </div>
                        </div>
                        <div className=' w-100'>
                            <p className=' text-center p5 '>Copyright @ 2023 Vision International Public School</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
