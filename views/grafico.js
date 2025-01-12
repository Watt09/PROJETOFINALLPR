import getLista from "./lucrocusto/acessa_dados_lucrocusto.js"

// Função para inicializar o gráfico
async function inicializarGrafico() {
    const dados = await getLista();
    if (!dados) return;

    const ctx = document.getElementById('graficoLucrosCustos').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: 'bar', 'line', etc.
        data: {
            labels: dados.meses, // Supondo que 'meses' seja um array com os nomes dos meses
            datasets: [
                {
                    label: 'Lucros',
                    data: dados.lucros, // Array com os valores dos lucros
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Custos',
                    data: dados.custos, // Array com os valores dos custos
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chama a função para inicializar o gráfico quando a página for carregada
window.onload = inicializarGrafico;
