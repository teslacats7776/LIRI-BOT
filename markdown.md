Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development

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
3. node liri.js <your choice of action> <movie/artist/song name>
    3a. choice of actions: concert-this/movie-this/spotify-this-song/do-what-it-says