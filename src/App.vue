<template>
  <Layout></Layout>
  <v-layout>
    <v-main>
      <v-card-text ref="text" @vue:mounted="init">
      </v-card-text>
    </v-main>
  </v-layout>
  <v-layout>
    <Suspense>
        <v-card-text ref="text2">
        </v-card-text>
    </Suspense>
  </v-layout>
</template>

<script setup>
  import Layout from './Layout.vue'
  import { ref, onMounted } from 'vue'

  const text = ref()
  const text2 = ref()
  onMounted(() => {
    console.log(text.value)
    console.log(text2.value)
  })
  const init = () => {
    // console.log(text.value)
  }
</script>
