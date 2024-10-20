const LIST = [
    {
        id: 1,
        link: 'https://github.com/KiraOliveira/desafioViradaQualidade',
        name: 'Testes: Desafio Virada da Qualidade',
        bio: 'Desafio realizado pela Iterasys'
    },
    {
        id: 2,
        link: 'https://github.com/KiraOliveira/ApiCypress',
        name: 'Testes: Api Cypress',
        bio: 'Segundo desafio do Gama Academy, desenvolvimento de uma Landing Page de um evento usando HTML, CSS e JavaScript.'
    },
    {
        id: 3,
        link: 'https://github.com/KiraOliveira/cypressK6Api',
        name: 'Testes: Cypress com K6 e Api',
        bio: 'Realizado a transformação digital da ONG Moradias Sabará, com HTML, CSS e JavaScript.'
    },
    {
        id: 4,
        link: 'https://github.com/KiraOliveira/cypressApiQazando',
        name: 'Testes: Cypress Api - Qazando',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    },
    {
        id: 5,
        link: 'https://github.com/KiraOliveira/practiceCypress',
        name: 'Testes: Practice com Cypress',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    },
    {
        id: 6,
        link: 'https://github.com/KiraOliveira/autCypressFront',
        name: 'Testes: Aut Cypress Front',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    },
    {
        id: 7,
        link: 'https://github.com/KiraOliveira/robot_basico',
        name: 'Testes: Robot Framework Básico',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    }
   
]

const AppTests = new Vue({
    el: '#appTests',
    data: {
        title: 'Testes',
        userName: 'Gislaine Oliveira',
        tests: LIST

    }
})