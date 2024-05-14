document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const typeFilter = document.getElementById('typeFilter');
    const tableBody = document.querySelector('.pdf-table tbody');

    function sortTableRows() {
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        const sortedRows = rows.sort((a, b) => {
            const yearA = parseInt(a.dataset.year);
            const yearB = parseInt(b.dataset.year);
            if (yearA !== yearB) {
                return yearA - yearB;
            } else {
                const typePriority = {
                    "Quiz": 0,
                    "Mid Term Exam": 1,
                    "Final Exam": 2
                };
                const typeA = a.dataset.type;
                const typeB = b.dataset.type;
                return typePriority[typeA] - typePriority[typeB];
            }
        });
        // Remove existing rows from table
        tableBody.innerHTML = '';
        // Append sorted rows to table
        sortedRows.forEach(row => {
            tableBody.appendChild(row);
        });
    }

    function filterExams() {
        const searchText = searchInput.value.toLowerCase();
        const selectedYear = yearFilter.value;
        const selectedType = typeFilter.value;

        tableBody.querySelectorAll('tr').forEach(row => {
            const fileName = row.querySelector('td:first-child').textContent.toLowerCase();
            const year = row.dataset.year;
            const type = row.dataset.type.toLowerCase();

            const showRow = fileName.includes(searchText) &&
                            (selectedYear === 'all' || year === selectedYear) &&
                            (selectedType === 'all' || type === selectedType.toLowerCase() ||
                             (selectedType === 'Mid Term Exam' && type === 'Mid-Term Exam'));

            row.style.display = showRow ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterExams);
    yearFilter.addEventListener('change', () => { sortTableRows(); filterExams(); });
    typeFilter.addEventListener('change', filterExams);

    // Initial sorting of table rows by year
    sortTableRows();
});