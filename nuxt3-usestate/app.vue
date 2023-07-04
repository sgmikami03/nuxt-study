<template>
  <div>
    <p>{{ title }}</p>
    <button @click="$event => titleState.changeTitle('Hello Nuxt')">Hello Nuxtに変更する！</button>
  </div>
</template>

<script setup>
  const titleState = useTitle()
  const { title } = titleState
</script>