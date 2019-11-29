window.onload = function(){

    document.getElementById("getFlickr").addEventListener("click", JavascriptFetch);
   

    function JavascriptFetch(){
        var script = document.createElement("script");
        script.src ="http://www.flickr.com/services/feeds/photos_public.gne?tags=camelopard&format=json&jsoncallback=presentImages"
        document.querySelector("head").appendChild(script);
    }   
}
function presentImages(response){
    console.log(response);
    for (let i = 0; i < 3; i++) {

        let createImg = document.createElement("img");
        createImg.src = response.items[i].media.m;
        let mDiv = document.createElement("div");

        let divContainer = document.getElementById("center");

        divContainer.appendChild(mDiv);
        mDiv.appendChild(createImg);     

        let mBtn = document.createElement("button");
        mBtn.innerHTML = "Öppna";
        mDiv.appendChild(mBtn);

        mBtn.addEventListener("click", function() {
            getData(response.items[i]);
        });


    }
}


        function getData(theImage){
            console.log(theImage);

            function Info(){

                Titel;
                Fotograf;
                Bild;
            }

            let mod1 = new Info();

            theImage.titel= title;
            theImage.fotograf=author;
            theImage.bild=media.m;

            let mod2 = new Info();

            theImage.titel= title;
            theImage.fotograf=author;
            theImage.bild=media.m;

            let mod3 = new Info();

            theImage.titel= title;
            theImage.fotograf=author;
            theImage.bild=media.m;

            let modals = [mod1, mod2, mod3];

            for(let i = 0; i < modals.length;i++){
                modals[i].titel  
                modals[i].fotograf
                modals[i].bild                        
            }
}


 
                
            //Skapa en klass av ovan lista? 

            //Loopa listan 

            //Skriv ut HTML 

        //     let heading = document.createElement("h2");
        //     heading.innerHTML = response.items[i].title;                            
        //     document.getElementsByClassName("modal-title").appendChild(heading);
        
        //     let content = document.createElement("img");
        //     content.innerHTML = response.items[i].media.m;
        //     document.getElementsByClassName("modal-body").appendChild(content);
        
        //     let footer = document.createElement("p");
        //     footer.innerHTML = response.items[i].author;
        //     document.getElementsByClassName("modal-footer").appendChild(footer);
        // };

  
        //Skapa en klass med det jag vill plocka upp ur response 
        //loopa klassen 

        // response
        // getData
        // items 

        
        
//         var title = [];
// for (var i=0; i< 3; i++) {
//     title[i] = {
//         name: "name" + i+1,
//         age: "age" + i+1,
//         hometown: "hometown" + i+1
//     };
// }
// console.log(title);
// output will be:
// [ { name: 'name1', age: 'age1', hometown: 'hometown1' },
//   { name: 'name2', age: 'age2', hometown: 'hometown2' },
//   { name: 'name3', age: 'age3', hometown: 'hometown3' } ]
        
        //function getData(response){
        
        //     response.json().then(function(data) {       //Gör om svaret till json 
        //     console.log(data);
        
        //     //när knappen trycks öppna modal med nedan.... 
        
        
        
        //     }
        // }

//get attribute data src 

// display block modal om den inte syns


//Anropa label taggen och lägg till enligt star wars filen 





    
    // function changeFormAction() {
    //     var item = document.getElementById("item").value;
    //     fetch("http://www.flickr.com/services/feeds/photos_public.gne?tags=" + item + "&format=json&jsoncallback=presentImages").then(presentImages);

        //     response.json().then(function(data) {       //Gör om svaret till json 
        //         console.log(data);                      //använd json-objektet för att presentera data 

        //         let heading = document.createElement("h2");
        //         heading.innerHTML = data.Title;                 //egenskapen namn på titeln från toolbar = Title
        //         document.body.appendChild(heading);

        //         let p = document.createElement("p");
        //         p.innerHTML = data.Director;
        //         document.body.appendChild(p);

        //         let r = document.createElement("p");
        //         r.innerHTML = data.Released;
        //         document.body.appendChild(r);
                
        //     });
        // }

    // document.getElementById("searchbutton").addEventListener("click", function() {
    //     let searchText = document.getElementById("search").value;
    //    
    



  

    
   // document.getElementById("getFlickr").addevenetlistener("click", JavascriptFetch);
   // let searchText = document.getElementById("search").value;


// Bilderna är hårdkodade i sin sökning = behöver inte ha ett sökfält i webbläsaren? 

// Ni skall använda en lista (array) som innehåller objekt - modal? Loopa? 




// klass + skapa objekt . än så länge har flicr skapat en lista åt mig 

// Längden på loopen 3 objekt 

// presentimages 
// presentimages 2 elefant
// presentimages 3 zebra 

// Lägg in i varsin div left center right 

//Låsa knapp till botten av div 





// json används för att göra om data till string. Vill man plocka ut en bild  ur data används...?


//Skulle denna fungera för att hämta data från flickr?
  // function changeFormAction() {
    //     var item = document.getElementById("item").value;
    //     var form = this;
    //     form.action = "https://example.com/api/api?item=" + item +  "&auth=AUTHENTICATIONtoken";
    //     form.submit();
    //   }



        //         let r = document.createElement("p");
        //         r.innerHTML = data.Released;
        //         document.body.appendChild(r);



        //Var lägger jag modalknappen i html om jag endast ska hänvisa till den i JS och placera den i bild divven? 

        //Spelar det någon roll vilken ordning childnodes ligger i? Ska de ligga i samma ordning som de nästlas i HTML? 

        //media är ett objekt som innhåller egenskapen m 