// Configuration commune
const mois = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'];

// 1. Graphique du Solde (Bleu/Cyan)
const zoneSolde = document.getElementById('graphiqueSolde').getContext('2d');
new Chart(zoneSolde, {
    type: 'line',
    data: {
        labels: mois,
        datasets: [{
            label: 'Solde Bancaire (€)',
            data: [0, 430, 730, 480, 480, 460],
            borderColor: '#4bc0c0',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.3
        }]
    }
});

// 2. Graphique des Revenus (Vert)
const zoneRevenus = document.getElementById('graphiqueRevenus').getContext('2d');
new Chart(zoneRevenus, {
    type: 'bar',
    data: {
        labels: mois,
        datasets: [{
            label: 'Revenus (€)',
            data: [0, 430, 300, 0, 0, 0],
            borderColor: '#198754',
            backgroundColor: 'rgba(25, 135, 84, 0.5)',
            borderWidth: 1
        }]
    }
});

// 3. Graphique des Dépenses (Rouge)
const zoneDepenses = document.getElementById('graphiqueDepenses').getContext('2d');
new Chart(zoneDepenses, {
    type: 'bar',
    data: {
        labels: mois,
        datasets: [{
            label: 'Dépenses (€)',
            data: [0, 0, 0, 250, 0, 20],
            borderColor: '#dc3545',
            backgroundColor: 'rgba(220, 53, 69, 0.5)',
            borderWidth: 1
        }]
    }
});