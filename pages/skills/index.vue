<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4 text-gray-800">技能模擬器</h1>
      <p class="text-lg text-gray-600">規劃你的角色技能配點方案</p>
    </div>

    <!-- Job Selection -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4">選擇職業</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div 
          v-for="job in jobs" 
          :key="job.id"
          class="bg-gray-50 p-4 rounded-lg text-center cursor-pointer hover:bg-blue-50 border-2 transition-colors"
          :class="{ 'border-blue-500 bg-blue-50': selectedJob?.id === job.id }"
          @click="selectJob(job)"
        >
          <div class="text-3xl mb-2">{{ job.icon }}</div>
          <div class="font-semibold">{{ job.name }}</div>
        </div>
      </div>
    </div>

    <!-- Skill Simulator -->
    <div v-if="selectedJob" class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4">{{ selectedJob.name }} 技能樹</h2>
      
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-lg font-semibold">可用技能點數：</span>
          <span class="text-xl font-bold text-blue-600">{{ remainingPoints }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div 
            class="bg-blue-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${(totalPoints - remainingPoints) / totalPoints * 100}%` }"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="skill in selectedJob.skills" 
          :key="skill.id"
          class="border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
            <div class="flex items-center space-x-2">
              <button 
                @click="decreaseSkill(skill)"
                :disabled="skill.currentLevel === 0"
                class="w-8 h-8 bg-red-500 text-white rounded-full disabled:bg-gray-300 hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span class="text-lg font-bold min-w-[2rem] text-center">{{ skill.currentLevel }}</span>
              <button 
                @click="increaseSkill(skill)"
                :disabled="skill.currentLevel >= skill.maxLevel || remainingPoints === 0"
                class="w-8 h-8 bg-green-500 text-white rounded-full disabled:bg-gray-300 hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <div class="text-sm text-gray-600 mb-2">
            等級：{{ skill.currentLevel }}/{{ skill.maxLevel }}
          </div>
          
          <div class="text-sm text-gray-700 mb-2">
            {{ skill.description }}
          </div>
          
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              class="bg-green-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${skill.currentLevel / skill.maxLevel * 100}%` }"
            ></div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-6 border-t">
        <div class="flex flex-wrap gap-4">
          <button 
            @click="resetSkills"
            class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            重置技能
          </button>
          <button 
            @click="saveSkillBuild"
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            儲存配點
          </button>
          <button 
            @click="shareSkillBuild"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            分享配點
          </button>
        </div>
      </div>
    </div>

    <!-- Getting Started -->
    <div v-else class="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 class="text-2xl font-semibold mb-4">開始使用技能模擬器</h2>
      <p class="text-gray-600 mb-6">選擇一個職業開始規劃你的技能配點方案</p>
      <div class="text-6xl mb-4">⚔️</div>
      <p class="text-gray-500">請從上方選擇你想要規劃的職業</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// SEO Meta
useSeoMeta({
  title: '技能模擬器 - RO 仙境傳說攻略網站',
  description: '完整的 RO 仙境傳說技能模擬器，支援所有職業的技能配點規劃',
  keywords: 'RO,仙境傳說,技能模擬器,配點,職業,攻略'
})

// Data
const totalPoints = ref(50)
const selectedJob = ref(null)

const jobs = ref([
  { id: 1, name: '劍士', icon: '⚔️', skills: [] },
  { id: 2, name: '法師', icon: '🧙‍♂️', skills: [] },
  { id: 3, name: '弓箭手', icon: '🏹', skills: [] },
  { id: 4, name: '服事', icon: '🛡️', skills: [] },
  { id: 5, name: '商人', icon: '💰', skills: [] },
  { id: 6, name: '盜賊', icon: '🗡️', skills: [] }
])

// Sample skills data
const sampleSkills = [
  { id: 1, name: '劍術精通', description: '提升劍類武器的攻擊力', maxLevel: 10, currentLevel: 0 },
  { id: 2, name: '雙手劍精通', description: '提升雙手劍的攻擊力', maxLevel: 10, currentLevel: 0 },
  { id: 3, name: '挑撥', description: '降低敵人的防禦力', maxLevel: 10, currentLevel: 0 },
  { id: 4, name: '霸王之怒', description: '增加攻擊力但降低防禦力', maxLevel: 10, currentLevel: 0 },
  { id: 5, name: '復原', description: '回復 HP', maxLevel: 10, currentLevel: 0 },
  { id: 6, name: '強力攻擊', description: '增加下次攻擊的傷害', maxLevel: 10, currentLevel: 0 }
]

// Computed
const remainingPoints = computed(() => {
  if (!selectedJob.value) return totalPoints.value
  const usedPoints = selectedJob.value.skills.reduce((sum, skill) => sum + skill.currentLevel, 0)
  return totalPoints.value - usedPoints
})

// Methods
const selectJob = (job) => {
  selectedJob.value = {
    ...job,
    skills: sampleSkills.map(skill => ({ ...skill, currentLevel: 0 }))
  }
}

const increaseSkill = (skill) => {
  if (skill.currentLevel < skill.maxLevel && remainingPoints.value > 0) {
    skill.currentLevel++
  }
}

const decreaseSkill = (skill) => {
  if (skill.currentLevel > 0) {
    skill.currentLevel--
  }
}

const resetSkills = () => {
  if (selectedJob.value) {
    selectedJob.value.skills.forEach(skill => {
      skill.currentLevel = 0
    })
  }
}

const saveSkillBuild = () => {
  // TODO: Implement save functionality
  alert('配點已儲存！')
}

const shareSkillBuild = () => {
  // TODO: Implement share functionality
  alert('配點分享連結已複製到剪貼簿！')
}
</script>