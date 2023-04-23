import React, { Fragment } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';

import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';

import { useMovieFetch } from '../hooks/useHomeFetcher';

const Home = () => {
    const { state, loading, error, setSearchTerm } = useMovieFetch()

    ///console.log(IMAGE_BASE_URL)

    return (
        <Fragment>
            {state.results[0] ?
                <HeroImage 
                 image ={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                 title = {state.results[0].original_title}
                 text = {state.results[0].overview}
                />
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header="Popular Movies">
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            <Spinner />
        </Fragment>

    )

}

export default Home;