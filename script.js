// function showSidebar(){
//     const change=document.querySelector('.sidebar');
//     change.style.display='flex';
// }
// function hideSidebar(){
//     const change=document.querySelector('.sidebar');
//     change.style.display='none';
// }

let isSidebarOpen = false;

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.body.classList.add('no-scroll');
    isSidebarOpen = true;
    
    // Listen for scroll events
    window.addEventListener('scroll', hideSidebarOnScroll, { passive: true });
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('no-scroll');
    isSidebarOpen = false;

    // Remove scroll event listener
    window.removeEventListener('scroll', hideSidebarOnScroll);
}

function hideSidebarOnScroll() {
    if (isSidebarOpen) {
        hideSidebar();
    }
}

// Ensure to remove the scroll event listener when the page is unloaded
window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', hideSidebarOnScroll);
});

