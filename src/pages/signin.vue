<template>
	<div class="view view-sign-in">
			<div class="group-inputs">
				<div class="account input-wrapper">
					<input type="text" name="account" aria-label="手机号或邮箱" placeholder="手机号或邮箱" required="">
				</div>
				<div class="verification input-wrapper">
					<input type="password" name="password" aria-label="密码" placeholder="密码" required="">
				</div>
			</div>
			<div class="button-wrapper command">
				<button class="sign-button submit" type="submit" @click="login">登陆</button>
			</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login() {
				this.$auth.login(this, 'zlei', '11223344');
			}
		}
	}
</script>
