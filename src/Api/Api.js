import axios from "axios"

export const getWorkSection = async()=>{
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/home-projects`);
        return res.data.data;
    }
    catch(err){
        console.log("Error while calling work section api",err);
    }
}
export const getBloges = async()=>{
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/web-blogs`);
        return res.data.all;
    }
    catch(error){
       console.log("Error while calling bloges section api",error); 
    }
}

export const getProductdetail = async(id)=>{
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/projects-detail/${id}`)
        return res.data.project;
    }
    catch(error){
        console.log("Error while calling projects detail section api",error)
    }
}
