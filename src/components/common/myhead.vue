<template>
	<div class="myhead">
		<div class="logo-area">
			<img src="../../assets/logo.png">
			<span>系统内容</span>
		</div>
		<div class="history-nav">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style scoped lang="less">
	.myhead {
		position:fixed;
		top:0;
		left:0;
		z-index:100;
		background:#118de4;
		height:60px;
		width:100%;
		display:flex;
		justify-content: flex-start;
		// align-items:center;
		.logo-area {
			background:#409EFF;
			height:100%;
			display:flex;
			align-items:center;
			img {
				width:auto;
				height:40px;
				vertical-align: middle;
			}
			span {
				font-size:30px;
				line-height:30px;
				vertical-align: middle;
				margin-right:20px;
			}
		}
	}
</style>