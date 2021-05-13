

{
    var images = ["Aparna.jpg","Bhavesh.jpg","Daddy.jpg","Mummy.jpg"];
    var names =["Aparna","Bhavesh","Daddy","Mummy"];
}
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array_= 5
    if(i > numbers_of_family_member_in_array_)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("images").src = updatedImage;
    document.getElementById("names").innerHTML = updatedName;
}
