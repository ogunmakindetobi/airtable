function getData() {
  fetch("https://api.airtable.com/v0/meta/bases").then(function (response) {
    console.log(response.status);
    return response.json();
  });
}
