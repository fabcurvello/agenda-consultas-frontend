# Front-end do Sistema de Agendamento de Consultas

> Repositório didático: interface web desenvolvida em sala de aula para consumir uma API REST.

## Sobre o projeto

Interface web do **Sistema de Agendamento de Consultas**. Consome a API [api-agenda-consultas-jpa](https://github.com/fabcurvello/api-agenda-consultas-jpa) para cadastrar, listar e excluir consultas, mostrando ao usuário as mensagens de erro devolvidas pelo back-end.

## Contexto acadêmico

Exercício aplicado em sala de aula, usado como prática guiada com os alunos.

## O que a página faz

- Formulário para agendar consulta (paciente, especialidade, médico, data e horário).
- Listagem das consultas agendadas.
- Exclusão de consultas.
- Exibição das mensagens de validação e de regra de negócio retornadas pela API.

## Conceitos trabalhados em aula

- Consumo de API REST com `fetch` (GET, POST e DELETE)
- Envio e recebimento de JSON
- Manipulação do DOM com JavaScript
- Integração front-end + back-end e CORS

## Tecnologias

- **HTML5**
- **CSS3** e **Bootstrap**
- **JavaScript** (Fetch API)

## Como executar

1. Suba a API [api-agenda-consultas-jpa](https://github.com/fabcurvello/api-agenda-consultas-jpa) (porta 8080).
2. Clone este repositório e abra `index.html` com a extensão **Live Server** do VS Code (porta 5500, já liberada no CORS da API).

```bash
git clone https://github.com/fabcurvello/agenda-consultas-frontend.git
```

## Veja também

- [api-agenda-consultas-jpa](https://github.com/fabcurvello/api-agenda-consultas-jpa): back-end em Spring Boot consumido por este front-end.

## Autor

**Fabricio Curvello**: professor de desenvolvimento de software no SENAI-RJ (desde 1997) e em faculdades do grupo Ânima Educação (IBMR e UNA).

- GitHub: [github.com/fabcurvello](https://github.com/fabcurvello)
- LinkedIn: [linkedin.com/in/fabriciocurvello](https://www.linkedin.com/in/fabriciocurvello)
- YouTube: [@fabriciocurvello](https://www.youtube.com/@fabriciocurvello)
