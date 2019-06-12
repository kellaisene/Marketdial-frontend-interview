<template>
  <div class="contact-list-container">
    <div>
      <ContactDetails/>
    </div>
    <div class="contact-list">
      <ul>
        <li
          v-for="contact in contacts"
          :key="contact.id"
          :style="boldFavoriteContact(contact.is_favorite)"
          class="item"
        >{{ contact.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'
import ContactDetails from '@/components/ContactDetails'

export default {
  name: 'ContactList',
  components: {
    ContactDetails
  },
  data () {
    return {
      contacts: []
    }
  },
  beforeMount () {
    this.getContacts()
  },
  methods: {
    async getContacts () {
      const { data } = await ContactService.getContacts()
      console.log('Favorites', data)
      this.contacts = data.contacts
    },
    boldFavoriteContact (favorite) {
      if (favorite) {
        return { fontWeight: 700 }
      }
    }
  }
}
</script>

<style scoped lang="sass">
.contact-list
  display: flex
  justify-content: center
  flex-direction: column
  width: 30%
  margin: auto
  border: 1px solid #d1d5da
ul
  list-style-type: none
  padding: 0

li
  padding: 10px
li:nth-child(odd)
  background-color: #eaf1f8
li:hover
  text-decoration: underline
  cursor: pointer
</style>
