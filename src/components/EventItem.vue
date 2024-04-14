<template>
    <section class="event">
        <div :class="{
            'event__wrapper': true,
            'active': isActive
        }">
            <div class="event__progress">
                <progress
                    v-if="isActive"
                    class="event__progress"
                    :value="this.progressValue"
                    max="100"
                ></progress>
            </div>
            <div class="event__time">
                <h2 v-if="this.event.__2">
                    {{ this.event.__2 }} - {{calcEndingTime(this.event.__2, this.event.__3)}}
                </h2>
            </div>
            <speakers-slider v-if="this.event.__4 !== '-'" :speakers-names="this.event.__4"/>
            <div class="event__title">
                {{this.event.__1}}
            </div>
            <div class="event__description" v-if="this.event.__6 !== '-'">
                <div>{{this.event.__6}}</div>
                <div>{{this.event.__7}}</div>
                <div>{{this.event.__8}}</div>
            </div>
        </div>
    </section>
</template>

<script>
import SpeakersSlider from "@/components/SpeakersSlider";

export default {
    components: {
        SpeakersSlider
    },
    data(){
        return {
            isActive: false,
            progressValue: '0'
        }
    },
    props: {
        event: {
            type: Object,
            required: true
        },
    },
    methods: {
        calcEndingTime(beginTime, duration){
            let hours = Number(beginTime.split(':')[0]) + Math.floor(Number(duration) / 60);
            let minutes = Number(beginTime.split(':')[1]) + (Number(duration) % 60);
            if (minutes >= 60) {
                hours++;
                minutes %= 60;
            }

            return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        },
        updateActive() {
            if (this.event.__2) {
                const currentTime = Number(
                    `
                    ${ new Date().getHours() * 60 + new Date().getMinutes() }
                    `
                );
                const start = Number(this.event.__2.split(':')[0]) * 60 + Number(this.event.__2.split(':')[1]);
                let end = this.calcEndingTime(this.event.__2, this.event.__3).split(':');
                end = Number(end[0]) * 60 + Number(end[1]);
                this.isActive = currentTime >= start && end > currentTime;
                if (this.isActive) {
                    this.progressValue = (currentTime - start) / ((end - start) / 100 );
                }
            }

        }
    },
    mounted() {
        this.updateActive();
        setInterval(() => {
                this.updateActive();
            }, 30000
        )
    }
}
</script>

<style scoped>

.event {
    position: relative;
}
.event::before {
    content: url('../assets/h_line.svg');
    position: absolute;
    left: -7.25vw;
    top: 20%;
}

.event__wrapper {
    position: relative;
    border: 1px solid;
    border-radius: 32px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #eeeeee;
    color: #5E5E5E;
    overflow: auto;
}
.event__progress {
    height: 14px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

progress {
    background: inherit;
}
progress::-webkit-progress-bar {
    background: #47525A;
}
progress::-webkit-progress-value {
    background: #A6D447;
}
progress::-moz-progress-bar {
    background: #47525A;

}

.event__time {
    display: flex;
    font-size: 1.5em;
}

.event__title {
    font-size: 1.5em;
}

.event__description {
    display: flex;
    width: 100%;
    gap: 1em;
    flex-wrap: wrap;
}
.event__description div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 8px;
    font-size: 0.8em;
    padding: 12px 20px;
}
.event__description div:nth-child(1) {
    background-color: #848484;
    color: #eeeeee;
}
.active {
    background: #214B77;
    color: white;
}

.active .event__description div {
    border: 1px solid #A6D447;
}

.active .event__description div:nth-child(1) {
    background-color: #A6D447;
    color: #214B77;
}
</style>
