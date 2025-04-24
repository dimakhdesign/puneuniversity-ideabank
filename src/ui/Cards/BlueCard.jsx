import IconDocumentUpload from '../../assets/icon-document-upload.svg';

const BlueCard = () => {

    const handleUploadDoc = () => {
        console.log('Document Uploaded');
    }

    return (
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
                <input type="file" className="btn-upload rounded-full text-center cursor-pointer" />
            </div>
        </div>
    )
}

export default BlueCard
