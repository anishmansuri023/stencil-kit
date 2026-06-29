<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div style="padding: 40px; max-width: 1200px; margin: 0 auto; background: #f5f5f5; min-height: 100vh;">
    <h1 style="margin-bottom: 10px;">🎨 Stencil Design System - Vue</h1>
    <p style="color: #666; margin-bottom: 40px;">Vue 3 integration with Stencil components</p>

    <!-- Buttons Section -->
    <section style="margin-bottom: 40px;">
      <h2 style="color: #666; margin-bottom: 20px;">Buttons</h2>
      <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 10px;">
        <my-button variant="primary" size="small">Small Primary</my-button>
        <my-button variant="primary" size="medium">Medium Primary</my-button>
        <my-button variant="primary" size="large">Large Primary</my-button>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <my-button variant="secondary" size="medium">Secondary</my-button>
        <my-button variant="danger" size="medium">Danger</my-button>
        <my-button variant="primary" size="medium" disabled>Disabled</my-button>
      </div>
    </section>

    <!-- Badges Section -->
    <section style="margin-bottom: 40px;">
      <h2 style="color: #666; margin-bottom: 20px;">Badges</h2>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px;">
        <my-badge color="success" size="small">Success</my-badge>
        <my-badge color="warning" size="medium">Warning</my-badge>
        <my-badge color="error" size="large">Error</my-badge>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <my-badge color="info" pill>Info Pill</my-badge>
        <my-badge color="neutral" pill>Neutral Pill</my-badge>
        <my-badge color="success" pill>Success Pill</my-badge>
      </div>
    </section>

    <!-- Cards Section -->
    <section style="margin-bottom: 40px;">
      <h2 style="color: #666; margin-bottom: 20px;">Cards</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <my-card card-title="Low Elevation" subtitle="Subtle shadow effect" elevation="low">
          <p>This card has a low elevation with a subtle shadow. Perfect for less prominent content.</p>
          <div slot="footer">
            <my-button variant="primary" size="small">Action</my-button>
            <my-badge color="info" size="small">New</my-badge>
          </div>
        </my-card>

        <my-card card-title="Medium Elevation" subtitle="Standard shadow" elevation="medium">
          <p>This card has medium elevation. Great for standard content cards.</p>
          <div slot="footer">
            <my-button variant="secondary" size="small">Learn More</my-button>
            <my-badge color="success" size="small">Active</my-badge>
          </div>
        </my-card>

        <my-card card-title="High Elevation" subtitle="Prominent shadow" elevation="high">
          <p>This card has high elevation with a prominent shadow. Use for important content.</p>
          <div slot="footer">
            <my-button variant="danger" size="small">Delete</my-button>
            <my-badge color="warning" size="small">Warning</my-badge>
          </div>
        </my-card>
      </div>
    </section>

    <!-- Vue Reactivity Example -->
    <section style="margin-bottom: 40px;">
      <h2 style="color: #666; margin-bottom: 20px;">Vue Reactivity Example</h2>
      <my-card card-title="Interactive Counter" subtitle="Vue 3 reactivity">
        <p>Click the button to increment the counter: <strong>{{ count }}</strong></p>
        <div slot="footer">
          <my-button variant="primary" size="medium" @click="count++">
            Count is {{ count }}
          </my-button>
          <my-button variant="secondary" size="medium" @click="count = 0">
            Reset
          </my-button>
        </div>
      </my-card>
    </section>

    <!-- Original Component -->
    <section>
      <h2 style="color: #666; margin-bottom: 20px;">Original Component</h2>
      <my-component first="Anis" last="This is Vue library"></my-component>
    </section>
  </div>
</template>

<style scoped>
/* Component styles are handled by Stencil's shadow DOM */
</style>
