document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.getAttribute("href").startsWith("#")) return;

        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });
});
