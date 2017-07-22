<style>
	.index-main-body {
		margin: auto;
		padding: 30px 0 100px;
		width: 300px;
	}
	.index-header {
		text-align: center;
	}
	.header-logo {
		width: 96px;
		height: 44.4px;
		margin: 0 auto;
		background: url(../assets/header-logo.png);
		background-size: contain;
	}
	.header-subtitle {
		margin: 30px 0 20px;
		font-size: 18px;
		font-weight: 400;
		line-height: 1;
	}
	.index-tab-navs {
		margin-bottom: 10px;
		font-size: 18px;
		text-align: center;
	}
	.index-tab-navs a {
		display: inline-block;
		width: 4em;
		line-height: 35px;
		opacity: .7;
		color: inherit;
		text-decoration: none;
	}
	.index-tab-navs a.active {
		opacity: 1;
		color: #0f88eb;
	}


	.view {
		margin: auto;
		width: 300px;
		text-align: left;
		font-size: 14px;
	}
	.group-inputs {
		padding: 1px 0;
		border: 1px solid #d5d5d5;
		border-radius: 3px;
	}
	.input-wrapper {
		position: relative;
		margin: 0;
		overflow: hidden;

	}
	.input-wrapper +.input-wrapper {
		border-top: 1px solid #e8e8e8;
	}
	.input-wrapper input {
		padding: 1em .8em;
		width: 100%;
		box-sizing: border-box;
		line-height: 19px;
		border-radius: 0;
		border: 0;
		outline: 0;
		color: #555;
		background: #fff;
		-webkit-box-shadow: 0 0 0 30px #fff inset;
	}
	.button-wrapper {
		margin-top: 22px;
	}
	.sign-button {
		background: #0f88eb;
		box-shadow: none;
		border: 0;
		border-radius: 3px;
		line-height: 41px;
		color: #fff;
		display: block;
		padding: 0;
		width: 100%;
		font-size: 15px;
		text-align: center;
		text-shadow: 0 1px 1px rgba(0,0,0,.2);
		outline: 0;
		cursor: pointer;
	}
	.active {
		opacity: 1;
		color: #0f88eb;
	}
</style>
<template>
	<div class="index-main">
		<div class="index-main-body">
			<div class="index-header">
				<h1 class="header-logo"></h1>
				<h2 class="header-subtitle">与世界分享你的知识、经验和见解</h2>
			</div>
			<div class="sign-flow">
				<div class="index-tab-navs">
					<router-link to="/login/signin" active-class="active">登陆</router-link>
					<router-link to="/login/signup" active-class="active">注册</router-link>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>