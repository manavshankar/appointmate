import Sidebar from "../components/Sidebar"
import Profile from "../components/Profile";
import Book from "../components/Book";
import Doctors from "../components/Doctors";
import Logout from "../components/Logout";
import Upcoming from "../components/Upcoming";
import { useState } from 'react';

export default function User(){
    const [toggle,setToggle]=useState(false);
    const [content,setContent]=useState(0);
    let component=<Profile/>;
    function handlemouse(){
        setToggle(prevtoggle=>!prevtoggle);
    }
    switch(content){
        case 0: component=<Profile/>; break;
        case 1: component=<Book/>; break;
        case 2: component=<Upcoming/>; break;
        case 3: component=<Doctors/>; break;
        case 4: component=<Logout/>; break;
    }
    return(
        <div className="flex flex-row">
            <div onMouseOver={()=>handlemouse()} onMouseOut={handlemouse} >
                <Sidebar setContent={setContent} toggle={toggle}/>
            </div>
            <div  className="flex flex-grow min-h-[100vh]">
                {component}
            </div>
        </div>
    )
}