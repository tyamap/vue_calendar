<template>
  <div id="add-schedule" @click="closeCard">
    <V-card @click.native.stop>
      <V-card-text>
        <V-form>
          <V-text-field label="Title" autofocus></V-text-field>
          <V-text-field
            label="Datetime"
            prepend-icon="mdi-calendar"
            dense
            :value="year + '-' + month + '-' + date"
          ></V-text-field>
          <V-text-field
            label="Location"
            prepend-icon="mdi-google-maps"
            dense
          ></V-text-field>
          <V-text-field
            label="Note"
            prepend-icon="mdi-format-align-left"
            dense
          ></V-text-field>
        </V-form>
      </V-card-text>
      <V-card-actions>
        <V-btn @click="closeCard" outlined>CANCEL</V-btn>
        <V-spacer></V-spacer>
        <V-btn @click="closeCard" color="cyan" dark>SAVE</V-btn>
      </V-card-actions>
    </V-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["year", "month", "date"]),
  methods: {
    closeCard: function() {
      this.$store.dispatch("toggleAddSchedule");
    },
  },
};
</script>

<style scoped>
#add-schedule {
  z-index: 10;
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-card {
  z-index: 100;
  padding: 0 10px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  max-height: 310px;
  max-width: 444px;
  overflow-y: auto;
}
</style>
