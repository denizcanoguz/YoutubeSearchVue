new Vue({
  el: "#app",
  data: {
    query: "",
    items: []
  },
  methods: {
    async doSearch() {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.query}&maxResults=50&key=AIzaSyB5nZGfceT6p2P4nIzFoEdh_d4HboUvJgI`)
      const responseJson = await response.json()
      this.items = responseJson.items
    }
  }
})