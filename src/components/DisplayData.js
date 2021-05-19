import React from 'react';
import apiData from './SearchBar';
function DisplayData() {
    return (
        <div>
          {apiData.main ? (
              <div>
                  <h1>
                        ${apiData.main.temp-273.15}°C;
                  </h1>
              </div>
            
            ): (
            <h1>Loading</h1>
          )}
        </div>
    );
}

export default DisplayData;
