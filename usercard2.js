var data1 = {image : "https://www.sportsunfold.com/wp-content/uploads/2022/07/pasted-image-0-18-3.png", name : "Shubman gill", designation : "Crickter"};
var data2 = {image : "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png", name : "Shubman gill", designation : "Player of Gujarat Titans"};
var isData1 = true;
var displayData;
var changeMyPic = function()
{
    if(isData1)
    {
        displayData = data2;
        isData1 = false;
    }
    else
    {
        displayData = data1;
        isData1 = true;
    }
    document.getElementById("firstimage").src = displayData.image;
    document.getElementById("myFirstName").innerHTML = displayData.name;
    document.getElementById("Designation").innerHTML = displayData.designation;
}