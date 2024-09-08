// Function to toggle the visibility of the "Skills" section
function toggleSkillsVisibility() {
    const skillsSection = document.getElementById('skillsSection');
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
}
// Add event listener for the toggle button (Skills Section)
function initializeEventListeners() {
    const toggleSkillsButton = document.getElementById('toggleSkills');
    toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);
}
// Initialize the event listener once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeEventListeners);
export {};