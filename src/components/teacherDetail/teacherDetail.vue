<template>
	<div class="main-teacher">
		<teacher-head :brief="teacherBrief"></teacher-head>
		<div class="main-teacher-tab">
			<div @click="active=!active" :class="{active:active}">课程时间</div>
			<div @click="active=!active" :class="{active:!active}">老师资料</div>
		</div>
		<div class="main-teacher-content">
			<teacher-times v-show="active" :courseTimes="courseTimes"></teacher-times>
			<teacher-info v-show="!active" :teacherInfo="teacherInfo"></teacher-info>
		</div>
	</div>
</template>
<script>
	import teacherHead from './teacherHead.vue'
	import teacherTimes from './teacherTimes.vue'
	import teacherInfo from './teacherInfo.vue'
	export default {
		data () {
			return {
				active:true,
				teacherBrief:{
					imgUrl:'../../assets/logo.png',
					name:'Poy',
					pronum:'英式口音'
				},
				courseTimes:[
					{
						day:'周二',
						times:[
							'09:16-10:32',
							'10:50-11:20',
							'12:25-12:55',
							'13:50-14:20',
							'15:35-16:05',
							'17:00-17:30',
							'18:08-18:38',
							'19:00-19:30',
							'20:12-20:42'
						]
					},
					{
						day:'周三',
						times:[
							'09:16-10:32',
							'10:50-11:20',
							'12:25-12:55',
							'13:50-14:20',
							'15:35-16:05',
							'17:00-17:30',
							'18:08-18:38',
							'19:00-19:30',
							'20:12-20:42'
						]
					},
					{
						day:'周四',
						times:[
							'09:16-10:32',
							'10:50-11:20',
							'12:25-12:55',
							'13:50-14:20',
							'15:35-16:05',
							'17:00-17:30',
							'18:08-18:38',
							'19:00-19:30',
							'20:12-20:42'
						]
					},
					{
						day:'周五',
						times:[
							'09:16-10:32',
							'10:50-11:20',
							'12:25-12:55',
							'13:50-14:20',
							'15:35-16:05',
							'17:00-17:30',
							'18:08-18:38',
							'19:00-19:30',
							'20:12-20:42'
						]
					},
					{
						day:'周六',
						times:[
							'09:16-10:32',
							'10:50-11:20',
							'12:25-12:55',
							'13:50-14:20',
							'15:35-16:05',
							'17:00-17:30',
							'18:08-18:38',
							'19:00-19:30',
							'20:12-20:42'
						]
					},
					{
						day:'周日',
						times:[
							'09:16-10:32',
							'10:50-11:20',
							'12:25-12:55',
							'13:50-14:20',
							'15:35-16:05',
							'17:00-17:30',
							'18:08-18:38',
							'19:00-19:30',
							'20:12-20:42'
						]
					}
				],
				teacherInfo:{
					intro:'你好，我是斯蒂芬空间的撒看法送到附近啊乐山大佛监督所开发阿克苏的肌肤啊集散地反抗机',
					interest:'我喜欢和我女儿一起旅游所考虑的飞机库第三方空间上岛咖啡碱上岛咖啡碱设立考点附近思考的房价送到附近适当放宽了',
					eduIdeas:'学习是上略当分阃适当放宽家上岛咖啡碱，水电开发及送到附近阿克苏的肌肤空间啊斯蒂芬，啊送到附近开斯蒂芬家啊三闾大夫',
					done:'我去过很多国家旅游，在美国和英国都有居住过'
				}
			}
		},
		components: {
			teacherHead,
			teacherTimes,
			teacherInfo
		}
	}	
</script>
<style lang="less">
	.main-teacher {
		margin-top:60px;
		background:#F7F7F7;
		.main-teacher-tab {
			display:flex;
			background:#fff;
			text-align:center;
			>div {
				flex:1;
				line-height:48px;
				font-size: 14px;
				&.active {
					color: #FF6969;
				}
			}
		}
		.main-teacher-content {
			background:#fff;
		}
	}
</style>