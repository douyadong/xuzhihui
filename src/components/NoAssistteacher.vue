<template>
	<div class="no-assist">
		<img class="no-assist-img" src="../assets/logo.png">
		<p class="no-assist-text">您当前没有辅修课老师</p>
		<router-link class="no-assist-goto" to="/">立刻去约课吧</router-link>
	</div>
</template>
<script>
	export default {}
</script>
<style lang="less">
	.no-assist {
		background:#fff;
		display:flex;
		flex-direction: column;
		align-items: center;
		.no-assist-img {
			margin-top:25px;
			width:60px;
			height:60px;
		}
		.no-assist-text {
			font-size: 14px;
			color: #999999;
			text-align: center;
			line-height: 18px;
			margin-top:10px;
		}
		.no-assist-goto {
			margin:25px 0 35px;
			width:159px;
			height:40px;
			line-height:40px;
			text-align:center;
			font-size: 14px;
			color: #FF6969;;
			border:1px solid #FF6969;
			border-radius:20px;
			text-decoration: none;
		}
	}
</style>