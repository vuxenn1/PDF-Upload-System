document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const typeFilter = document.getElementById('typeFilter');
    const tableRows = document.querySelectorAll('.pdf-table tbody tr');
  
    function filterExams() {
      const searchText = searchInput.value.toLowerCase();
      const selectedYear = yearFilter.value;
      const selectedType = typeFilter.value;
  
      tableRows.forEach(row => {
        const fileName = row.querySelector('td:first-child').textContent.toLowerCase();
        const year = row.dataset.year;
        const type = row.dataset.type.toLowerCase();
  
        const showRow = fileName.includes(searchText) &&
                        (selectedYear === 'all' || year === selectedYear) &&
                        (selectedType === 'all' || type === selectedType.toLowerCase());
  
        row.style.display = showRow ? '' : 'none';
      });
    }
  
    searchInput.addEventListener('input', filterExams);
    yearFilter.addEventListener('change', filterExams);
    typeFilter.addEventListener('change', filterExams);
  });  