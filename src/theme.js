const root = document.documentElement
const toggle = document.getElementById('theme-toggle')
const icon = document.getElementById('theme-icon')

function syncIcon() {
  icon.textContent = root.classList.contains('dark') ? '☀️' : '🌙'
}

toggle.addEventListener('click', () => {
  root.classList.toggle('dark')
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light')
  syncIcon()
})

syncIcon()