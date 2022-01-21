
// let apiURL1 = 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=10&offset=10'
let apiURL2 = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?hide_recent_previous=false&include_suborbital=true&is_crewed=false&limit=12&offset=10&related=false'
let apiPictureoftheday = 'https://api.nasa.gov/planetary/apod?api_key=X9BF4XMGzgnLciHZqS1xFfjszIgdKrMIUe6DWnoC'


// second api work for spaceflight news articles
// url for api call for news
var newsURL = "https://api.spaceflightnewsapi.net/v3/articles?_limit=6"

// fetch request for the news api
async function getNews() {
    var response = await fetch(newsURL);
    var data = await response.json();

    // once response is complete, run addArticle function with the data
    addArticle(data);
};

// function to add the articles to the page from news api response
var addArticle = function (data) {
    // variable targeting the news section/div
    var section = document.querySelector("#news");

    // targeting the HTML of news section to add data from the api response
    section.innerHTML = data
        // runs the function to add the article for each item of "data" returned from the call
        .map(function (article) {
            //adds the html content for each article with the information from the json
            return `<div class="column is-half">
                <a href="${article.url}" target="_blank">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                            <img src="${article.imageUrl}" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="title is-4">${article.title}</div>
                        <div class="content">${article.summary}</div>
                    </div>
                </div>
                </a>
            </div>`
        })
        // joins the created items
        .join(" ")
}

// calls the entire function and adds catch for error info if the call fails
getNews().catch(error => {
    console.error(error);
});

async function getLaunch() {
    var response = await fetch(apiURL2);
    var data = await response.json();

    addlaunches(data.results);
};

// function to add the launches to the page
var addlaunches = function (data) {
    var section = document.querySelector('#launch-Date');
    
    section.innerHTML = data
        .map(function (launch) {
            var launchDatesFormatted = moment(launch.window_start).format('dddd, MMMM Do YYYY, h:mm a') + ' EST';
            var missioninfo = launch.mission;

            if(missioninfo) {
                return `<div class="card column is-one-third">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src="${launch.image}" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="title is-4">Spacecraft Name: ${launch.name}</div>
                    <div class="content">Launch Time: ${launchDatesFormatted}</div>
                    <div class="content">${missioninfo.description}</div>
                </div>
            </div>`
            } else {
                return `<div class="card column is-3by2">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src="${launch.image}" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="title is-4">Spacecraft Name: ${launch.name}</div>
                    <div class="content">Launch Time: ${launchDatesFormatted}</div>
                    <div class="content">No description available.</div>
                </div>
            </div>`
            }

            
        })
        .join(' ')
};

getLaunch();



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
            
        <h2 class="title is-4">${picoftheday.title}</h2>

        <figure class="image is-3by2">
            <img src=${picoftheday.url} />
        </figure>
        <div class="card-content">
            <div class="content">${picoftheday.explanation}</div>
            <div class="content">credit: ${picoftheday.copyright}</div>
        </div
    </div>`

        })
        .join(' ')
}

getPictureOfDay();


//Local storage variables
var NameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var phoneInput = document.querySelector("#phone");
var submitButton = document.querySelector("#news-letter-submit");
 

// localStorage function
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

// object for form submission
    let signUpValue = {
        Name: NameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim()
    }
      
    // set new submission to local storage 
    localStorage.setItem("newsLetterSignUp", JSON.stringify(signUpValue));

    //this clears out boxes after submit
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

});
