
<script>
// Wait until the document has loaded
document.addEventListener("DOMContentLoaded", function() {
  // Select all navbar dropdown links that belong to 'Presentations' or 'Workshops'
  const dropdownLinks = Array.from(document.querySelectorAll('.navbar a, .dropdown-menu a'))
    .filter(link => {
      const href = link.getAttribute('href') || '';
      return href.includes('src/presentations/');
    });

  // Make those links open in a new tab
  dropdownLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
});
</script>