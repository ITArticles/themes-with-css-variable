const toggleSwitch = document.querySelector('select.theme-switch');

function switchTheme(e) {
    let val = e.target.value;
    if (val) {
        document.documentElement.setAttribute('data-theme', val);
        localStorage.setItem('theme', val);
    }
    else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);



function checkTheme(){
    let theme = localStorage.getItem('theme');
    if(theme){
        toggleSwitch.value = theme;
        document.documentElement.setAttribute('data-theme', theme);
    }else{
        toggleSwitch.value = undefined;
        document.documentElement.removeAttribute('data-theme');
    }
}

checkTheme();

(function time(){
    var x = document.querySelector('span.c-time');
    var y = document.querySelector('span.c-day');
    var m = moment();
    x.innerHTML = m.format("hh:mm:ss a");
    y.innerHTML = m.format("dddd, MMM D");
    setInterval(()=>{                     
        var m = moment();
        x.innerHTML = m.format("hh:mm:ss a");
        y.innerHTML = m.format("dddd, MMM D");
    },1000);
})()


