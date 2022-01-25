fetch("https://api-nba-v1.p.rapidapi.com/players/lastName/Durant", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "103b32065dmshc681f3eea3f73a1p1475c5jsn97005b0b363a"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});