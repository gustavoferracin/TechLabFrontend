import { hospedes } from "./clientes.js"
import { Reservas } from "./reservas.js";

const quartoC = document.querySelector("#quartoC");
const quartoS = document.querySelector("#quartoS");
const quartoF = document.querySelector("#quartoF");
const btnQuarto = document.querySelector("#btnQuarto");
const btnHospede = document.querySelector("#btnHospedes");
const btnReserva = document.querySelector("#btnReserva");
const btnCadastrarHospede = document.querySelector("#btnCadastroHospede");
const btnCadastrarReserva = document.querySelector("#btnCadastroReserva");
const formHospede = document.querySelector("#formularioHospede");
const formReserva = document.querySelector("#formularioReserva")
const tableH = document.querySelector("#tableH");
const tableR = document.querySelector("#tableReserva");
const btnSalvarR = document.querySelector("#btnSalvarReserva");
const btnSalvarH = document.querySelector("#btnSalvarHospede")

/* consts do form reserva*/
const idReservaR = document.querySelector("#iddaReserva")
const nomeHospedeReserva = document.querySelector("#nomeHospedeReserva")
const quartoReserva = document.querySelector("#quartoReserva")
const estadiaReserva = document.querySelector("#estadiaReserva")
/* consts do form hospede*/
const nomeHospede = document.querySelector("#nomeHospede");
const cpfHospede = document.querySelector("#cpfHospede");
const quartoHospede = document.querySelector("#quartoHospede");
const idReserva = document.querySelector("#idReserva");

console.log(idReservaR, nomeHospedeReserva, quartoReserva, estadiaReserva)
function mudarPainel(p) {
    if(p == 1 ) {
        quartoC.classList.remove("hidden");
        quartoS.classList.remove("hidden");
        quartoF.classList.remove("hidden");
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden");
        formReserva.classList.add("hidden");
    } if ( p == 2 ) {
        quartoC.classList.add("hidden");
        quartoS.classList.add("hidden");
        quartoF.classList.add("hidden");
        tableH.classList.remove("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden")
        formReserva.classList.add("hidden");
    } if ( p == 3) {
        quartoC.classList.add("hidden");
        quartoS.classList.add("hidden");
        quartoF.classList.add("hidden");
        tableH.classList.add("hidden");
        tableR.classList.remove("hidden");
        formHospede.classList.add("hidden")
        formReserva.classList.add("hidden");
    } if ( p == 4) {
        quartoC.classList.add("hidden");
        quartoS.classList.add("hidden");
        quartoF.classList.add("hidden");
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.remove("hidden");
        formReserva.classList.add("hidden");
    } if (p == 5) {
        quartoC.classList.add("hidden");
        quartoS.classList.add("hidden");
        quartoF.classList.add("hidden");
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden");
        formReserva.classList.remove("hidden");
    }
}  
btnQuarto.addEventListener("click", () => {
    mudarPainel(1);
})
btnHospede.addEventListener("click", () => {
    mudarPainel(2);
})
hospedes.forEach(item => {
    const tdNome = document.createElement('td')
    const tdCpf = document.createElement('td')
    const tdQuartoReservado = document.createElement('td')
    const tdIdDaReserva = document.createElement('td')
    
    tdNome.textContent = item.nome
    tdCpf.textContent = item.cpf
    tdQuartoReservado.textContent = item.quartoReservado
    tdIdDaReserva.textContent = item.idDaReserva
    
    const tr = document.createElement('tr')
    tr.appendChild(tdNome);
    tr.appendChild(tdCpf);
    tr.appendChild(tdQuartoReservado);
    tr.appendChild(tdIdDaReserva);
    
    tableH.appendChild(tr);

    });
btnReserva.addEventListener("click", () => {
    mudarPainel(3);
})
Reservas.forEach(item => {
    const tdId = document.createElement('td')
    const tdHospede = document.createElement('td')
    const tdQuarto = document.createElement('td')
    const tdEstadia = document.createElement('td')
    
    tdId.textContent = item.id
    tdHospede.textContent = item.Hospede
    tdQuarto.textContent = item.Quarto
    tdEstadia.textContent = item.Estadia
    
    const tr = document.createElement('tr')
    tr.appendChild(tdId);
    tr.appendChild(tdHospede);
    tr.appendChild(tdQuarto);
    tr.appendChild(tdEstadia);

    tableR.appendChild(tr);
})
btnCadastrarHospede.addEventListener("click", () => {
    mudarPainel(4);
})
btnCadastrarReserva.addEventListener("click", () => {
    let cadastro = 0;
    Reservas.forEach(item => {
        cadastro++;
    });
    idReservaR.value = cadastro + 1;
    mudarPainel(5);
})
btnSalvarR.addEventListener("click", () => {
    const verificarQuarto = Reservas.find(item => {
        return item.Quarto == quartoReserva.value
    })

    if ( !verificarQuarto && nomeHospedeReserva.value != '' && quartoReserva.value != '' && estadiaReserva.value != ''){
        Reservas.push({
            "id": idReservaR.value,
            "Hospede": nomeHospedeReserva.value,
            "Quarto": quartoReserva.value,
            "Estadia": estadiaReserva.value
        })
        console.log(Reservas)
        const tdId = document.createElement('td')
        const tdHospede = document.createElement('td')
        const tdQuarto = document.createElement('td')
        const tdEstadia = document.createElement('td')
    
        tdId.textContent = idReservaR.value;
        tdHospede.textContent = nomeHospedeReserva.value;
        tdQuarto.textContent = quartoReserva.value;
        tdEstadia.textContent = estadiaReserva.value;
    
        const tr = document.createElement('tr')
        tr.appendChild(tdId);
        tr.appendChild(tdHospede);
        tr.appendChild(tdQuarto);
        tr.appendChild(tdEstadia);

        tableR.appendChild(tr);

        idReservaR.value++;
        nomeHospedeReserva.value = ''
        quartoReserva.value = ''
        estadiaReserva.value = ''
    } else if (verificarQuarto){
        alert("Este quarto já está ocupado!")
    } else (
        alert("Preencha todos os campos corretamente!")
    )
})
btnSalvarH.addEventListener("click", () => {
    const conferirHospede = hospedes.find(item => {
        return item.cpf == cpfHospede.value
    })
    
    if (!conferirHospede && nomeHospede.value != '' && cpfHospede != '' && quartoHospede != '' && idReserva != '' ) {
        hospedes.push({
            "nome": nomeHospede.value,
            "cpf": cpfHospede.value,
            "quartoReservado" : quartoHospede.value,
            "idDaReserva": idReserva.value
        })
        
        const tdNome = document.createElement('td')
        const tdCpf = document.createElement('td')
        const tdQuartoReservado = document.createElement('td')
        const tdIdDaReserva = document.createElement('td')
        ""
        tdNome.textContent = nomeHospede.value
        tdCpf.textContent = cpfHospede.value
        tdQuartoReservado.textContent = quartoHospede.value
        tdIdDaReserva.textContent = idReserva.value
        
        const tr = document.createElement('tr')
        tr.appendChild(tdNome);
        tr.appendChild(tdCpf);
        tr.appendChild(tdQuartoReservado);
        tr.appendChild(tdIdDaReserva);
        
        tableH.appendChild(tr);

        nomeHospede.value = '';
        cpfHospede.value = '';
        quartoHospede.value = '';
        idReserva.value = '';
    } else if (conferirHospede) {
        alert("CPF já cadastrado!")
    } else {
        alert("Preencha todos os campos corretamente!'")
    }
})