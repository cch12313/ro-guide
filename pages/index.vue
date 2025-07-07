<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 rounded-lg mb-12">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          RO 仙境傳說攻略網站
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          最完整的攻略資源，助你在仙境傳說中稱霸一方
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/skills" class="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
            技能模擬器
          </NuxtLink>
          <NuxtLink to="/monsters" class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
            怪物圖鑑
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">主要功能</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-blue-600 text-4xl mb-4">⚔️</div>
          <h3 class="text-xl font-semibold mb-2">技能模擬器</h3>
          <p class="text-gray-600">規劃最佳的技能配點方案</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-green-600 text-4xl mb-4">👹</div>
          <h3 class="text-xl font-semibold mb-2">怪物圖鑑</h3>
          <p class="text-gray-600">詳細的怪物資訊和掉落物品</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-purple-600 text-4xl mb-4">🗺️</div>
          <h3 class="text-xl font-semibold mb-2">地圖攻略</h3>
          <p class="text-gray-600">各地圖的詳細攻略和路線</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-orange-600 text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">素質模擬器</h3>
          <p class="text-gray-600">計算最適合的角色素質分配</p>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">最新消息</h2>
      <div class="space-y-6">
        <div class="border-l-4 border-blue-500 pl-4">
          <h3 class="text-xl font-semibold mb-2">技能模擬器 v1.0 上線</h3>
          <p class="text-gray-600 mb-2">全新的技能模擬器已經上線，支援所有職業的技能配點規劃。</p>
          <span class="text-sm text-gray-400">2025-07-07</span>
        </div>
        
        <div class="border-l-4 border-green-500 pl-4">
          <h3 class="text-xl font-semibold mb-2">怪物圖鑑資料庫更新</h3>
          <p class="text-gray-600 mb-2">新增了最新版本的怪物資訊，包含最新的掉落物品數據。</p>
          <span class="text-sm text-gray-400">2025-07-05</span>
        </div>
        
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="text-xl font-semibold mb-2">網站正式上線</h3>
          <p class="text-gray-600 mb-2">RO 攻略網站正式上線，提供完整的遊戲攻略資源。</p>
          <span class="text-sm text-gray-400">2025-07-01</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-green-500 to-blue-500 text-white py-16 rounded-lg text-center">
      <h2 class="text-3xl font-bold mb-4">開始你的冒險之旅</h2>
      <p class="text-xl mb-8 opacity-90">探索仙境傳說的無限可能</p>
      <NuxtLink to="/skills" class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        立即開始
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: 'RO 仙境傳說攻略網站 - 完整攻略資源',
  description: '提供完整的 RO 仙境傳說攻略資源，包含技能模擬器、怪物圖鑑、地圖攻略、素質模擬器等功能',
  keywords: 'RO,仙境傳說,攻略,技能模擬器,怪物資訊,地圖,Ragnarok Online'
})
</script>