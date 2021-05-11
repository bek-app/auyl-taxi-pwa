export const state = () => ({
  orders: [
    {
      directionFrom: '',
      directionTo: '',
      clientPhoneNumber: 11111,
      amount: 64,
    },
  ],
})
export const mutations = {}

export const actions = {
  async createOrder({ commit }, payload) {
    try {
      const resp = await this.$axios.$post('/api/app/orders', payload)
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  },
}
