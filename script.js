var settingsmenu = document.querySelector(".settings-menu");
var settingsmenu2 = document.querySelector(".notif-menu");
var darkBtn = document.getElementById("dark-btn");
var b = false;

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
    }
    else{
        localStorage.setItem("theme", "dark");
    }
}

if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}
else{
    localStorage.setItem("theme", "dark");
}


function settingsMenuToggle2(id){
    settingsmenu2.classList.toggle("settings-menu-height");
    var e = document.getElementById(id);
    if(e.style.display == 'none')
        e.style.display = 'block';
    else
    e.style.display = 'none';
    b = true;
}

function foo(){
    var e = document.getElementById('foo');
    if(!b) e.style.display = 'none';
    b=false;
}

