export const state = () => ({
  orders: [{ directionFrom: '', directionTo: '', price: null }],
})
export const mutations = {}

export const actions = {
  async createOrder({ commit }, { payload }) {
    await this.$axios.$post(
      'https://us-central1-aul-taxi-server.cloudfunctions.net/app/orders',
      {
        payload,
      }
    )
  },
}
