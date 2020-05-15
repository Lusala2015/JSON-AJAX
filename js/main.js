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
        if(OurRequest.status >= 200 && OurRequest.status < 400){
            //console.log(OurRequest.responseText);
         var ourData = JSON.parse(OurRequest.responseText);
         //console.log(ourData[0]);
         renderHTML(ourData);
        }else{
            console.log("We Connected to the server but it returned an error ");
        }    
    };

    OurRequest.onerror = function(){
        console.log("Whooops! connection error");
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
        htmlString += " <p> " + data[i].name + " is a "+data[i].species + " that likes to eat ";

        for (ii=0; ii<data[i].foods.likes.length; ii++){
            if(II=0){
                htmlString += data[i].foods.likes[ii];
            }else{
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        htmlString += " and dislikes ";

        for (ii=0; ii<data[i].foods.dislikes.length; ii++){
            if(II=0){
                htmlString += data[i].foods.dislikes[ii];
            }else{
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString)
}
 