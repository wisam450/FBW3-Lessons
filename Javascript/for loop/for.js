let food = new Array("Pizza","Kebab","Döner","Falafel","Kartofel Salat","Briani");

 let foodLength=food.length;  
for(let counter=0 ; counter < foodLength ; counter ++ )
{
    document.write(food[counter]+ '<br>');
}

////////////////////////////////////////

let colors= new Array ("red","blue","green","yellow","black"); 
colors.push('#cc00ee');
// let colors= ["red","blue","green","yellow","black"]
document.write('<hr>');
for(i=0 ; i < colors.length ; i++){
    document.write(colors[i]+ '<br>');
}

document.write('<hr>'); let div;
for(i=0 ; i < colors.length ; i++)
{
    div="<div style='text-align:center;margin:0 auto;height:40px;color:white;width:"+i+5+"%;background:"+colors[i]+"'>" + colors[i]+ "</div>";
    document.write(div);
}

////////////////////////////////////////////////////////////////77
let student=[80,70,90,60,77,59];