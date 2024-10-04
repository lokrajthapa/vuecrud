import {ref } from "vue";
import axios from "axios";

export default function useStudent() {
    const url = "http://localhost:3001/students/"
    const studentData =ref([])
    const error = ref(null)
    const statusCode = ref(null)
    const delError = ref(null)
    //Get All Students data

    const getAllStudent = async() =>{
        studentData.value=[],
        error.value=null    
        try{
             const res=await axios(url)
            studentData.value=res.data
        }catch(err){
           error.value=err

        }
    }

    //get single student data

    const getSingleStudent = async(id) =>{
        studentData.value=[],
        error.value=null   

        try{
            const res=await axios(url + id)
            studentData.value=res.data
        }catch(err){
           error.value=err      
        }
    }

    

    //post/add student data
    const createStudent = async(formData) =>{
        studentData.value=[],
        error.value=null   

        try{
            const config ={
                method: 'POST',
                url: url,
                headers:{
                    "Content-Type":"application/json"
                },
                data:JSON.stringify(formData)
            }
           const res=await axios(config)
           studentData.value=res.data
           statusCode.value=res.status
        }catch(err){
          error.value=err
        }
    }

    //update student data
    const updateStudent = async(id,data) =>{
        studentData.value=[],
        error.value=null   

        try{
            const config ={
                method: 'PUT',
                url: url+id,
                headers:{
                    "Content-Type":"application/json"
                },
                data:JSON.stringify(data)
            }
           const res=await axios(config)
           studentData.value=res.data
           statusCode.value=res.status
        }catch(err){
          error.value=err
        }


    }

    //delete student data
    const destroyStudent = async(id) =>{
        studentData.value=[],
        error.value=null   

        try{
            const config ={
                method: 'DELETE',
                url: url+id,
                headers:{
                    "Content-Type":"application/json"
                },
              
            }
           const res=await axios(config)
           statusCode.value=res.status
        }catch(err){
         
          delError.value=err
        }


    }


    return {
        studentData,
        error,
        getAllStudent,
        getSingleStudent,
        createStudent,
        updateStudent,
        destroyStudent,
        statusCode,
        delError
    }
}

