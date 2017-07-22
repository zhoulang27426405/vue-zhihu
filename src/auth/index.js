export default {
	install(Vue, options) {
		// 添加全局方法
		Vue.prototype.$auth = this
	},
	// 登陆
	login(vm, username, password) {
		let url = '/user/ajax/logintest'
		vm.$http.post(url, {username: username, password: password})
		.then((res) => {
			if (res.body.code == 0) {
				let ret_url = '/'
				vm.$router.replace(ret_url)
			} else {
				console.log(res.body.info);
			}
		}, (res) => {
			console.log('error');
		})
	}
}