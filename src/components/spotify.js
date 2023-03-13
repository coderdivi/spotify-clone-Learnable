const authEndpoint= "https://accounts.spotify.com/authorize?" ;
const clientID= "37de4c35d4bc4b0d9b254b08fc820bf3" ;
const redirectUrl= "http://localhost:3000";
const  scopes = ["user-library-read", "playlist-read-private"]

export const {loginEndpoint} = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl} ${scopes.join("%20")}
&response_type=token&show_dialog=true`;