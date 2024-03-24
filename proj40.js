/**Album: Write a function called make_album() that builds a Object describing a music album.
 * The function should take in an artist name and an album title, and it should return a
 * Object containing these two pieces of information. Use the function to make three dictionaries representing
 * different albums. Print each return value to show that Objects are storing the album information correctly.
 * Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line
 * includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes
 * the number of tracks on an album. */
//version 1
function make_album(artist_name, album_title, number_track) {
    const album = {
        artist_name,
        album_title,
        number_track,
    };
    if (number_track != undefined) {
        album.number_track = number_track;
    }
    return (album);
}
console.log(make_album("Michael Jackson", "Thriller"));
console.log(make_album("Abrarul Haq", "Billo de Ghar", 9));
console.log(make_album("Gareth Coker", "Mario"));
//version 2
// This can also be done as following
console.log("The second version will also give the same output");
function make_album2(artist_name2, album_title2, number_track2) {
    return { artist_name2, album_title2, number_track2 };
}
console.log(make_album("Michael Jackson", "Thriller"));
console.log(make_album("Abrarul Haq", "Billo de Ghar", 9));
console.log(make_album("Gareth Coker", "Mario"));
export {};
