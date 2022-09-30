function validera() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "Sara" && password === "qwe123") {
        localStorage.setItem("userName", "Sara");
        localStorage.setItem("passWord", "qwe123");
        inloggad();
    } else {
        inloggFail();
    }
}

const content = document.getElementById("content");
function inloggad() {
    hide();
    let inlDiv = document.createElement("div");
    inlDiv.innerHTML = "<p>Välkommen, du är nu inloggad</p>";
    inlDiv.style.backgroundColor = "rgba(255, 255, 255, 0.466)";
    inlDiv.style.padding = "1em";
    inlDiv.style.borderRadius = "25px";
    content.appendChild(inlDiv);
    let inlBtn = document.createElement("button");
    inlBtn.innerHTML = "Logga ut";
    inlBtn.id = "utloggning";
    inlBtn.style.fontSize = "15px";
    inlBtn.style.fontWeight = "bolder";
    inlBtn.style.background = "none";
    inlBtn.style.color = "#454545";
    inlBtn.style.border = "none";
    inlBtn.style.padding = "0.5em";
    inlBtn.addEventListener("click", function () {
        localStorage.clear();
        inlDiv.remove();
        inlBtn.remove();
        show();
    });
    inlDiv.appendChild(inlBtn);
}

function inloggFail() {
    hide();
    let failDiv = document.createElement("div");
    failDiv.innerHTML = "<p>Inloggning misslyckades, var god försök igen.</p>";
    failDiv.style.backgroundColor = "rgba(255, 255, 255, 0.466)";
    failDiv.style.padding = "1em";
    failDiv.style.borderRadius = "25px";
    content.appendChild(failDiv);
    let failBtn = document.createElement("button");
    failBtn.innerHTML = "Tillbaka";
    failBtn.id = "tillbaka";
    failBtn.style.fontSize = "15px";
    failBtn.style.fontWeight = "bolder";
    failBtn.style.background = "none";
    failBtn.style.color = "#454545";
    failBtn.style.border = "none";
    failBtn.style.padding = "0.5em";
    failBtn.addEventListener("click", function () {
        failDiv.remove();
        failBtn.remove();
        show();
    });
    failDiv.appendChild(failBtn);
}

const info = document.getElementById("info");
const login = document.getElementById("login");
function hide() {
    info.style.display = "none";
    login.style.display = "none";
}

function show() {
    info.style.display = "initial";
    login.style.display = "initial";
}
