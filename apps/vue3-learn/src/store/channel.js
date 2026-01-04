import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useChannelStore = defineStore('channel', () => {
    const channelList = ref([])
    const myMsg = ref('this is default msg')

    async function getList() {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        channelList.value = res.data.data.channels
    }

    return {
        channelList,
        getList,
        myMsg
    }
},{
    // persist: true,
    persist: {
        key: 'custom-channel',
        paths: ['myMsg']
    }
})