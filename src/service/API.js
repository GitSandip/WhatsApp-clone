import axios from 'axios'

const url="http://localhost:8000";

export const addUser= async (data)=>{
    try{
        await axios.post(`${url}/add`,data);
        console.log("/add:post data from addUser by post request ",data);
    }catch(error){
        console.log("Error message ",error);
    }
}

export const getUser=async ()=>{
    try{
        let response = await axios.get(`${url}/user`);
        console.log("/user:get response from getUser api ",response)
        return response.data;
    }catch(error){
        console.log(error.message);
    }
}

export const setConversation = async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data)
    }
    catch(error){
        console.log("Error occured to conversation api",error.message);

    }
}