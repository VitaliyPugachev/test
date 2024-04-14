<template>
    <header class="header">
        <h1 class="header__title">{{this.title}}</h1>
        <div class="header__cloak">{{this.time}}</div>
    </header>
</template>

<script>

const days = [
    'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'
];

export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            time: ''
        }
    },
    methods: {
        updateTime() {
            const date = new Date();
            const minutes = date.getMinutes();
            this.time = `${days[date.getDay()]}, ${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`;
        }
    },
    mounted() {
        this.updateTime();
        setInterval(() => this.updateTime(), 30000);
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4vh 6vw 4vh 10vw;
    font-weight: 700;
    background: white;
    height: 130px;
}
.header__title {
    font-size: 2.5em;
}

.header__cloak {
    font-size: 1.5em;
    font-weight: bold;
}
</style>
