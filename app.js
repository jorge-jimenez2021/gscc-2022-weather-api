var express = require("express");
var app = express();
const port = 8000
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});

app.get("/all_cities", (req, res, next) => {
    console.log("Fetching all cities...")
    res.json([
        {
            address:"Manchester, New Hampshire, United States",
            location:"Manchester Community College",
            image:"https://redoakproperties.com/sites/default/files/blog/Manchester%20Picture.png",
            data: {
                precipitation: 70,
                humidity: 88,
                wind: '6 mph',
                currentFarenheit: 63,
                currentCelsius: 17,
                time: "Saturday 11:00 AM",
                forecast : [
                    {day: 'Sun 13', tempF: "73", tempC: "46", desc: 'Slight Rain', humidity: '94', wind: '15 mph'},
                    {day: 'Mon 14', tempF: "51", tempC: "32", desc: 'Slight Rain', humidity: '48', wind: '11 mph'},
                    {day: 'Tue 15', tempF: "45", tempC: "25", desc: 'Sunny', humidity: '70', wind: '14 mph'},
                    {day: 'Wed 16', tempF: "46", tempC: "31", desc: 'Cloudy', humidity: '71', wind: '7 mph'},
                    {day: 'Thu 17', tempF: "45", tempC: "32", desc: 'Rain/Snow Chance', humidity: '72', wind: '8 mph'},
                ]
            }
        },{
            address:"Boston, Massachusetts, United States",
            location:"North End",
            image:"https://upload.wikimedia.org/wikipedia/commons/a/aa/North_End%2C_Boston.jpg",
            data: {
                precipitation: 65,
                humidity: 88,
                wind: '18 mph',
                currentFarenheit: 73,
                currentCelsius: 50,
                time: "Saturday 11:00 AM",
                forecast : [
                    {day: 'Sun 13', tempF: "53", tempC: "35", desc: 'Slight Rain', humidity: '94', wind: '18 mph'},
                    {day: 'Mon 14', tempF: "47", tempC: "30", desc: 'Slight Rain', humidity: '48', wind: '14 mph'},
                    {day: 'Tue 15', tempF: "46", tempC: "38", desc: 'Sunny', humidity: '70', wind: '15 mph'},
                    {day: 'Wed 16', tempF: "49", tempC: "37", desc: 'Cloudy', humidity: '71', wind: '7 mph'},
                    {day: 'Thu 17', tempF: "46", tempC: "31", desc: 'Slight Rain', humidity: '72', wind: '14 mph'},
                ]
            }
        },
        {
            address:"New York City, New York, United States",
            location:"Manhattan",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg/1200px-West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg",
            data: {
                precipitation: 68,
                humidity: 88,
                wind: '10 mph',
                currentFarenheit: 68,
                currentCelsius: 49,
                time: "Saturday 11:00 AM",
                forecast : [
                    {day: 'Sun 13', tempF: "53", tempC: "35", desc: 'Clouds/Sunny', humidity: '94', wind: '18 mph'},
                    {day: 'Mon 14', tempF: "48", tempC: "36", desc: 'Showers', humidity: '48', wind: '12 mph'},
                    {day: 'Tue 15', tempF: "45", tempC: "38", desc: 'Sunny', humidity: '70', wind: '3 mph'},
                    {day: 'Wed 16', tempF: "49", tempC: "46", desc: 'Cloudy', humidity: '71', wind: '9 mph'},
                    {day: 'Thu 17', tempF: "46", tempC: "34", desc: 'Rain', humidity: '72', wind: '10 mph'},
                ]
            }
        },
    ]);
});