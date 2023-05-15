<template>
  <div class="row">
    <svg>
      <polygon points="10,50 200,50 220,70 280,70 280,10 10,10" style="fill:#fff;stroke:#2847f9e8; stroke-width:1"/>
      <line x1="0" y1="0" x2="10" y2="0" style="stroke:rgb(243, 16, 16);stroke-width:2">
        <animateMotion path="M 10,50 L 200,50 220,70 280,70 280,10 10,10 Z" dur="10s" repeatCount="indefinite" rotate="auto" />
      </line>
    </svg>
  </div>
</template>
<script setup>
</script>
<style scoped>
.row {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);
}
svg {
  height: 200px;
  border: 1px solid #010101;
}
</style>