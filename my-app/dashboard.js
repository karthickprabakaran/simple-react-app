document.addEventListener('DOMContentLoaded', () => {
    const videoSection = document.getElementById('video-section');

    function loadContent(id) {
        fetch(`/video/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                videoSection.innerHTML = data;
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    // Handle clicks on module links
    document.querySelectorAll('.module-link').forEach(moduleLink => {
        moduleLink.addEventListener('click', event => {
            event.preventDefault();
            const moduleId = event.target.getAttribute('data-id');
            loadContent(moduleId);
        });
    });

    // Handle clicks on activity links
    document.querySelectorAll('.activity-link').forEach(activityLink => {
        activityLink.addEventListener('click', event => {
            event.preventDefault();
            const activityId = event.target.getAttribute('data-id');
            loadContent(activityId);
        });
    });
});
