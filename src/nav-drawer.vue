<template>
  <v-navigation-drawer v-model="newDrawer" :width="270" :rail="newRail">
    <v-list :items="items" nav :lines="false"></v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAppStore } from './store'
  import { storeToRefs } from 'pinia'

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
</script>

