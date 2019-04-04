<template>
    <v-app>
        <v-toolbar app dark class="primary">
            <v-toolbar-title v-text="'Ich Learn Deutsh'"></v-toolbar-title>
            <v-btn flat :href="linkLesson">{{Math.floor(timeLesson / 60).toString()+':' + (timeLesson % 60).toString()}}</v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat>Button 1</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                timeLesson: '1100',

            }
        },
        computed: {
            linkLesson (){
                let link = 'https://www.youtube.com/watch?v=xodyM-xXrl4&list=PLu_62Q68DvTqmSjoY-3uPtJAXmT5WWMy1&index=2&t='
                return link + this.timeLesson+'s'
            }
        }
    }
</script>

<style scoped>

</style>