<style>
	.agreement-tip {
		margin-top: 21px;
		font-size: 13px;
		text-align: center;
		color: #999;
	}
	.agreement-tip a {
		color: #698ebf;
	}
</style>
<template>
	<div class="view view-sign-up">
		<!-- <form class="zu-side-login-box" action="/register/email" id="sign-form-1" autocomplete="off" method="POST" novalidate="novalidate"> -->
			<input type="password" hidden=""> 
			<input type="hidden" name="_xsrf" value="ffc62a9c8cc42ca08f6d0078fa4e459d">
			<div class="group-inputs">
				<div class="name input-wrapper">
					<input required="" type="text" name="fullname" aria-label="姓名" placeholder="姓名">
				</div>
				<div class="email input-wrapper">
					<input required="" type="text" class="account" name="phone_num" aria-label="手机号" placeholder="手机号">
				</div>
				<div class="verification input-wrapper">
					<input required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）" autocomplete="off">
				</div>
			</div>
			<div class="button-wrapper command">
				<button class="sign-button submit" type="submit">注册知乎</button>
			</div>
		<!-- </form> -->
		<p class="agreement-tip">点击「注册」按钮，即代表你同意<a href="/terms" target="_blank">《知乎协议》</a></p>
	</div>
</template>