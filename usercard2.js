let sachininfo{
    imgurl: "https://images.news18.com/ibnlive/uploads/2022/04/shubman.jpg",
    name: "Shunman gill",
    Description: Plays for Gujarat Titans
}
let sachinnewinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eHf47wsRE1Sfnntlc8XeU8RYMIVKT77IFOqjF2EBcA&usqp=CAU&ec=48600112"
    name: "Dhoni",
    description: "orange cap batsman"
}

let issachinold = true;
let displayobject;

let flipdata = function(){
    if(issachinold == true){
        displayobject = sachinnewinfo;
        issachinold = false;
    }
    else{
        displayobject = sachinoldinfo;
        issachinold = true;
    }
    document.getElementById("ywc").src=displayobject.imgurl;
    document.getElementById("ywc-name").innerHTML=displayobject.name;
    document.getElementById("ywc-des").innerHTML = displayobject.description;