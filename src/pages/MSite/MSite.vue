<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link ></router-link>
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else><i class="iconfont icon-person"></i></span>
        
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav" v-if="categorys.length">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <img src="./images/msite_back.svg" alt="" v-else />
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from '../../components/ShopList/ShopList';

export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  mounted() {
    // this.$store.dispatch("getCategorys");
    // this.$store.dispatch("getAddress");
    this.$store.dispatch("getShops");
  },
  components: {
    HeaderTop,
    ShopList,
  },
  computed: {
    ...mapState(["address", "categorys", "userInfo"]),
    // address(){
    //   console.log('Msite-computed-address');
    //   // computed比mounted先调用, 所以先执行了一次log,
    //   // 然后mounted调用改变了state.address的值,所以computed的address的log会再执行一次
    //   return this.$store.state.address
    // },
    // categorys(){
    //   console.log('Msite-computed-categorys');
    //   return this.$store.state.categorys
    // },
    // 根据 categorys 以为数组生成一个 二维数组
    // 小数组中的元素个数最大是8个
    categorysArr() {
      const { categorys } = this;
      // 准备空的二维数组
      const arr = [];
      let miniArr = [];
      // 遍历
      categorys.forEach((c) => {
        miniArr.push(c);
        if (miniArr.length === 8) {
          arr.push(miniArr);
          miniArr = [];
        }
      });
      if (miniArr.length > 0) {
        arr.push(miniArr);
      }
      return arr;
    },
  },
  watch: {
    categorys() {
      // 创建一个 Swiper实例对象，来实现轮播
      // 一旦完成页面更新, 立即调用(此条语句要写在数据更新之后)
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          // 可以循环轮播
          loop: true,
          // 分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>