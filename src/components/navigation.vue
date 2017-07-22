<style>
	.navigation {
		position: static;
		padding: 0 6px;
		z-index: 20;
		height: 45px;
		background: linear-gradient(to bottom,#086ed5,#055db5);
		border-bottom: 1px solid #044e97;
		box-shadow: 0 1px 2px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.15);
	}
	.top-link-logo {
		float: left;
		width: 61px;
		height: 100%;
		color: #fff;
		text-indent: -99999px;
	    background-size: 61px 30px;
		background-repeat: no-repeat;
		background-position: 0 8px;
		background-image: url(../assets/top-logo.png);
	}
	.top-add-question {
		float: right;
		width: 62px;
		height: 32px;
		margin-top: 7px;
		line-height: 30px;
		border: 1px solid #045bb2;
		border-radius: 4px;
		background: linear-gradient(to bottom,#0e7bef,#0d73da);
		box-shadow: 0 1px 2px rgba(0,0,0,.05), inset 0 1px 1px rgba(255,255,255,.15);
		color: #fff;
		font-size: 15px;
		text-align: center;
		text-shadow: 0 1px 1px rgba(0,0,0,.12);
		outline: 0;
		cursor: pointer;
		transition: all .4s cubic-bezier(0.645,.045,.355,1);
	}
	.top-search {
		position: absolute;
		left: 65px;
		right: 73px;
		margin: 7px 0 0 12px;
		height: 33px;
		transition: all .4s cubic-bezier(0.645,.045,.355,1);
	}
	.is-search.top-search {
		right: 6px;
	}
	.top-search-input {
		position: absolute;
		padding: 7px 30px 7px 10px; 
		box-sizing: border-box;
		width: 100%;
		color: #49525c;
		font-size: 14px;
		line-height: 17px;
		background: #e1eaf2;
		border: 1px solid #045bb2;
		border-radius: 4px;
		box-shadow: inset 0 1px 3px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1);
		outline: 0;
		transition: all .2s ease-in-out;
	}
	.top-search-input:focus {
		background-color: #fff;
		box-shadow: inset 0 1px 3px rgba(0,0,0,.2), 0 1px 15px rgba(255,255,255,.3);
	}
	.top-search-button {
		position: absolute;
		top: 0;
		right: 0;
		width: 30px;
		box-shadow: none;
		border: 0;
		outline: 0;
		background: 0 0;
		height: 100%;
	}
	.top-search-icon {
		display: inline-block;
		vertical-align: middle;
		background-image: url(../assets/top-search.png);
		background-size: 97px 94px;
		background-position: -82px -17px;
		width: 15px;
		height: 15px;
	}
	.top-nav {
		background: rgba(0,0,0,.05);
		border-bottom: 1px solid #e1e1e1;
		min-height: 36px;
	}
	.top-nav-ul {
		margin: 0;
		padding: 0;
		line-height: 36px;
		box-shadow: 0 0 1px rgba(0,0,0,.04)
	}
	.top-nav-li {
		position: relative;
		float: left;
		width: 20%;
		list-style: none;
	}
	.top-nav-li .current {
		box-shadow: inset 0 0 2px rgba(0,0,0,.12);
	}
	.top-nav-link {
		color: #222;
		line-height: 36px;
		width: auto;
		height: auto;
		text-align: center;
		display: block;
		font-size: 15px;
	}
	.top-nav-li .mobi-arrow {
		position: absolute;
		top: 16px;
		right: 7px;
		border: 4px solid transparent;
		border-top-color: #c1c1c1;
	}
	.open .mobi-arrow {
		top: 12px;
		border-top-color: transparent;
		border-bottom-color: #c1c1c1;
	}
</style>
<template>
<div>
	<div class="navigation">
		<a href="/" class="top-link-logo"></a>
		<button class="top-add-question">提问</button>
		<div class="top-search" :class="{'is-search': isSearch}" @click="showSearch">
			<input type="hidden" name="type" value="content">
			<input type="text" class="top-search-input" id="q" name="q" autocomplete="off" value="" maxlength="100" placeholder="搜索你感兴趣的内容..." role="combobox" aria-autocomplete="list" @blur="hiddenSearch">
			<button type="submit" class="top-search-button">
				<span class="top-search-icon"></span>
			</button>
		</div>
	</div>
	<div class="top-nav">
		<ul class="top-nav-ul clearfix">
			<li class="top-nav-li" id="top-nav-home">
				<router-link to="/index" active-class="current" class="top-nav-link">首页</router-link>
			</li>
			<li class="top-nav-li" id="top-nav-topic">
				<router-link to="/topic" active-class="current" class="top-nav-link">话题</router-link>
			</li>
			<li class="top-nav-li" id="top-nav-explore">
				<router-link to="/explore" active-class="current" class="top-nav-link">发现</router-link>
			</li>
			<li class="top-nav-li" id="top-nav-notice" :class="{'open': rotateArrow1}" @click="toggleNotice">
				<a class="top-nav-link">
					<span class="mobi-arrow"></span>
					消息
					<span class="top-nav-count" style="display: none;">0</span>
				</a>
			</li>
			<li class="top-nav-li" id="top-nav-profile" :class="{'open': rotateArrow2}" @click="toggleProfile">
				<a class="top-nav-link">
					<span class="mobi-arrow"></span>
					我
				</a>
			</li>
		</ul>
	</div>
	<notice v-show="showNotice"></notice>
	<dropdown :status="showProfile" v-on:slideUp="toggleProfile"></dropdown>
</div>
</template>
<script>
	export default {
		data() {
			return {
				isSearch: false,
				rotateArrow1: false,
				rotateArrow2: false,
				showNotice: false,
				showProfile: false
			}
		},
		mounted() {

		},
		methods: {
			// 搜索框切换
			showSearch() {
				this.isSearch = true
			},
			hiddenSearch() {
				this.isSearch = false
			},
			// 消息提示
			toggleNotice() {
				this.rotateArrow1 = !this.rotateArrow1
				this.showNotice = !this.showNotice
				this.showNotice && this.showProfile ? this.toggleProfile() : ''
			},
			// 个人中心
			toggleProfile() {
				this.rotateArrow2 = !this.rotateArrow2
				this.showProfile = !this.showProfile
				this.showProfile && this.showNotice ? this.toggleNotice() : ''
			},
			resetStyle() {
				this.showNotice ? this.toggleNotice() : ''
				this.showProfile ? this.toggleProfile() : ''
			}
		},
		watch: {
			'$route': 'resetStyle'
		}
	}
</script>