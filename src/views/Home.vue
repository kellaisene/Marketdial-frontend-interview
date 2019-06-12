<template>
  <div id="home">
    <h1>MarketDial Address Book</h1>
    <CreateContact/>
    <ContactList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList'
import CreateContact from '@/components/CreateContact'

export default {
  name: 'home',
  components: {
    ContactList,
    CreateContact
  }
}
</script>
