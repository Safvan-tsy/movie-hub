import Thumb from '../Thumb/Thumb'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../images/no_image.jpg'

import { Wrapper, Content, Text } from './MovieInfo.styles'

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>
                <div className="rating-directors">
                    <div>
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average.toFixed(1)}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTO{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}

                    </div>
                </div>

            </Text>
        </Content>
    </Wrapper>


)

export default MovieInfo