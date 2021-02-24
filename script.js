 document.getElementById('subbtn').addEventListener('click', function getName(e){
    e.preventDefault();
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    
    var bday = new Date(date);
    var bday = bday.getDay();

    var Males = new Array(

        "Sunday: Kwasi",

        "Monday: Kwadwo",

        "Tuesday: Kwabena",

        "Wednesday: Kwaku",

        "Thursday:  Yaw",

        "Friday: Kofi",

        "Saturday: Kwame" 

    );
    
    var Females = new Array(

        "Sunday: Akosua",

        "Monday: Adwoa",
        
        "Tuesday: Abenaa",
        
        "Wednesday: Akua",
        
        "Thursday:  Yaa",
        
        "Friday: Afua",
        
        "Saturday: Ama"



    );

    switch(gender === 'Male'){
          
        case bday == 0:  document.getElementById('result').innerHTML = Males[0];
                break;

        case bday == 1: document.getElementById('result').innerHTML = Males[1];        
                break;

        case bday == 2:     console.log("Tuesday: Kwabena");              
                break;

        case bday == 3:  console.log("Wednesday: Kwaku");                 
                break;

        case bday == 4: console.log("Thursday:  Yaw");                  
                break;

        case bday == 5:   console.log("Friday: Kofi");               
                break;

        case bday == 6:    console.log( "Saturday: Kwame" );               
                break;



 }



    switch(gender === 'Female'){
         
        case bday == 0: document.getElementById('result').innerHTML = Females[0];
                 break;

        case bday == 1:  console.log("Monday: Kwadwo",);                 
                 break;

        case bday == 2:     console.log("Tuesday: Kwabena");              
                 break;
 
        case bday == 3:  console.log("Wednesday: Kwaku");                 
                 break;

        case bday == 4: console.log("Thursday:  Yaw");                  
                 break;

        case bday == 5:   console.log("Friday: Kofi");               
                 break;

        case bday == 6:    console.log( "Saturday: Kwame" );               
                 break;



}





}





 



























)
