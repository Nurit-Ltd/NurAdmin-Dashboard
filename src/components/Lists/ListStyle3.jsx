import React, { useState } from 'react'
import useImg from '../../assets/images/user-01.png'
const ListStyle3 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="w-full max-w-[360px] rounded-md border border-stroke py-2">
                <div className="flex items-center justify-between p-4 hover:bg-[#F9FAFB]">
                    <div className="flex items-center">
                        <div className="mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
                            <img src={useImg} alt="user" className="rounded-full object-cover object-center" />
                        </div>
                        <div>
                            <h4 className="text-base font-medium text-black">
                                Devid Wilium
                            </h4>
                            <p className="text-sm text-secondary whitespace-nowrap">Digital marketer</p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <button onFocus={() => setOpen(!open)}>
                                <svg className="fill-current" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5326 16.0338C12.5326 15.1133 11.7864 14.3671 10.8659 14.3671C9.94541 14.3671 9.19922 15.1133 9.19922 16.0338C9.19922 16.9542 9.94541 17.7004 10.8659 17.7004C11.7864 17.7004 12.5326 16.9542 12.5326 16.0338Z" fill=""></path>
                                    <path d="M12.5326 10.2005C12.5326 9.28005 11.7864 8.53385 10.8659 8.53385C9.94541 8.53385 9.19922 9.28005 9.19922 10.2005C9.19922 11.121 9.94541 11.8672 10.8659 11.8672C11.7864 11.8672 12.5326 11.121 12.5326 10.2005Z" fill=""></path>
                                    <path d="M12.5326 4.36702C12.5326 3.44655 11.7864 2.70036 10.8659 2.70036C9.94541 2.70036 9.19922 3.44655 9.19922 4.36703C9.19922 5.2875 9.94541 6.03369 10.8659 6.03369C11.7864 6.03369 12.5326 5.2875 12.5326 4.36702Z" fill=""></path>
                                </svg>
                            </button>{open &&

                                <div onBlur={() => setOpen(!open)} className="absolute right-0 top-full z-40 w-36 space-y-1 rounded bg-white p-2 shadow-md">
                                    <button className="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-gray-200">
                                        Edit
                                    </button>
                                    <button className="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-gray-200">
                                        Delete
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default ListStyle3
