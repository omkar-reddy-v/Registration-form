function updateOptions() {
    const courseSelect = document.getElementById('course');
    const subcourseSelect = document.getElementById('subcourse');
    const selectedCourse = courseSelect.value;

    // Clear existing options
    subcourseSelect.innerHTML = '';

    if (selectedCourse === 'inter') {
        // Add options for Intermediate
        addOption(subcourseSelect, 'select', '..Select..');
        addOption(subcourseSelect, 'mpc', 'MPC');
        addOption(subcourseSelect, 'cec', 'CEC');
        addOption(subcourseSelect,'mec','MEC');
        addOption(subcourseSelect,'bipc','BIPC');
    } else if (selectedCourse === 'degree') {
        // Add options for Degree
        addOption(subcourseSelect, 'select', '..Select..');
        addOption(subcourseSelect, 'bcom', 'B.Com(CA)');
        addOption(subcourseSelect, 'bsc', 'B.Sc(Computers)');
        addOption(subcourseSelect, 'mpc', 'MPC');
        addOption(subcourseSelect, 'bba', 'BBA');
        addOption(subcourseSelect, 'bzc', 'BZC');

    }
}

function addOption(selectElement, value, label) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    selectElement.appendChild(option);
}
