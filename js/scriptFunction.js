function slider(name, id, exp) {
    let i = 0;
    if (i == 0) {
        i = 1;
        let elem = document.getElementById(id);
        let w = 0;
        let timeLeg = setInterval(function increment() {
            if (w >= exp) {
                elem.innerHTML = `<b>${name}</b>`
                clearInterval(timeLeg);
                i = 0;
            } else {
                w = w + 0.1;
                elem.style.width = w + "%";
            }
        }, 5);
    }
}

function dynamicColor() {
    let n = document.getElementById("name-head");
    let i = 0;
    let t = setInterval(function() {
        if (i == 1) {
            n.style.color = "rgba(119, 119, 119, 0.749)";
            i = 0;
        } else {
            n.style.color = "#222";
            i = 1;
        }
    }, 900);
}

function navbarToggle() {
    let elem = document.getElementsByTagName("body");
    let bigDiv = document.getElementById("large-disp");
    let smallDiv = document.getElementById("small-disp");

    if (window.innerWidth <= 767) {
        bigDiv.style.display = "none";
        smallDiv.style.display = "inline-block";
    } else {
        smallDiv.style.display = "none";
    }
}

function openNav() {
    document.getElementById("small-disp").style.width = "100px";

}

window.addEventListener('click', function(e) {
    if (e.target.id == 'collapse-btn' || e.target.id == 'small-disp' || e.target.className == 'icon-bar') {
        document.getElementById("small-disp").style.display = "block";
    } else {
        document.getElementById("small-disp").style.display = "none";
    }
});

function initialScriptLoad() {
    let skillData = [
        { "name": "HTML", "level": 90, "id": "html-skill" },
        { "name": "CSS/BootStrap", "level": 90, "id": "css-bootstrap-skill" },
        { "name": "Javascript", "level": 80, "id": "javascript-skill" },
        { "name": "C/C++", "level": 85, "id": "c-cpp-skill" },
        { "name": "Python", "level": 90, "id": "py-skill" },
        { "name": "Java", "level": 75, "id": "java-skiil" },
        { "name": "PHP", "level": 40, "id": "php-skill" },
        { "name": "MySQL", "level": 70, "id": "mysql-skill" },
        { "name": "MongoDB", "level": 50, "id": "mongodb-skill" },
        { "name": "Git", "level": 60, "id": "git-skill" },
        { "name": "Windows", "level": 90, "id": "wos-skill" },
        { "name": "Linux", "level": 70, "id": "l-os-skill" },
        // { "name": "Hindi", "level": 100, "id": "hindi-lang" },
        // { "name": "English", "level": 100, "id": "en-leng" }
    ];
    skillData.forEach((data) => {
        slider(data.name, data.id, data.level);
    })
    dynamicColor();
    navbarToggle();
}
