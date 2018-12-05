<template>
    <div>
        <nav>
            <router-link class="spacing"
                         v-for="routes in links" 
                         v-bind:key="routes.id"
                         :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() { 
        return { 
            links: [ 
                { 
                    id: 0,
                    text: 'Home', 
                    page: '/Home' 
                },
                { 
                    id: 1,
                    text: 'Notice', 
                    page: '/Notice' 
                },
                { 
                    id: 2,
                    text: 'Projects', 
                    page: '/Projects' 
                },
                { 
                    id: 3,
                    text: 'Gallery', 
                    page: '/Gallery' 
                },
                { 
                    id: 4,
                    text: 'QNA', 
                    page: '/QNA' 
                }
                
            ] 
        } 
    }
}
</script>

<style scoped>
.spacing {
    margin-right: 50px;
}
nav {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
}
</style>