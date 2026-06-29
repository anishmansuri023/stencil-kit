import { useState } from 'react'
import './App.css'
import { MyComponent, MyButton, MyCard, MyBadge } from '@stencil-kit/react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '10px' }}>🎨 Stencil Design System - React</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>React integration with Stencil components</p>

      {/* Buttons Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#666', marginBottom: '20px' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <MyButton variant="primary" size="small">Small Primary</MyButton>
          <MyButton variant="primary" size="medium">Medium Primary</MyButton>
          <MyButton variant="primary" size="large">Large Primary</MyButton>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <MyButton variant="secondary" size="medium">Secondary</MyButton>
          <MyButton variant="danger" size="medium">Danger</MyButton>
          <MyButton variant="primary" size="medium" disabled>Disabled</MyButton>
        </div>
      </section>

      {/* Badges Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#666', marginBottom: '20px' }}>Badges</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <MyBadge color="success" size="small">Success</MyBadge>
          <MyBadge color="warning" size="medium">Warning</MyBadge>
          <MyBadge color="error" size="large">Error</MyBadge>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <MyBadge color="info" pill>Info Pill</MyBadge>
          <MyBadge color="neutral" pill>Neutral Pill</MyBadge>
          <MyBadge color="success" pill>Success Pill</MyBadge>
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#666', marginBottom: '20px' }}>Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <MyCard cardTitle="Low Elevation" subtitle="Subtle shadow effect" elevation="low">
            <p>This card has a low elevation with a subtle shadow. Perfect for less prominent content.</p>
            <div slot="footer">
              <MyButton variant="primary" size="small">Action</MyButton>
              <MyBadge color="info" size="small">New</MyBadge>
            </div>
          </MyCard>

          <MyCard cardTitle="Medium Elevation" subtitle="Standard shadow" elevation="medium">
            <p>This card has medium elevation. Great for standard content cards.</p>
            <div slot="footer">
              <MyButton variant="secondary" size="small">Learn More</MyButton>
              <MyBadge color="success" size="small">Active</MyBadge>
            </div>
          </MyCard>

          <MyCard cardTitle="High Elevation" subtitle="Prominent shadow" elevation="high">
            <p>This card has high elevation with a prominent shadow. Use for important content.</p>
            <div slot="footer">
              <MyButton variant="danger" size="small">Delete</MyButton>
              <MyBadge color="warning" size="small">Warning</MyBadge>
            </div>
          </MyCard>
        </div>
      </section>

      {/* React Counter Example */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#666', marginBottom: '20px' }}>React State Example</h2>
        <MyCard cardTitle="Interactive Counter" subtitle="React state management">
          <p>Click the button to increment the counter: <strong>{count}</strong></p>
          <div slot="footer">
            <MyButton variant="primary" size="medium" onClick={() => setCount(count + 1)}>
              Count is {count}
            </MyButton>
            <MyButton variant="secondary" size="medium" onClick={() => setCount(0)}>
              Reset
            </MyButton>
          </div>
        </MyCard>
      </section>

      {/* Original Component */}
      <section>
        <h2 style={{ color: '#666', marginBottom: '20px' }}>Original Component</h2>
        <MyComponent first="Anis" last="This is React library" />
      </section>
    </div>
  )
}

export default App
