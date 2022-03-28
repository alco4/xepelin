import {
    formatDate
} from "../../util/utils";

class Movie {
    constructor(id, title, date, imageUrl) {
        const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500'

        this.id = id
        this.title = title
        this.date = date
        this.imageUrl = IMAGE_PREFIX + imageUrl
    }

    static fromJson({
        id,
        title,
        release_date,
        poster_path
    }) {
        const date = formatDate(release_date)
        return new Movie(id, title, date, poster_path)
    }
}

export default Movie