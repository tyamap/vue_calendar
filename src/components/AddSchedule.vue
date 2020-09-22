<template>
  <V-dialog
    persistent
    v-model="addSchedule"
    max-width="444"
    max-height="333"
    @click:outside="closeDialog"
  >
    <V-card @click.native.stop>
      <V-card-title></V-card-title>
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
        <V-btn @click="closeDialog" outlined>CANCEL</V-btn>
        <V-spacer></V-spacer>
        <V-btn @click="saveSchedule" color="cyan" dark>SAVE</V-btn>
      </V-card-actions>
    </V-card>
  </V-dialog>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: mapGetters(["addSchedule"]),
  methods: {
    saveSchedule: function() {
      if (this.schedule.title === "") {
        this.schedule.title = "Untitled";
      }
      const schedule = this.schedule;
      this.$store.dispatch("addSchedule", schedule);
      this.closeDialog();
    },
    closeDialog: function() {
      this.$store.dispatch("toggleAddSchedule");
    },
  },
};
</script>
