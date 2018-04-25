<template>
	<div class="teacher-list-time">
		<ul>
			<li v-for="v in timeList" v-text="v"></li>
		</ul>
	</div>
</template>
<script>
  export default {
  	name: 'TeacherList',
  	props: ['timeList'],
  	data () {
  		return {
  			
  		}
  	}
  }
</script>
<style lang="less">
	.teacher-list-time {
		padding:5px 15px 20px;
		background:#fff;
		ul {
			display:flex;
			flex-wrap: wrap;
			li {
				margin-top:10px;
				width:165px;
				height:24px;
				line-height:24px;
				background:#F4F4F4;
				border-radius:3px;
				text-align:center;
				font-size: 12px;
				color: #666666;
				&:nth-child(2n) {
					margin-left:15px;
				}
			}
		}
	}
		
</style>