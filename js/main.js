/* var myCat ={
     "name" : "Meawsolot",
     "specis" : "cat",
     "favFood" :"tuna"
 } 

 var myFavcolor = ["blue","red","black","yellow"]

 var thePets= [
     {
        "name" : "Meawsolot",
        "specis" : "cat",
        "favFood" :"tuna"
     },
     {
        "name" : "bucky",
        "specis" : "dog",
        "favFood" :"carrots"
     }
 ]

 myCat.favFood
 myCat.specis
 myCat.name

 myFavcolor[2]

 thePets[1].favFood
 */
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var OurRequest = new XMLHttpRequest();
    OurRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    OurRequest.onload = function(){
        //console.log(OurRequest.responseText);
         var ourData = JSON.parse(OurRequest.responseText);
         //console.log(ourData[0]);
         renderHTML(ourData);
    };
    
    OurRequest.send();
    pageCounter++;
    if (pageCounter > 3 ){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var htmlString = "";

    for (i=0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + "is a "+data[i].species + ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString)
}
 