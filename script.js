//varijable
let input = document.querySelector("#search");
let button = document.querySelector("#submit");
let output = document.querySelector("#output"); //tu ćemo prikazati rezultat

//trigeriranje glavnog događaja
button.addEventListener("click", (e) => {
    getDataFromItunes();
});

//hoću da se pokreće i pritiskom na tipku enter na input polju
input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();
    }
});

// funkcija za spajanje na iTunes
function getDataFromItunes() {
    let url =
        "https://itunes.apple.com/search?term=" + input.value + "&entity=song";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let outputHTML = "";

            data.results.forEach((song) => {
                outputHTML += 
                `
                <div class="col s12 m6 l4 ">
                <div class="card">
                <div class="card-image">
                <img src="${song.artworkUrl100}">          
                </div>
                <div class="card-content">
                <h5>${song.trackCensoredName}</h5>
                <p>${song.artistName}</p>
                </div>
               </div>
                </div>
                `;
            });
            output.innerHTML = outputHTML;
        })                                                                                                                                                                                              
        .catch((error) => console.log(error));
}

//gumb za povratak na vrh

let toTopBtn = document.getElementById("toTheTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
} 
