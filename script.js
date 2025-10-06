document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const mobileToggleBtn = document.querySelector('.mobile-sidebar-toggle');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (window.innerWidth < 900) {
    sidebar.classList.add('collapsed');
  }

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });

  const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
  const attendanceChart = new Chart(attendanceCtx, {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [12, 88],
        backgroundColor: ['#20c997', '#ff4d4d'],
        borderWidth: 1
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  const cgpaCtx = document.getElementById('cgpaChart').getContext('2d');
  const cgpaChart = new Chart(cgpaCtx, {
    type: 'line',
    data: {
      labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'],
      datasets: [{
        label: 'CGPA',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#ffcc00',
        backgroundColor: 'rgba(255, 204, 0, 0.3)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#ffcc00'
      }]
    },
    options: {
      scales: {
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
});

