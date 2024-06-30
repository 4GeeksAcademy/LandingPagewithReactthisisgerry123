import React from 'react';

const Card = ({ title, text, imgSrc }) => {
    return (
        <div className="card text-center w-100">
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body d-flex">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer text-muted">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;