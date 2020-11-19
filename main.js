//----------------------------example.html-----------------------

function view_more() {
    var modal = document.getElementById("mymodal");
    var btn = document.getElementById("mybutton");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }
}





//---------------------------------contact.html--------------------------------------

function giris () {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
         document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }  
}