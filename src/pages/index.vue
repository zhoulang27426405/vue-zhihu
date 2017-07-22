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
					<div class="feed-source">
						来自话题:
						<a>心理学</a>
					</div>
					<div class="feed-content">
						<h2 class="feed-title">
							<a href="" class="question-link">
								摧毁一个熊孩子有多困难？
							</a>
						</h2>
						<div class="entry-body">
							<div class="auth-info">
								<a>张鑫煜</a>
								<span>学生</span>
							</div>
							<div class="item-text">
								<img src="https://pic2.zhimg.com/v2-cb5b5b5b9d7335bce8d0df5c913da8fd_200x112.jpg">

我家最近养了一个小奶狗，家中已有老狗13年，以上背景。 昨天晚上在我家车库门口坐着乘凉。 有个对面楼的小男孩来，姐姐，这个狗好小啊，我可以抱一下吗？ 我说，可以啊，要轻轻的。 然后他抓过去，使劲一捏，扔地上了!!!! 我擦他哥哥的。 我说，你干嘛啊你…

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