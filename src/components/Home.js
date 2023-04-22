import React, { useState, useEffect, Fragment } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';

import HeroImage from './HeroImage/HeroImage';

import { useMovieFetch } from '../hooks/useHomeFetcher';

const Home = () => {
    const { state, loading, error } = useMovieFetch()

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
        </Fragment>

    )

}

export default Home;