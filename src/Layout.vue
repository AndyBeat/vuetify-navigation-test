<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" flat height="60">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="changeSidebar"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
      </v-app-bar>

      <nav-drawer></nav-drawer>

      <v-navigation-drawer v-model="newDrawer" :width="270" :rail="newRail" location="right">
        <v-list :items="items" nav :lines="false"></v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size
          screens.
        </v-card-text>
        <v-card-text ref="text" @vue:mounted="init">
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>

  import { ref, onMounted } from 'vue'
  import { useDisplay } from 'vuetify'
  import { useAppStore } from './store'
  import { storeToRefs } from 'pinia'
  import NavDrawer from './nav-drawer.vue'

  const { mobile } = useDisplay()
  const app = useAppStore()
  const items = ref([
    {
      title: 'Foo',
      value: 'foo',
    },
    {
      title: 'Bar',
      value: 'bar',
    },
    {
      title: 'Fizz',
      value: 'fizz',
    },
    {
      title: 'Buzz',
      value: 'buzz',
    },
  ])
  const { newDrawer, newRail } = storeToRefs(useAppStore())
  const changeSidebar = () => {
    if (mobile.value) {
      app.newRail = false
      app.newDrawer = !app.newDrawer
    } else {
      app.newRail = !app.newRail
    }
  }

  const text = ref()
  onMounted(() => {
    // console.log(text.value)
  })
  const init = () => {
    text.value.$el.innerHTML = '222'
    // console.log(text.value)
  }

</script>
