<style>
	.index-feed-list {
		position: relative;
		margin: 10px;
		color: #222;
	}
	.feed-item {
		padding: 10px 0;
	}
	.feed-item+.feed-item{
		border-top: 1px solid #eee;
	}
	.avatar, .avatar a {
		float: right;
		font-size: 0;
	}
	.avatar img {
		width: 20px;
		height: 20px;
		border-radius: 2px;
	}
	.feed-source{
		color: #999;
	}
	.feed-source a {
		color: #222;
	}
	.feed-title {
		font-size: 16px;
		font-weight: 700;
		line-height: 1.7;
	}
	.entry-body {
		margin-top: 2px;
	}
	.auth-info {
		margin-bottom: 2px;
	}
	.auth-info a {
		color: #222;
		font-weight: 700;
	}
	.auth-info span {
		color: #999;
	}
	.item-text img{
		float: left;
		width: 200px;
		height: 112px;
		border-radius: 4px;
		margin: 1px 10px 5px 0;
	}
	.item-text .toggle-expand {
		display: inline-block;
		padding: 0 3px;
		border-radius: 2px;
		font-size: .9em;
	}
	.item-vote-count {
		display: inline-block;
		margin-right: 6px;
		padding: 0 5px;
		font-size: 14px;
		color: #698ebf;
		border-radius: 3px;
		border: 0;
		background: #eff6fa;
		text-align: center;
		overflow: hidden;
		font-weight: 500;
		line-height: 22px;
	}
	.zg-icon {
		background-image: url(../assets/sprites.png);
		background-size: 308px 250px;
	}
	.arrow {
		display: inline-block;
		margin-left: 3px;
		width: 5px;
		height: 7px;
		vertical-align: 1px;
		background-position: 0 -169px;
	}
</style>
<template>
	<div>
		<div class="index-feed-list">
			<div class="feed-item" v-for="n in 2">
				<div class="avatar">
					<a>
						<img src="https://pic4.zhimg.com/v2-b79da6d4d51b9c889cf9e2e7c392697f_m.jpg">
					</a>
				</div>
				<div class="feed-main">
					<div class="feed-content">
						<h2 class="feed-title">
							<a href="" class="question-link">
								喜欢奶酪又甜又咸的味道，有什么好吃的奶酪点心么？
							</a>
						</h2>
						<div class="entry-body">
							<div class="auth-info">
								<a>ENJOY 精选美食电商</a>
								<span>ENJOY 精选美食电商</span>
							</div>
							<div class="item-text">
								<img src="https://pic4.zhimg.com/v2-673eb12b01a3c2da2c274ac6dc90a4fb_200x112.jpg">
芝士控看到这个问题内心崩溃啊...太多太多太多值得推荐的了！（拿我最喜欢的图镇楼！这样的瀑布芝士，能不好吃吗？？！）光芝士种类就可以写一本百科全书，而不同芝士做出来的食物更是不胜枚举。讲真...随便什么食物里面加点芝士，都不会难吃...不过题主既…
								<a class="toggle-expand">显示全部</a>
							</div>
						</div>
						<div class="feed-meta">
							<a class="item-vote-count">
								<span>1674</span>
								<i class="arrow zg-icon"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>