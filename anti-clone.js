/*
 * anti-clone.js
 * Nugrohos Music - Yulian Nugrohos Group
 *
 * Verifikasi sederhana sebelum mengizinkan akses ke aplikasi utama
 * (nugrohos_music/index.html). Lihat README.md dan LICENSE untuk
 * ketentuan penggunaan dan penjualan kembali produk ini.
 */

(function () {
    var statusEl = document.getElementById('gate-status');
    var enterBtn = document.getElementById('gate-enter');

    function isPageFramed() {
        try {
            return window.self !== window.top;
        } catch (err) {
            return true;
        }
    }

    function unlock() {
        if (statusEl) statusEl.textContent = 'Halaman terverifikasi.';
        if (enterBtn) enterBtn.classList.add('is-ready');
    }

    function block() {
        if (statusEl) {
            statusEl.textContent = 'Verifikasi gagal, halaman tidak dapat diakses dari sini.';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (isPageFramed()) {
            block();
        } else {
            unlock();
        }
    });
})();
