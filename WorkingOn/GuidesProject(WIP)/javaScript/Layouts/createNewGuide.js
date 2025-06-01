function createNewGuide() { //Quando se clica no botão Criar deve-se chamar essa função pelo "TopMenu" ele pega a main div e adiciona um botão gigante que ao clicar inicia outra lógica
    let div = document.getElementById()
    let imagem = document.createElement("img")
}

function includeCreateNewGuides() {
    var z, i, element, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        element = z[i];
        file = element.getAttribute("topMenu");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { element.innerHTML = this.responseText; }
                    if (this.status == 404) { element.innerHTML = "Page not found. =("; }
                    element.removeAttribute("topMenu");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}