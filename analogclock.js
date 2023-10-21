// Wrap your JavaScript code in a function to ensure it runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const hour = document.querySelector('.hour');
    const min = document.querySelector('.min');
    const sec = document.querySelector('.sec');

    setInterval(() => {
        const d = new Date();
        const htime = d.getHours();
        const mtime = d.getMinutes();
        const stime = d.getSeconds();
        const hrotation = 30 * htime + mtime / 2;
        const mrotation = 6 * mtime;
        const srotation = 6 * stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        min.style.transform = `rotate(${mrotation}deg)`;
        sec.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
});
