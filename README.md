# React Gallery App

This web application uses React to create an image gallery.  Images are fetched from the Flickr API using Axios.  Users are able to search for image topics in the Flickr database, or select from several preset image searches.  

To run this application, you will need to obtain your own Flickr API Key, and insert it into a congif.js file in the src folder of the application like so:

const apiKey = 'YourAPIkeyHere!';
export default apiKey;

You can obtain your own Flickr API key by visiting https://www.flickr.com/services/api/misc.api_keys.html

You can then type npm start in the console to run the program on PORT 3000, and view the application in your web browser by visitng http://localhost:3000  