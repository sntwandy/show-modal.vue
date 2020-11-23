Vue.component("modal", {
  props: ["view"],
  methods: {
    closeModal() {
      this.$emit("change-view");
    },
  },
  template: `
    <div v-bind:style="{display: view}" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>title</h3>
          <div>body</div>
          <footer>
            <button v-on:click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,
});

new Vue({
  el: "#root",
  data() {
    return {
      view: "",
    };
  },
  methods: {
    openModal() {
      this.view = "table";
    },
    closeModal() {
      this.view = "none";
    },
  },
});
