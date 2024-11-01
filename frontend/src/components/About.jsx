import { useState } from "react"
import notes from "../assets/notes.jpg"

export default function About({refer}){
    return(
        <div ref={refer} className="min-h-[100vh] mb-60 text-black  font-fredoka">
            <h1 className="font-fredoka m-20 text-center text-6xl font-bold">ABOUT US</h1>
            <div className="flex flex-row m-20">
                <div className="max-w-[40vw] mr-10">
                    <img src={notes} className="rounded-3xl"  alt="" />
                </div>
                <div className="flex flex-col mt-2 justify-between">
                    <div className="flex flex-col">
                        <div className="my-3 flex flex-row w-full">
                            <div className="border-2 border-black mr-2 text-center align-middle max-h-8 min-w-8 text-xl font-medium rounded-full">01</div>
                            <div className="grid grid-cols-2">
                                <div className="text-xl font-semibold">OUR MISSION</div>
                                <div className="max-w-[20vw] mx-auto">Our mission is to revolutionize healthcare access by connecting patients with trusted doctors through easy, online appointment scheduling.</div>
                            </div>
                        </div>
                        <hr className="bg-[#91352b26] border-0 h-px" />
                        <div className="my-3 flex flex-row w-full">
                            <div className="border-2 border-black mr-2 text-center align-middle max-h-8 min-w-8 text-xl font-medium rounded-full">02</div>
                            <div className="grid grid-cols-2">
                                <div className="text-xl font-semibold">BRIDGING THE GAP</div>
                                <div className="max-w-[20vw] mx-auto">We are dedicated to providing a platform you can trust, ensuring that every doctor listed is thoroughly vetted and verified by us.</div>
                            </div>
                        </div>
                        <hr className="bg-[#91352b26] border-0 h-px" />
                        <div className=" my-3 flex flex-row w-full">
                            <div className="border-2 border-black mr-2 text-center align-middle max-h-8 min-w-8 text-xl font-medium rounded-full">03</div>
                            <div className="grid grid-cols-2">
                                <div className="text-xl font-semibold">FUTURE VISION</div>
                                <div className="max-w-[20vw] mx-auto">Our goal is to expand our platform to serve more patients and doctors globally, enhancing healthcare access and integrate deeper telemedicine capabilities</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="max-w-[20vw] font-medium mt-auto text-justify">The popularity of telemedicine has soared across various medical specialties, encompassing primary care, mental health, dermatology etc. </div>
                        <div className="w-[12vw] h-[12vw] text-white shadow-black shadow-md rounded-3xl p-3 bg-black">
                            <h1 className="text-6xl font-semibold">43%</h1> <br />
                            <p className="font-medium">of Medicare visits made using telehealth services. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}