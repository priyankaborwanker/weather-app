import React from 'react';
import {useState,useEffect} from 'react';

function SearchBar()
{
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('Delhi');
    const [state, setState] = useState('Delhi');

    const apiKey = `6ebe64b1cd0730de423c172459d18992`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setApiData(data));
      }, [apiUrl]);
      const inputHandler = (event) => {
        setGetState(event.target.value);
      };
    
      const submitHandler = e => {
        e.preventDefault();
        setState(getState);
      };
      return(
        <div className="">
                    <form onSubmit={submitHandler}>
                      <div className="flex justify-center">
                      <div className="flex h-16 w-3/4 bg-white bg-opacity-25 hover:bg-opacity-50 justify-between items-center">
                        <div className="flex w-full">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-2 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <input type="text" className="text-white font-bold w-full ml-1 bg-white bg-opacity-0 focus:outline-none placeholder-white" onChange={inputHandler} value={getState} placeholder="Try 'Mumbai'..."></input>
                        </div>
                        <button type="submit" className="bg-blue-800 hover:bg-blue-900 focus:bg-blue-900 py-4 hover:border-4 hover:border-white text-white active:bg-blue-900 font-bold uppercase text-xs px-5 py-0 outline-none focus:outline-none mr-3 mb-1 mt-1 ease-linear transition-all duration-150">
                           Submit
                         </button>
                        </div>
                        </div>
                    </form>
            <br/>
            <div className="mx-auto m-10 h-48 w-1/2 bg-white bg-opacity-0 rounded-lg">
                    {apiData.main ? (
                        <div className="text-white">
                          <div className="flex justify-center mb-4">
                            <h1 className="mb-2 text-8xl text-white">{(apiData.main.temp-273.15).toFixed(2)}</h1>
                            <h1 className="font-bold text-4xl">°C</h1>
                          </div>
                          <div className="flex justify-center font-bold text-4xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <h1 className="">{apiData.name}</h1>
                          </div>
                          <div className="flex justify-center mt-2">
                          <h1 className="mt-2 font-bold text-4xl">{apiData.weather[0].main}
                          </h1>
                          </div>
                          <div className="flex justify-center mt-2">
                          <h1 className="mt-2 font-bold text-2xl">
                          {new Date().toLocaleString('en',{
                                 weekday: "short",
                                 year: "numeric",
                                 month: "short",
                                 day: "numeric"
                              })}</h1>
                          </div>
                        </div>
                        
                  ) : (
                    <div className="flex justify-center text-white font-bold text-4xl">
                      <h1>City not found, maybe you spelled it wrong?</h1>
                    </div>
                  )}
            </div>
        </div>
      );
}
export default SearchBar;