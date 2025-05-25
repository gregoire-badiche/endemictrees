window.onload = function() {
    const lineCtx = document.getElementById('stat-line').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'Conifère',
                    data: [2, 4, 7, 10, 12],
                    fill: false,
                    borderColor: 'rgba(56, 102, 65, 1)',
                    backgroundColor: 'rgba(56, 102, 65, 0.3)',
                    tension: 0.3
                },
                {
                    label: 'Feuillu',
                    data: [3, 5, 6, 8, 11],
                    fill: false,
                    borderColor: 'rgba(106, 153, 78, 1)',
                    backgroundColor: 'rgba(106, 153, 78, 0.3)',
                    tension: 0.3
                },
                {
                    label: 'Non spécifié',
                    data: [0, 0, 1, 2, 2],
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
            labels: ['Chêne', 'Hêtre', 'Sapin', 'Autres'],
            datasets: [{
                label: 'Répartition des espèces',
                data: [10, 15, 8, 7],
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
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{
                label: "Nombre d'arbres plantés",
                data: [12, 19, 3, 5],
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
};
