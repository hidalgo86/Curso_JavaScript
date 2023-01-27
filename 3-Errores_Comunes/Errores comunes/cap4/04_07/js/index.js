/**
 * * Puedes ir a http://www.omdbapi.com/apikey.aspx y solicitar tu propia key
 * */
const KEY_API = "key";
fetch(`http://www.omdbapi.com/?s=episode&apikey=${KEY_API}`);