import Vue from 'vue'


const login=function login(url,params) {
    this.$api.post(url, params);
}

export default {login}
