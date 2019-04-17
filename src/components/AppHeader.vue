<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`navDrawer${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link :to="'/'" tag="span" style="cursor:pointer">
                <v-toolbar-title v-text="'Ich Learn Deutsh'"></v-toolbar-title>
            </router-link>
            <v-btn
                    flat
                    :href="linkLesson"
                    target="_blank"
            >{{timeLessonM+':' + timeLessonS}}

            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="(item, i) in menuItems"
                        :key="`menuitem${i}`"
                        :to="item.route"
                        flat
                >
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                timeLessonM: 19,
                timeLessonS: 51,
                drawer: false
            }
        },
        computed: {
            linkLesson: function () {
                let link = 'https://www.youtube.com/watch?v=zozB9gEEM0U&list=PLu_62Q68DvTqmSjoY-3uPtJAXmT5WWMy1&index=2&t='
                return link + (this.timeLessonM * 60 + this.timeLessonS) + 's'
            },
            menuItems() {
                return [
                    {
                        icon: 'visibility',
                        title: 'Читать',
                        route: '/books'
                    },
                    {
                        icon: 'extension',
                        title: 'Учить слова',
                        route: '/words'
                    },
                    {
                        icon: 'account_circle',
                        title: 'Мой кабинет',
                        route: '/profile'
                    },
                    {
                        icon: 'exit_to_app',
                        title: 'Выйти',
                        route: '/logout'
                    },
                    {
                        icon: 'input',
                        title: 'Войти',
                        route: '/signin'
                    },
                    {
                        icon: 'lock_open',
                        title: 'Зарегистрироваться',
                        route: '/signup'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>