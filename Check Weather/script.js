var loc=document.getElementById("location");
var temp_icon=document.getElementById("icons");
var temp_value=document.getElementById("temp-value");
var climate=document.getElementById("climate");
var search_input=document.getElementById("search-bar");
var search_button=document.getElementById("search-button");



search_button.addEventListener('click',(e)=>{
	e.preventDefault(e);
	getWeather(search_input.value);
	search_input.value='';

});





const getWeather=async(search_input)=>{
	try{
		const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_input}&appid=a6b513ab532220bf5ac92dd0dbc2fa93`);

		const weatherData=await response.json();
		console.log(weatherData);
		const{name}=weatherData;
		const{feels_like}=weatherData.main;
		const{id,main}=weatherData.weather[0];
		//console.log(feels_like-273);
		//console.log(main);
		loc.textContent=name;
		climate.textContent=main;
		temp_value.textContent=Math.round(feels_like-273);
		if(id>200 && id<300)
			temp_icon.src="./Icons/thunderstorm.png"
		else if(id>300 && id<350)
			temp_icon.src="./Icons/drizzle.png"
		else if(id>500 && id<600)
			temp_icon.src="./Icons/rain.png"
		else if(id>600 && id<650)
			temp_icon.src="./Icons/snowflakes.png"
		else if(id>700 && id<790 )
			temp_icon.src="./Icons/cloud-computing.png"
		else if(id==800)
			temp_icon.src="./Icons/sun.png"
		else if(id>800)
			temp_icon.src="./Icons/rainy.png"
	
	}
	catch(error){
		alert("city not found");
	}
};










// window.addEventListener("load",()=>{
// 	var lat;
// 	var lon;
// 	if(navigator.geolocation){
// 		navigator.geolocation.getCurrentPosition((position)=>{
// 			lon=position.coords.longitude;
// 			lat=position.coords.latitude;

// 			const api=`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a6b513ab532220bf5ac92dd0dbc2fa93`
// 			fetch(api).then((response)=>{
// 				return response.json();
// 			})
// 			.then(data =>{
// 				const{name}=data;
// 				const{feels_like}=data.main;
// 				const{id,main}=data.weather[0];
// 				loc.textContent=name;
// 				climate.textContent=main;
// 				temp_value.textContent=Math.round(feels_like-273);
// 			})
// 			})

// 	}
// });
