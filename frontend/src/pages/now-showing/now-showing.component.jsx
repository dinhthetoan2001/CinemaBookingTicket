import React from 'react';
import './now-showing.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import MOVIE_DATA from '../../assets/movie.data';

class NowShowing extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: MOVIE_DATA,
            searchField: '',
            searchResults: []
        }
    }
    handleSearchChange = event => {
        const {value} = event.target;
        const filteredResults = MOVIE_DATA.filter(movie => 
            movie.Title.toLowerCase().includes(value.toLowerCase())
        );
        this.setState({searchField: value, searchResults: filteredResults});
    }
        

    render() {
        const {collections, searchField, searchResults} = this.state;
        const filteredCollections = searchField ? searchResults : collections;
    
        return (
            <div className='now-showing-container'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="search" 
                    onChange={this.handleSearchChange}
                />
                <h1>Now Showing</h1>
                <CollectionPreview 
                    collectionType='now-showing-direct' 
                    collections={filteredCollections} 
                />
            </div>
        );
    }
}    

export default NowShowing;