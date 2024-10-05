document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.getElementById('loadMore') as HTMLButtonElement | null;
    const content = document.getElementById('content') as HTMLElement | null;

    if (loadMoreButton && content) {
        loadMoreButton.addEventListener('click', () => {
            const newContent = document.createElement('p');
            newContent.textContent = "We started our journey in 2024 with the mission to make the web more accessible.";
            content.appendChild(newContent);

            // Hide the button after loading additional content
            loadMoreButton.style.display = 'none';
        });
    }
});
