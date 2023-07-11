import React from "react";

function ContactCard({info}){
    const profileImageClasses = "img-thumbnail rounded-circle";
    const textClasses = "ms-2 my-0 text-secondary";
    const imageStyle = { height: '100px', width: '100px'};
    console.log("info",info);
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
                                <h5>{info.name}</h5>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <i className="bi bi-geo-alt-fill text-secondary"></i>
                                <p className={textClasses}>{info.address}</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <i className="bi bi-telephone-fill text-secondary"></i>
                                <p className={textClasses}>{info.phone}</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <i className="bi bi-envelope-fill text-secondary"></i>
                                <p className={textClasses}>{info.email}</p>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-3 d-flex justify-content-start">
                        <button type="button" className="btn btn-light h-50 mx-3">
                            <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button type="button" className="btn btn-light h-50 mx-3">
                            <i className="bi bi-trash-fill"></i>
                        </button>           
                    </div>

                </div>
            </div>
        </li>
    );
}

export default ContactCard;