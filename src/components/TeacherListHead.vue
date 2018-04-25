<template>
	<div class="teacher-list-head">
		<img src="../assets/logo.png" class="teacher-list-head-img">
		<div class="teacher-list-head-mes">
			<p v-text="msg.name"></p>
			<p v-text="msg.pronum"></p>
			<p v-text="msg.total"></p>
		</div>
		<div :class="{'teacher-list-head-btn--assist':isAssist,'teacher-list-head-btn':true}">详情</div>
	</div>
</template>
<script>
  export default {
  	name: 'TeacherList',
  	props: ['msg','isAssist'],
  	data () {
  		return {
  		}
  	},
  	mounted () {
  		
  	}
  }
</script>
<style lang="less">
	.teacher-list-head {
		position:relative;
		background:#fff;
		padding:15px;
		height:66px;
		display:flex;
		.teacher-list-head-img {
			width:66px;
			height:66px;
			display:block;
			border-radius:50%;
		}
		.teacher-list-head-mes {
			display:flex;
			flex-direction: column;
			justify-content: center;
			margin-left:10px;
			p:nth-child(1) {
				font-size: 14px;
				color: #444444;
				letter-spacing: 0;
				line-height: 24px;
			}
			p:nth-child(2) {
				font-size: 12px;
				color: #999999;
				line-height: 14px;
			}
			p:nth-child(3) {
				height:16px;
				line-height:14px;
				box-sizing: border-box;
				margin-top:6px;
				padding:0 5px;
				border: 1px solid #CCCCCC;
				border-radius: 3px;
				font-size: 10px;
				color: #999999;
				text-align: center;
			}
		}
		.teacher-list-head-btn {
			position:absolute;
			top:50%;
			right:15px;
			transform:translateY(-50%);
			width:80px;
			height:36px;
			border-radius:18px;
			background-color:#FF6969;
			text-align:center;
			line-height:36px;
			color:#FFFFFF;
			font-size:14px;
		}
		.teacher-list-head-btn--assist {
			background: #65CBF7;
		}
	}

		
</style>