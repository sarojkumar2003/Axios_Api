import './Card.css'

export const Card = ({ MoviesData }) => {
    // Destructure properties from MoviesData
    const { Poster, Title, imdbID, Year } = MoviesData;

    return (
        <li className="card">
            <div className="card__container">
                <div className="card__image-wrapper">
                    <img
                        src={Poster}
                        alt={Title}
                        className="card__image"
                    />
                </div>
                <div className="card__details">
                    <h3 className="card__title">{Title}</h3>
                    <p className="card__year">{Year}</p>
                    <div className="card__actions">
                        <a
                            href={`movies/${imdbID}`}
                            className="card__link"
                        >
                            Details
                        </a>
                        <button className="ticket__buy-btn">
                            Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;