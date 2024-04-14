<template>
    <div class="app">
        <page-header :title="$route.params.id ? `СЕКЦИЯ ${$route.params.id}` : 'Главная страница'"/>
        <div v-if="!$route.params.id" class="links">
            <router-link to="events/1">Секция 1</router-link>
            <router-link to="events/2">Секция 2</router-link>
            <router-link to="events/3">Секция 3</router-link>
            <router-link to="events/4">Секция 4</router-link>
            <router-link to="events/5">Секция 5</router-link>
        </div>
        <router-view></router-view>
        <page-footer/>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
  name: 'App',
  components: {
      PageHeader, PageFooter
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: hidden;
}
.app {
    font-family: "Inter", sans-serif;
    overflow: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: #A6D447;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 30px;
}
</style>
