/*
Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
*/


// TASK 1
const team = {
    _players: [
      {firstName: 'Roger', lastName: 'Bishop', age: 23},
      {firstName: 'Katrina', lastName: 'Alvarez', age: 25},
      {firstName: 'Nia', lastName: 'Holmes', age: 20}
      ],
    _games: [
      {opponet: 'Jets', teamPoints: 42, opponentPoints: 27},
      {opponet: 'Giants', teamPoints: 45, opponentPoints: 12},
      {opponet: 'Eagles', teamPoints: 31, opponentPoints: 15}
      ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game)
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76)
  team.addGame('Titans', 100, 98)
  
  console.log(team.players)
  console.log(team.games)
  
////////////////////////////
////////////////////////////
// Rewriting Review

const team02 = {
  _players: [
    {firstName: 'Roger', lastName: 'Bishop', age: 23},
    {firstName: 'Katrina', lastName: 'Alvarez', age: 25},
    {firstName: 'Nia', lastName: 'Holmes', age: 20},
  ],
  _games: [
    {opponent: 'Jets', teamPoints: '42', opponentPoints: 27},
    {opponent: 'Giants', teamPoints: '45', opponentPoints: 12},
    {opponent: 'Eagles', teamPoints: '31', opponentPoints: 15},
    {opponent: 'Titans', teamPoints: '100', opponentPoints: 98}
  ],

  get players() {
    return this._players
  },

  get games() {
    return this._games
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player)
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game)
  },

  numOfGames() { // return number of games played
    numGames = 0
    for (let games in this._games) {
      numGames += 1
    }
    return `Number of games: ${numGames}`
  },

  averageScore() { // return the average score of all games
    average = 0
    for (let score in this._games) {
      average += score
    }
    average = Math.floor(average / this._games.length)
    return `Average score: ${average} points`
  }
}

// console.log(team02.players[0].firstName)

team02.addPlayer('Bugs', 'Bunny', 76)
console.log(team02.players)

team02.addGame('Titans', 100, 98)
console.log(team02.games)

console.log(team02.numOfGames())
console.log(team02.averageScore())

