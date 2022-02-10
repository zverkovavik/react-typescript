import React from "react";
import './cover.css';
import { Link } from 'react-router-dom';

function Cover() {
    return (
    <Link to={'/'} className="cover-section">
        <img className="cover-section__logo" src="./img/logo.png" alt="Company logo" />
        <h2 className="cover-section__title">Digital Planet</h2>
    </Link>)
};
export default Cover;