'use strict';

var userContacts;

    if(localStorage.getItem("phoneData") == null)
    {
        userContacts = [];
    }
    else
    {
        userContacts = JSON.parse(localStorage.getItem("phoneData"));
    }


displayData();

var userNameInp = document.getElementById("userName");
var userPhoneInp = document.getElementById("userPhone");


var inps = document.getElementsByTagName("input");

var name = userContacts[i].name;


function addContact()
{

    if(validateName() == true && validatePhone() == true){

    var contacts = { name:userNameInp.value , phone:userPhoneInp.value };

    userContacts.push(contacts);

    displayData();

    clearData();

    localStorage.setItem("phoneData" , JSON.stringify(userContacts));

    }
    else
    {
        alert("please fill in the form");
    }



}



function displayData()
{
    var temp = "";
    for(var i=0 ; i<userContacts.length ; i++)
    {
        temp += "<tr><td>"+userContacts[i].name+"</td><td>"+userContacts[i].phone+"</td><td>"+'<a onclick="deleteContact(\''+userContacts[i].name+'\')" class="text-danger"></i></a>'+"</td><td>"+"</td></tr>";
    }
    document.getElementById("tableBody").innerHTML = temp;

}





function clearData()
{
    for(var i=0; i<inps.length; i++)
    {
        inps[i].value="";
    }
}






function deleteContact(name)
{
    var i=0;
    for(var i=0; i<userContacts.length; i++)
    {
        if(userContacts[i].name == name)
        {
            userContacts.splice(i , 1);
        }
    }


    localStorage.setItem("phoneData" , JSON.stringify(userContacts));

    displayData();

}




function searchFunction()
{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

searchFunction();


function validateName()
{
    var regex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(regex.test(userNameInp.value) == true)
    {
        document.getElementById("nameAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("nameAlert").style.display="block";
        return false;
    }
}

function validatePhone()
{
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(regex.test(userPhoneInp.value) == true)
    {
        document.getElementById("phoneAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("phoneAlert").style.display="block";
        return false;
    }
}


// function validateEmail()
// {
//     var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//     if(regex.test(userEmailInp.value) == true)
//     {
//         document.getElementById("mailAlert").style.display="none";
//         return true;
//     }
//     else
//     {
//         document.getElementById("mailAlert").style.display="block";
//         return false;
//     }
// }
