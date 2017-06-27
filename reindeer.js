// todo loop through reindeer and colors. Line them up with the corresponding color and print to div("reindeer")



// var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
// var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
// let santaString = "";
// var hohohoElement = document.getElementById("reindeer");


// // created empty string to hold the values of the arrays(reindeers + colors)


// // the for loop to start with the first words in each array and loop I just need to figure out how to print them out to the <div> "reindeer"
// // I will start with innerHTML

// for (var i = 0; i < reindeer.length; i++) {
//     santaString += colors[i] + " " + reindeer[i];
//     hohohoElement.innerHTML =
//         `<body>
//          <div>${santaString += " "}</div>
//          </body>`

// }


var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "1", "2", "3", "4", "5", "6", "7", "8"];
var shortestArray;
var hohohoElement = document.getElementById("reindeer");
if (reindeer.length > colors.length ) {
	shortestArray = colors 
}else{
	shortestArray = reindeer
}
    for (var i = 0; i < shortestArray.length; i++) {

        hohohoElement.innerHTML += `<div>${colors[i]} ${reindeer[i]}</div>`

    }
