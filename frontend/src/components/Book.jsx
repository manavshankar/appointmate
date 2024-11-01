import React from 'react';
import { Formik, Form, Field } from 'formik';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import { useState } from 'react';

export default function Book(){
    const doc=["manav","raj","neil","john"]
    const slots=["1-2","3-4"];
    const days=["Monday","wednesday","Thursday"]
    const [value, onChange] = useState(new Date());
    return(
        <div className='m-auto font-poppins bg-gray-400 rounded-md border-black border-2 shadow-[4px_4px_rgba(0,0,0,1)] w-96'>
        <Formik
          initialValues={{
            Location:"",
            Specialization:"",
            Doctors:""
          }}
          onSubmit={values => {
            console.log(values);
          }}
    >
          <Form className='flex m-auto gap-5 p-5 flex-col justify-start'>
            <div>
                <h1 className='font-bold gap-0 text-2xl'>Schedule Visit</h1>
                <p className='text-md font-medium text-gray-600'>Fill in to proceed</p>
            </div>
            <Field className="flex font-medium pl-2 w-full rounded-lg h-10 border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]" placeholder="Patient Name" name="Patient name"/>
            <Field className="flex font-medium pl-2 w-full rounded-lg h-10 border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]" placeholder="Location" name="Location" />
            <Field className="flex font-medium pl-2 w-full rounded-lg h-10 border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]" placeholder="Specialization" name="Specialization" />
            <DatePicker onChange={onChange} value={value} className="bg-white border-2 border-black h-10 rounded-lg shadow-[4px_4px_rgba(0,0,0,1)]"/>
            <select className='flex font-medium pl-2 w-full rounded-lg h-10 border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]' placeholder="Doctors" name='Doctors'>
                <option value="" disabled selected>Select your option</option>
                {doc.map((e)=>
                    <option value={e}>{e}</option>
                )}
            </select>
            <div className='flex flex-row w-full gap-5'>
                <select className='flex font-medium pl-2 w-1/2 rounded-lg h-10 border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)] mb-4' placeholder="Doctors" name='Doctors'>
                    <option value="" disabled selected>Day</option>
                    {days.map((e)=>
                        <option value={e}>{e}</option>
                    )}
                </select>
                <select className='flex font-medium pl-2 w-1/2 rounded-lg h-10 border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)] mb-4' placeholder="Doctors" name='Doctors'>
                    <option value="" disabled selected>Slots</option>
                    {slots.map((e)=>
                        <option value={e}>{e}</option>
                    )}
                </select>
            </div>
            <button className='m-auto bg-white active:scale-95 active:shadow-none font-medium px-6 w-max h-10 rounded-lg border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]' type="submit">Submit &nbsp; &rarr;</button>
          </Form>
        </Formik>
      </div>
    )
  
}