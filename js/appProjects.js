const LIST = [
    {
        id: 1,
        link: 'https://apollomarketingdigital.netlify.com/',
        name: 'Projeto: Show me the Leads',
        bio: 'Primeiro desafio do Gama Academy, desenvolvimento de uma Landing Page para captação de Leads, usando HMTL, CSS e JavaScript.'
    },
    {
        id: 2,
        link: 'https://gera.netlify.com/',
        name: 'Projeto: Show me the Money',
        bio: 'Segundo desafio do Gama Academy, desenvolvimento de uma Landing Page de um evento usando HTML, CSS e JavaScript.'
    },
    {
        id: 3,
        link: 'https://moradiassabara.netlify.com/',
        name: 'Projeto: Transformação Digital',
        bio: 'Realizado a transformação digital da ONG Moradias Sabará, com HTML, CSS e JavaScript.'
    },
    {
        id: 4,
        link: 'https://github.com/KiraOliveira/Consumo-de-Api',
        name: 'Projeto: Consumo de API',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    },
    {
        id: 5,
        link: 'https://nlw-kira-1.netlify.app/',
        name: 'Projeto: Beauty Salon - Rocketseat',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    },
    {
        id: 6,
        link: 'https://starwarskira.netlify.app/',
        name: 'Projeto: Star Wars Lego - QA Ninja',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    },
    {
        id: 7,
        link: 'https://animekowkira.netlify.app/',
        name: 'Projeto: Animes - Rocketseat',
        bio: 'Realizado o consumo de uma Api do Arbnb, usando HTML, CSS e JavaScript.'
    }
   
]















const AppProjects = new Vue({
    el: '#appProjects',
    data: {
        title: 'Projetos',
        userName: 'Gislaine Oliveira',
        projects: LIST

    }
})