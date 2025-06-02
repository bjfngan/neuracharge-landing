// main.ts
import './style.css';

// Inject the markup
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="welcome">
    <h1>Welcome to Neuracharge</h1>
    <button id="portalButton">Go to portal</button>
  </div>
`;

// Wire up navigation
const portalButton = document.querySelector<HTMLButtonElement>('#portalButton')!;
portalButton.addEventListener('click', () => {
    // This keeps the domain (neuracharge.edgecom.ai) and moves to the desired path
    window.location.href = '/data/perspective/client/admin/overview';
});
