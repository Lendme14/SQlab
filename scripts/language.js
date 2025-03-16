document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const content = document.getElementById('content');

    // Load the stored language preference
    const storedLanguage = localStorage.getItem('language') || 'html';
    languageSelect.value = storedLanguage;
    loadLanguage(storedLanguage);

    // Change language on selection
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        localStorage.setItem('language', selectedLanguage);
        loadLanguage(selectedLanguage);
    });

    function loadLanguage(language) {
        // Load the translation file (this is a placeholder, adapt to your needs)
        fetch(`/locales/${language}.json`)
            .then(response => response.json())
            .then(translations => {
                updateContent(translations);
            })
            .catch(error => console.error('Error loading translations:', error));
    }

    function updateContent(translations) {
        // Update the content with translations (this is a placeholder)
        content.innerHTML = translations.content;
    }
});
