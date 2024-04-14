<template>
    <div  class="speakers" v-if="speakersList.length > 0">
        <div v-for="speaker in speakersToDisplay" :key="speaker">
            <div class="speakers__item">
                <img src="../assets/avatar.png"/>
                <div class="speakers__data">
                    <span class="speakers__name">{{speaker.name}}</span>
                    <span class="speakers__prof">{{speaker.prof}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            speakersList: {
                type: Array
            },
            currentIndex: 0
        }
    },
    props: {
        speakersNames: {
            type: String
        },
        photo_url: {
            type: String
        }
    },
    methods: {
        parseSpeakers(names) {
            const list = names.split(';');
            this.speakersList = list.map(item => {
                return {
                    name: item.split('/')[0],
                    prof: item.split('/')[1]
                }
            });
        }
    },
    computed: {
        speakersToDisplay() {
            if (this.speakersList.length <= 2) {
                return this.speakersList
            } else {
                return [
                    this.speakersList[this.currentIndex % this.speakersList.length],
                    this.speakersList[(this.currentIndex + 1) % this.speakersList.length]
                ]
            }
        }
    },
    mounted() {
        if (this.speakersNames) {
            this.parseSpeakers(this.speakersNames);
        }

        if (this.speakersList.length > 2) {
            if (this.speakersList.length === 3){
                setInterval(() => {this.currentIndex += 1}, 10000)
            } else {
                setInterval(() => {this.currentIndex += 2}, 10000)
            }

        }
    }
}
</script>

<style scoped>
.speakers {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}

.speakers__data {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    justify-content: space-around;
}

.speakers__item {
    display: flex;
    width: 45%;
    gap: 5px;
    height: 160px;
    margin-right: 10px;
}
img {
    height: 100%;
}
.speakers__name {
    font-size: 2em;
}
.speakers__prof {
    font-size: 1em;
}

@media (max-width: 800px) {
    .speakers__item {
        height: 100px;
    }
    .speakers__name {
        font-size: 1em;
    }
    .speakers__prof {
        font-size: 0.7em;
    }
}

@media (max-width: 500px) {
    .speakers__item {
        height: 60px;
    }
}
</style>
