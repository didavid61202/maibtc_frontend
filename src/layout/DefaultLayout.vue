router-view
<template>
  <div class="drawer text-base-content transition-all duration-300 select-none h-full">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content h-full">
      <div
        class="w-full flex justify-between navbar bg-base-200 border-b border-base-200 select-none"
      >
        <img src="/src/assets/logo_light.jpg" alt="logo" class="w-14" />
        <div class="flex-none lg:hidden">
          <label for="app-drawer" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <!-- <div class="flex-1 px-2 mx-2 overflow-hidden hidden lg:block">
          <span class="font-bold text-xl tracking-wide truncate"
            >頁面標題 (如需)
          </span>
        </div> -->
        <div class="flex-none hidden lg:block">
          <ul class="h-12 menu horizontal items-center">
            <li><a>首頁</a></li>
            <li><a>關於我們</a></li>
            <li><a>會員中心</a></li>
            <li><a>常見問題</a></li>
          </ul>
        </div>
      </div>
      <div class="relative w-full h-full bg-base-200">
        <router-view v-slot="{ Component }">
          <transition
            class="transform transition-all duration-500"
            enter-from-class="translate-x-full"
            leave-to-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-from-class="translate-x-0"
          >
            <component
              :is="Component"
              class="absolute top-0 w-full h-full overflow-x-hidden"
            ></component>
          </transition>
        </router-view>
      </div>
      <section
        class="hidden sm:flex p-4 bg-base-content justify-around space-x-4 flex-row items-start text-neutral-content text-sm"
      >
        <img src="/src/assets/logo_dark.jpg" alt="logo" class="mt-3 w-14" />
        <div><a href="" class="font-bold text-md">關於我們</a></div>
        <div class="flex flex-col items-center sm:items-start space-y-2">
          <h3 href="" class="font-bold text-md">會員中心</h3>
          <a href="" class="text-xs opacity-70">會員登入</a>
          <a href="" class="text-xs opacity-70">修改密碼</a>
          <a href="" class="text-xs opacity-70">訂單查詢</a>
        </div>
        <div class="flex flex-col items-center sm:items-start space-y-2">
          <h3 href="" class="font-bold text-md">常見問題</h3>
          <a href="" class="text-xs opacity-70">使用條館</a>
          <a href="" class="text-xs opacity-70">修改密碼</a>
          <a href="" class="text-xs opacity-70">訂單查詢</a>
        </div>
        <div class="flex flex-col items-center sm:items-start space-y-2">
          <h3 href="" class="font-bold text-md">聯絡我們</h3>
          <div class="text-xs opacity-70">線上客服:週一至周日 12:00pm ~ 8:00pm</div>
          <div class="text-xs opacity-70">
            電話客服: <a href="tel:0212341314">02-1234-1314</a>(週一至周五 10:00am ~
            12:30pm & 1:30pm ~ 6:00pm)
          </div>
          <a class="text-xs opacity-70">信箱: 123588888@gmail.com</a>
          <div class="text-xs opacity-70">地址: 台北市中正區八德路一段555號</div>
        </div>
      </section>
    </div>

    <div class="drawer-side">
      <label for="app-drawer" class="drawer-overlay"></label>
      <ul class="menu overflow-y-auto menu w-56 bg-base-200">
        <li class="pt-4 menu-title">
          <div class="p-2 flex items-baseline justify-center">
            <div class="font-bold text-xl tracking-widest">Maibtc</div>
          </div>
        </li>
        <div class="divider px-2 tracking-wider">選單</div>
        <li
          v-for="item in navigation"
          class="group select-none"
          :class="[
            item.to?.name === currentRoute.name
              ? 'border-l-4 border-primary hover:border-base-content'
              : 'pl-1',
          ]"
          :key="item.name"
        >
          <a class="!p-0" @click="item.to && router.push(item.to)"
            ><label
              for="app-drawer"
              class="w-full py-3 px-4 flex items-center cursor-pointer"
            >
              <component
                v-if="item.icon"
                :is="item.icon"
                :class="[
                  item.to?.name === currentRoute.name
                    ? 'text-primary group-hover:text-base-content'
                    : 'text-base-content',
                  'mr-3 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              <div
                class="text-xl"
                :class="[
                  item.to?.name === currentRoute.name
                    ? 'text-primary group-hover:text-base-content'
                    : 'text-base-content',
                ]"
              >
                {{ item.name }}
              </div></label
            ></a
          >
        </li>
        <li class="flex-grow"></li>
        <li class="mx-2"><a href="" class="font-bold text-md">關於我們</a></li>
        <li class="mx-2 flex flex-col items-center sm:items-start space-y-2">
          <a href="" class="font-bold text-md">會員中心</a>
        </li>
        <li class="mx-2 flex flex-col items-center sm:items-start space-y-2">
          <a href="" class="font-bold text-md">常見問題</a>
        </li>
        <li class="mx-2 mb-4 flex flex-col items-center sm:items-start space-y-2">
          <a href="" class="font-bold text-md">聯絡我們</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import { useRoute, useRouter } from "vue-router";

// import {
//   BookOpenIcon,
//   ShoppingBagIcon,
//   ColorSwatchIcon,
//   GiftIcon,
// } from "@heroicons/vue/outline";

const currentRoute = useRoute();

const router = useRouter();

interface navigationitem {
  name: string;
  to?: { name: string };
  icon?: Component;
  children?: navigationitem[];
}

const navigation: navigationitem[] = [{ name: "登入", to: { name: "Login" } }];
</script>
