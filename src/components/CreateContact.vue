<template>
  <div class="create-contact">
    <form v-on:submit.prevent="addContact(name, email, phone, favorite)">
      <h2>Add Contact</h2>
      <p>
        <input type="text" placeholder="Name" required>
        {{ name }}
      </p>
      <p>
        <input type="text" placeholder="Email">
        {{ email }}
      </p>
      <p>
        <input type="text" placeholder="Phone Number">
        {{ phone }}
      </p>
      <p>
        <input type="checkbox">
        Is this a Favorite Contact?
        {{ favorite }}
      </p>
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
import ContactService from "@/services/ContactService";

export default {
  name: "CreateContact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      favorite: ""
    };
  },
  methods: {
    async addContact(name, email, phone, favorite) {
      ContactService.addContact(name, email, phone, favorite);

      this.name = "";
      this.email = "";
      this.phone = "";
      this.favorite = "";
    }
  }
};
</script>

<style scoped lang="sass">
.create-contact
	display: flex
	justify-content: center
	border: 1px solid #d1d5da
	padding-bottom: 15px
	width: 30%
	margin: auto
</style>
