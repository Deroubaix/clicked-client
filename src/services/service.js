import axios from "axios";

class Service { // everytime
    constructor(){
        this.api = axios.create({   // creates an instant of axios that always can be reused
            baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005", // just in case you have the local host
        })   
        
        //here we intercept every request that uses this api and call a middleware function
        this.api.interceptors.request.use((config)=> {    // LIKE A MIDDLEWARE: .interceptors = allows us to, when we send the request, catch the request (we intercept the request)   .use = so we can use the request

        //inside this middleware function the first thing we do is get the token from the localstorage
            const storedToken = localStorage.getItem("authToken")

            //if there's a token we're going to add it to the headers of the request
            if(storedToken) {
            
                //here we pass to the headers an object with Authorization and the Bearer token
                config.headers = { Authorization: `Bearer ${storedToken}`}
            }

            return config;
        })
    }

    //here we can create the methods to connect to the API

    uploadImage = async (file) => {
        try {
          const res = await api.post("/upload", file);
          return res.data;
        } catch (error) {
         console.log(error);
        }
      };



}

const clickedService = new Service()

export default clickedService; 