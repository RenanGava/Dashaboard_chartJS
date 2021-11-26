const ctx = document.getElementById('myChart').getContext('2d');
const ctxRadar = document.getElementById('myChart1').getContext('2d');
const ctxRosca = document.getElementById('myChart2').getContext('2d');
const ctxRosca1 = document.getElementById('myChart3').getContext('2d');
const ctxBars = document.getElementById('myChart4').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: '<- All accesses of the year',
            data: [12, 22, 6, 5, 22, 3,12, 19, 3, 8, 9, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)'
            ],
            borderColor: [
                'rgb(247, 0, 255)',
                'rgb(0, 255, 242)'
            ],
            borderWidth: 1,
            tension: 0.4,
            fill: true
        }]
    },
});

const myChart1 = new Chart(ctxRadar, {
    type: 'radar',
    data: {
        labels: ['1º Trimestre', '2º Trimestre', '3º Trimestre'],
        datasets: [{
            label: '<- New Users',
            data: [282, 187, 33],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
                'rgb(0,0, 242)'
            ],
            borderWidth: 1,
        }]
    },
});

const myChart3 = new Chart(ctxRosca, {
    type: 'doughnut',
    data: {
        labels:['Dolar($)', 'Real(R$)', 'Euro(€)'],
        datasets:[{
            label:'Coins',
            data: [5.60, 2.60, 6.90],
            backgroundColor: [
                'aquamarine',
                'rgb(255, 145, 0)',
                'rgb(247, 0, 255)'
            ]
        }]
    }
})

const myChart4 = new Chart(ctxRosca1, {
    type: 'doughnut',
    data: {
        labels:['Dolar($)', 'Real(R$)', 'Euro(€)'],
        datasets:[{
            label:'Coins',
            data: [5.60, 2.60, 6.90],
            backgroundColor: [
                'rgb(247, 0, 255)',
                'rgb(255, 145, 0)',
                'aquamarine'
            ]
        }]
    }
})

const myChart5 = new Chart(ctxBars, {
    type: 'bar',
    data: {
        labels:['Dolar($)', 'Real(R$)', 'Euro(€)'],
        datasets:[{
            label:'% Yield For Year',
            data: [67, 31, 83, 100],
            backgroundColor: [
                'rgb(247, 0, 255, 0.5)',
                'rgb(255, 145, 0, 0.5)',
                'rgb(0, 255, 242, 0.2)'
            ],
            borderColor: [
                'rgb(247, 0, 255)',
                'rgb(255, 145, 0)',
                'aquamarine'
            ],
            borderWidth: 2
        }]
    }
})
