
let apiURL1 = 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=10&offset=10'

fetch(apiURL1)
//   .then(response => response.json())
//   .then(data => console.log(data.results[1].name));
.then(function (response) {
    if (response.ok) {

       response.json().then(function (data) {


 for (let i = 1; i < 10; i++) {
    let spacecraft = data.results[i].name;
    
    const div = document.createElement('div');
let spacecraftDisplay = `<h2> Spacecraft: ${spacecraft}</h2>`
    
div.innerHTML = spacecraftDisplay


    const container = document.getElementById('spacecraftName');
    container.append(div);

}}
)}}
)

  
  


 
  