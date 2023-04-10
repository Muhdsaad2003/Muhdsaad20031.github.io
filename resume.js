function changecolor(){
    object.onclick = function(){myScript};
}

function myFunction1() {
    var x = document.getElementById("workhis1");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("workhis2");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("workhis3");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/*
var workhis = document.getElementsByClassName("workhis");
var button = dociment.getElementsByClassName("showmore");

button.onclick = function(){
    if(workhis.className == "open"){
        //shrink the box
        workhis.className = "";
        button.innerHTML = "SHOW MORE";
    }
    else{
        //expand the box
        workhis.className = "open";
        button.innerHTML = "HIDE MORE";
    }


};
*/