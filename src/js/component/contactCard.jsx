import React from "react";

function ContactCard(){
    const profileImageClasses = "img-thumbnail rounded-circle";
    const textClasses = "ms-2 my-0 text-secondary";
    const imageStyle = { height: '100px', width: '100px'};
     
    return (
        <li className="list-group-item">
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Profile-pic_EuroNeuro.jpg/640px-Profile-pic_EuroNeuro.jpg"
                            className={profileImageClasses}
                            style={imageStyle}
                        />
                    </div>
                    
                    <div className="col-6">
                        
                        <div className="row">
                            <div className="col d-flex justify-content-start">
                                <h5>This is the name</h5>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <i className="bi bi-geo-alt-fill text-secondary"></i>
                                <p className={textClasses}>5015 address</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <i className="bi bi-telephone-fill text-secondary"></i>
                                <p className={textClasses}>55-4950-4240</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <i className="bi bi-envelope-fill text-secondary"></i>
                                <p className={textClasses}>master@mypage.com</p>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-3 d-flex justify-content-around">
                        <button type="button" className="btn btn-light h-50">
                            <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button type="button" className="btn btn-light h-50">
                            <i className="bi bi-trash-fill"></i>
                        </button>           
                    </div>

                </div>
            </div>
        </li>
    );
}

export default ContactCard;