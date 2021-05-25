export default function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    return fetch(url)
        .then(r => {return r.json()})
        .catch(error => {
            error({
                text: "You must enter query parameters!"
            });
            console.log(error)
        });
}
