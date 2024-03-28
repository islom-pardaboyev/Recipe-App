// Variables
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInp = document.getElementById("user-inp").value;

// Fetch Api
fetch(url + "cake")
  .then((response) => response.json())
  .then((data) => console.log(data));
