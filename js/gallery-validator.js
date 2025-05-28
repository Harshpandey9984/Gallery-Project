// Image validation script for gallery images
document.addEventListener('DOMContentLoaded', () => {
    // Create container for validation results
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '800px';
    container.style.margin = '20px auto';
    document.body.appendChild(container);
    
    // Header
    const header = document.createElement('h1');
    header.textContent = 'Gallery Image Validation';
    container.appendChild(header);
    
    const description = document.createElement('p');
    description.textContent = 'This tool validates all images in the gallery data to ensure they load correctly.';
    container.appendChild(description);
    
    // Stats container
    const statsContainer = document.createElement('div');
    statsContainer.style.display = 'flex';
    statsContainer.style.marginBottom = '20px';
    statsContainer.style.gap = '20px';
    container.appendChild(statsContainer);
    
    // Stats boxes
    const totalBox = createStatsBox('Total Images', '0', '#3498db');
    const loadedBox = createStatsBox('Successfully Loaded', '0', '#2ecc71');
    const failedBox = createStatsBox('Failed to Load', '0', '#e74c3c');
    
    statsContainer.appendChild(totalBox);
    statsContainer.appendChild(loadedBox);
    statsContainer.appendChild(failedBox);
    
    // Create category sections
    const categories = [
        { id: 'all', label: 'All Images' },
        { id: 'team-vibes', label: 'Team Vibes 🤝' },
        { id: 'creative-campaigns', label: 'Creative Campaigns 🎨' },
        { id: 'work-hard-play-hard', label: 'Work Hard, Play Hard 🥳' },
        { id: 'behind-the-scenes', label: 'Behind-The-Scenes 🎥' },
        { id: 'campus-life', label: 'Campus Life 🏫' }
    ];
    
    // Category tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.style.display = 'flex';
    tabsContainer.style.gap = '10px';
    tabsContainer.style.flexWrap = 'wrap';
    tabsContainer.style.marginBottom = '20px';
    container.appendChild(tabsContainer);
    
    // Create tabs for each category
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.textContent = category.label;
        tab.dataset.category = category.id;
        tab.style.padding = '8px 16px';
        tab.style.border = 'none';
        tab.style.borderRadius = '4px';
        tab.style.cursor = 'pointer';
        tab.style.backgroundColor = category.id === 'all' ? '#3498db' : '#f1f1f1';
        tab.style.color = category.id === 'all' ? '#fff' : '#333';
        tab.style.fontWeight = category.id === 'all' ? 'bold' : 'normal';
        
        tab.addEventListener('click', () => {
            document.querySelectorAll('[data-category-tab]').forEach(t => {
                t.style.backgroundColor = '#f1f1f1';
                t.style.color = '#333';
                t.style.fontWeight = 'normal';
            });
            
            tab.style.backgroundColor = '#3498db';
            tab.style.color = '#fff';
            tab.style.fontWeight = 'bold';
            
            showCategory(category.id);
        });
        
        tab.dataset.categoryTab = category.id;
        tabsContainer.appendChild(tab);
    });
    
    // Results container
    const resultsContainer = document.createElement('div');
    container.appendChild(resultsContainer);
    
    // Run validation
    validateImages();
    
    // Functions
    function createStatsBox(label, value, color) {
        const box = document.createElement('div');
        box.style.flex = '1';
        box.style.padding = '15px';
        box.style.borderRadius = '8px';
        box.style.backgroundColor = color;
        box.style.color = '#fff';
        box.style.textAlign = 'center';
        
        const boxValue = document.createElement('div');
        boxValue.textContent = value;
        boxValue.style.fontSize = '32px';
        boxValue.style.fontWeight = 'bold';
        boxValue.style.marginBottom = '5px';
        box.appendChild(boxValue);
        
        const boxLabel = document.createElement('div');
        boxLabel.textContent = label;
        boxLabel.style.fontSize = '14px';
        box.appendChild(boxLabel);
        
        box.dataset.statsValue = label.toLowerCase().replace(/\s/g, '-');
        
        return box;
    }
    
    function validateImages() {
        let totalImages = 0;
        let loadedImages = 0;
        let failedImages = 0;
        
        // Results by category
        const categoryResults = {};
        categories.forEach(cat => {
            categoryResults[cat.id] = {
                container: document.createElement('div'),
                images: []
            };
            
            const categoryContainer = categoryResults[cat.id].container;
            categoryContainer.style.display = cat.id === 'all' ? 'block' : 'none';
            categoryContainer.dataset.resultsCategory = cat.id;
            
            const categoryHeader = document.createElement('h2');
            categoryHeader.textContent = cat.label;
            categoryContainer.appendChild(categoryHeader);
            
            resultsContainer.appendChild(categoryContainer);
        });
        
        // Process each image
        galleryData.forEach(item => {
            totalImages++;
            
            // Create image container
            const imageContainer = document.createElement('div');
            imageContainer.style.display = 'flex';
            imageContainer.style.marginBottom = '20px';
            imageContainer.style.padding = '15px';
            imageContainer.style.borderRadius = '8px';
            imageContainer.style.border = '1px solid #ddd';
            imageContainer.style.alignItems = 'center';
            
            // Image preview
            const imagePreview = document.createElement('div');
            imagePreview.style.width = '150px';
            imagePreview.style.height = '100px';
            imagePreview.style.marginRight = '20px';
            imagePreview.style.backgroundColor = '#f5f5f5';
            imagePreview.style.borderRadius = '4px';
            imagePreview.style.overflow = 'hidden';
            imagePreview.style.position = 'relative';
            
            const loadingIndicator = document.createElement('div');
            loadingIndicator.textContent = 'Loading...';
            loadingIndicator.style.position = 'absolute';
            loadingIndicator.style.top = '50%';
            loadingIndicator.style.left = '50%';
            loadingIndicator.style.transform = 'translate(-50%, -50%)';
            imagePreview.appendChild(loadingIndicator);
            
            const img = document.createElement('img');
            img.src = item.imageSrc;
            img.alt = item.alt;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            img.onload = () => {
                loadedImages++;
                updateStats(totalImages, loadedImages, failedImages);
                
                loadingIndicator.style.display = 'none';
                imageContainer.style.borderLeft = '4px solid #2ecc71';
                statusBadge.textContent = 'LOADED';
                statusBadge.style.backgroundColor = '#2ecc71';
            };
            
            img.onerror = () => {
                failedImages++;
                updateStats(totalImages, loadedImages, failedImages);
                
                loadingIndicator.textContent = 'Failed to load';
                loadingIndicator.style.color = 'red';
                imageContainer.style.borderLeft = '4px solid #e74c3c';
                statusBadge.textContent = 'FAILED';
                statusBadge.style.backgroundColor = '#e74c3c';
            };
            
            imagePreview.appendChild(img);
            imageContainer.appendChild(imagePreview);
            
            // Image info
            const imageInfo = document.createElement('div');
            imageInfo.style.flex = '1';
            
            const imageTitle = document.createElement('h3');
            imageTitle.textContent = item.title;
            imageTitle.style.margin = '0 0 5px 0';
            imageInfo.appendChild(imageTitle);
            
            const imageCategory = document.createElement('div');
            imageCategory.textContent = item.categoryLabel;
            imageCategory.style.display = 'inline-block';
            imageCategory.style.padding = '3px 8px';
            imageCategory.style.borderRadius = '4px';
            imageCategory.style.backgroundColor = '#f1f1f1';
            imageCategory.style.fontSize = '12px';
            imageCategory.style.marginBottom = '10px';
            imageInfo.appendChild(imageCategory);
            
            const imageUrl = document.createElement('div');
            imageUrl.textContent = item.imageSrc;
            imageUrl.style.fontSize = '12px';
            imageUrl.style.color = '#666';
            imageUrl.style.marginBottom = '10px';
            imageUrl.style.wordBreak = 'break-all';
            imageInfo.appendChild(imageUrl);
            
            imageContainer.appendChild(imageInfo);
            
            // Status badge
            const statusBadge = document.createElement('div');
            statusBadge.textContent = 'CHECKING';
            statusBadge.style.backgroundColor = '#f39c12';
            statusBadge.style.color = '#fff';
            statusBadge.style.padding = '5px 10px';
            statusBadge.style.borderRadius = '4px';
            statusBadge.style.marginLeft = '10px';
            statusBadge.style.fontWeight = 'bold';
            statusBadge.style.fontSize = '12px';
            imageContainer.appendChild(statusBadge);
            
            // Add to both "all" and specific category
            categoryResults['all'].container.appendChild(imageContainer.cloneNode(true));
            categoryResults[item.category].container.appendChild(imageContainer);
            
            // Track image in category
            categoryResults[item.category].images.push(item);
        });
        
        // Update category counts
        categories.forEach(cat => {
            if (cat.id !== 'all') {
                const categoryCount = categoryResults[cat.id].images.length;
                const categoryTab = document.querySelector(`[data-category-tab="${cat.id}"]`);
                categoryTab.textContent = `${cat.label} (${categoryCount})`;
            }
        });
    }
    
    function updateStats(total, loaded, failed) {
        document.querySelector('[data-stats-value="total-images"]').querySelector('div:first-child').textContent = total;
        document.querySelector('[data-stats-value="successfully-loaded"]').querySelector('div:first-child').textContent = loaded;
        document.querySelector('[data-stats-value="failed-to-load"]').querySelector('div:first-child').textContent = failed;
    }
    
    function showCategory(categoryId) {
        document.querySelectorAll('[data-results-category]').forEach(container => {
            container.style.display = 'none';
        });
        
        document.querySelector(`[data-results-category="${categoryId}"]`).style.display = 'block';
    }
});
