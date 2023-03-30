function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }

  function numPointsScored(playerName) {
    debugger;
    let gameObj = gameObject();
    for (let team in gameObj) {
      if (gameObj[team]["players"][playerName]) {
        debugger;
        return gameObj[team]["players"][playerName]["points"];
      }
    }
  }
  

  function shoeSize(playerName) {
    let gameObj = gameObject();
    for (let team in gameObj) {
      if (gameObj[team]["players"][playerName]) {
        debugger;
        return gameObj[team]["players"][playerName]["shoe"];
      }
    }
  }
  
  function teamColors(teamName) {
    debugger;
    let gameObj = gameObject();
    for (let team in gameObj) {
      if (gameObj[team]["teamName"] === teamName) {
        debugger;
        return gameObj[team]["colors"];
      }
    }
  }
  
  function teamNames() {
    let gameObj = gameObject();
    debugger;
    return [gameObj["home"]["teamName"], gameObj["away"]["teamName"]];
  }
  
  function playerNumbers(teamName) {
    let gameObj = gameObject();
    let numbers = [];
    debugger;
    for (let team in gameObj) {
      if (gameObj[team]["teamName"] === teamName) {
        debugger;
        for (let player in gameObj[team]["players"]) {
          numbers.push(gameObj[team]["players"][player]["number"]);
        }
      }
    }
    return numbers;
  }
  
  function playerStats(playerName) {
    let gameObj = gameObject();
    for (let team in gameObj) {
      if (gameObj[team]["players"][playerName]) {
        return gameObj[team]["players"][playerName];
      }
    }
  }
  
  function bigShoeRebounds() {
    let gameObj = gameObject();
    let biggestShoeSize = 0;
    let rebounds = 0;
    debugger;
    for (let team in gameObj) {
      for (let player in gameObj[team]["players"]) {
        if (gameObj[team]["players"][player]["shoe"] > biggestShoeSize) {
          biggestShoeSize = gameObj[team]["players"][player]["shoe"];
          rebounds = gameObj[team]["players"][player]["rebounds"];
        }debugger;
      }
    }
    return rebounds;
  }

  


  function mostPointsScored() {
    let gameObj = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = "";
  
    for (let team in gameObj) {
      for (let player in gameObj[team]["players"]) {
        if (gameObj[team]["players"][player]["points"] > mostPoints) {
            debugger;
          mostPoints = gameObj[team]["players"][player]["points"];
          playerWithMostPoints = player;
        }
      }
    }
    debugger;
    return playerWithMostPoints;

  }
  
  
  function winningTeam() {
    let gameObj = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    debugger;
    for (let player in gameObj["home"]["players"]) {
      homePoints += gameObj["home"]["players"][player]["points"];
    }
    for (let player in gameObj["away"]["players"]) {
      awayPoints += gameObj["away"]["players"][player]["points"];
    }
    if (homePoints > awayPoints) {
        debugger;
      return gameObj["home"]["teamName"];
    } else {
      return gameObj["away"]["teamName"];
    }
  }
  
  function playerWithLongestName() {
    let gameObj = gameObject();
    let longestName = "";
    debugger;
    for (let team in gameObj) {
      for (let player in gameObj[team]["players"]) {
        if (player.length > longestName.length) {
            debugger;
          longestName = player;
        }
      }
    }
    return longestName;
  }
 
  function doesLongNameStealATon() {
    debugger;
    let gameObj = gameObject();
    let mostSteals = 0;
    let longestName;
  
    for (const player in gameObj.home.players) {
      if (gameObj.home.players[player].steals > mostSteals) {
        mostSteals = gameObj.home.players[player].steals;
        longestName = player;
      }
    }
    debugger;
    return gameObj.home.players[longestName] && gameObj.home.players[longestName].steals === mostSteals;
  }
  
console.log(numPointsScored("Alan Anderson")); // 22
console.log(shoeSize("Jason Terry")); //15
console.log(teamColors("Brooklyn Nets")); //  ["Black", "White"]
console.log(teamNames()); //  ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); //  [4, 0, 2, 8, 33]
console.log(playerStats("Mason Plumlee")); //  {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5}
console.log(bigShoeRebounds()); //  19
console.log(mostPointsScored()); //  "Ben Gordon"
console.log(doesLongNameStealATon("Alan Anderson")); // true
console.log(doesLongNameStealATon("Reggie Evans")); //true