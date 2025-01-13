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
}}


async function inicializarGrafico() {
    const dados = await buscarDados();

    if (!dados) {
        console.error('Nenhum dado encontrado.');
        return;
    }

    // Configuração do gráfico
    new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: dados.labels,
            datasets: [
                {
                    label: 'Lucro Bruto',
                    data: dados.lucroBruto, 
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Custo',
                    data: dados.custo, 
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                },
                {
                    label: 'Lucro Líquido',
                    data: dados.lucroLiquido, 
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Lucro Bruto, Custo e Lucro Líquido' },
            },
        },
    });
}
