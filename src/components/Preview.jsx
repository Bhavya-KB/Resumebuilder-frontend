import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import { Button, Divider, Link } from '@mui/material';
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";




function Preview({userInput, isResumeAdded, resumeId,setUserInput}) { //{} is given because userInput is an object
  console.log(userInput);

//download 
const downloadPDF = async () =>{
  const input  = document.getElementById("result") //to get the id
  const canvas = await html2canvas (input , {scale :2}) //to convert the selected html to canvas (screenshot)
  const imgData = canvas.toDataURL("image/png") //to convert canvas into image url

  //pdf

  const pdf = new jsPDF("p" , "mm", "a4")
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height*pdfWidth) / canvas.width
  pdf.addImage(imgData, "png", 0 , 0, pdfWidth,pdfHeight)
  pdf.save("resume.pdf")
}
  
  return (
    <>
      <Box component="section">

       <Stack direction={"row"} sx={{gap:"10px",display:"flex",justifyContent:"end",}} >

       {isResumeAdded &&
        <div  className='d-flex'>

        <Edit resumeId={resumeId}  setUserInput={setUserInput} />
        {/* <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
          <FaEdit />
        </button> */}

       <p>
          <button type='button' onClick={downloadPDF} className='btn me-3 btn-primary align-items-center d-flex justify-content-center btn-lg'>
            <FaFileDownload />
          </button>
       </p>
       </div>
        }

      <p>
         <Link href={"/history"}>
            <button  className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'>
              <FaHistory />
            </button>
         </Link>
      </p>

        <Link href={"/"}><p className='btn text-primary'>BACK</p></Link>
       
      </Stack>

      <div className='mt-5' id='result'>
           <Paper elevation={3} sx={{p:2,textAlign:"center"}} >
            <h2>{userInput.profesionlData.name}</h2>
            <h4>{userInput.profesionlData.jobTitle}</h4>
            <p><span>{userInput.profesionlData.location}</span> | <span>{userInput.profesionlData.email}</span> | <span>{userInput.profesionlData.phone}</span></p>
            <div className='d-flex gap-3 justify-content-center'>
              <Link href={userInput.profesionlData.github}>GITHUB</Link> |
              <Link href={userInput.profesionlData. linkedIn}>LINKEDIN</Link> |
              <Link href={userInput.profesionlData.portfolio}>PORTFOLIO</Link>
            </div>
            <Divider sx={{fontSize:"20px"}}>Summary</Divider>
            <p style={{textAlign:"justify"}}>{userInput.summary}</p>

            <Divider sx={{fontSize:"20px",marginBottom:"10px"}}>Education</Divider>
            <h5>{userInput.educationData.course}</h5>
            <p>{userInput.educationData.college} |{userInput.educationData.university}|{userInput.educationData.year}</p>

            <Divider sx={{fontSize:"20px",marginBottom:"10px"}}>Professional Experience</Divider>
            <h5>{userInput.experience.jobRole}</h5>
            <p>{userInput.experience.company} | {userInput.experience.jobLocation} | {userInput.experience.duration}</p>

            <Divider sx={{fontSize:"20px",marginBottom:"10px"}}>Skills</Divider> 
            <Stack spacing={2} direction={"row"} sx={{flexWrap:"wrap",gap:"10px",}} >
              {/* <Button variant="contained">REACT</Button> */}

              {userInput.skill.map((item)=>(
                 <Button variant="contained">{item}</Button> 

              ))}
            </Stack>
           </Paper>
      </div>
     
    </Box>

    </>
  )
}

export default Preview