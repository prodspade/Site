
// Configuration
const PASSWORD = "carti"; // Change this to your desired password
const EMBED_URL = "https://untitled.stream/library/project/9AtRmGs50aGMBjYsjeebA"; // URL to embed when password is correct

// DOM Elements
const passwordInput = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const loginContainer = document.getElementById('login-container');
const contentContainer = document.getElementById('content-container');
const embeddedSite = document.getElementById('embedded-site');
const logoutBtn = document.getElementById('logout-btn');

// Check if user is already authenticated (using localStorage)
function checkAuth() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (isAuthenticated) {
    showContent();
  }
}

// Handle password submission
function handleSubmit() {
  const password = passwordInput.value.trim();
  
  if (password === PASSWORD) {
    // Correct password
    localStorage.setItem('isAuthenticated', 'true');
    showContent();
    passwordInput.value = '';
    errorMessage.textContent = '';
  } else {
    // Incorrect password
    errorMessage.textContent = 'Incorrect password. Please try again.';
    passwordInput.value = '';
    passwordInput.focus();
  }
}

// Show the embedded content
function showContent() {
  loginContainer.classList.add('hidden');
  contentContainer.classList.remove('hidden');
  embeddedSite.src = EMBED_URL;
}

// Handle logout
function handleLogout() {
  localStorage.removeItem('isAuthenticated');
  contentContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');
  embeddedSite.src = '';
}

// Event Listeners
submitBtn.addEventListener('click', handleSubmit);

passwordInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});

logoutBtn.addEventListener('click', handleLogout);

// Check authentication on page load
document.addEventListener('DOMContentLoaded', checkAuth);
