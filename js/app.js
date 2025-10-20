// Dashboard App - Main JavaScript File

// Simulated data
const dashboardData = {
    metrics: {
        users: 12547,
        revenue: 98432,
        sessions: 3421,
        conversion: 3.2
    },
    activities: [
        { icon: '👤', title: 'New user registered', time: '2 minutes ago' },
        { icon: '💳', title: 'Payment received: $249', time: '15 minutes ago' },
        { icon: '📧', title: 'Email campaign sent', time: '1 hour ago' },
        { icon: '🔔', title: 'System notification', time: '2 hours ago' },
        { icon: '⚙️', title: 'Settings updated', time: '3 hours ago' }
    ]
};

// Initialize dashboard on load
document.addEventListener('DOMContentLoaded', () => {
    updateMetrics();
    renderActivityFeed();
    animateNumbers();
});

// Update metric cards
function updateMetrics() {
    document.getElementById('total-users').textContent = formatNumber(dashboardData.metrics.users);
    document.getElementById('revenue').textContent = `$${formatNumber(dashboardData.metrics.revenue)}`;
    document.getElementById('sessions').textContent = formatNumber(dashboardData.metrics.sessions);
    document.getElementById('conversion').textContent = `${dashboardData.metrics.conversion}%`;
}

// Render activity feed
function renderActivityFeed() {
    const feedContainer = document.getElementById('activity-feed');
    
    dashboardData.activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        feedContainer.appendChild(activityItem);
    });
}

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Animate numbers on load
function animateNumbers() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(element => {
        const target = element.textContent;
        const isRevenue = target.includes('$');
        const isPercentage = target.includes('%');
        
        let numericValue = parseInt(target.replace(/[^0-9.]/g, ''));
        let current = 0;
        const increment = numericValue / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            
            if (isRevenue) {
                element.textContent = `$${formatNumber(displayValue)}`;
            } else if (isPercentage) {
                element.textContent = `${current.toFixed(1)}%`;
            } else {
                element.textContent = formatNumber(displayValue);
            }
        }, 20);
    });
}

// Simulate real-time updates (optional)
function startRealTimeUpdates() {
    setInterval(() => {
        // Simulate data changes
        dashboardData.metrics.sessions += Math.floor(Math.random() * 10) - 5;
        dashboardData.metrics.conversion = (Math.random() * 5 + 1).toFixed(1);
        
        updateMetrics();
    }, 5000);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatNumber,
        updateMetrics,
        renderActivityFeed
    };
}

// Optimize race condition in validation module - 2025-10-18 14:05:28
# Improved readability
data = [
    item
    for item in collection
    if item.is_valid()
]

// Polish dependency in utility functions to reduce latency - 2025-10-20 14:54:17
# Modified: 2025-10-20 14:54:17
CONFIG_VALUE = 'new_value'