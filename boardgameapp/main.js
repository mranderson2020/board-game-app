const container = document.getElementById("container");



const clientId  = 'M37xARRD2X';

const catanSearchUrl = 'https://www.boardgameatlas.com/api/search?name=Catan&client_id=' + clientId;

async function getData() {
    try {
        const response = await fetch(catanSearchUrl);
        /*{
            method: 'GET'
        }*/

        if(response.ok) {
            const jsonResponse = await response.json();
            displayData(jsonResponse.games);
        }
    } catch(err) {
        console.log(err);
    }
}

function displayData(jsonResponse) {
    if(!jsonResponse.length) {
        container.innerHTML=`<h3>No games were found<h3>`;
    }

    for(let i = 0; i < jsonResponse.length; i++) {
        let {gameTitle, releaseDate, nPlayers, img, desc} = parseResponse(jsonResponse[i]);

        container.innerHTML += `
            <div class="gameInfo">
                <h3 class="title">` + gameTitle + `</h3>
        
                <div class="date">
                    ` + releaseDate + `
                </div>
        
                <div class="players">
                    ` + nPlayers + `
                </div>
        
                <img class="gameImg" src="` + img + `" />
        
                <div class="description">
                    ` + desc + `
                </div>
            </div> `;
    }
}

function parseResponse() {
    return {gameTitle: "Catan", releaseDate: "11/11/1111", nPlayers: "3-4 Players", img: "https://images-na.ssl-images-amazon.com/images/I/51Eiofu9mqL.jpg", desc: "Description here."}
}

getData();