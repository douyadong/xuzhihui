<template>
  <div class="hello">
    <div class="menu">
      <div class="menu_top">
        <span v-for="(item,index) in menuOne" v-text="item.name" @click="toggleTwo(item,index)" :class="{active:item.active}"></span>
        <!-- <span>性别</span><span>发音</span><span>特点</span><span>上课时间</span> -->
      </div>
      <transition name="expand">
        <div class="menu_down" v-if="menuBg">
          <!-- <ul v-show="menuBg"> -->
          <ul>
            <li v-for="(menuGroup,groupIndex) in menuTwo" v-show="menuGroup.active">
              <ul :class="{gender:groupIndex===0,others:groupIndex!==0}">
                <li v-for="(menulist,listIndex) in menuGroup.menuitems" v-text="menulist.name" 
                :class="{active:menulist.active}" @click="showTeacher(menuGroup.menuitems,groupIndex,listIndex)"></li>
              </ul>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="menu_bg" v-show="menuBg" @click="closeMenu"></div>
    <ul class="content">
      <li>内容区域</li>
      <li>内容区域</li>
      <li>内容区域</li>
      <li>内容区域</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      menuBg: false,
      menuOne: [
        {
          name:'性别',
          active:false
        },
        {
          name:'发音',
          active:false
        },
        {
          name:'特点',
          active:false
        },
        {
          name:'上课时间',
          active:false
        }
      ],
      menuTwo: [
        {
          active:false,
          menuitems:[
            {
              name:'男',
              active:false
            },
            {
              name:'女',
              active:false
            },
            {
              name:'不限',
              active:true
            }
          ]
        },
        {
          active:false,
          menuitems:[
            {
              name:'美式口音',
              active:false
            },
            {
              name:'英式口音',
              active:false
            },
            {
              name:'不限',
              active:true
            }
          ]
        },
        {
          active:false,
          menuitems:[
            {
              name:'肢体动作丰富',
              active:false
            },
            {
              name:'善于引导',
              active:false
            },
            {
              name:'耐心细致',
              active:false
            },
            {
              name:'鼓励孩子发言',
              active:false
            },
            {
              name:'注重细节',
              active:false
            },
            {
              name:'不限',
              active:true
            }
          ]
        },
        {
          active:false,
          menuitems:[
            {
              name:'周一',
              active:false
            },
            {
              name:'周二',
              active:false
            },
            {
              name:'周三',
              active:false
            },
            {
              name:'周四',
              active:false
            },
            {
              name:'周五',
              active:false
            },
            {
              name:'周六',
              active:false
            },
            {
              name:'周日',
              active:false
            },
            {
              name:'不限',
              active:true
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleTwo (item,key) {
      // 点击一级菜单时，修改一级菜单对应样式
      this.menuOne.forEach((value,index)=>{
        if(index === key) {
          item.active = !item.active
        }else {
          value.active = false
        }
      })
      this.menuTwo.forEach((value,index)=>{
        // 一级菜单点击后是需要展开对应的二级菜单
        if(item.active) {
          this.menuBg = true
          if(index === key) {
            value.active = true
          }else {
            value.active = false
          }
        }else {
          this.menuBg = false
          value.active = false
        }
      })
    },
    showTeacher (items,itemKey,listKey) {
      switch (itemKey) {
        case 0:
        case 1:this.chooseSingle(items,listKey);
        break;
        case 2:
        case 3:this.chooseMultiple(items,listKey);
        break;
      }
    },
    chooseSingle (items,listKey) {
      items.forEach((item,index)=>{
        // if(index === listKey) {
        //   if(!item.active) item.active = true
        // }else {
        //   item.active = false
        // }
        item.active = false
      })
      if(!items[listKey].active) items[listKey].active = true
    },
    chooseMultiple (items,listKey) {
      if(listKey === items.length - 1) {
        // 多选项当点击不限时取消其他选中部分
        items.forEach((item,key) => {
          item.active = false
        })
        items[items.length-1].active = true
        return
      }else {
        items[items.length-1].active = false
        items[listKey].active = !items[listKey].active
      }
      const hasCondition = items.slice(0,items.length-1).some((item,key)=>{
        return item.active
      })
      if(!hasCondition) {
        items[items.length-1].active = true
      }
    },
    closeMenu () {
      this.menuBg = false
      // 去除一级菜单样式
      this.menuOne.forEach(value =>{
        value.active = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello {
    margin-top:60px;
  }
  .expand-enter-active {
   transition: all .5s ease;
   transform: translateY(0);
  }
  .expand-leave-active{
   transform:translateY(0);
  }
  .expand-enter, .expand-leave {
   transform:translateY(-100%);
  }
  .menu {
    position:absolute;
    top:60px;
    left:0;
    width:100%;
    z-index:3;
    .menu_top {
      position:absolute;
      top:0;
      left:0;
      z-index:4;
      width:100%;
      display:flex;
      align-items: center;
      height:40px;
      font-size: 13px;
      text-align: center;
      box-shadow: inset 0 0 0 0 #EEEEEE;
      border-bottom:1px solid #ccc;
      background-color: #fff;
      span {
        line-height:20px;
        border-right:1px solid #ccc;
        width:22%;
      }
      span:last-child {
        flex:1; 
        border-right:0;
      }
      .active {
        color: #FF6969;
      }
    }
    .menu_down {
      // height:0;
      background:#fff;
      padding-left:4%;
      font-size:14px;
      position:absolute;
      top:40px;
      width:100%;
      z-index:2;
      .gender {
        li {
          line-height:54px;
          border-bottom:1px solid #ccc;
          position:relative;
          &.active:after {
            content:'√';
            position:absolute;
            line-height:54px;
            right:21.4px;
          }
        }
      }
      .others {
        padding-top:5px;
        padding-bottom:20px;
        background:#fff;
        overflow:hidden;
        li {
          line-height:32px;
          padding:0 19px;
          border: 1px solid #CCCCCC;
          border-radius: 3px;
          float: left;
          margin-right:15px;
          margin-top:15px;
          &.active {
            background: #FF6969;
            color:#fff;
          }
        }
      }
    }

  }
  .menu_bg {
    background:rgba(0,0,0,.3);
    position:fixed;
    width:100%;
    height:100%;
  }
  ul.content{
    margin-top:90px;
    li {
      height:120px;
      line-height:120px;
    }
  }
</style>
