document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
