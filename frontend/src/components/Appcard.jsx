export default function Appcard(){
    return (
        <div className="bg-[#fffaeb] border-black border-2 w-[20vw] text-black font-medium  rounded-xl">
            <h1 className="p-4 text-sm">APPOINTMENT</h1>
            <hr className="borderx-x-2 border-[#2e2e2e] min-w-full" />
            <h1 className="px-4 py-1 text-base">Doctor</h1>
            <div className="text-sm px-4 py-1">
                <div className="flex flex-col justify-between mb-2">
                    <p>Location : Delhi</p>
                    <p>Specialization : Cardiology</p>
                </div>
                <hr className="border-x-2 border-[#2e2e2e] min-w-full" />
            </div>
            <h1 className="px-4 py-1 text-base">Timing</h1>
            <div className="text-sm px-4 py-1">
                <div className="flex flex-col mb-2">
                    <p>Date : 11/10/2024</p>
                    <p>Timing : 1:00 pm - 2:00 pm</p>
                </div>
                <hr className="border-x-2 border-[#2e2e2e] min-w-full" />
            </div>
            <div className="text-sm px-4 py-1">
                <div className="flex flex-row justify-between mb-1">
                    <p>Contact</p>
                    <p>91XXXXXXXX</p>
                </div>
            </div>
            <div className="flex justify-between px-4 border-t-2 border-black py-3 rounded-b-xl mt-3 bg-[#10565280] flex-row">
                <p className="my-auto">Status</p>
                <p className="font-bold">Pending</p>
            </div>
        </div>
    )
}