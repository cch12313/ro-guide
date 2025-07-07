<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-blue-900 text-white shadow-lg">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-yellow-400">
            RO 攻略網站
          </NuxtLink>
          
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="hover:text-yellow-400 transition-colors">首頁</NuxtLink>
            <NuxtLink to="/skills" class="hover:text-yellow-400 transition-colors">技能模擬器</NuxtLink>
            <NuxtLink to="/monsters" class="hover:text-yellow-400 transition-colors">怪物資訊</NuxtLink>
            <NuxtLink to="/maps" class="hover:text-yellow-400 transition-colors">地圖攻略</NuxtLink>
            <NuxtLink to="/guides" class="hover:text-yellow-400 transition-colors">攻略指南</NuxtLink>
          </div>
          
          <button class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white mt-16">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">RO 攻略網站</h3>
            <p class="text-gray-400">最完整的仙境傳說攻略資源</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">快速連結</h4>
            <ul class="space-y-2 text-gray-400">
              <li><NuxtLink to="/skills" class="hover:text-white">技能模擬器</NuxtLink></li>
              <li><NuxtLink to="/monsters" class="hover:text-white">怪物圖鑑</NuxtLink></li>
              <li><NuxtLink to="/maps" class="hover:text-white">地圖攻略</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">聯絡我們</h4>
            <p class="text-gray-400">歡迎提供建議和回饋</p>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RO 攻略網站. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>