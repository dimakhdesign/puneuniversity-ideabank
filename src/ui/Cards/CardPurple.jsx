import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import IconProgress from '../../assets/icon-progress.svg';

import './CardPurple.css';

const Purple = () => {
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
                    <span>80%</span>
                </label>
                <ProgressBar value={80} />
            </div>
        </div>
    )
}

export default Purple
