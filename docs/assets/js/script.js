// Toggle Mobile Sidebar
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Copy Code Functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const pre = button.parentElement.nextElementSibling;
        const code = pre.querySelector('code').innerText;
        
        navigator.clipboard.writeText(code).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        });
    });
});