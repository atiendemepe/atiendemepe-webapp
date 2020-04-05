export default {
  namespaced: true,
  state: {
    restaurant: null,
    menu: null,
  },
  getters: {
    info(state) {
      return state.restaurant ? state.restaurant : {};
    },
    menu(state) {
      return state.menu ? state.menu : {};
    }
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu
    },
    setRestaurant(state, restaurant) {
      state.restaurant = restaurant
    },
  },
  actions: {
    loadRestaurantInfo({ commit }, { restaurantId }) {
      // TODO: query service for restaurant data by id
      const data = {
        id: restaurantId,
        name: 'Bembos',
        hours: '09:00 - 22:00'
      }
      commit('setRestaurant', data)
    },
    async loadRestaurantMenuInfo({ commit }, { restaurantId }) {
      const data = {
        id: restaurantId,
        categories: ['Promociones', 'Hamburguesas', 'Loncheritas'],
        categoryDetails: {
          'Promociones': [{
            id: 1,
            name: 'Clásica',
            description: 'Clásica Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price: 13.9
          }, {
            id: 2,
            name: 'Cheese',
            description: 'Cheese Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price: 14.9
          }, {
            id: 3,
            name: 'Royal + Cheese',
            description: 'Royal Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price:25.9
          }, {
            id: 4,
            name: 'A lo pobre + Cheese',
            description: 'Royal Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price:25.9
          }, {
            id: 5,
            name: '2 Clásicas',
            description: 'Royal Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price:25.9
          }, {
            id: 6,
            name: '2 Cheese',
            description: 'Royal Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price:25.9
          }, {
            id: 7,
            name: 'Royal + Cheese',
            description: 'Royal Mediana + 1 Papa Mediana + 1 Gaseosa personal.',
            price:25.9
          }],
          'Hamburguesas': [],
          'Loncheritas': [],
        }
      }
      commit('setMenu', data)
    }
  }
}