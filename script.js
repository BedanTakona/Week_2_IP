document.getElementById('subbtn').addEventListener('click', function getName(e){
    e.preventDefault();
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    


    var Males[

        "Sunday: Kwasi",

        "Monday: Kwadwo",

        "Tuesday: Kwabena",

        "Wednesday: Kwaku",

        "Thursday:  Yaw",

        "Friday: Kofi",

        "Saturday: Kwame" 

    ];
    
    var Females[

        "Sunday: Akosua",

        "Monday: Adwoa",
        
        "Tuesday: Abenaa",
        
        "Wednesday: Akua",
        
        "Thursday:  Yaa",
        
        "Friday: Afua",
        
        "Saturday: Ama"



    ];

    switch(gender === 'male'){
         
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



 














 )




























})