require("dotenv").config(); 
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
 var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var fs = require('fs');
var moment = require('moment');

var inputUser = process.argv[2];

// var movie = process.argv.slice(3).join(" ");

// earch Spotify for songs, Bands in Town for concerts, and OMDB for movies.

switch (inputUser) {
  case "concert-this":
    var artist = process.argv.slice(3).join(" ");

    axios.get("https://rest.bandsintown.com/artists/lady%20gaga/events?app_id=codingbootcamp").then(
  function(response) {
    // console.log (response)
  
var dateFormat= moment(response.data[0].datetime).format("MM-DD-YYYY")
    console.log("Venue " + response.data[0].title);    
    console.log ("Location: " +response.data[0].venue.country);
    console.log ("Dates " + dateFormat);
    fs.appendFile("log.txt", inputUser+" "+artist +"\n", function(err) {

      // If an error was experienced we will log it.
      if (err) {
        console.log(err);
      }
    
      // If no error is experienced, we'll log the phrase "Content Added" to our node console.
      else {
        console.log("Content Added!");
      }
    
    });
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
    break;
    case "spotify-this-song":
       if(  process.argv[3] ) {

      var song = process.argv.slice(3).join(" ");
   
        spotify
      .search({ type: 'track', query: song})
      .then(function(response) {
  
        console.log("Artist: " + response.tracks.items[0].artists[0].name);    
        console.log ("Song: " +response.tracks.items[0].name);
        console.log ("Album: " +response.tracks.items[0].album.name);
        console.log ("Link to song on spotify: " + response.tracks.items[0].external_urls["spotify"]);
        fs.appendFile("log.txt", inputUser+" "+song+"\n", function(err) {
    
          // If an error was experienced we will log it.
          if (err) {
            console.log(err);
          }
        
          // If no error is experienced, we'll log the phrase "Content Added" to our node console.
          else {
            console.log("Content Added!");
          }
        
        });
      })
      .catch(function(err) {
        console.log(err);
      });
       } 
       
       else {
        var song = "The Sign";
        spotify
        .search({ type: 'track', query:song })
        .then(function(response) {
          // console.log(response.tracks.items[0]);
          console.log("Artist: " + response.tracks.items[0].artists[0].name);    
          console.log ("Song: " +response.tracks.items[0].name);
          console.log ("Album: " +response.tracks.items[0].album.name);
          console.log ("Link to song on spotify: " + response.tracks.items[0].external_urls["spotify"]);
          fs.appendFile("log.txt", inputUser+" "+song+"\n", function(err) {
      
            // If an error was experienced we will log it.
            if (err) {
              console.log(err);
            }
          
            // If no error is experienced, we'll log the phrase "Content Added" to our node console.
            else {
              console.log("Content Added!");
            }
          
          });
        })
        .catch(function(err) {
          console.log(err);
        });
       }
      


      break;
      case "movie-this":
        var movie = process.argv.slice(3).join(" ");
// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=2e4f8faf").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);    
    console.log ("Rottern Tomatoes Rating: " +response.data.Ratings[1].Value)
    console.log("Year: " +response.data.Year)
    console.log("Country:" + response.data.Country);
    console.log("Language:" + response.data.Language);
    console.log("Plot:" + response.data.Plot);

    fs.appendFile("log.txt", inputUser+" "+movie +"\n", function(err) {

      // If an error was experienced we will log it.
      if (err) {
        console.log(err);
      }
    
      // If no error is experienced, we'll log the phrase "Content Added" to our node console.
      else {
        console.log("Content Added!");
      }
    
    });
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

        break;
        case "do-what-it-says":

        
          fs.readFile('random.txt', 'utf8', (err, data) => {
            if (err) throw err;
            // var songList =[];
            // songList.push(data);
            var output = data.split(",");
            var songChoice = output[1];
            var song = songChoice.replace(/['"]+/g, '')
            console.log(song);
            spotify
            .search({ type: 'track', query: song})
            .then(function(response) {
              console.log("Artist: " + response.tracks.items[0].artists[0].name);    
        console.log ("Song: " +response.tracks.items[0].name);
        console.log ("Album: " +response.tracks.items[0].album.name);
        console.log ("Link to song on spotify: " + response.tracks.items[0].external_urls["spotify"]);
            })
            .catch(function(err) {
              console.log(err);
            });
            
          });

    
    


          break;
}

