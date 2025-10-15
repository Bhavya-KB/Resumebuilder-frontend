import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { getAResumeAPI, updateAResumeAPI } from '../service/allAPI';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:"auto",
  maxHeight:"90vh"
};

function Edit({resumeId,setUserInput}) {

   const [edituserInput,setedituserInput] = useState({  //usestate is using in this edituserInput is the value, setedituserInput is the function that need to be update
        id:"",
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

      const [inputSkill,setInputSkill] = useState("")

     const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
     setOpen(true);
     getEditResume(resumeId)

  }
  const handleClose = () => setOpen(false);
   const SkillsSuggestionArray=["HTML","CSS","JAVASCRIPT","REACT","MONGODB","NODE JS"]


   console.log(resumeId);

//getapi

   const getEditResume = async (resumeId)=>{
    try{
      const result = await getAResumeAPI (resumeId)
      console.log(result);
      setedituserInput(result.data)
    }
    catch(error){
      console.log(error);
      

    }
   }
   console.log(edituserInput);

     const addSkill=(inputSkill)=>{
    console.log("user input skill:" + inputSkill);
    if(inputSkill){
      if(edituserInput.skill.includes(inputSkill)){
        alert("given  skill already existing ...")

      }
      else{
        setedituserInput({...edituserInput,skill:[...edituserInput.skill,inputSkill]})
      }

    }
    

  }

  const removeSkill = (skill)=>{
    console.log(skill);
    setedituserInput({...edituserInput,skill:edituserInput.skill.filter(item=> item!=skill)})
  }
   

//updateapi

const updateResume =async ()=>{
  // const result =  updateAResumeAPI(resumeId,edituserInput)
  // console.log(result);

   try {
    const result = await updateAResumeAPI(resumeId, edituserInput);
    console.log(result);
    setUserInput(result.data)

    if (result.status === 200) {
      Swal.fire({
        title: "Updated Successfully!",
        text: "Your resume has been updated.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      handleClose(); // close modal after success (optional)
    } else {
      Swal.fire({
        title: "Update Failed!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again",
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Error!",
      text: "An unexpected error occurred. Please check your network or try again later.",
      icon: "error",
      confirmButtonColor: "#d33",
      confirmButtonText: "OK",
    });
  }
  
}
   
  return (
    <>
    <div>
         <button onClick={handleOpen} className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
          <FaEdit />
        </button>

         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit your Resume
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 2 }}>

            <div>
                        <h1>Personal Details</h1>
                        <div className='d-flex row p-3 ' >
            
                             <TextField value={edituserInput.profesionlData.name}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, name:e.target.value}})} id="name" label="Full Name" variant="standard" />
                                              <TextField value={edituserInput.profesionlData.jobTitle}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, jobTitle:e.target.value}})} id="job-title" label="Job Title" variant="standard" />
                                               <TextField value={edituserInput.profesionlData.location}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, location:e.target.value}})}  id="location" label="Location" variant="standard" />
            
                        </div>
                    </div>

                     <div>
                                <h1>Contact Details</h1>
                                <div className='d-flex row p-3 '>

                               <TextField value={edituserInput.profesionlData.email}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, email:e.target.value}})} id="email" label="Email" variant="standard" />
                                              <TextField value={edituserInput.profesionlData.phone}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, phone:e.target.value}})} id="phone-number" label="Phone Number" variant="standard" />
                                               <TextField value={edituserInput.profesionlData.github}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, github:e.target.value}})} id="github" label="GitHub Profile Link" variant="standard" />
                                                <TextField value={edituserInput.profesionlData.linkedIn}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, linkedIn:e.target.value}})} id="linkedin" label="LinkedIn Profile Link" variant="standard" />
                                                 <TextField value={edituserInput.profesionlData.portfolio}  onChange={(e)=>setedituserInput({...edituserInput,profesionlData:{...edituserInput.profesionlData, portfolio:e.target.value}})} id="portfolio" label="Portfolio Profile Link" variant="standard" />
                    
                                     {/* <TextField id="email" label="Email" variant="standard" />
                                      <TextField id="phone-number" label="Phone Number" variant="standard" />
                                       <TextField id="github" label="GitHub Profile Link" variant="standard" />
                                        <TextField id="linkedin" label="LinkedIn Profile Link" variant="standard" />
                                         <TextField id="portfolio" label="Portfolio Profile Link" variant="standard" /> */}
                    
                                </div>
                            </div>

                             <div>
                                        <h1>Education Details</h1>
                                        <div className='d-flex row p-3 '>

                                   <TextField value={edituserInput.educationData.course}  onChange={(e)=>setedituserInput({...edituserInput, educationData:{...edituserInput. educationData, course:e.target.value}})} id="course-name" label="Course Name" variant="standard" />
                                                    <TextField value={edituserInput.educationData.college}  onChange={(e)=>setedituserInput({...edituserInput, educationData:{...edituserInput. educationData, college:e.target.value}})}  id="college-name" label="College Name" variant="standard" />
                                                     <TextField value={edituserInput.educationData.university}  onChange={(e)=>setedituserInput({...edituserInput, educationData:{...edituserInput. educationData, university:e.target.value}})} id="university" label="University" variant="standard" />
                                                      <TextField value={edituserInput.educationData.year}  onChange={(e)=>setedituserInput({...edituserInput, educationData:{...edituserInput. educationData, year:e.target.value}})} id="year-of-passout" label="Year of Passout" variant="standard" />


                                                
                            
                                        </div>
                                    </div>


                                     <div>
                                                <h1>Professional Details</h1>
                                                <div className='d-flex row p-3 '>

                                        <TextField value={edituserInput.experience.company}  onChange={(e)=>setedituserInput({...edituserInput, experience:{...edituserInput. experience, company:e.target.value}})} id="company-name" label="Company Name" variant="standard" />
                                                      <TextField value={edituserInput.experience.jobLocation}  onChange={(e)=>setedituserInput({...edituserInput, experience:{...edituserInput. experience, jobLocation:e.target.value}})} id="company-location" label="Location" variant="standard" />
                                                      <TextField value={edituserInput.experience.duration}  onChange={(e)=>setedituserInput({...edituserInput, experience:{...edituserInput. experience, duration:e.target.value}})} id="duration" label="Duration" variant="standard"/>
                                                      <TextField  value={edituserInput.experience.jobRole} onChange={(e)=>setedituserInput({...edituserInput, experience:{...edituserInput. experience, jobRole:e.target.value}})} id="job-role" label="Job Role" variant="standard"/>
                                    
                                                
                                                       
                                                </div>
                                            </div>

             <div className='mt-4'>
            <h1>Skills</h1>
            <div className='d-flex align-items-center justify-content-center'>
                 <TextField value={inputSkill} onChange={(e)=>setInputSkill(e.target.value)}   sx={{width:"550px"}} id="skill" label="Add Skill" variant="standard" />
                 <Button onClick={()=>addSkill(inputSkill)} variant="outlined">ADD</Button>    

            </div>
            <div className='mt-3'>
                <h4>Suggestions</h4>

            </div>

            <div className='d-flex flex-wrap gap-4 mt-3'>
                {
                    SkillsSuggestionArray.map((userSkill)=>(
                         <Button onClick={()=>addSkill(userSkill)} key={userSkill} variant="outlined">{userSkill}</Button>  

                    )
                )
                }


            </div>

            <div className='mt-3'>
                <h4>Added Skills:</h4>

                {edituserInput ?.skill.map((item)=>(<span key={item} className="btn btn-primary me-2">
                {item}
                <button
                  className="btn btn-sm text-light"
                   onClick={() => removeSkill(item)}
                >
                  X
                </button>
              </span>))}
            </div>
        </div>

        <div className='mt-4'>
                    <h1>Professional Summary</h1>
                    <div className='d-flex row p-3 '>
        
                    <TextField value={edituserInput.summary} onChange={e=>setedituserInput({...edituserInput,summary:e.target.value})} multiline rows={5}  id="professional-summary" label="Write a short summary of your yourself" variant="standard" />
                        
                           

                    </div>
                </div>


                <div className='d-flex justify-content-end gap-4'>
                    <Button variant='outlined'>Clear</Button>
                      <Button type='button' onClick={updateResume} variant='outlined'>Update</Button>
                </div>















          


          </div>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default Edit