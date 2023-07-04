<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="$event => counterState.addCount()">
      add
    </button>
    <button v-on:click="$event => counterState.removeCount()">
      remove
    </button>
  </div>
</template>

<script setup>
  const counterState = useCounter()
  const { count } = counterState
</script>