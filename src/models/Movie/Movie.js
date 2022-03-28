class Movie {
    constructor(title, date) {
        this.title = title
        this.date = date
    }

    static fromJson({ title, release_date }) {
        return new Movie(title, release_date)
    }
}

export default Movie
