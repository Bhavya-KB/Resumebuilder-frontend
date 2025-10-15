import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section style={{width:"100%",overflow:"hidden",  height:"450px", backgroundImage:"url('https://cvjury.com/wp-content/uploads/elementor/thumbs/15.-Is-It-A-Brilliant-Idea-to-Send-The-Same-Resume-For-Different-Jobs-r17qunx3cjja0s6jt8rtl1xo7dx51wexqbhw6cgw8w.webp')", backgroundAttachment:"fixed",backgroundSize:"cover"}}>
        <div className='row pt-5'>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 border py-5 rounded my-5 text-center" style={{backgroundColor:"white"}}>
            <h2>Designed to get Hired</h2>
            <h4>Your Skills, Your story, your next job -all in one</h4>
            <Link to={"/resume"}><button className='btn btn-primary'>Make your Resume</button></Link>

          </div>
          <div className="col-12 col-md-4"></div>

        </div>
    </section>

    {/*Tools */}

    <section>
        <h1 className='text-center p-5'> Tools</h1>
        <div className='row align-items-center'>
            <div className=" col-12  col-md-6 p-5">
                <h4>Resume</h4>
                <p> Create unlimited new Resumes and easily edit them afterwards</p>
                <h4>Cover Letters</h4>
                <p>Easily write professional cover letters</p>
                <h4>Jobs</h4>
                <p>Automatically receive new and relevant job postings.</p>
                <h4>Applications</h4>
                <p>Effortlessly manage and track your job Applications in an organized manner</p>


            </div>
            <div className="col-12 col-md-6">
                <img src="https://www.webfx.com/wp-content/uploads/2014/08/anne-robertson-creative-resume-example.png" alt=""  className='w-75 ms-5'/>
            </div>

        </div>
    </section>


{/* Image section*/}
     <section className='mt-3' style={{width:"100%",overflow:"hidden",  height:"450px", backgroundImage:"url('https://img.freepik.com/free-photo/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume_482257-125564.jpg?semt=ais_incoming&w=740&q=80')", backgroundAttachment:"fixed",backgroundSize:"cover"}}>
       
    </section>

    {/* Testimony section*/}

     <section>
        <h1 className='text-center p-5'> Testimony</h1>
        <div className='row align-items-center'>
            <div className=" col-12  col-md-6 p-5">
                <h4>Trusted by professionals worldwide.</h4>
              <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
                <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
                <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>

            </div>
            <div className="col-12 col-md-6 mt-6">
                <div className='row mb-2 mt-5'>
                  
                    <div className="col-3 "><img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuvr0Qx7UlGx5-rOR2nN2XO1JwBFk6gc2fA&s" alt="" /></div>
                    <div className="col-3">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_BVL_x6wgULJKv5EIHkUzvTWqNpJtUXEDw&s" alt="" />
                    </div>
                    <div className="col-3">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzOxPKvUhiQjdki1a40cIIx9aVdvrdOQRFA&s" alt="" />
                    </div>
                     <div className="col-3">
                        <img className='w-100' src="https://t4.ftcdn.net/jpg/01/46/13/45/360_F_146134506_FrsN81eihSrq7dCWQSrBxKbdwo1YGwcM.jpg" alt="" />
                    </div>

                </div>

                <div className='row mb-2'>
                  
                    <div className="col-3 "><img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuvr0Qx7UlGx5-rOR2nN2XO1JwBFk6gc2fA&s" alt="" /></div>
                    <div className="col-3">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_BVL_x6wgULJKv5EIHkUzvTWqNpJtUXEDw&s" alt="" />
                    </div>
                    <div className="col-3">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzOxPKvUhiQjdki1a40cIIx9aVdvrdOQRFA&s" alt="" />
                    </div>
                     <div className="col-3">
                        <img className='w-100' src="https://t4.ftcdn.net/jpg/01/46/13/45/360_F_146134506_FrsN81eihSrq7dCWQSrBxKbdwo1YGwcM.jpg" alt="" />
                    </div>

                </div>
                <div className='row mb-2'>
                  
                    <div className="col-3 "><img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSds7bpR2zqBfRA9tT9qF4vcoseKv6S14_lTgXD4YjIf2KoCYe_h6kezHXtKYmwAO2s4es&usqp=CAU" alt="" /></div>
                    <div className="col-3">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjtNi1m_f5OuxG9GcNMqa9i4F2sq_dVREdA&s" alt="" />
                    </div>
                    <div className="col-3">
                        <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrDPa3sffKwExrHGSIogvecPauQQ7GV2pTA&s" alt="" />
                    </div>
                     <div className="col-3">
                        <img className='w-100' src="https://t4.ftcdn.net/jpg/01/46/13/45/360_F_146134506_FrsN81eihSrq7dCWQSrBxKbdwo1YGwcM.jpg" alt="" />
                    </div>

                </div>
               
            </div>

        </div>
    </section>



    </>

  )
}

export default LandingPage