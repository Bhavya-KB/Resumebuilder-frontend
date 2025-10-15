import { Box, Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Links } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { deleteResumeAPI, getAllResumeAPI } from '../service/allAPI';

function History() {

  const [userInput,setUserInput] = useState({  //usestate is using in this userInput is the value, setUserInput is the function that need to be update
        profesionlData:{
          name:"",
          jobTitle:"",
          location:"",
          email:"",
          phone:"",
          github:"",
          linkedIn:"",
          portfolio:"",
    
        },
    
        educationData:{
          course:"",
           college:"",
            university:"",
             year:"",
        },
    
        experience:{
           jobRole:"",
            company:"",
             jobLocation:"",
              duration:"",
    
        },
    
        skill:[],
        summary:""
    
      }
    
      )

      //delete resume
      const deleteresume = async (id) =>{
         try{
        const result = await deleteResumeAPI (id)
        console.log(result);
        getAllResume ()

        
      }
      catch(error){
        console.log(error);
        
  
      }

      }

  const getAllResume = async ()=>{
      try{
        const result = await getAllResumeAPI ()
        console.log(result);
        setUserInput(result.data)
        
      }
      catch(error){
        console.log(error);
        
  
      }
     }

     useEffect(()=>{  //useeffect is used for getting the datas when the page is reloading
      getAllResume()
     
     },[])


  return (
    <>
    <div>
      <h1 className='text-center mt-5'> Downloaded Resume History</h1>
      <Link to={"/"} style={{marginTop:"-50px"}} className='float-end me-5'> BACK</Link>

      <Box component="section" className='container-fluid'>
        <div className='row mt-5'>

          {userInput?.length > 0 ? userInput?.map((item,index)=>(

          <div className='col-md-4' key={index}>

          

             <Paper elevation={3} sx={{my: 5, p:2,textAlign:"center"}} >

                <div className='d-flex align-items-center justify-content-center'>
              {/* <h6>Review At: <br/> 24/06/2025 , 7:35 PM</h6> */}
              <h6>Resume Builder:{index + 1}</h6>
              <button type='button' onClick={()=> deleteresume(item?.id)} className='btn btn-danger'>X</button>
            </div>

            <div className='shadow p-3 mt-3'>
              <h2>{item?.profesionlData.name}</h2>
              <h4>{item?.profesionlData.jobTitle}</h4>
              <p><span>{item?.profesionlData.location}</span> | <span>{item?.profesionlData.email}</span> | <span>{item?.profesionlData.phone}</span></p>
           
            </div>
           </Paper>

          </div>
          )
        )
          :
          <h1>No resume added</h1>

        }
        

        </div>

      </Box>

      <div></div>
    </div>
    </>
  )
}

export default History