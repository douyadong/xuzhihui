<template>
	<div class="no-main">
		<img class="no-main-img" src="../assets/logo.png">
		<p class="no-main-text">您当前没有主课老师</p>
		<router-link class="no-main-goto" to="/">立刻选老师吧</router-link>
	</div>
</template>
<script>
	export default {}
</script>
<style lang="less">
	.no-main {
		background:#fff;
		display:flex;
		flex-direction: column;
		align-items: center;
		.no-main-img {
			margin-top:25px;
			width:60px;
			height:60px;
		}
		.no-main-text {
			font-size: 14px;
			color: #999999;
			text-align: center;
			line-height: 18px;
			margin-top:10px;
		}
		.no-main-goto {
			margin:25px 0 35px;
			width:159px;
			height:40px;
			line-height:40px;
			text-align:center;
			font-size: 14px;
			color: #FFFFFF;
			background:#FF6969;
			border-radius:20px;
			text-decoration: none;

		}
	}
</style>