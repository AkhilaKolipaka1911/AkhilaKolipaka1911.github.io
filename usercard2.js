var data1 = {image : "https://www.thesprucepets.com/thmb/FrzaZIcI4aOXxIaRMbomeJUoft8=/2116x0/filters:no_upscale():strip_icc()/Westie-74f76b3f57e643639d67298018374e39.jpg",name : "Chunk" , Breed: "Terrier"};
var data2 = {image : "https://media-be.chewy.com/wp-content/uploads/2021/06/02102132/Pomeranian_Featured-Image-1024x615.jpg",name : "Dolly" , Breed: "pomeranian"};
var isdata1 = true;
var displaydata;
var changepic = function()
{
    if(isdata1)
    {
        displaydata = data2;
        isdata1=false;
    }
    else
    {
        displaydata = data1;
        isdata1 = true;
    }
    document.getElementById("image2").src=displaydata.image;
    document.getElementById("name2").innerHTML=displaydata.name;
    document.getElementById("Breed2").innerHTML=displaydata.Breed;

}