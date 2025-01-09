// Função para alternar entre diferentes seções
function gerenciar(secao) {
    alert(`Você selecionou Gerenciar ${secao.charAt(0).toUpperCase() + secao.slice(1)}.`);
  }
  
  // Dados fictícios para gráficos
  const receitaBruta = [10000, 15000, 20000, 25000];
  const custo = [4000, 6000, 8000, 10000];
  const receitaLiquida = receitaBruta.map((rb, i) => rb - custo[i]);
  
  // Função para criar gráficos
  function criarGrafico(id, label, data, backgroundColor) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label,
            data,
            backgroundColor,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }
  
  // Criar gráficos
  document.addEventListener('DOMContentLoaded', () => {
    criarGrafico('graficoReceitaBruta', 'Receita Bruta', receitaBruta, 'rgba(75, 192, 192, 0.6)');
    criarGrafico('graficoCusto', 'Custo', custo, 'rgba(255, 99, 132, 0.6)');
    criarGrafico('graficoReceitaLiquida', 'Receita Líquida', receitaLiquida, 'rgba(54, 162, 235, 0.6)');
  });
  