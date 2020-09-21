<template>
  <div id="add-schedule" @click="closeCard">
    <V-card @click.native.stop>
      <V-card-text>
        <V-form>
          <V-text-field
            label="Title"
            autofocus
            v-model="schedule.title"
          ></V-text-field>
          <V-text-field
            label="Datetime"
            prepend-icon="mdi-calendar"
            type="date"
            dense
            v-model="schedule.date"
          ></V-text-field>
          <V-text-field
            label="Location"
            prepend-icon="mdi-google-maps"
            dense
            v-model="schedule.location"
          ></V-text-field>
          <V-text-field
            label="Note"
            prepend-icon="mdi-format-align-left"
            dense
            v-model="schedule.note"
          ></V-text-field>
        </V-form>
      </V-card-text>
      <V-card-actions>
        <V-btn @click="closeCard" outlined>CANCEL</V-btn>
        <V-spacer></V-spacer>
        <V-btn @click="saveSchedule" color="cyan" dark>SAVE</V-btn>
      </V-card-actions>
    </V-card>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      schedule: {
        title: "",
        date: "",
        location: "",
        note: "",
      },
    };
  },
  mounted: function() {
    const year = this.$store.getters.year;
    const month = this.$store.getters.month;
    const date = this.$store.getters.date;
    this.schedule.date =
      year + "-" + ("0" + month).slice(-2) + "-" + ("0" + date).slice(-2);
  },
  // computed: mapGetters(["year", "month", "date"]),
  methods: {
    saveSchedule: function() {
      if (this.schedule.title === "") {
        this.schedule.title = "Untitled";
      }
      const s = this.schedule;
      this.$store.dispatch("addSchedule", {
        title: s.title,
        date: s.date,
        location: s.location,
        note: s.note,
      });
      this.closeCard();
    },
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
