<template>
    <footer class="footer">
        <img src="../assets/qr1.svg" class="footer__qr"/>
        <img src="../assets/qr2.svg" class="footer__qr"/>
        <p>отсканируйте qr-код, чтобы скачать полную программу конференции</p>
        <img src="../assets/logo.svg" class="footer__logo"/>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4vh 6vw 4vh 10vw;
    height: 14vh;
    width: 100%;
    background: white;
}

.footer__qr {
    height: 12vh;
}

.footer__logo {
    height: 12vh;
}

.footer p {
    display: inline-block;
    font-size: 1em;
    max-width: 30%;
}

@media (max-width: 650px) {
    .footer__qr {
        height: 12vw;
    }

    .footer__logo {
        height: 12vw;
    }
    .footer p {
        font-size: 2vmin;
        max-width: 25%;
    }
}
</style>
