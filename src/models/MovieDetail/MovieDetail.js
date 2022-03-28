class MovieDetail {
    constructor(id, title, imageUrl, overview) {
        const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500'

        this.id = id
        this.title = title
        this.imageUrl = IMAGE_PREFIX + imageUrl
        this.description = overview
    }

    static fromJson({
        id,
        title,
        poster_path,
        overview
    }) {
        return new MovieDetail(id, title, poster_path, overview)
    }
}

export default MovieDetail