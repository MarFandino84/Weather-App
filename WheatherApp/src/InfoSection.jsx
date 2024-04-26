

const InfoSection = ({info}) => {
    return (
    <>
 
    <section className="w-full flex flex-col justify-center items-center backdrop-blur">
       <img  src={info.weather[0].icon + ".png"} alt={info.weather[0].description} 
       className="aspect-video object-contain mt-4  w-48 h-3/6"
       /> 
       <h3 className=" text-white text-6xl">{info.main.temp}°</h3>
       <h6 className=" mt-4 text-white text-2xl">Feels like {info.main.feels_like}°</h6>
       
       <p className="text-4xl mt-1 text-center text-white" >{info.weather[0].description}</p> 
      <footer className="flex justify-between mt-10 w-11/12">
            <div className="flex flex-col w-6/12 items-center"> 
                <img className="w-24" src={"./windi.png"} alt="wind speed" />
                <p className="text-lg mt-3 text-center text-white" >{info.wind.speed} km/h</p> 
            </div>
            <div className="flex flex-col w-6/12 items-center"> 
                <img className="w-24" src={"./humid.png"} alt="humidity percentage" />
                <p className="text-lg mt-3 text-center text-white" >{info.main.humidity}%</p> 
            </div>
            <div className="flex flex-col w-6/12 items-center"> 
                <img className="w-24" src={"./visibi.png"} alt="humidity percentage" />
                <p className="text-lg mt-3 text-center text-white" >{info.visibility}mts</p> 
            </div>
                  
      </footer>  


   </section>

   

   
    </>
  )
}

export default InfoSection
