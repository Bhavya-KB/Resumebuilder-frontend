
import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"




//1.add resume -post - steps component

 export const addResumeAPI = async (reqBody) => {

    return await commonAPI ("POST", `${BASEURL}/all-resumes`, reqBody)

 }


 //2 get resume

  export const getAResumeAPI = async (id) => {

    return await commonAPI ("GET", `${BASEURL}/all-resumes/${id}`, {})
 }


 //3 Update resume

  export const updateAResumeAPI = async (id,reqBody) => {

    return await commonAPI ("PUT", `${BASEURL}/all-resumes/${id}`, reqBody)

 }

  //4 All Resumes (for history page getting all datas)

  export const getAllResumeAPI = async () => {

    return await commonAPI ("GET", `${BASEURL}/all-resumes`)

 }


  //4 delete Resumes 

  export const deleteResumeAPI = async (id) => {

    return await commonAPI ("DELETE", `${BASEURL}/all-resumes/${id}`,{})

 }
