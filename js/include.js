console.log("include.js loaded");

// header / footer / closingはhtmlを部品化
async function includeHTML(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    const container = document.getElementById(id);
    container.innerHTML = html;

    // replaceBase(container);
}

function initNavToggle() {
    const btn = document.querySelector(".nav-toggle");

    if (!btn) return;

    btn.addEventListener("click", () => {
    document.body.classList.toggle("is-nav-open");
    });
}

async function init() {
    // replaceBase(document);
    await includeHTML("header", "page_components/header.html");
    await includeHTML("footer", "page_components/footer.html");
    await includeHTML("closing", "page_components/closing.html");
    initNavToggle();
}

init();

