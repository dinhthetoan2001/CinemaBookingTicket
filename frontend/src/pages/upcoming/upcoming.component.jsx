import React, { useState } from 'react';
import './upcoming.styles.scss';
import MOVIE_DATA from '../../assets/movie.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const Upcoming = () => {
    const [collections, setCollections] = useState(MOVIE_DATA);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredCollections = MOVIE_DATA.filter(movie =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCollections(filteredCollections);
    };

    return(
        <div className='upcoming-container'>
            <input type="text" placeholder="Search..." className="search" onChange={handleChange} value={searchTerm} />
            <h1>Upcoming</h1>
            <CollectionPreview collectionType='upcoming-direct' collections={collections} />
        </div>
    );
}

export default Upcoming;
