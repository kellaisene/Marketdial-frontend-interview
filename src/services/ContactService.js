import api from '@/api'

export default {
  getContacts: () => api().get(`/contacts`)
}
