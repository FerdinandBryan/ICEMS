function filterNotifs(filter) {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => chip.classList.remove('active'));
    event.target.classList.add('active');

    // Filter logic would go here
    console.log('Filtering by:', filter);
}

function markAllRead() {
    const cards = document.querySelectorAll('.notif-card.unread');
    cards.forEach(card => {
        card.classList.remove('unread');
        card.classList.add('read');
    });
    alert('All notifications marked as read');
}

function clearAll() {
    if (confirm('Are you sure you want to clear all notifications?')) {
        document.getElementById('notifList').innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🔔</div>
                        <h2>No Notifications</h2>
                        <p>You're all caught up! Notifications will appear here when you have updates</p>
                    </div>
                `;
    }
}

function markAsRead(element) {
    element.closest('.notif-card').classList.remove('unread');
    element.closest('.notif-card').classList.add('read');
}

// Sample notification data (would normally come from server)
const sampleNotifications = [
    {
        type: 'success',
        title: 'Payment Verified',
        message: 'Your payment for Student Council Fee has been verified and approved.',
        time: '2 hours ago',
        category: 'payments',
        unread: true
    },
    {
        type: 'info',
        title: 'New Event Available',
        message: 'Campus Orientation Day is now open for registration. Don\'t miss out!',
        time: '5 hours ago',
        category: 'events',
        unread: true
    },
    {
        type: 'warning',
        title: 'Clearance Deadline Reminder',
        message: 'You have 10 days left to complete your clearance requirements.',
        time: '1 day ago',
        category: 'clearance',
        unread: false
    }
];