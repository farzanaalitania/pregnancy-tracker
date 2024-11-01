function navigateTo(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content').forEach((section) => {
    section.classList.remove('active');
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add('active');
}
