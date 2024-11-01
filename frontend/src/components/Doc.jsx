import doc from "../assets/doc.jpg"
import gradient from "../assets//gradient.jpg"
import star from "../assets/star.png"

export default function Docapply(){
    return(
        <div className="flex flex-row text-black  p-10 m-20 space-around">
            <div className="my-auto text-center font-fredoka">
                <p className="mb-10 text-5xl font-bold">Are you a Doctor?</p>
                <p className="mb-10 text-2xl text-justify mx-44">Are you a dedicated medical professional looking to expand your reach? Apply today to join our platform and connect with patients seeking quality care. Become a part of our trusted network of doctors and grow your practice with ease!</p>
                <button className="outline-2 outline-double hover:scale-105 ease-in-out transition duration-300 text-white bg-black rounded-full px-6 font-fredoka h-fit p-3 font-bold text-xl">REGISTER</button>
            </div>
            <div className="bg-white relative flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:rotate-3 hover:scale-105 flex-col items-center max-w-[25vw] rounded-3xl shadow-lg h-fit">
                <div className="p-4">
                    <img src={gradient} className="rounded-xl "/>
                </div>
                <div className="flex flex-col w-full relative -top-24">
                    <div className="flex mb-2 mx-auto rounded-full relative justify-between align-middle text-center w-36 h-36">
                        <img src={doc} alt="" className="rounded-full" />
                    </div>
                    <div className="font-fredoka font-bold text-xl text-center mb-3">
                        Dr. Paul Frank
                        <p className="text-gray-600 font-medium text-base">Cardiologist</p>
                    </div>
                    <div className="flex w-full text-center flex-row font-fredoka font-medium ">
                        <div className="flex font-medium m-auto text-l flex-col">
                            Delhi
                            <p className="font-normal text-sm">Location</p>
                        </div>
                        <div className="border-gray-300 border-l-2"></div>
                        <div className="flex font-medium items-center text-l align-middle flex-col m-auto">
                            <div className="flex flex-row">
                                4.5
                                <img src={star} className="align-middle my-auto block max-w-4 ml-2"/> 
                            </div>
                            <p className="font-normal text-sm">Ratings</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}