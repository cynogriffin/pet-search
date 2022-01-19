
// let apiURL1 = 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=10&offset=10'
let apiURL2 = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?hide_recent_previous=false&include_suborbital=true&is_crewed=false&limit=10&offset=10&related=false'
let apiPictureoftheday = 'https://api.nasa.gov/planetary/apod?api_key=X9BF4XMGzgnLciHZqS1xFfjszIgdKrMIUe6DWnoC'

// second api work for spaceflight news articles
// url for api call for news
var newsURL = "https://api.spaceflightnewsapi.net/v3/articles?_limit=5"

// fetch request for the api
async function getNews() {
    var response = await fetch(newsURL);
    var data = await response.json();

    // once response is complete, run addArticle function with the data
    addArticle(data);
};

// function to add the articles to the page from api response
var addArticle = function (data) {
    // variable targeting the news section/div
    var section = document.querySelector("#news");

    // targeting the HTML of news section to add data from the api response
    section.innerHTML = data
        // runs the function to add the article for each item of "data" returned from the call
        .map(function (article) {
            //adds the html content for each article with the information from the json
            return `<a href="${article.url}" target="_blank">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src="${article.imageUrl}" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">    
                        <div class="media-content">
                            <p class="title is-4 card-title">${article.title}</p>
                        </div>
                    </div>
                    <div class="content">${article.summary}</div>
                </div>
            </div>
            </a>`
        })
        // joins the created items
        .join(" ")
}

// calls the entire function and adds catch for error info if the call fails
getNews().catch(error => {
    console.error(error);
});

// fetch(apiURL2)
//     .then(function (response) {
//         if (response.ok) {

//             response.json().then(function (data) {

//                 for (let i = 1; i < 10; i++) {
//                     let spacecraft = data.results[i].name;
//                     

//                     var section = document.querySelector("spacecraftName")
//                         section.innerHTML = function(){


// div.classList.add()
// let launchDateDisplay = `<h2> Spacecraft: ${spacecraft} Launch Date: ${launchDatesFormated} 'EST'</h2>`
// const container = document.getElementById('launch-Date');

// container.append(div);

// div.innerHTML = launchDateDisplay

// async function getLaunch() {
//     var response = await fetch(apiURL2)
//     console.log(response)
//     var data = await response.json();
//     console.log(data)
//     addlaunches(data);

// };

// var addlaunches = function (data) {
//     var section = document.querySelector('#launch-Date');
//     let launchDatesFormated = moment(data.results.window_start).format('dddd, MMMM Do YYYY, h:mm a');
//     section.innerHTML = [data]
//         .map(function (launch) {

//             return `<div class="card">

//         <h2>SpaceCraft Name: ${launch.results.name}</h2>
//         <h3>"${launchDatesFormated} 'EST'</h3>    
//         </div>`
//         })
//         .join(' ')

// }
// getLaunch()

async function getPictureOfDay() {
    var response = await fetch(apiPictureoftheday);
    var data = await response.json();

    addPicture(data)
};

var addPicture = function (data) {

    var section = document.querySelector('#picture-of-the-day');

    section.innerHTML = [data]

        .map(function (picoftheday) {

            return `<div class='card'>
            <h2>Picture of the Day</h2>
        <h2 class="title is-4">${picoftheday.title}</h2>

        <figure class="image is-3by2">
        <img src=${picoftheday.url} />
        </figure>

        <h3 class="title is-6">${picoftheday.explanation}</h3>
        <h4 class="title is-7">credit: ${picoftheday.copyright}</h4>

    </div>`

        })
        .join(' ')
}

getPictureOfDay()

