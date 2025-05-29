window.addEventListener('load', async function() {
    const lineCtx = document.getElementById('stat-line').getContext('2d');

    const data = await fetch('../api/data.json').then(r => r.json()).catch(e => alert('Error while fetching data :('));

    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: data.annual_evolution.years,
            datasets: [
                {
                    label: data.annual_evolution.plots[0].label,
                    data: data.annual_evolution.plots[0].data,
                    fill: false,
                    borderColor: 'rgba(56, 102, 65, 1)',
                    backgroundColor: 'rgba(56, 102, 65, 0.3)',
                    tension: 0.3
                },
                {
                    label: data.annual_evolution.plots[1].label,
                    data: data.annual_evolution.plots[1].data,
                    fill: false,
                    borderColor: 'rgba(106, 153, 78, 1)',
                    backgroundColor: 'rgba(106, 153, 78, 0.3)',
                    tension: 0.3
                },
                {
                    label: data.annual_evolution.plots[2].label,
                    data: data.annual_evolution.plots[2].data,
                    fill: false,
                    borderColor: 'rgba(200, 220, 180, 1)',
                    backgroundColor: 'rgba(200, 220, 180, 0.3)',
                    borderDash: [5, 5],
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255,255,255,0.2)' }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255,255,255,0.2)' }
                }
            }
        }
    });

    const pieCtx = document.getElementById('stat-pie').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: data.species_repartition.labels,
            datasets: [{
                label: 'Species repartition',
                data: data.species_repartition.data,
                backgroundColor: [
                    'rgba(106, 153, 78, 0.7)',
                    'rgba(100, 119, 54, 0.7)',
                    'rgba(56, 102, 65, 0.7)',
                    'rgba(200, 220, 180, 0.7)'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });

    const ctx = document.getElementById('stat-graph').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.trees_planted.labels,
            datasets: [{
                label: "Number of trees planted",
                data: data.trees_planted.data,
                backgroundColor: [
                    'rgba(106, 153, 78, 0.7)',
                    'rgba(100, 119, 54, 0.7)',
                    'rgba(56, 102, 65, 0.7)',
                    'rgba(106, 153, 78, 0.7)'
                ],
                borderColor: [
                    'rgba(56, 102, 65, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255,255,255,0.2)' }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255,255,255,0.2)' }
                }
            }
        }
    });
});
