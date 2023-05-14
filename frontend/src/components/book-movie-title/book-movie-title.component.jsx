import React from 'react';
import { Link } from 'react-router-dom';

import './book-movie-title.styles.scss';

const BookMovieTitle = ({ match }) => {
    return(
        <div className='date-list-container'>
            <h1>Select the Date from the below mentioned:</h1>
            <div className='date-list'>
                <Link to={`${match.url}/01-11-2023`}><span>01-11-2023</span></Link>
                <Link to={`${match.url}/03-11-2023`}><span>03-11-2023</span></Link>
                <Link to={`${match.url}/07-11-2023`}><span>07-11-2023</span></Link>
                <Link to={`${match.url}/10-11-2023`}><span>10-11-2023</span></Link>
                <Link to={`${match.url}/16-11-2023`}><span>16-11-2023</span></Link>
                <Link to={`${match.url}/21-11-2023`}><span>21-11-2023</span></Link>
                <Link to={`${match.url}/23-11-2023`}><span>23-11-2023</span></Link>
                <Link to={`${match.url}/25-11-2023`}><span>25-11-2023</span></Link>
                <Link to={`${match.url}/27-11-2023`}><span>27-11-2023</span></Link>
                <Link to={`${match.url}/28-11-2023`}><span>28-11-2023</span></Link>
            </div>
        </div>
    );
}

export default BookMovieTitle;