function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const linkTiktokGua = `<a href="https://vt.tiktok.com/ZSJXQj7JX/" target="_blank">tiktok</a>`

    const msg1 = `<p class="animation mb-0 text-truncate">Follow ${linkTiktokGua} gw ya</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed gua dibawah ya</p>`;

    let arrayEl = [msg1, msg2];
    let arrayMax = 2;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}
