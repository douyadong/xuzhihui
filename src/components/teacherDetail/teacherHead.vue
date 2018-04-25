<template>
	<div class="teacher-head">
		<img class="teacher-head-avatar" src="@/assets/logo.png">
		<div class="teacher-head-mes">
			<p v-text="brief.name"></p>
			<p v-text="brief.pronum"></p>
		</div>
		<img class="teacher-head-video" src="@/assets/video.png">
	</div>
</template>
<script>
	export default {
		props:['brief']
	}
</script>
<style lang="less">
	.teacher-head {
		position:relative;
		display:flex;
		background:#fff;
		padding:20px 20px 20px 15px;
		margin-bottom:10px;
		height:60px;
		.teacher-head-avatar {
			width:60px;
			height:60px;
			border-radius:50%;
		}
		.teacher-head-mes {
			display:flex;
			flex-direction: column;
			justify-content: center;
			margin-left:10px;
			height:100%;
			p:first-child {
				font-size: 18px;
				color: #262626;
				line-height:25px;
			}
			p:last-child {
				margin-top:2px;
				font-size: 12px;
				color: #999999;
				line-height: 18px;
			}
		}
		.teacher-head-video {
			position:absolute;
			top:50%;
			right:20px;
			transform:translateY(-50%);
			width:28px;
			height:28px;
		}
	}
</style>