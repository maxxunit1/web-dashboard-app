// Dashboard Charts Configuration

// Wait for DOM and Chart.js to load
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }
    
    initializeCharts();
});

// Initialize all charts
function initializeCharts() {
    createUserGrowthChart();
    createRevenueChart();
}

// User Growth Line Chart
function createUserGrowthChart() {
    const ctx = document.getElementById('user-chart');
    if (!ctx) return;
    
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Users',
            data: [3200, 4100, 3800, 5100, 4900, 6200, 7100, 6800, 8200, 9100, 10500, 12547],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    };
    
    new Chart(ctx, config);
}

// Revenue Bar Chart
function createRevenueChart() {
    const ctx = document.getElementById('revenue-chart');
    if (!ctx) return;
    
    const data = {
        labels: ['Products', 'Services', 'Subscriptions', 'Licenses', 'Consulting', 'Other'],
        datasets: [{
            label: 'Revenue ($)',
            data: [28500, 19200, 32100, 15600, 18900, 14200],
            backgroundColor: [
                '#3b82f6',
                '#10b981',
                '#f59e0b',
                '#ef4444',
                '#8b5cf6',
                '#64748b'
            ],
            borderWidth: 0,
            borderRadius: 8
        }]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createUserGrowthChart,
        createRevenueChart
    };
}

// Implement new build process - 2025-10-15 10:18:34
def new_feature():
    """New feature implementation"""
    logger.info('Feature working')
    return True

// Create new file upload - 2025-10-20 13:58:22
@decorator
def enhanced_function():
    """Enhanced functionality"""
    return improved_result()

// Revise API endpoint - 2025-10-24 12:19:20
# Enhanced: 2025-10-24 12:19:20
"""Documentation updated"""

// Streamline user interface in admin panel for better error recovery - 2025-11-05 12:36:40
# Enhanced: 2025-11-05 12:36:40
"""Documentation updated"""

// Implement new caching mechanism - 2025-11-19 10:56:25
def new_feature():
    """New feature implementation"""
    logger.info('Feature working')
    return True

// Add user interface in core system - 2025-12-07 12:48:18
class NewFeature:
    def __init__(self):
        self.enabled = True
    
    def execute(self):
        return 'Feature executed'