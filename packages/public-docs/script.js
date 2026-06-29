// Copy code functionality
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code').textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 2000);
  });
}

// Tab switching functionality
function showTab(event, tabId) {
  // Get the parent container
  const container = event.target.closest('.code-examples');
  
  // Hide all tab contents
  const tabContents = container.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  // Remove active class from all buttons
  const tabButtons = container.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab content
  const selectedTab = container.querySelector(`#${tabId}`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  
  // Add active class to clicked button
  event.target.classList.add('active');
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Highlight current page in sidebar
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
