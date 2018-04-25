<template>
	<div class="teacher">
		<teacher-head :isAssist="!Boolean(mainMsg)" :msg="mainMsg ? mainMsg.info : assistMsg.info"></teacher-head>
		<teacher-time :timeList="mainMsg ? mainMsg.times : assistMsg.times"></teacher-time>
	</div>
</template>
<script>
	import teacherHead from './TeacherListHead.vue'
	import teacherTime from './TeacherListTime.vue'
  export default {
  	name: 'TeacherList',
  	props: ['mainMsg','assistMsg'],
  	data () {
  		return {
  		}
  	},
  	mounted () {
  		
  	},
  	components:{
  		teacherHead,teacherTime
  	}
  }
</script>
<style lang="less">
	.teacher {
		border-bottom:1px solid #fff;
		&:last-child {
			border:0;
		}
	}
		
</style>