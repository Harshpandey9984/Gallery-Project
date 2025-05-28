// Main gallery functionality
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const galleryContainer = document.querySelector('.gallery-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenTitle = document.getElementById('fullscreen-title');
    const fullscreenDescription = document.getElementById('fullscreen-description');
    const fullscreenCategory = document.getElementById('fullscreen-category');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Current state variables
    let currentCategory = 'all';
    let currentImageIndex = 0;
    let filteredGallery = [...galleryData];

    // Initialize gallery
    function initGallery() {
        renderGallery();
        setupEventListeners();
    }

    // Render gallery items
    function renderGallery() {
        // Filter images based on selected category
        filteredGallery = currentCategory === 'all' 
            ? [...galleryData] 
            : galleryData.filter(item => item.category === currentCategory);
        
        // Clear container before adding new items
        galleryContainer.innerHTML = '';
        
        // Create and append gallery items
        filteredGallery.forEach(item => {
            const galleryItem = createGalleryItem(item);
            galleryContainer.appendChild(galleryItem);
        });
    }
    
    // Create gallery item element
    function createGalleryItem(item) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.id = item.id;
        galleryItem.dataset.category = item.category;
        
        // Initialize with loading state
        galleryItem.innerHTML = `
            <div class="loading-indicator">Loading...</div>
            <img src="${item.imageSrc}" alt="${item.alt}" onerror="this.src='https://source.unsplash.com/random/600x400/?${item.category}'; this.onerror='';" onload="this.parentNode.querySelector('.loading-indicator').style.display='none';">
            <span class="category-badge">${item.categoryLabel}</span>
            <div class="item-overlay">
                <h3 class="item-title">${item.title}</h3>
                <p class="item-description">${item.description}</p>
            </div>
        `;
        
        return galleryItem;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Filter buttons click event
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update current category and re-render gallery
                currentCategory = category;
                renderGallery();
            });
        });
        
        // Gallery item click event (open modal)
        galleryContainer.addEventListener('click', (e) => {
            // Find the gallery item that was clicked
            const galleryItem = e.target.closest('.gallery-item');
            if (!galleryItem) return;
            
            const itemId = parseInt(galleryItem.dataset.id);
            const clickedItem = galleryData.find(item => item.id === itemId);
            
            if (clickedItem) {
                openFullscreenModal(clickedItem);
            }
        });
        
        // Close modal event
        closeModal.addEventListener('click', () => {
            fullscreenModal.style.display = 'none';
        });
        
        // Close modal when clicking outside the image
        fullscreenModal.addEventListener('click', (e) => {
            if (e.target === fullscreenModal) {
                fullscreenModal.style.display = 'none';
            }
        });
        
        // Navigation buttons in modal
        prevBtn.addEventListener('click', navigatePrev);
        nextBtn.addEventListener('click', navigateNext);
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
    }
    
    // Open fullscreen modal
    function openFullscreenModal(item) {
        // Find index of current item
        currentImageIndex = filteredGallery.findIndex(i => i.id === item.id);
        
        // Update modal content
        fullscreenImage.src = item.imageSrc;
        fullscreenTitle.textContent = item.title;
        fullscreenDescription.textContent = item.description;
        fullscreenCategory.textContent = item.categoryLabel;
        
        // Show modal
        fullscreenModal.style.display = 'flex';
    }
    
    // Navigate to previous image
    function navigatePrev() {
        currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
        updateModalContent();
    }
    
    // Navigate to next image
    function navigateNext() {
        currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
        updateModalContent();
    }
    
    // Update modal content based on current index
    function updateModalContent() {
        const item = filteredGallery[currentImageIndex];
        
        // Update modal content with animation
        fullscreenImage.style.opacity = '0';
        
        setTimeout(() => {
            fullscreenImage.src = item.imageSrc;
            fullscreenTitle.textContent = item.title;
            fullscreenDescription.textContent = item.description;
            fullscreenCategory.textContent = item.categoryLabel;
            
            fullscreenImage.style.opacity = '1';
        }, 300);
    }
    
    // Handle keyboard navigation
    function handleKeyboardNavigation(e) {
        if (fullscreenModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                navigatePrev();
            } else if (e.key === 'ArrowRight') {
                navigateNext();
            } else if (e.key === 'Escape') {
                fullscreenModal.style.display = 'none';
            }
        }
    }
    
    // Initialize gallery
    initGallery();
});
