<template>
  <section id="header">
    <Header />
  </section>
  <section id="body">

    <Body />
  </section>
  <section id="footer">
    <Footer />
  </section>
</template>

<script setup lang="ts">
import Header from '@/components/Home/Header.vue'
import Body from '@/components/Home/Body.vue'
import Footer from '@/components/Home/Footer.vue'
</script>

<style>
#header {
  background-color: #003b95;
}

#footer {
  position: absolute;
  max-height: 200px;
  bottom: 0;
  width: 100%;
}

.v-container {
  max-width: 1140px !important;
}
</style>