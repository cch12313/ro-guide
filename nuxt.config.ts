// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'RO 仙境傳說攻略網站',
      meta: [
        { name: 'description', content: '完整的 RO 仙境傳說攻略網站，包含技能模擬器、怪物資訊、地圖攻略等功能' },
        { name: 'keywords', content: 'RO,仙境傳說,攻略,技能模擬器,怪物資訊,地圖,Ragnarok Online' }
      ]
    }
  }
})
