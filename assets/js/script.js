
let apiURL1 = 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=10&offset=10'
let apiURL2 = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?hide_recent_previous=false&include_suborbital=true&is_crewed=false&limit=10&offset=10&related=false'



// fetch(apiURL1)

// .then(function (response) {
//     if (response.ok) {
//        response.json().then(function (data) {

        
      
//                    for (let i = 1; i < 10; i++) {
//                        let spacecraft = data.results[i].name;
//                        let launchDate = data.results[i].window_start
//                        const div = document.createElement('div');

//                        let spacecraftDisplay = `<h2> Spacecraft: ${spacecraft}</h2>`
//                         let launchDateDisplay = `<h2> Spacecraft: ${launchDate}</h2>`
                      
//                        const container = document.getElementById('spacecraftName');
//                        container.append(div);

//                        div.innerHTML = spacecraftDisplay + launchDateDisplay

//                    }
    

// })
// }})

fetch(apiURL2)
.then(function (response) {
    if (response.ok) {

       response.json().then(function (data) {
    
        for (let i = 1; i < 10; i++) {
            let spacecraft = data.results[i].name;
            let launchDate = data.results[i].window_start
            let launchDatesFormated = moment.unix(data.results[i].window_start).format('dddd, MMMM Do YYYY, h:mm:ss a');
            const div = document.createElement('div');

           
             let launchDateDisplay = `<h2> Spacecraft: ${spacecraft} Launch Date: ${launchDate}</h2>`
            const container = document.getElementById('launch-Date');
            
            container.append(div);

            div.innerHTML = launchDateDisplay 
        }})}})


    


 
  