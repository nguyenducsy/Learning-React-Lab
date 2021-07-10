import React from 'react';

function mottin(props) {
    return (
        
        <div className="HienTin pd">
            <h3> <a href={"/?id="+ props.tin.idTin}>
                    {props.tin.title}
                </a> </h3>
            <p>{props.tin.des}</p>
        </div>
    );
};

export default mottin;