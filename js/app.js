const API = "http://localhost:8080/consultas";

const formulario = document.getElementById("formConsulta");
const tabela = document.getElementById("tabelaConsultas");

window.onload = () => {
    listarConsultas();
};

formulario.addEventListener("submit", async (event) => {

    event.preventDefault(); // Evita que o formulário seja enviado de forma tradicional

    const consulta = {
        paciente: document.getElementById("paciente").value,
        especialidade: document.getElementById("especialidade").value,
        medico: document.getElementById("medico").value,
        dataConsulta: document.getElementById("dataConsulta").value,
        horaConsulta: document.getElementById("horaConsulta").value + ":00"
    };

    try {

        // Envia a requisição POST para a API com os dados da consulta
        const resposta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(consulta)
        });

        // Verifica se a resposta da API foi bem-sucedida
        if (!resposta.ok) {

            const erro = await resposta.json();

            mostrarErro(erro);

            return;
        }
        // se der ceto, limpa o formulário e atualiza a lista de consultas
        formulario.reset();

        listarConsultas();

    } catch (erro) {

        alert("Não foi possível conectar à API.");

    }

});

async function listarConsultas() {

    const resposta = await fetch(API);

    const consultas = await resposta.json();

    tabela.innerHTML = "";

    consultas.forEach(consulta => {

        tabela.innerHTML += `

        <tr>

            <td>${consulta.paciente}</td>

            <td>${consulta.especialidade}</td>

            <td>${consulta.medico}</td>

            <td>${formatarData(consulta.dataConsulta)}</td>

            <td>${formatarHora(consulta.horaConsulta)}</td>

            <td>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="excluirConsulta(${consulta.id})">

                    Excluir

                </button>

            </td>

        </tr>

        `;

    });

}

async function excluirConsulta(id) {

    if (!confirm("Deseja realmente excluir esta consulta?")) {
        return;
    }

    const resposta = await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    if (resposta.ok) {

        listarConsultas();

    }

}

function formatarData(data) {

    return new Date(data + "T00:00:00").toLocaleDateString("pt-BR");

}

function formatarHora(hora) {

    return hora.substring(0, 5);

}

function mostrarErro(erro) {

    if (erro.campos) {

        let mensagem = "";

        for (const campo in erro.campos) {

            mensagem += `${erro.campos[campo]}\n`;

        }

        alert(mensagem);

        return;
    }

    alert(erro.mensagem);

}