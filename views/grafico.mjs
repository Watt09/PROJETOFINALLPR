     const lucrocusto = [
        { mes: 'Janeiro', lucro_bruto: 10000, fp: 2000, cmat: 1500, cman: 1000 },
        { mes: 'Fevereiro', lucro_bruto: 12000, fp: 2500, cmat: 1700, cman: 1300 },
        { mes: 'Março', lucro_bruto: 11000, fp: 2200, cmat: 1600, cman: 1200 },
        { mes: 'Abril', lucro_bruto: 11500, fp: 2300, cmat: 1650, cman: 1250 },
        { mes: 'Maio', lucro_bruto: 12500, fp: 2600, cmat: 1800, cman: 1400 },
        { mes: 'Junho', lucro_bruto: 13000, fp: 2700, cmat: 1850, cman: 1450 },
        { mes: 'Julho', lucro_bruto: 14000, fp: 3000, cmat: 2000, cman: 1500 },
        { mes: 'Agosto', lucro_bruto: 13500, fp: 2900, cmat: 1950, cman: 1450 },
        { mes: 'Setembro', lucro_bruto: 12500, fp: 2600, cmat: 1800, cman: 1400 },
        { mes: 'Outubro', lucro_bruto: 15000, fp: 3200, cmat: 2100, cman: 1600 },
        { mes: 'Novembro', lucro_bruto: 15500, fp: 3300, cmat: 2150, cman: 1650 },
        { mes: 'Dezembro', lucro_bruto: 16000, fp: 3400, cmat: 2200, cman: 1700 },
    ];

    // Processar os dados
    const meses = lucrocusto.map(item => item.mes);
    const lucroBruto = lucrocusto.map(item => item.lucro_bruto);
    const custos = lucrocusto.map(item => item.fp + item.cmat + item.cman);
    const lucroLiquido = lucrocusto.map(item => 
        item.lucro_bruto - (item.fp + item.cmat + item.cman)
    );

    // Configuração do gráfico
    const ctx = document.getElementById('lucroChart').getContext('2d');
    const lucroChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [
                {
                    label: 'Lucro Bruto (LB)',
                    data: lucroBruto,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Custos',
                    data: custos,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Lucro Líquido (LL)',
                    data: lucroLiquido,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });