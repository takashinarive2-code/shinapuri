console.log("main.js loaded");
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');

    if (!navToggle) return;

    navToggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('is-nav-open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
});

// const BASE = location.hostname.endsWith("github.io")
//     ? "/xxxx/"
//     : "";


// const isGitHub = location.hostname.endsWith("github.io");
// const isIndex = location.pathname.includes("index.html");

// const BASE = "";

// if (isGitHub) {
//     BASE = "/shinapuri/";
// } else if (isIndex) {
//     BASE = "/";
// } else {
//     BASE = "";
// }

// function replaceBase(root = document) {
//     const walker = document.createTreeWalker(
//         root,
//         NodeFilter.SHOW_TEXT,
//         null
//     );

//     let node;
//     while ((node = walker.nextNode())) {
//         node.nodeValue = node.nodeValue.replace(/{{BASE}}/g, BASE);
//     }

//     root.querySelectorAll?.("*").forEach(el => {
//         [...el.attributes].forEach(attr => {
//         if (attr.value.includes("")) {
//             el.setAttribute(attr.name, attr.value.replace(/{{BASE}}/g, BASE));
//         }
//         });
//     });
// }
