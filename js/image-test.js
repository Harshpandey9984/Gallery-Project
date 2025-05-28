// Simple script to test if an image is loading
document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.createElement('div');
    testContainer.style.padding = '20px';
    testContainer.style.backgroundColor = '#f5f5f5';
    testContainer.style.maxWidth = '800px';
    testContainer.style.margin = '20px auto';
    testContainer.style.borderRadius = '8px';
    testContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    document.body.appendChild(testContainer);

    const header = document.createElement('h2');
    header.textContent = 'Image Loading Test';
    header.style.marginBottom = '20px';
    testContainer.appendChild(header);

    // Current URL that's not working
    const currentUrl = "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
    
    // Alternative team building games images
    const alternativeUrls = [
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ];

    // Test the current image
    const currentSection = createSection('Current Image URL', currentUrl);
    testContainer.appendChild(currentSection);

    // Test alternative images
    const alternativesHeader = document.createElement('h3');
    alternativesHeader.textContent = 'Alternative Image Options';
    alternativesHeader.style.marginTop = '30px';
    alternativesHeader.style.marginBottom = '15px';
    testContainer.appendChild(alternativesHeader);

    alternativeUrls.forEach((url, index) => {
        const alternativeSection = createSection(`Alternative ${index + 1}`, url);
        testContainer.appendChild(alternativeSection);
    });

    function createSection(title, imageUrl) {
        const section = document.createElement('div');
        section.style.marginBottom = '20px';
        section.style.padding = '15px';
        section.style.border = '1px solid #ddd';
        section.style.borderRadius = '4px';
        
        const sectionTitle = document.createElement('h4');
        sectionTitle.textContent = title;
        section.appendChild(sectionTitle);
        
        const urlDisplay = document.createElement('p');
        urlDisplay.textContent = imageUrl;
        urlDisplay.style.fontSize = '12px';
        urlDisplay.style.wordBreak = 'break-all';
        urlDisplay.style.marginBottom = '10px';
        section.appendChild(urlDisplay);
        
        const imgContainer = document.createElement('div');
        imgContainer.style.position = 'relative';
        imgContainer.style.height = '200px';
        imgContainer.style.background = '#eee';
        imgContainer.style.borderRadius = '4px';
        imgContainer.style.overflow = 'hidden';
        section.appendChild(imgContainer);
        
        const loadingIndicator = document.createElement('div');
        loadingIndicator.textContent = 'Loading...';
        loadingIndicator.style.position = 'absolute';
        loadingIndicator.style.top = '50%';
        loadingIndicator.style.left = '50%';
        loadingIndicator.style.transform = 'translate(-50%, -50%)';
        imgContainer.appendChild(loadingIndicator);
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Test Image';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        img.onload = () => {
            loadingIndicator.style.display = 'none';
            const status = document.createElement('div');
            status.textContent = 'LOADED SUCCESSFULLY';
            status.style.position = 'absolute';
            status.style.bottom = '10px';
            status.style.right = '10px';
            status.style.background = 'rgba(39, 174, 96, 0.8)';
            status.style.color = 'white';
            status.style.padding = '5px 10px';
            status.style.borderRadius = '4px';
            imgContainer.appendChild(status);
        };
        
        img.onerror = () => {
            loadingIndicator.textContent = 'FAILED TO LOAD';
            loadingIndicator.style.color = 'red';
        };
        
        imgContainer.appendChild(img);
        return section;
    }
});
