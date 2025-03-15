document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('body').addEventListener('touchstart', function(event) {
        let sidebar = document.getElementById('sidebar');
        if (!sidebar.contains(event.target) && sidebar.style.left === '0px') {
            toggleSidebar();
        }
    });

    document.getElementById('toggleButton').addEventListener('click', toggleSidebar);
});

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px" || !sidebar.style.left) {
        sidebar.style.left = "0";
        console.log("Sidebar opened.");
    } else {
        sidebar.style.left = "-250px";
        console.log("Sidebar closed.");
    }
}

window.onload = function() {
    console.log("Page loaded successfully.");
};
