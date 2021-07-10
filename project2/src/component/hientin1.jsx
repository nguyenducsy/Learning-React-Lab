import React from 'react';

function hientin1(props) {
    return (
        <div className="Hien1Tin mr">
            <h3> <a href={"/?id="+ props.tin.idTin}>
                    {props.tin.title}
                </a> </h3>
            <p>{props.tin.des}</p>
        </div>

    );
};

export default hientin1;