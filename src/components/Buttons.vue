
<script setup lang="ts">
  import { computed } from 'vue';
  import { PropType } from 'vue';
  
  const props = defineProps<{
    label: string;
    iconURL?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: boolean;
  }>();
  
  const buttonClasses = computed(() => {
    const baseClasses = 'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full';
    const bgClasses = props.backgroundColor ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}` : 'bg-coral-red text-white border-coral-red';
    const fullWidthClass = props.fullWidth ? 'w-full' : '';
  
    return `${baseClasses} ${bgClasses} ${fullWidthClass}`;
  });
  </script>
  

  <template>
    <button
      :class="buttonClasses"
    >
      {{ label }}
      <img v-if="iconURL" :src="iconURL" alt="arrow right icon" class="ml-2 rounded-full bg-white w-5 h-5" />
    </button>
  </template>
  
  