import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function Form() {
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

    const [isResumeAdded , setIsResumeAdded] = useState(false)
   
    const [resumeId , setIsResumeId] = useState("")
    // console.log(resumeId);
    

  return (
    <>
   <div className="container-fluid">

 {isResumeAdded ?
    <div className="row  mt-5">

      <div className="col-2 "></div>

  {/*PREVIEW  */}

        <div className="col-8 ">
            <Preview userInput={userInput} isResumeAdded={isResumeAdded} resumeId={resumeId} setUserInput={setUserInput}/>

        </div>
        <div className="col-2 "></div>

    </div>

:
    <div className="row  mt-5">

        {/*STEPS  */}
        <div className="col-6 ">
            <Steps setUserInput={setUserInput} userInput={userInput} setIsResumeAdded= {setIsResumeAdded} setIsResumeId={setIsResumeId}/>

        </div>

  {/*PREVIEW  */}

        <div className="col-6 ">
            <Preview userInput={userInput}/>

        </div>

    </div> 
    }
   </div>
    </>
  )
}

export default Form