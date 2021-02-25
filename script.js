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

        case bday == 1:  document.getElementById('result').innerHTML = Males[1];        
                         break;

        case bday == 2:  document.getElementById('result').innerHTML = Males[2];              
                         break;

        case bday == 3:  document.getElementById('result').innerHTML = Males[3];                 
                         break;

        case bday == 4:  document.getElementById('result').innerHTML = Males[4];                  
                         break;

        case bday == 5:  document.getElementById('result').innerHTML = Males[5];                
                         break;

        case bday == 6:  document.getElementById('result').innerHTML = Males[6];               
                         break;
        

               default:  document.getElementById('result').innerHTML = "Error";
                         break;



 }



    switch(gender === 'Female'){
         
        case bday == 0:  document.getElementById('result').innerHTML = Females[0];
                         break;

        case bday == 1:  document.getElementById('result').innerHTML = Females[1];              
                         break;

        case bday == 2:  document.getElementById('result').innerHTML = Females[2];           
                         break;
 
        case bday == 3:  document.getElementById('result').innerHTML = Females[3];              
                         break;

        case bday == 4:  document.getElementById('result').innerHTML = Females[4];       
                         break;

        case bday == 5:  document.getElementById('result').innerHTML = Females[5];       
                         break;

        case bday == 6:  document.getElementById('result').innerHTML = Females[6];
                         break;
                         
                         
               default:  document.getElementById('result').innerHTML = "Error";
                         break;



}
if(gender !== 'Male' && gender!== 'Female'){
    document.getElementById('result').innerHTML = "Invalid gender input";
    
}







}

)


