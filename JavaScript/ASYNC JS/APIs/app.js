

// WITH FETCH  
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('RESPONSE, WAITING TO PARSE...', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('DATA PARSED.');
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('OH NO! ERROR!', e);
//     })



// const fetchBitcoinPrice = async () => {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     const data = await res.json();
//     console.log(data.ticker.price);
// }



// with Axios
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(response => {
//         console.log(response.data.ticker.price);
//     })
//     .catch(err => {
//         console.log('ERROR', err);
//     })

// rewrite async func to get Bitcoin Price
// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price);
//     }
//     catch (e) {
//         console.log('ERROR!', e);
//     }
// }



//          AXIOS PRACTICE

// Dad Jokes
const jokes = document.querySelector('#jokes');
//  configuring headers
const getDadJoke = async () => {
    try {
        const headerConfig = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', headerConfig)
        // this API wants a header Accept set to application/json if we want JSON
        return res.data.joke;
    } catch (e) {
        return 'NO JOKES AVAILABLE, SORRY.';
    }

}
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}
const dadJokeBtn = document.querySelector('button');

dadJokeBtn.addEventListener('click', addNewJoke)





// TV SHOW SEARCH

// using value of what user inputs into search form w/ string template literal in get request
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(response.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    //loop over show results
    for (let result of shows) {
        // because it returned an error for some images for result.show.image.medium
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

// web APIs are http based. respond with information for other software
// to consume. like a portal to databases of information.

// Example request for bitcoin price:
// type this in url https://api.cryptonator.com/api/ticker/btc-usd
// returns {"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}
// which is JSON.

// a lot of the more usefull APIs cost money

// instagram mentions API can send automatic messages when
// someone mentions your business/insta name

//twilio is useful site for APIs
//allows you to send text message automatically
//make phone calls, emails, etc..





// INTRO TO AXIOS

// a library we can include, gives us a handful of useful methods
// built on top of Fetch

//go to Axios's homepage on the gitHub repo axios
// copy one of the links at the bottom of the page
//insert the script at the bottom of the page, before your custom scripts
// or can put in the head because it doesn't depend on body loading first
//works on client-side and nodeJS(server-side)

// comes with a method called get
//put axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//in console.log. It returns a promise with data that has already
//been parsed. Don't have to deal with any JSON parsing.
//can use it like this in JS

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//      .then(res => {
//              console.log(res.data.ticker.price)
// })
//      .catch(err => {
//              console.log('ERROR', err);
// }) 

// use the .catch to handle any errors with the request
// to see why it is res.data.ticker.price
// when you axios.get('url') and console.log it,
// if you open the [[PromiseReulst]]: Object
// you will see the data, then when you click it,
// the data you want will be under ticker, so you
// .ticker, and under ticker is the price, which is the data
// we want.
// Still promise based, just a little shorter than Fetch
// so if wanted to write a function to get the current
// bitcoin price it would look like this

// const fetchBitcoinPrice = async () => {
//      try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price); 
//    }
//      catch(e) {
//         console.log('ERROR', e);
//    }
// }







//          SETTING HEADERS WITH AXIOS

// for icanhaxdadjoke API they want a header if you read the docs
// making it an async function so we don't have to use .then

// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     const response = axios.get('https://icanhazdadjoke.com/', config);
//     console.log(response);  'used this to see what is returned'
//     console.log(response.data.joke);  ' used this to extract the joke from the returned object'
// }

// look in console and in the returned promise
// if you look in the data, you can see we are returned HTML
// but we want json.
// you can also see in the headers of the promise that we are
// returned html.
// we want to specify that we only want application/json returned
// it says that in the docs for the API that they want that
// and a header set to application/json
// with axios.get there is a 2nd argument we can pass in
// with configuration information.
// one of the things we can configure is the headers, which itself
// is an object.
// like to save it as an object to pass into the axios.get.
// see the config variable, and how it is passed into axios.get as
// the 2nd argument.
// console.log this and now we are getting json returned.

// Promise {<pending>}
// __proto__: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
// config: {url: "https://icanhazdadjoke.com/", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data:
//      id: "m3wPZoz51ob"
//      joke: "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on."
//      status: 200
// headers: {cache-control: "max-age=0, must-revalidate, no-cache, no-store, public, s-maxage=0", content-type: "application/json"}
// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// status: 200

// in headers we can see we got json back.
// so now to extract the joke, use console.log(response.data.joke);

// now do some DOM manipulation

/* <h1>Click me to get new jokes!</h1>
<button>Get New Dad Joke</button>
<ul id="jokes">

</ul> */

// const jokes = document.querySelector('#jokes');
// get the UL so we can add LIs to it

// const button = document.querySelector('button');
// selects our button so we can add an event listener

// const addNewJoke = async () => {
//      const jokeText = await getDadJoke();
//      const newLI = document.createElement('li');
//      newLI.append(response.data.joke);
//      jokes.append(newLI);
// }
// this function gets the joke from the getDadJoke function
// then adds the data to the jokes var which is the UL in the html

// const getDadJoke = async () => {
    // try {
//          const config = { headers: { Accept: 'application/json' } }
//          const response = axios.get('https://icanhazdadjoke.com/', config);
//          console.log(response);  'used this to see what is returned, not in final produced function'
//          console.log(response.data.joke);  ' used this to extract the joke from the returned object, not used in final function'
//          return res.data.joke;   'return is so we can use this function not just add to console
//    }
//     catch(e) {
//         return 'NO JOKES AVAILABLE, SORRY';
//    }
// }

// button.addEventListener('click', addNewJoke);

// runs the function addNewJoke when the button is clicked,
// which gets the getDadJoke function, appends an LI to the
// #jokes UL and prints the joke
// use try and cathc to handle errors in case the api is down
// or some other reason it doesn't work











//          CHANGING QUERY STRING PARAMS WHEN MAKING A REQUEST

// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(response.data);
//     form.elements.query.value = '';
// });

// const makeImages = (shows) => {
//     //loop over show results
//     for (let result of shows) {
//         // because it returned an error for some images for result.show.image.medium
//         if (result.show.image) {
//             const img = document.createElement('img');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         }
//     }
// }

//  http://api.tvmaze.com/search/shows?q=girls
// puts this url into postman, good place to start
// url is found on the tv show api
// it wants a q= and then whatever you want to search
// we get json back in postman
// has name, rating, genre, and image, etc. in the returned json
// process is to have a form with an input in the html
// then have a button in the form, and the default event
// when the button is clicked is 'submit'
// const form selects the form so we can addEventListener to it
// used e as a parameter because we want the event object so we can
// preventDefault();

// to extract what the user types in the form there are multiple
// ways to do it.
// can just console.dir(form) or console.dir(this)
// once you console.dir it, if you look at the form, you could
// select the input seperately, or if you scroll down you will see
// elements, click that and you will see the name of your input (in html)
// so now if you conosle.log(form.elements.query.value) it should
// return the input value of the form.
// we want to extract that so we save it to a variable. 
// searchTerm in the example.
// now we need to make API call.

// call axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
// uses a string template literal to replace the query string at the
// end with the user's input on the form.
// one option to do this.
// also, save it to a variable to use the await function
// so it will look like this:
//      const response = await axios.get(`http://api.tvmaze.com/seatch/show?q=${searchTerm}`);
//      console.log(response.data);
// returns an array that's been parsed from json with
// all the shows that the api sent back
// show is a property for each one, and uses the image property
// inside the show prop to get the image of all the shows
// and then uses the medium size image
// so now console log looks like this:
// console.log(response.data[0].show.image.medium);
// gives us the first image of the returned array
// make an image that will append to the body of the html
// we want to do this for every result we get back. So we need to loop
// over response.data, which is an array
// for each one we want to make an image and append it
// we make a function to do this

// paramater shows because it expects to receive an array of shows
//      const makeImages = (shows) {
//          for (let result of shows) {
//              const img = document.createElement('img');
//              img.src = result.show.image.medium
//          }
// }
// the for loop loops over all the results, that's why we pass
// in result for the img.src so it'll be the looped result
// with the show.image.medium object from the api
// then you call makeImages(response.data); with response.data in
// the event listener function so it will return that
// when he runs this, he gets an error because not every
// single thing/result has an image, so he makes an 
// if statement to say if there is an image, then it will run the function
// looks like this:

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('img');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         }
//     }
// }

// this function loops over the results and then says if the 
// result has an image (with the if(result.show.image) is true),
// then create an image element, with the src being the looped
// result and then append it to the body of the html document

// then after this, he adds 
// form.elements.query.value = '';
// to reset the input

// or you can just request the basic url
//      http://api.tvmaze.com/search/shows
// then make a variable and add in your config object and 
// set the params like this:
//  const config = { params: { q: searchTerm} }
// the object is set to its own object with a key/value pair that
// will be added to the query string at the end of the url
// and can pass it end at the end of the axios.get like this:
// const result = await axios.get(`http://api.tvmaze.com/search/shows`, config);
// if you needed to add headers too you could make the config var like this:
// const config = { params: { q: searchTerm}, headers: { Accept: application/json } } and etc.
// have to use the q for the key/value pair because the api expects
// ?q=searchRequest at the end so couldnt' use query because it would
// add ?query=search at the end and would throw an error