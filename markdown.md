Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development

## link to video
https://drive.google.com/open?id=1FE9nTzKpwT9DrpyBh8DvPPejuXog2ZCI

#Liri Bot
## A Liri Bot is designed to fetch song, movie, artist and event information by user provided input*
## User can perform 4 types of searches:
* concert-this <Your Artist Name>: will return event information regarding the artist you searched for, powered by Bandsintown api
*  movie-this <Your choice of movie>: will return movie related information, powered by omdb
* spotify-this-song <Your choice of song>: will return song track information, powered by spotify
* do-what-it-says: will return spotify song track information on "I wanted it that way", pre-defined search criteria in the random.txt file

### instruction on how to run it
1. navigate to the root folder of LIRI-BOT
2. open liri.js file in a terminal
3. provide your input and choice of actions: concert-this/movie-this/spotify-this-song
    3a. node liri.js <your choice of action> <movie/artist/song name> 
4. let LIRI tell you what to do
    4a. node liri.js do-what-it-says
5. view your search history at: log.txt


## technical specs, the following npm packages are installed:
LIRI-BOT#readme",
  "dependencies": {
    "axios": "^0.19.2",
    "bandsintown": "^1.0.1",
    "dotenv": "^8.2.0",
    "moment": "^2.24.0",
    "node-spotify-api": "^1.1.1",
    "omdb": "^0.8.0"
  }

## app structure:
1. setup: environments, keys packages
2. module: installed packages
3. node program file - liri.js
4. output file - log.txt
5. default search criteria for do-as-what-i-say: random.txt