import React from 'react';
import './popular.styles.scss';
import MOVIE_DATA from '../../assets/movie.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class Popular extends React.Component {
    constructor(){
        super();
        this.state = {
            searchValue: '',
            collections: MOVIE_DATA
        }
    }

    handleSearchChange = (event) => {
        this.setState({searchValue: event.target.value});
    }

    render(){
        const { collections, searchValue } = this.state;
        const filteredCollections = collections.filter(
            collection => collection.Title.toLowerCase().includes(searchValue.toLowerCase())
        );

        return(
            <div className='popular-container'>
                <input type="text" placeholder="Search..." className="search" value={searchValue} onChange={this.handleSearchChange} />
                <h1>Popular</h1>
                <CollectionPreview collectionType='popular-direct' collections={searchValue ? filteredCollections : collections} />
            </div>
        )
    }
}

export default Popular;
