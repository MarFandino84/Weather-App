import { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import {GoLocation} from "react-icons/go"
import InfoSection from './InfoSection';
import ErrorMessage  from "./ErrorMessage"


const App = () => {

 const API_KEY = `1378fa69bd03710d8e71549d99f3be79`;
 
 const[city, setCity] = useState("")
const[search, setSearch] = useState("")

 const FetchData = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    const data = await response.json();
    
    setSearch(data)
     } catch (error) {
     console.log(error)
    }};


  
const handleClick = (e) => {
  e.preventDefault(); 
  FetchData()
}

 
  return (
    <>
    <main className='bg-[url("./Stormclouds.jpg")] bg-cover flex justify-center items-start h-[100vh]'> 
    <div className="mt-7 flex flex-col backdrop-blur-md rounded-lg border-white border-8  " >
      <header className=' max-h-40 flex-row flex justify-stretch items-center rounded backdrop-blur'> 
       <GoLocation className='fill-slate-100 border-none w-[8vw] h-[8vh]'/>
       <input 
        className='placeholder-slate-50 focus:outline-none uppercase w-11/12 h-20 text-center text-[3vw] border-none bg-transparent backdrop-blur-sm'
        id='user-input'
        placeholder='ENTER LOCATION'
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
       />
       <FaSearch onClick={handleClick} className="fill-slate-200 hover:fill-slate-600 duration-100  cursor-pointer w-[8vw] h-[8vh] bg-transparent border-none backdrop-blur-sm"/>
       </header>
         
     {search && 
     
     search.main &&
     
     <InfoSection info={search} />
     }
     {search.cod == "404" &&

      <ErrorMessage />


     }
       </div>
    </main>
    </>
  )
};

export default App
