
import { format } from "date-fns";
import { useEffect, useState } from "react";
import './weather.css';
import Weathbar from "./WeathBar";
import cloudy from '../img/cloudy.gif';
import sunny from '../img/sun.gif';
import rainy from '../img/drizzle.gif';
const Weather = () => {

    const [status, setStatus] = useState(false);
    function toggle() {
        setStatus(!status);
      } 
    const [date, setDate] = useState({
        date: "",
        daytime: "",
        temp:""

    })
    let w;
    const [weather, setWeather] = useState([]);
    const Today=new Date(),curtime=format(Today,"hh:mm"),curhr=format(Today,"hh:00")
    const day=format(Today,"dd");
    const newday = String(day-1).padStart(2, '0');
    const formattedDate=format(Today,"yyyy-MM-dd");
    const formattedWDay=format(Today,"yyyy-MM");
    const fullTime=`${formattedDate}T${curhr}`;
console.log(fullTime)
    const [loading, setLoading] = useState(true)
    const [latitude, setLatitude] = useState(33.8333);
    const [longitude, setLongitude] = useState(35.8333);
    //  Latitude: 51.5074° N
    // Longitude: -0.1278° W
    useEffect(() => {
        let isMounted = true; // to prevent state update if component is unmounted
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${formattedWDay}-${newday}&end_date=${formattedDate}&hourly=temperature_2m&timezone=auto`)
                const result = await response.json()
                if (response.ok) {
                    setWeather(result);
                    console.log(result);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();
        return () => {
            // Cleanup function
            isMounted = false;
        };
    }, []);
    useEffect(() => {
        if (weather && weather.hourly && weather.hourly.time) {
        const lengthOfTime= weather.hourly.time.length;
        setDate((prev) => ({
            ...prev,
            daytime:  weather.hourly.time,
            temp:weather.hourly.temperature_2m
        }))
        
    }
    
    }, [weather]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here, such as making an API call
        console.log('Latitude:', latitude, 'Longitude:', longitude);
    };
    const weatherImage=(w)=>{
        if(w<29 && w>11){
            return <img className="weather-image" src={cloudy} />
        }
        else if(w<=11){
            return <img className="weather-image" src={rainy}/>
        }
        else if(w>=30){
            return <img className="weather-image" src={sunny}/>
        }
        else{
            <img className="weather-image" src='./images/anime.gif'/>
        }
    }
    return (
        <div className="weather">
            <Weathbar statu={status} toggle={toggle}/>
        <div className="weather-content" onClick={()=>setStatus(false)}>
        <div>
             {
             loading ? (
                <p>Loading...</p>
            ) : weather ? (<>
         <div>  <h1>{
                ` 
               ${ weather.hourly.time.map((time, index) => {
                if (time == fullTime) {
                     w= weather.hourly.temperature_2m[3];
                    return w +
                     weather.hourly_units.temperature_2m.split("")[0] ; // Use the index from the map function
                }
                return null; // Return null for non-matches
            }).filter(temperature => temperature !== null)
        }`
      
              }

            </h1>
<h1>{weather.timezone.split("/")[1]}</h1>
</div> 
{weatherImage(w)}
</>
            ) : (
                <p>No data available</p>
            )}</div>
        
         <form onSubmit={handleSubmit} >  
                <label>
                    Latitude
                    <input type="text" value={latitude}
                        placeholder="Enter latitude"
                        onChange={(e) => setLatitude(parseFloat(e.target.value))} />
                    Longitude
                    <input type="text" value={longitude}
                        placeholder="Enter longitude"
                        onChange={(e) => setLongitude(parseFloat(e.target.value))} />
                </label>
                <button type="submit" >Submit</button>

                <div className="weather">
                    {loading ? (
                        <p>Loading...</p>
                    ) : weather ? (<>{
                        
                        `${ date.daytime.map((day, index) => {
                            const date = day.split("T")[0];
                            const time=day.split("T")[1];
                            if (date === formattedDate && time==curhr) {
                                return time;  // Return the date if it matches
                            }
                            return null; // Return null for non-matching dates
                        }).filter(day => day !== null)
                        
                       } `
                    
                    }
                    </>
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </form>
            </div>
        </div>);
}

export default Weather;