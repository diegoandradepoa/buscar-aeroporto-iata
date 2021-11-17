const urlApi = "https://airport-info.p.rapidapi.com/airport";
const listEl = document.getElementById('list');

function getAirports() {
	fetch(`${urlApi}?iata=${codigoIata}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "airport-info.p.rapidapi.com",
			"x-rapidapi-key": "b5518d4045msh615fce4371f8e6fp1baf97jsnb6a44972444b"
		}
	})
	.then((response) => response.json())
	.then(function(response) {
		let airports = response;
				listEl.innerHTML = '';
				listEl.insertAdjacentHTML('beforeend', `
				<div id="results">
					<ul>
						<li><b>Nome do aeroporto: ${airports.name}</li>
						<li><b>Estado: ${airports.state}</li>
						<li><b>País: ${airports.country}</li>
						<li><b>Código IATA: ${airports.iata}</li>
						<li><b>Latitude: ${airports.latitude}</li>
						<li><b>Longitude: ${airports.longitude}</li>
						<li><b>Site: ${airports.website}</li>
					</ul>
					<button id="clearElement" type="submit" onclick="clearContent()">Limpar</button>
				</div>
				`)
			})

	.catch(function(error) {
		console.log(error);
	});
}

const searchAirports = (evento) => {
		evento.preventDefault();
		codigoIata = document.querySelector('input').value;
		getAirports(urlApi);
	}


const clearContent = () => {
    document.querySelector('div').innerHTML = "";
}

clearContent();
