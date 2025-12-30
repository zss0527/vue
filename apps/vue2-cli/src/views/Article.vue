<template>
  <div class="article-page" v-loading="isLoading">
    <div v-for='item in articleList' :key='item.id'
         class="article-item" @click="$router.push(`/detail/${item.id}`)"
    >
      <div class="head">
        <img :src="item.creatorAvatar" alt=""/>
        <div class="con">
          <p class="title">{{ item.stem }}</p>
          <p class="other">{{ item.creatorName }} | {{ item.createdAt }}</p>
        </div>
      </div>
      <div class="body">
        {{ item.content }}
      </div>
      <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
// import axios from "axios";

import {loading} from "@/directives";

export default {
  name: 'ArticlePage',
  directives: {loading},
  data() {
    return {
      articleList: [],
      isLoading: true,
    }
  },
  async created() {
    // const res = axios.get('https://mock.boxuegu.com/mock/3083/articles')
    setTimeout(() => {
      this.isLoading = false
      this.articleList = [
        {
          id: 1,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚1',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 2,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚2',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 3,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚3',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 4,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚4',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 5,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚5',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 6,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚6',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 7,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚7',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 8,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚8',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 9,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚9',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 10,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚10',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 11,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么11',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 12,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚12',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 13,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚13',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 14,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚14',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 15,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚15',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },
        {
          id: 16,
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春那么骚16',
          difficulty: 1,
          likeCount: 45,
          likeFlag: 0,
          questionBankType: 9,
          questionNo: '234444',
          questionType: 8,
          stem: '百度前端面经',
          subjectName: '前端与移动应用开发',
          views: '315'
        },]
    },2000)
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}

.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;

  .head {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }

    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;

      p {
        margin: 0;
        line-height: 1.5;

        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }

        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }

  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>