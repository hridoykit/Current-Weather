const API_key = `2e2cbb5ec2b586bd6dec1a6493bcfcd6`;
document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;

  // clear search field
  document.getElementById("city-input").value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
  // .then((data) => console.log(data));
});

//1.1
// const displayTemp = (temp) => {
//   console.log(temp);
//   const tempContainer = document.getElementById("temp-container");
//   //clear search content
//   tempContainer.textContent = "";

//   const div = document.createElement("div");
//   div.classList.add("weather-status");
//   div.innerHTML = `
//     <img src="${temp.weather[0].icon}" alt="">
//     <h1>${temp.name}</h1>
//     <h3><span>${temp.main.temp}</span>&deg;C</h3>
//     <h1 class="lead">${temp.weather[0].main}</h1>
//   `;
//   tempContainer.appendChild(div);
// };

// 1.2
const setValue = (id, text) => {
  const value = (document.getElementById(id).innerText = text);
};

const displayTemp = (temp) => {
  setValue("city-name", temp.name);
  setValue("temperature", temp.main.temp);
  setValue("condition", temp.weather[0].main);

  //set weather icon
  const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  const iconImg = document.getElementById("weather-icon");
  iconImg.setAttribute("src", url);

  console.log(temp);
};
