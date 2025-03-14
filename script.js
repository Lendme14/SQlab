console.log("Page is loading...");
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
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