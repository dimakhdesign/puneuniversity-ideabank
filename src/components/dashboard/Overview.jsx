import WhiteBox from "../../ui/WhiteBox";
import UserImage from '../../assets/user-profile-image.svg';
import ButtonSecondary from "../../ui/Button/ButtonSecondary";
import AccordionGroup from "../../ui/Accordion/AccordionGroup";
import Link from "../../ui/Link/Link";
import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import SidebarRight from "./SidebarRight";

import IconProgress from '../../assets/icon-progress.svg';
import IconDocumentUpload from '../../assets/icon-document-upload.svg';

import './Overview.css';

const faqItems = [
    {
        title: "Can you tell me how to ask questions on this platform?",
        content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    },
    {
        title: "Can you tell me how to ask questions on this platform?",
        content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    },
    {
        title: "Can you tell me how to ask questions on this platform?",
        content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    },
];

const Overview = () => {

    const handleViewAllClick = () => {
        console.log("Clicked");
    }

    const handleUploadDoc = () => {
        console.log("Please upload the document!")
    }

    return (
        <div className="grid grid-cols-[65%_35%] gap-4">
            <div className='ml-2 h-screen'>

                <WhiteBox className='profile-box flex gap-3'>
                    <div className="user-image">
                        <img src={UserImage} alt="User" />
                    </div>
                    <div className="profile-summary">
                        <p> Welcome to our platform,<br /> <strong>Rajesh Shinde !</strong> Here’s a quick overview of what you can expect.</p>
                        <div className='profile-cpmpletion-status flex gap-3 items-center mt-3'>
                            <p>Your profile is 50% completed.</p>
                            <ButtonSecondary text="Update Now!" />
                        </div>
                    </div>
                </WhiteBox>

                <div className="cards-wrapper flex gap-4 mt-5">
                    {/* Purple Card */}
                    <div className="card purple-card flex flex-col justify-center p-5 gap-5 text-white">
                        <div className="header flex gap-3">
                            <div className="icon flex justify-center align-center">
                                <img src={IconProgress} alt="" />
                            </div>
                            <div className="text">
                                <h5>Research Submission Progress</h5>
                                <p>Current Status : Approved</p>
                            </div>
                        </div>
                        <div className="body flex flex-col">
                            <label className="flex justify-between">
                                <span>Progress</span>
                                <span>80%</span>
                            </label>
                            <ProgressBar value={80} />
                        </div>
                    </div>

                    {/* Blue Card */}
                    <div className="card blue-card flex flex-col justify-center p-5 gap-5 text-white">
                        <div className="header flex gap-3">
                            <div className="icon flex justify-center align-center">
                                <img src={IconDocumentUpload} alt="" />
                            </div>
                            <div className="text">
                                <h5>Upload Final Document</h5>
                                <p>Current Status : Approved</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="btn-upload rounded-full text-center cursor-pointer" onClick={handleUploadDoc}>Upload</div>
                            {/* <input type="file" className="btn-upload rounded-full text-center cursor-pointer" /> */}
                        </div>
                    </div>
                </div>

                <WhiteBox className='bg-white question-answer-box mt-5'>
                    <div className="accordion-header flex justify-between">
                        <h2 className="section-heading">Q&A Discussions</h2>
                        <ButtonSecondary text="Ask new Question" />
                    </div>
                    <div className="accordion-wrapper border-t-1 border-gray-200 mt-4">
                        <AccordionGroup items={faqItems} />
                        <Link text="View All" className="mt-3" onClick={handleViewAllClick} />
                    </div>
                </WhiteBox>

                <WhiteBox className='bg-white recent-resources-box mt-5'>
                    <h2 className="section-heading">Recent Resources & Guidelines</h2>
                    <p className="my-4">Explore our latest resources and guidelines to enhance your experience. Stay informed with up-to-date information and best practices!</p>
                    <ButtonSecondary text="View all" />
                </WhiteBox>

            </div>
            <aside className='mr-5 h-screen'>
                <SidebarRight />
            </aside>
        </div>
    )
}

export default Overview
