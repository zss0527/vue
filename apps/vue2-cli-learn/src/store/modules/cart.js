import axios from "axios";

export default {
    namespaced: true,

    state () {
        return {
            cartList: [],
        }
    },
    mutations: {
        setCartList(state, payload) {
            state.cartList = payload
        },
        updateCount(state, payload) {
            const goods = state.cartList.find(item => item.id === payload.id)
            goods.count = payload.newCount
        }
    },
    actions: {
        async getCartList(context) {
            const res = await axios.get('http://localhost:3000/cart')
            console.log('res.data: ',res.data)
            context.commit('setCartList', res.data)
        },

        async updateCountAction(context, cartItem) {
            const res = await axios.patch(`http://localhost:3000/cart/${cartItem.id}`, {
                count: cartItem.newCount
            })
            console.log('res: ',res)
            context.commit('updateCount', cartItem)
        }
    },
    getters: {
        totalCount (state) {
            return state.cartList.reduce((pre, item) => pre + item.count, 0)
        },

        totalPrice (state) {
            return state.cartList.reduce((pre, item) => pre + item.price * item.count, 0)
        }
    }
}