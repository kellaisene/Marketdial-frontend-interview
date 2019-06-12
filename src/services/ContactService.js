import api from '@/api'

export default {
  getContacts: () => api().get(`/contacts`),
  addContact: (name, email, phone, favorite) => api().post(`/contact`, { name, email, phone, favorite })
}
