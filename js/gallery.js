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
    }    // Create gallery item element
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
        
        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                fullscreenModal.style.display = 'none';
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        });
        
        // Navigation buttons
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);
    }

    // Open fullscreen modal
    function openFullscreenModal(item) {
        fullscreenImage.src = item.imageSrc;
        fullscreenTitle.textContent = item.title;
        fullscreenDescription.textContent = item.description;
        fullscreenCategory.textContent = item.categoryLabel;
        
        // Find index of current image in filtered gallery
        currentImageIndex = filteredGallery.findIndex(i => i.id === item.id);
        
        fullscreenModal.style.display = 'block';
    }

    // Show next image in modal
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
        const nextItem = filteredGallery[currentImageIndex];
        updateModalContent(nextItem);
    }

    // Show previous image in modal
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
        const prevItem = filteredGallery[currentImageIndex];
        updateModalContent(prevItem);
    }    // Update modal content
    function updateModalContent(item) {
        // Create a fade effect
        fullscreenImage.style.opacity = '0';
        
        setTimeout(() => {
            fullscreenImage.src = item.imageSrc;
            // Add error handling for fullscreen images
            fullscreenImage.onerror = function() {
                this.src = `https://source.unsplash.com/random/1200x800/?${item.category}`;
                this.onerror = '';
            };
            
            fullscreenTitle.textContent = item.title;
            fullscreenDescription.textContent = item.description;
            fullscreenCategory.textContent = item.categoryLabel;
            
            fullscreenImage.style.opacity = '1';
        }, 300);
    }

    // Add lazy loading for images
    function lazyLoadImages() {
        const images = document.querySelectorAll('.gallery-item img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers that don't support Intersection Observer
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }

    // Initialize the gallery
    initGallery();
});
