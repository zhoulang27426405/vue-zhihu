<style>
	.top-nav-dropdown-pop {
		position: absolute;
		right: 0;
		width: 140px;
		z-index: 11;
		box-shadow: 0 1px 1px rgba(0,0,0,.2);
		border-radius: 0 0 6px 6px;
	}
	.top-nav-dropdown {
		display: block;
		overflow: hidden;
		background: #f4f4f4;
		margin: 0;
		padding: 0;
	}
	.top-nav-dropdown li {
		float: none;
		text-indent: 1em;
		position: relative;
		height: 45px;
		background-color: #f4f4f4;
		overflow: hidden;
		border: 1px solid #eee;
		border-width: 0 1px 1px 0;
		box-sizing: border-box;
	}
	.top-nav-dropdown li a {
		display: block;
		width: 100%;
		height: 45px;
		line-height: 43px;
		color: #000;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.top-nav-dropdown-pop .slide-up {
		background: #f4f4f4 url(../assets/arrow-icon.png) no-repeat center;
		background-size: 11px 7px;
		display: block;
		width: 100%;
		height: 36px;
		border-radius: 0 0 6px 6px;
		border: 0;
		outline: 0;
	}
</style>
<template>
	<div class="top-nav-dropdown-pop" v-show="status">
		<ul class="top-nav-dropdown" id="top-nav-profile-dropdown">
			<li>
				<a href="/people/zhou-lang-19-88">
					我的主页
				</a>
			</li>
			<li>
				<a href="/inbox">
					私信
				</a>
			</li>
			<li>
				<a href="/settings">
					设置
				</a>
			</li>
			<li>
				<a href="/logout">
					退出
				</a>
			</li>
		</ul>
		<button class="slide-up" @click="slideUp"></button>
	</div>
</template>
<script>
	export default {
		props: {
			status: Boolean
		},
		data() {
			return {

			}
		},
		methods: {
			slideUp() {
				this.$emit('slideUp');
			}
		}
	}
</script>