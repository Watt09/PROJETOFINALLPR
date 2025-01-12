import todos from "./rotas/rotas_lucrocustos.js"

async function inicializarGrafico() {
    const dados = await getLista();
    if (!dados) return;

    const ctx = document.getElementById('graficoLucrosCustos').getContext('2d');

    async function buscarDados() {
        try {
            const response = await fetch('https://projetofinallpr.onrender.com/lucrocusto/listar'); 
            const dados = await response.json();

            const labels = dados.map(item => item.mes);
    
            const lucroBruto = dados.map(item => item.lucro_bruto); 
            const custo = dados.map(item => item.fp + item.cmat + item.cman); 
            const lucroLiquido = dados.map(item => item.lucro_liquido); 

        return { labels, lucroBruto, custo, lucroLiquido };
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}


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
