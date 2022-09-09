const btn = document.querySelector("#btnLogin");
const senha = document.querySelector("#senha")
const nome = document.querySelector("#nome")

btn.addEventListener("click", () => {
    fetchdados();
})

let fetchdados = async function () {
    const user = "./usuarios.json";
    const dadosFetch = await fetch(user);
    const Json = await dadosFetch.json();
    if (conferir (Json.users)) {
        window.location.href = "./mainMenu.html"
    } else {
        alert("usuario e/ou senha incorretos!")
    }
}
function conferir(json) {
    for (let usuario of json) {
        if (usuario.user == nome.value && usuario.pws) {
            return true;
        }
    }
}