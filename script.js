// Kod sedia ada
let currentPhotoIndex = 0;
let currentWishIndex = 0;
const totalPhotos = 5;

// Fungsi untuk mencipta kelopak bunga
function createPetals() {
    const colors = [
        '#ffcdd2', // Pink muda
        '#f8bbd0', // Pink jambu
        '#ffffff', // Putih
        '#fce4ec', // Pink sangat muda
        '#ff80ab'  // Pink terang
    ];

    for (let i = 0; i < 3; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';

        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.left = Math.random() * 100 + 'px';
        petal.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

        flower.appendChild(petal);
        document.body.appendChild(flower);

        // Buang bunga selepas animasi tamat
        setTimeout(() => {
            flower.remove();
        }, 10000);
    }
}

// Cipta bunga baharu setiap 300ms
setInterval(createPetals, 300);

function createFloatingFlowers() {
    const flower = document.createElement('div');
    flower.className = 'floating-flower';
    
    // Tetapkan posisi rawak
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = Math.random() * window.innerHeight + 'px';
    
    // Tetapkan saiz rawak
    const size = 15 + Math.random() * 15;
    flower.style.fontSize = size + 'px';
    
    // Tetapkan kelajuan animasi rawak
    flower.style.animationDuration = 3 + Math.random() * 4 + 's';
    
    document.body.appendChild(flower);
    
    // Buang bunga selepas 6 saat
    setTimeout(() => {
        flower.remove();
    }, 6000);
}

// Cipta bunga baharu setiap 500ms
setInterval(createFloatingFlowers, 500);

// Kod sedia ada untuk kad
document.querySelector('.card').addEventListener('click', function(e) {
    // Jangan flip kad jika klik pada butang navigasi
    if (!e.target.closest('.navigation')) {
        this.classList.toggle('open');
    }
});

function nextPhoto(e) {
    // Hentikan perambatan acara klik
    e.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
    updatePhoto();
    nextWish();
}

function prevPhoto(e) {
    // Hentikan perambatan acara klik
    e.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
    updatePhoto();
    prevWish();
}

function updatePhoto() {
    const photo = document.getElementById('currentPhoto');
    photo.src = `images/photo${currentPhotoIndex + 1}.jpg`;
}

function nextWish() {
    const wishes = document.querySelectorAll('.wish');
    wishes[currentWishIndex].classList.remove('active');
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
    wishes[currentWishIndex].classList.add('active');
}

function prevWish() {
    const wishes = document.querySelectorAll('.wish');
    wishes[currentWishIndex].classList.remove('active');
    currentWishIndex = (currentWishIndex - 1 + wishes.length) % wishes.length;
    wishes[currentWishIndex].classList.add('active');
}

// Kod untuk bunga terapung
function createFloatingFlowers() {
    const flower = document.createElement('div');
    flower.className = 'floating-flower';
    
    // Tetapkan posisi rawak
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = Math.random() * window.innerHeight + 'px';
    
    // Tetapkan saiz rawak
    const size = 15 + Math.random() * 15;
    flower.style.fontSize = size + 'px';
    
    // Tetapkan kelajuan animasi rawak
    flower.style.animationDuration = 3 + Math.random() * 4 + 's';
    
    document.body.appendChild(flower);
    
    // Buang bunga selepas 6 saat
    setTimeout(() => {
        flower.remove();
    }, 6000);
}

// Cipta bunga baharu setiap 500ms
setInterval(createFloatingFlowers, 500);

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});