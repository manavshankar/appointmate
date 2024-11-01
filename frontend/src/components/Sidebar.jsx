import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doc from '../assets/doc.svg';
import profile from '../assets/profile.svg';
import book from '../assets/book.svg';
import logout from '../assets/logout.svg';
import schedule from '../assets/schedule.svg';
import { useState } from 'react';

export default function Sidebar({toggle,setContent}){
    return(
        <div className='transition-all duration-1000 ease-out h-[100%] bg-black hover:w-[15vw] w-[5vw]'>
            <div className={`side flex flex-col h-screen flex-grow justify-evenly z-20 font-poppins font-semibold text-2xl fixed cursor-pointer text-white hover:w-[15vw] w-[5vw] transition-all duration-1000 ease-out bg-black `}>
                <div className="mx-6 flex flex-row"
                    onClick={()=>setContent(0)}
                ><img src={profile} alt="" className="w-5" /> {toggle && <h1 className='ml-4 my-auto'>Profile</h1>}</div>
                <div className="mx-6 flex flex-row"
                    onClick={()=>setContent(1)}
                ><img src={book} alt="" className="w-5" />{toggle && <h1 className='ml-4 my-auto whitespace-nowrap text-nowrap'>Book Now</h1>}</div>
                <div className="mx-6 flex flex-row"
                    onClick={()=>setContent(2)}
                ><img src={schedule} alt="" className="w-5" />{toggle && <h1 className='ml-4 my-auto'>Upcoming</h1>}</div>
                <div className="mx-6 flex flex-row"
                    onClick={()=>setContent(3)}
                ><img src={doc} alt="" className="w-5" />{toggle && <h1 className='ml-4 my-auto'>Doctors</h1>}</div>
                <div className="mx-6 flex flex-row"
                    onClick={()=>setContent(4)}
                ><img src={logout} alt="" className="w-5" />{toggle && <h1 className='ml-4 my-auto'>Logout</h1>}</div>
            </div>
        </div>
    )
}