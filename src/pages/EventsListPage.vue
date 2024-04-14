<template>
    <main class="main" @wheel.prevent @touchmove.prevent>
        <event-item  v-for="(event, index) in events" :event="event" :key="index"/>
    </main>
</template>

<script>
import {getEvents} from "@/services/getEvents";
import EventItem from "@/components/EventItem";
export default {
    components: {EventItem},
    data() {
        return {
            events: {
                type: Array
            },
            observer: null,
        }
    },
    methods: {
        scrollToActive() {
            const activeElement = document.querySelector('.active');
            if (activeElement) {
                document.querySelector('main')
                    .scroll(0, activeElement.getBoundingClientRect().top - 140);
            }
        },
        startObserver() {
            const target = document.querySelector('.header__cloak');
            const config = {
                childList: true,
            };
            this.observer = new MutationObserver(this.scrollToActive);
            this.observer.observe(target, config);
        }
    },
    mounted() {
        getEvents(this.$route.params.id)
            .then((data) => {this.events = data.splice(1, data.length - 1)});
        this.startObserver();
        setInterval(() => {
            getEvents(this.$route.params.id)
                .then((data) => {
                    this.events = data.splice(1, data.length - 1)
                });
        }, 300000);
    },
    beforeUnmount() {
        this.observer.disconnect();
    }
}
</script>

<style scoped>
.main {
    width: 100%;
    padding: 0 6vw 0 10vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 70vh;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.main::before {
    content: url('../assets/v_line.svg');
    height: 100vh;
    position: absolute;
    left: 4vw;
    top: -40px;
}

.main::-webkit-scrollbar {
    display: none;
}
</style>
