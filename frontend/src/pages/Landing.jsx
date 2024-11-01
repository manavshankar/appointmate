import { useRef } from "react"
import logo from "../assets/Subtract.png"
import Docapply from "../components/Doc";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Landing(){
    const servref=useRef(null);
    const abref=useRef(null);
    return(
        <div>
            <div className="text-l mb-6 text-black flex h-max justify-evenly">
                <div className="ml-14 text-xl m-5 w-fit flex flex-row items-center">
                    <div className="font-bold font-fredoka">APPOINT-MATE</div>
                </div>
                <div className="flex font-medium mx-auto flex-row items-center">
                    <div className="flex cursor-pointer mr-40 font-fredoka" onClick={()=>{
                        servref.current?.scrollIntoView({
                            behavior:"smooth"
                        })
                    }}>Services</div>
                    <div className="flex cursor-pointer mr-40 font-fredoka" onClick={()=>{
                        abref.current?.scrollIntoView({
                            behavior:"smooth"
                        })
                    }}> About</div>
                    <div className="flex mx-auto font-fredoka">Contact</div>
                </div>
                <div className="flex items-center mr-20">
                    <button className="rounded-full px-6 font-fredoka h-fit text-white bg-[#54C392] p-3 font-bold">BOOK NOW</button>
                </div>
            </div>
            <div className="relative h-fit">
                <h1 className="text-[10rem] relative bottom-12 font-fredoka text-black font-bold text-right mr-56">INSTANT</h1>
                <h1 className="text-[10rem] relative bottom-40 text-center font-fredoka text-black font-bold">APPOINTMENTS</h1>
                <h1 className="font-extralight pb-2 text-center text-4xl bottom-36 relative animate-typing overflow-hidden text-nowrap">Streamline your day with our easy-to-use appointment scheduling</h1>
                <h1 className="animate-typing2 pb-2 text-center overflow-hidden text-nowrap font-extralight relative text-4xl bottom-36">platform manage bookings effortlessly and stay organized</h1>
            </div>
            <div className="flex flex-col h-fit text-black font-fredoka">
                <h1 className="text-[4rem] my-10 font-bold text-center"> WHY CHOOSE US?</h1>
                <div ref={servref} className="flex flex-row flex-grow services gap-5 m-auto">
                    <div className="w-[20vw] h-[20vw] p-10 bg-[#54C392] my-auto rounded-2xl">
                        <p className="font-medium text-sm mb-3 text-gray-700">EASE OF USE</p>
                        <p className="font-semibold text-xl mb-2">EASY APPOINTMENT <br /> BOOKING</p>
                        <p className="text-md">Schedule appointments with top doctors quickly and effortlessly, saving you time and reducing the hassle.</p>
                    </div>
                    <div className="w-[20vw] h-[20vw] p-10 bg-black text-white my-auto rounded-2xl">
                        <p className="font-medium text-sm mb-3 text-gray-400">REVIEWED</p>
                        <p className="font-semibold text-xl mb-2">REVIEWS AND<br />RATINGS</p>
                        <p className="text-md">Choose the best doctor for your needs by browsing through reviews and ratings from other patients.</p>
                    </div>
                    <div className="w-[20vw] h-[20vw] p-10 bg-[#C68FE6] my-auto rounded-2xl">
                        <p className="font-medium text-sm mb-3 text-gray-700">MONITORED</p>
                        <p className="font-semibold text-xl mb-2">APPOINTMENT TRACKING</p>
                        <p className="text-md">Track and manage all your upcoming and past appointments in one convenient place, keeping you organized.</p>
                    </div>
                    <div className="w-[20vw] h-[20vw] p-10 bg-[#FEEE91] rounded-2xl">
                        <p className="font-medium text-sm mb-3 text-gray-700">UPDATES</p>
                        <p className="font-semibold text-xl mb-2">REMINDERS AND<br />NOTIFICATIONS</p>
                        <p className="text-md">Never miss an appointment again with automated email and SMS reminders delivered right to your device.</p>
                    </div>
                </div>
            </div>
            <Docapply/>
            <About refer={abref} />
            <Footer/>
        </div>
    )
}