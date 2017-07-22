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
								苹果新总部 Apple Park 有哪些亮点？
							</a>
						</h2>
						<div class="entry-body">
							<div class="auth-info">
								<a>好奇心日报</a>
								<span>好奇驱动你的世界</span>
							</div>
							<div class="item-text">
								<img src="https://pic3.zhimg.com/v2-ff91d2fdc7268e0182a132719d08482e_200x112.jpg">
乔布斯发布的最后一个产品，在推迟了两年后终于要上市了。2011 年 6 月 7 日，乔布斯站在库比蒂诺市政厅的一场会议上，发表演讲阐述了苹果要建设新总部的设想。这座大楼被描述为“像一座降落在地表的宇宙飞船”。它由乔布斯亲自参与设计和推进。你能从当时…
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