window.addEventListener("load", () => {
    // preloader 
    document.querySelector(".js-preloader").classList.add('loaded');
    document.querySelector(".js-preloader .js-bg-item").addEventListener("transitionend", () => {
        document.querySelector(".js-preloader").style.display = "none";

        // Infinity AOS
        AOS.init({
            duration: 1200,
            easing: "ease-in-out-cubic",
            once: true
        })
    })

})
// *** Header Menu

function headerMenu() {
    const toggler = document.querySelector(".js-header-toggler");
    const menu = document.querySelector(".js-header-menu");
    const items = menu.querySelectorAll("li");
    const menuToggle = () => {
        menu.classList.toggle("open")
        toggler.classList.toggle("active")
    }
    toggler.addEventListener("click", menuToggle);

    items.forEach((item) => {
        item.querySelector("a").addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                menuToggle()
            }
        })
    })
}
headerMenu()
// ! schedule tabs

function scheduleTabs() {
    const tabs = document.querySelectorAll(".js-schedule-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule-tab.active").classList.remove("active");
            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        });
    });
}
scheduleTabs();

// Splitting
Splitting();