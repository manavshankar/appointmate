import user from "../assets/user.svg"
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import details from "../assets/details.svg";
import age from "../assets/age.svg";
import gender from "../assets/gender.svg";

export default function Profile(){
    return(
        <div className="flex flex-col w-full min-h-[100vh]">
            <div className="relative flex flex-col w-[20vw] h-[83vh] border-8 bg-[length:200px_100px] m-auto border-black rounded-[60px] overflow-hidden">
                <div className="absolute bg-violet-400 blur-3xl -z-20 rounded-full right-20 -top-8">
                    <div className="bg-green h-96 w-96 overflow-hidden"></div>
                </div>
                <div className="absolute bg-green-400 blur-3xl -z-20 rounded-full -right-36 top-96 ">
                    <div className="bg-green h-52 w-52 overflow-hidden"></div>
                </div>
                <div className="w-[30%] sticky mx-auto h-[5%] mt-2 bg-black rounded-full"></div>
                <div className="flex w-full h-[35%]">
                    <h1 className="text-center m-auto font-fredoka tracking-widest text-4xl font-bold">JOHN DOE</h1>
                </div>
                <div className="flex flex-row font-medium h-fit ml-6 m-auto">
                    <img src={details} className="w-5 mr-4" alt="" />
                    <h1>johndoe@gmail.com</h1>
                </div>
                <div className="flex flex-row font-medium h-fit ml-6 m-auto">
                    <img src={location} className="w-5 mr-4" alt="" />
                    <h1>Delhi</h1>
                </div>
                <div className="flex flex-row font-medium h-fit ml-6 m-auto">
                    <img src={phone} className="w-5 mr-4" alt="" />
                    <h1>Contact : 91XXXXXXXX</h1>
                </div>
                <div className="flex flex-row font-medium h-fit ml-6 m-auto">
                    <img src={age} className="w-4 mr-4" alt="" />
                    <h1>Age : 25</h1>
                </div>
                <div className="flex flex-row font-medium h-fit ml-6 m-auto">
                    <img src={gender} className="w-5 mr-4" alt="" />
                    <h1>Gender : Male</h1>
                </div>
                <button className="bg-black rounded-2xl font-bold p-2 border-2 border-black text-white m-auto">Edit Profile</button>
            </div>
        </div>
    )
}