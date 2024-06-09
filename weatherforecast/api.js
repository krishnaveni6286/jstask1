

"use strict";

const api_key ="233be158025cd0dd4ca3e552b45e9163";


/*** fetch data from server
 *
 * @param {string } URL API URL
 * @param {Function} callback callback
*/
export const fetchData =function (URL, callback) {
    fetch (`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data =>callback(data))
     .catch(error => console.error('Error fetching data:', error));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat ,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },


    /*** 
     * @param {string } query search query e.g.: "London", "New York"
    */ 
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }

}


// "use strict";

// const api_key = "233be158025cd0dd4ca3e552b45e9163";

// /**
//  * Fetch data from server
//  * 
//  * @param {string} URL - API URL
//  * @param {Function} callback - Callback function
//  */
// export const fetchData = function (URL, callback) {
//     fetch(`${URL}&appid=${api_key}`)
//         .then(res => res.json())
//         .then(data => callback(data))
//         .catch(error => console.error('Error fetching data:', error));
// };

// export const url = {
//     currentWeather(lat, lon) {
//         return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
//     },
//     forecast(lat, lon) {
//         return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
//     },
//     airPollution(lat, lon) {
//         return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
//     },
//     reverseGeo(lat, lon) {
//         return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
//     },
//     /**
//      * @param {string} query - Search query e.g., "london", "new york"
//      */
//     geo(query) {
//         return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
//     }
// };
