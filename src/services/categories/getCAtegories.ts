import axios from "axios";
import BASE_URL from "../baseUrl";

async function getCategories (){
    await axios.get(`${BASE_URL}/categories`)
          .then((response) => {
            return response.data 
          })
          .catch((error) => {
            console.log(error);
            return alert("malformed request");
          });
  }
  export default getCategories