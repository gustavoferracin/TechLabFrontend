import { hospedes } from "./clientes.js"
import { Reservas } from "./reservas.js";
import { quartos } from "./quartos.js";


//alterar hospede para conter informações como número de telefone e ID

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
const btnSalvarH = document.querySelector("#btnSalvarHospede");
const tableQuartosS = document.querySelector("#tableQuartosS");
/* consts do form reserva*/
const idReservaR = document.querySelector("#iddaReserva");
const nomeHospedeReserva = document.querySelector("#nomeHospedeReserva");
const quartoReserva = document.querySelector("#quartoReserva");
const estadiaReserva = document.querySelector("#estadiaReserva");
/* consts do form hospede*/
const nomeHospede = document.querySelector("#nomeHospede");
const cpfHospede = document.querySelector("#cpfHospede");
const quartoHospede = document.querySelector("#quartoHospede");
const idReserva = document.querySelector("#idReserva");
let clickado = false


function mudarPainel(p) {
    if (p == 1) {
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden");
        formReserva.classList.add("hidden");
        tableQuartosS.classList.add("hidden");
        tableQuartosS.innerHTML = ''
        clickado=false
    } if (p == 2) {
        tableH.classList.remove("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden")
        formReserva.classList.add("hidden");
        tableQuartosS.classList.add("hidden");
        tableQuartosS.innerHTML = ''
        clickado=false
    } if (p == 3) {
        tableH.classList.add("hidden");
        tableR.classList.remove("hidden");
        formHospede.classList.add("hidden")
        formReserva.classList.add("hidden");
        tableQuartosS.classList.add("hidden");
        tableQuartosS.innerHTML = ''
        clickado=false
    } if (p == 4) {
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.remove("hidden");
        formReserva.classList.add("hidden");
        tableQuartosS.classList.add("hidden");
        tableQuartosS.innerHTML = ''
        clickado=false
    } if (p == 5) {
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden");
        formReserva.classList.remove("hidden");
        tableQuartosS.classList.add("hidden");
        tableQuartosS.innerHTML = ''
        clickado=false
    } if (p == 6) {
        tableH.classList.add("hidden");
        tableR.classList.add("hidden");
        formHospede.classList.add("hidden");
        formReserva.classList.add("hidden");
        tableQuartosS.classList.remove("hidden");
    }
}
btnQuarto.addEventListener("click", () => {
    mudarPainel(6);
    alterarStatus();
    if (clickado == false ) {
        const thTipo = document.createElement('th');
        const thStatus = document.createElement('th');
        const thId = document.createElement('th');
    
        thTipo.textContent = 'Tipo do quarto'
        thStatus.textContent = 'Status'
        thId.textContent = 'ID'
        
        const trTH = document.createElement('tr')
        
        trTH.appendChild(thTipo)
        trTH.appendChild(thStatus)
        trTH.appendChild(thId)
    
        tableQuartosS.appendChild(trTH)
quartos.forEach(item => {
    

    const tdTipo = document.createElement('td')
    const tdStatus = document.createElement('td')
    const tdId = document.createElement('td')

    tdTipo.textContent = item.tipo
    tdStatus.textContent = item.Status
    tdId.textContent = item.ID

    const tr = document.createElement('tr')
    tr.appendChild(tdTipo);
    tr.appendChild(tdStatus);
    tr.appendChild(tdId);

    tableQuartosS.appendChild(tr);
})
}
clickado = true;
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

    if (!verificarQuarto && nomeHospedeReserva.value != '' && quartoReserva.value != '' && estadiaReserva.value != '') {
        Reservas.push({
            "id": parseInt(idReservaR.value),
            "Hospede": nomeHospedeReserva.value,
            "Quarto": parseInt(quartoReserva.value),
            "Estadia": parseInt(estadiaReserva.value)
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

        console.log(Reservas.length)
    } else if (verificarQuarto) {
        alert("Este quarto já está ocupado!")
    } else (
        alert("Preencha todos os campos corretamente!")
    )
})
btnSalvarH.addEventListener("click", () => {
    const conferirHospede = hospedes.find(item => {
        return item.cpf == cpfHospede.value
    })
    const conferirQuarto = Reservas.find(item => {
        return item.Quarto == quartoHospede.value
    })

    if (!conferirHospede && !conferirQuarto && nomeHospede.value != '' && cpfHospede != '' && quartoHospede != '' && idReserva != '') {
        hospedes.push({
            "nome": nomeHospede.value,
            "cpf": cpfHospede.value,
            "quartoReservado": quartoHospede.value,
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
    } else if (conferirQuarto) {
        alert("Este quarto esta ocupado!")
    } else {
        alert("Preencha todos os campos corretamente!'")
    }
})

function alterarStatus() {
    quartos.forEach(item => {
        let controle = 0;
        while (controle < Reservas.length) {
            if (item.ID == Reservas[controle].Quarto ) {
                item.Status = "Ocupado"
            }
            controle++;
        }
    console.log(Reservas.length)
    });
}