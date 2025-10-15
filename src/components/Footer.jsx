import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
     <footer className="bg-dark text-light py-3 ">
      <div className="container text-center">
        <p className="mb-1">
          © 2025 Resume Builder. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <FaLinkedin />
          </a>
           <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
         <IoIosMail />
          </a>
        </div>
      </div>
    </footer>
     </>
  )
}

export default Footer