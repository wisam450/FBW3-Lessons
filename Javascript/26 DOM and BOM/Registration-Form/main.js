document.getElementById("personalDiv").style.display="block";
document.getElementById("addressDiv").style.display="none";
document.getElementById("profileInfo").style.display="none";
document.getElementById("resultDiv").style.display="none";



function nextDiv(e){
    e.preventDefault();
    let checkFirstName = document.getElementsByName("firstName")[0].checkValidity();
    let checkLastName = document.getElementsByName("lastName")[0].checkValidity();
    let checkBirthDate = document.getElementsByName("birthDate")[0].checkValidity();
    let checkNationality = document.getElementsByName("nationality")[0].checkValidity();

    let checkAddress=document.getElementsByName("address")[0].checkValidity();
    let checkHausNumber=document.getElementsByName("houseNumber")[0].checkValidity();
    let checkZipeCode = document.getElementsByName("zipeCode")[0].checkValidity();
    
    let checkPassword = document.getElementsByName("password")[0].checkValidity();    
    let passwordMatch = 
    document.getElementsByName('password')[0].value ===
    document.getElementsByName('passwordRepeat')[0].value;
    //alert(passwordMatch);

    


 document.getElementById('photoLabel').src = imageFile.replace('C:\\fakepath\\', './images/' );

  

    let parentDivID = e.target.parentElement.id;
    //alert(parentDivID);
    switch(parentDivID){
        case 'personalDiv':
            if(checkFirstName && checkLastName && checkBirthDate && checkNationality ){

                e.target.parentElement.style.display="none";
                document.getElementById("addressDiv").style.display="block";
                document.getElementById("profileInfo").style.display="none";
                document.getElementById("resultDiv").style.display="none";

            }
            else{  alert('please check your entries');   }

            
            break;
        case 'addressDiv':
            if(checkAddress && checkHausNumber && checkZipeCode  ){
                e.target.parentElement.style.display="none";
                document.getElementById("resultDiv").style.display="none";
                document.getElementById("personalDiv").style.display="none";
                document.getElementById("profileInfo").style.display="block";
            }
            else {
                alert('please check your entries');
            }
           
            break;
        case 'profileInfo' :
            e.target.parentElement.style.display="none";
            document.getElementById("addressDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            document.getElementById("resultDiv").style.display="block";

    }
   



}
function previousDiv(e){
    e.preventDefault();
     let parentDiv = e.target.parentElement.id;
     //alert(parentDiv);
     switch(parentDiv){
         case'addressDiv' :
            e.target.parentElement.style.display="none";
            document.getElementById("personalDiv").style.display="block";
            document.getElementById("resultDiv").style.display="none";
            document.getElementById("profileInfo").style.display="none";
            break;
          case 'profileInfo' : 
            e.target.parentElement.style.display="none";
            document.getElementById("addressDiv").style.display="block";
            document.getElementById("resultDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            break;
         case  'resultDiv' : 
            e.target.parentElement.style.display="none";
            document.getElementById("profileInfo").style.display="block";
            document.getElementById("addressDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            break;






                  




     }
    
}
let btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach(function(item){
 
  if(item.classList.contains("next")){
      item.addEventListener("click",nextDiv);
  }
  else if (item.classList.contains('previous')){
    item.addEventListener("click",previousDiv);

  }

});