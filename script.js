document.getElementById('subbtn').addEventListener('click', function getName(e){
    e.preventDefault();
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    
    var d1 = new Date(date);
    var bday = d1.getDay();

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

    switch(gender === 'male'){
          
        case d1 == 0:  document.getElementById('result').innerHTML = Males[0];
                break;

        case d1 == 1:  console.log("Monday: Kwadwo",);                 
                break;

        case d1 == 2:     console.log("Tuesday: Kwabena");              
                break;

        case d1 == 3:  console.log("Wednesday: Kwaku");                 
                break;

        case d1 == 4: console.log("Thursday:  Yaw");                  
                break;

        case d1 == 5:   console.log("Friday: Kofi");               
                break;

        case d1 == 6:    console.log( "Saturday: Kwame" );               
                break;



 }



    switch(gender === 'female'){
         
        case 0:  console.log("Sunday: Kwasi");
                 break;

        case 1:  console.log("Monday: Kwadwo",);                 
                 break;

        case 2:     console.log("Tuesday: Kwabena");              
                 break;

        case 3:  console.log("Wednesday: Kwaku");                 
                 break;

        case 4: console.log("Thursday:  Yaw");                  
                 break;

        case 5:   console.log("Friday: Kofi");               
                 break;

        case 6:    console.log( "Saturday: Kwame" );               
                 break;



}





}





 



























)
