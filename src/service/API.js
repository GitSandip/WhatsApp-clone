import axios from 'axios'


export const addUser= async (data)=>{
    try{
        await axios.post('http://localhost:8000/add',data);
        console.log("/add:post data from addUser by post request ",data);
    }catch(error){
        console.log("Error message ",error);
    }
}

export const getUser=async ()=>{
    try{
        let response = await axios.get('http://localhost:8000/user');
        console.log("/user:get response from getUser api ",response)
        return response.data;
    }catch(error){
        console.log(error.message);
    }
}