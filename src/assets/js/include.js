// header / footer / closingはhtmlを部品化
async function includeHTML(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

function initNavToggle() {
    const btn = document.querySelector(".nav-toggle");

    if (!btn) return;

    btn.addEventListener("click", () => {
    document.body.classList.toggle("is-nav-open");
    });
}

// GitHub Pages対応用のベースパス設定
const BASE = location.hostname.includes("github.io")
    ? "/shinapuri/"
    : "";

async function init() {
    await includeHTML("header", `${BASE}src/pages/includes/header.html`);
    await includeHTML("footer", `${BASE}src/pages/includes/footer.html`);
    await includeHTML("closing", `${BASE}src/pages/includes/closing.html`);
    initNavToggle();
}

init();

