import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import IconProgress from '../../assets/icon-progress.svg';

import { API_KEY } from '../../config/apiConfig';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

import './CardPurple.css';

const Purple = () => {

    const [studentProgress, setStudentProgress] = useState(null);

    const { authData } = useAuth();
    const studentId = authData?.userId;

    // API call to get Research progress
    useEffect(() => {
        if (!studentId) return;

        const getResearchProgress = async () => {
            try {
                const response = await fetch('/api/getResearchProgress.php', {
                    // const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/getResearchProgress.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Authorization_key: API_KEY,
                        student_id: studentId,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log(result);
                setStudentProgress(result.field_array.percentage)
            } catch (error) {
                console.error('Get User error:', error);
            }
        };

        getResearchProgress();

    }, [studentId]);

    return (
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
                    <span>{studentProgress ? studentProgress : "0"}%</span>
                </label>
                <ProgressBar value={studentProgress ?? "0"} />
            </div>
        </div>
    )
}

export default Purple
