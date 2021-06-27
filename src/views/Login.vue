<template>
  <div class="p-4 w-full h-full flex flex-col items-center">
    <div class="mb-10 flex flex-col bg-neutral-content w-full max-w-xs">
      <div class="w-full flex">
        <button
          class="py-2 border-r border-neutral-content-content flex-grow bg-base-content text-neutral-content"
        >
          會員註冊
        </button>
        <button class="py-2 flex-grow bg-base-content text-neutral-content">
          會員登入
        </button>
      </div>
      <form id="login-form" class="my-8 flex flex-col">
        <input
          id="email"
          type="email"
          class="px-3 py-2 mx-6 my-4 border border-neutral border-opacity-50"
          placeholder="輸入電子郵件或手機號碼"
        />
        <input
          id="password"
          type="password"
          class="px-3 py-2 mx-6 my-2 border border-neutral border-opacity-50"
          placeholder="請輸入密碼"
        />
      </form>
    </div>
    <button
      class="w-full h-8 max-w-xs btn-primary rounded-3xl text-lg text-primary-content font-bold"
    >
      登入
    </button>
    <button class="p-2 text-primary-content">忘記密碼?</button>
  </div>
</template>

<script setup lang="ts"></script>
