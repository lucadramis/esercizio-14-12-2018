$(document).ready(function() {
    console.log( "ready!" );
});
    
const myArray= [{
    id:1,
    name:"nome1"
},
{
    id:2,
    name:"nome2"

},
{
    id:3,
    name:"nome3"
}]
let res="";
for (i=0; i<3; i++){
    
    res += myArray[i].id + myArray[i].name + "<br/>";
    
    
}
 res = $("#id").html();

