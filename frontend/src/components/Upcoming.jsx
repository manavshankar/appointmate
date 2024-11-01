import Appcard from "./Appcard"

export default function Upcoming(){
    return(
        <div className="flex flex-col flex-grow">
            <div className="mx-auto ">
                <h1 className="text-4xl font-bold my-10 text-black">Upcoming Scheduled Appointments</h1>
                <hr className="border-x-2 border-[#91352b]" />
            </div>
            <div className="w-fit flex flex-row p-10 gap-10 flex-wrap">
                <Appcard/>
            </div>
        </div>
    )
}