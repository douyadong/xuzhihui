<template>
	<div class="myteacher">
		<div class="main">
			<div class="title">主课老师</div>
			<no-mainteacher v-if="!mainTeacherMsg.length"></no-mainteacher>
			<teacher-list v-for="(item,index) in mainTeacherMsg" :mainMsg="item" v-if="mainTeacherMsg.length" :key="index"></teacher-list>
		</div>
		<div class="assist">
			<div class="title">辅修课老师</div>
			<no-assistteacher v-if="!assistTeacherMsg.length"></no-assistteacher>
			<teacher-list v-for="(item,index) in assistTeacherMsg" :assistMsg="item" v-if="assistTeacherMsg.length" :key="index"></teacher-list>
		</div>
	</div>
</template>
<script>
	import NoMainteacher from './NoMainteacher.vue'
	import NoAssistteacher from './NoAssistteacher.vue'
	import TeacherList from './TeacherList.vue'
	export default {
		data () {
			return {
				mainTeacherMsg:[
					{
						info:{
							imgUrl:'../assets/logo.png',
							name:'Helen',
							pronum:'美式口音',
							total:'每周5节主课',
							id:'5'
						},
						times:[
							"周二 09:30-11:00",
							"周二 16:32-17:02",
							"周三 16:32-17:02",
							"周四 16:32-17:02",
							"周六 16:32-17:02"
						]
					}
				],
				assistTeacherMsg:[
					{
						info:{
							imgUrl:'../assets/logo.png',
							name:'len',
							pronum:'英式口音',
							total:'近期5节辅修课',
							id:'2'
						},
						times:[
							"2月14日 09:30-11:00",
							"2月14日 16:32-17:02"
						]
					},
					{
						info:{
							imgUrl:'../assets/logo.png',
							name:'len',
							pronum:'英式口音',
							total:'近期5节辅修课',
							id:'2'
						},
						times:[
							"2月14日 09:30-11:00",
							"2月14日 16:32-17:02"
						]
					},
					{
						info:{
							imgUrl:'../assets/logo.png',
							name:'len',
							pronum:'英式口音',
							total:'近期5节辅修课',
							id:'2'
						},
						times:[
							"2月14日 09:30-11:00",
							"2月14日 16:32-17:02"
						]
					}
				]
			}
		},
		components: {
			NoMainteacher,
			NoAssistteacher,
			TeacherList
		}
	}
</script>
<style lang="less">
	.myteacher {
		margin-top:60px;
		background:#F7F7F7;;
		.main {
			margin-bottom:10px;
		}
		.title {
			padding-left:16px;
			height:35px;
			line-height:35px;
			vertical-align: middle;
			font-size: 16px;
			color: #444444;
			font-weight: 700;
			border-bottom: 1px solid #EEEEEE;
			background:#fff;
		}
	}
</style>