<template>
  <div v-if="error">{{msg}}</div>
</template>

<script>
export default {
  data: function() {
    return {
      error: false,
      msg: ""
    }
  }
}
</script>