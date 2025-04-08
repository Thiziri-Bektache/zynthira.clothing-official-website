document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    menuBtn.addEventListener('click', () => {
        sidebar.style.left = '0';
        overlay.style.display = 'block';
    });
    const closeSidebar = () => {
        sidebar.style.left = '-250px';
        overlay.style.display = 'none';
    };

    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
});