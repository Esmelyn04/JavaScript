class Media {
    constructor( title) {
        this._title = title;
        this._isCheckOut = false;
        this._ratings = []
    }

    get title() {
        return this._title
    }

    get isCheckOut() {
        return this._isCheckOut
    }

    get ratings() {
        return this._ratings
    }

    set isCheckOut(newValue) {
        this._isCheckOut = newValue
    }

    toggleCheckOutStatus() { 
        // this method just need to change(toggle) or negate the actual value of checkOut
        this.isCheckOut = !this.isCheckOut

        // alternative solution
        // if (this._isCheckOut) {
        //     this._isCheckOut = false
        // }else {
        //     this._isCheckOut = true
        // }
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating)
        let ratingsLenght = this.ratings.length

        // return Math.floor(ratingsSum / ratingsLenght)
        return ratingsSum / ratingsLenght
    }

    addRating(newRating) {
        this.ratings.push(newRating)
      }
    
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title)
        this._author = author
        this._pages = pages
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
}


class Movie extends Media {
    constructor(title, director, runTime) {
        super(title)
        this._director = director
        this._runTime = runTime
    }

    get director() {
        return this._director
    }

    get runTime() {
        return this._runTime
    }

}

class CD extends Media {
    constructor(title, artist) {
        super(title)
        this._artist = artist
        this._songs = []
    }


}

const historyOfEverything = new Book(
    'A Short History of Nearly Everything',
    'Bill Bryson',
    544
)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const speed = new Movie(
    'Speed',
    'Jan de Bont',
    116
)

speed.toggleCheckOutStatus()
console.log(speed.isCheckOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())


