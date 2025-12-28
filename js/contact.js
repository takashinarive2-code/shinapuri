console.log("contact.js loaded");
// 連続送信防止
const KEY = 'contact_submitted';
const LIMIT = 30 * 1000; // 30秒

document.querySelector('form').addEventListener('submit', e => {
    const last = localStorage.getItem(KEY);

    if (last && Date.now() - last < LIMIT) {
        e.preventDefault();
        alert('30秒以内に再送信はできません');
        return;
    }

    localStorage.setItem(KEY, Date.now());
});

// 送信後のリダイレクト先設定、ローカル環境時とgithub pages環境時でパスを切り替え
(function () {
    const nextInput = document.getElementById('next-url');

    // 現在のURL情報
    const { origin, pathname } = location;
    console.log("origin:", origin);
    console.log("pathname:", pathname);

    // contact.html があるディレクトリを取得
    const basePath = pathname.replace(/\/[^/]*$/, '/');

    nextInput.value = origin + basePath + '/page_components/thanks.html';
})();