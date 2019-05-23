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
    container.innerHTML = ``;

    if(!jsonResponse.length) {
        container.innerHTML = `<h3>No games were found<h3>`;
    }

    for(let i = 0; i < jsonResponse.length; i++) {
        container.innerHTML += `
            <div id="gameInfo">
                <h3 id="title">` + jsonResponse[i].name + `</h3>
        
                <div id="date">
                    ` + (jsonResponse[i].year_published != null ? jsonResponse[i].year_published : 'Year unknown') + `
                </div>
                
                <div id = "players" >
                    ` + (jsonResponse[i].min_players != null ?
                            jsonResponse[i].min_players + ` -  ` + jsonResponse[i].max_players + ` players ` :
                            '<br>') + `
                </div>
                
                <img id="gameImg" src="` + jsonResponse[i].image_url + `" />
        
                <div id="description">
                    ` + jsonResponse[i].description + `
                </div>
                
                <a id="link" href="` + jsonResponse[i].url + `">Board Game Atlas Page</a>
            </div> `;
    }
}

getData();