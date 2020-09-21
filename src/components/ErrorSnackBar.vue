<template>
  <div id="error-bar">
    <div v-if="error">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      error: false,
      msg: "",
    };
  },
};
</script>
