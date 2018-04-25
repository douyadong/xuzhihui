<template>
	<div class="teacher-times">
		<ul class="teacher-times-day">
			<li v-for="item in courseTimes" v-text="item.day"></li>
		</ul>
		<div class="teacher-times-course">
			<p>请点击选择主课时间</p>
			<ul class="teacher-times-course-time">
				<li></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props:['courseTimes']
	}	
</script>
<style lang="less">
	.teacher-times {
		width:100%;
		overflow-x:scroll;
		.teacher-times-day {
			background:#fff;
			height:46px;
			border-top:1px solid #eee;
			border-bottom:1px solid #eee;
			white-space: nowrap;
			li {
				display:inline-block;
				height:46px;
				width:70px;
				line-height:46px;
				font-size: 14px;
				color: #999999;
				text-align:center;
			}
		}

	}
</style>