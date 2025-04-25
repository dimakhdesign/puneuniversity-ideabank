import React, { useRef } from 'react';
import IconDocumentUpload from '../../assets/icon-document-upload.svg';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

import './CardBlue.css';

const CardBlue = () => {

    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    const handleUploadClick = () => {
        fileInputRef.current.click(); // trigger file input when button is clicked
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            toast.success("PDF uploaded successfully!", {
                duration: 2000,
                position: "top-center",
            });
            console.log('Selected file:', file);
        } else {
            toast.error(result.message || "Please upload a valid PDF file.", {
                duration: 2000,
                position: "top-center",
            });
        }
    };

    return (
        <div className="card blue-card flex flex-col justify-center p-5 gap-5 text-white">
            <div className="header flex gap-3">
                <div className="icon flex justify-center align-center">
                    <img src={IconDocumentUpload} alt="" />
                </div>
                <div className="text">
                    <h5>Submit Research</h5>
                    <p>Current Status : Pending Submission</p>
                </div>
            </div>
            <div className="body">
                {/* <div className="btn-upload rounded-full text-center cursor-pointer" onClick={handleUploadDoc}>Upload</div> */}
                {/* <input type="file" className="btn-upload rounded-full text-center cursor-pointer" /> */}
                <div
                    // onClick={handleUploadClick}
                    onClick={() => navigate('/dashboard-student/research-submit')}
                    className="btn-upload rounded-full text-center cursor-pointer hover:bg-gray-100 transition"
                >
                    Submit
                </div>
                {/* <input
                    type="file"
                    accept="application/pdf"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                /> */}
                <Toaster />
            </div>
        </div>
    )
}

export default CardBlue
