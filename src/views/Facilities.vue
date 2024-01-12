<template>
  <div>
    <h1>Data from Server</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>

    <form @submit.prevent="addData">
      <label for="newItem">New Item:</label>
      <input type="text" id="newItem" v-model="newItemName" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [], // To store the fetched data
      newItemName: '', // To store the new item name from the form
    };
  },
  mounted() {
    this.fetchData(); // Fetch initial data when the component is mounted
  },
  methods: {
    fetchData() {
      // Make a GET request to the server endpoint that provides JSON data
      axios.get('http://localhost:3000/test')
        .then(response => {
          // Update the data property with the received JSON data
          this.data = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    addData() {
      // Make a POST request to the server endpoint to add new data
      axios.post('http://localhost:3000/test', {
        name: this.newItemName,
        // Other properties of the new item, if applicable
      })
      .then(response => {
        // Handle the response if needed
        console.log('Data added successfully:', response.data);

        // Optionally, you can fetch the updated data after adding a new item
        this.fetchData();
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
    },
  },
};
</script>

<style>
/* Your component styles go here */
</style>
