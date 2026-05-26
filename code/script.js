const images = [
    // Mountains
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/a/a3/%22Wind_Mountain%22_Columbia_R_-_NARA_-_102278851_%28page_1%29.png",
        full: "https://upload.wikimedia.org/wikipedia/commons/a/a3/%22Wind_Mountain%22_Columbia_R_-_NARA_-_102278851_%28page_1%29.png",
        author: "James Madison Alden",
        description: "\"Wind Mountain\", watercolor painting by James M. Alden (ca 1860)."
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mountains_in_snow%2C_Mountain_lake%2C_Chola_Valley%2C_Nepal%2C_Himalayas.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mountains_in_snow%2C_Mountain_lake%2C_Chola_Valley%2C_Nepal%2C_Himalayas.jpg",
        author: "Vyacheslav Argenberg",
        description: "Mountains in snow. Mountain lake. View to the east on descending from Cho La Pass into Chola Valley, 5,200 metres (17,100 ft) a. s. l. Glacial lake, rocks covered with snow."
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Paul_Bril_-_Mountain_Scene_-_WGA3197.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Paul_Bril_-_Mountain_Scene_-_WGA3197.jpg",
        author: "Paul Bril",
        description: "Mountain landscape"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/4/41/Paul_Bril_002.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/4/41/Paul_Bril_002.jpg",
        author: "Paul Bril",
        description: "Mountain landscape"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/8/88/Zagedan_Lakes%2C_Mountain_cirque%2C_Caucasus_Mountains.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/8/88/Zagedan_Lakes%2C_Mountain_cirque%2C_Caucasus_Mountains.jpg",
        author: "Vyacheslav Argenberg",
        description: "The Zagedan lakes are of ancient glacial origin. They are surrounded by karst rock formations in a mountain cirque, which represents a typical ancient glacial landform in the Caucasus Mountains."
    },
    // Beaches
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/2/2f/A_beautiful_beach_in_Cancun%2C_Mexico.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/2/2f/A_beautiful_beach_in_Cancun%2C_Mexico.jpg",
        author: "Matthew T Rader",
        description: "A beautiful beach in Cancun, Mexico"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Beautiful_beach_of_Cox%27s_Bazar.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Beautiful_beach_of_Cox%27s_Bazar.jpg",
        author: "ArifHossainFC",
        description: "Beautiful beach of Cox's Bazar"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/9/93/Beautiful_beach_of_Hoi_An_%2824675493337%29.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/9/93/Beautiful_beach_of_Hoi_An_%2824675493337%29.jpg",
        author: "dronepicr",
        description: "Beautiful beach of Hoi An, Vietnam Saigon"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Miami_Beach_-_-Beautiful_hotels.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Miami_Beach_-_-Beautiful_hotels.jpg",
        author: "Metrocraft Post Card.",
        description: "Photomechanical print (postcard) : halftone, colored"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/0/04/Miami_Beach_-_Beautiful_home.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/0/04/Miami_Beach_-_Beautiful_home.jpg",
        author: "Manley Brower Studio",
        description: "Photomechanical print (postcard) : halftone, colored"
    },
    // Art
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/b/b9/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP237166.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/b/b9/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP237166.jpg",
        author: "Kanō Tan'yū",
        description: "Japan; Handscroll; Paintings"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/6/69/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP237185.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/6/69/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP237185.jpg",
        author: "Kanō Tan'yū",
        description: "Japan; Handscroll; Paintings"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/9/9a/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP237185_CRD.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/9/9a/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP237185_CRD.jpg",
        author: "Kanō Tan'yū",
        description: "Japan; Handscroll; Paintings"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/7/70/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP238090_CRD.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/7/70/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP238090_CRD.jpg",
        author: "Kanō Tan'yū",
        description: "Japan; Handscroll; Paintings"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/0/0a/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP238093.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/0/0a/%E7%8B%A9%E9%87%8E%E6%8E%A2%E5%B9%BD%E7%AD%86_%E3%80%8E%E7%94%BB%E8%8B%91%E3%80%8F-Famous_Themes_for_Painting_Study_Known_as_%E2%80%9CThe_Garden_of_Painting%E2%80%9D_%28Gaen%29_MET_DP238093.jpg",
        author: "Kanō Tan'yū",
        description: "Japan; Handscroll; Paintings"
    },
    // Music
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bortal_%28Musical_instrument%29of_Assam.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bortal_%28Musical_instrument%29of_Assam.jpg",
        author: "आर्या जोशी",
        description: "Brahmaputra River Heritage Centre,Guwahati"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Cherja%28Musical_instrument%29of_Assam.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Cherja%28Musical_instrument%29of_Assam.jpg",
        author: "आर्या जोशी",
        description: "Brahmaputra River Heritage Centre,Guwahati"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Divje_Babe_flute_%28Late_Pleistocene_flute%29.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Divje_Babe_flute_%28Late_Pleistocene_flute%29.jpg",
        author: "Petar Milošević",
        description: "Divje Babe flute (alleged Late Pleistocene flute) dating to 43100 ± 700 BP. National Museum of Slovenia."
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kortal%28Musical_instrument%29of_Assam.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kortal%28Musical_instrument%29of_Assam.jpg",
        author: "आर्या जोशी",
        description: "Brahmaputra River Heritage Centre,Guwahati"
    },
    {
        thumb: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Musical_instruments_of_Karbi_Tribe.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Musical_instruments_of_Karbi_Tribe.jpg",
        author: "Chiring chandan",
        description: "Musical instruments of Karbi Tribe"
    }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const galleryElement = document.getElementById('gallery');
    
    // Render gallery
    images.forEach((image, index) => {
        const item = document.createElement('a');
        item.href = '#';
        item.className = 'gallery-item';
        item.onclick = (e) => {
            e.preventDefault();
            openLightbox(index);
        };
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        
        const img = document.createElement('img');
        img.src = image.thumb;
        img.alt = image.author;
        img.loading = 'lazy';
        
        imgContainer.appendChild(img);
        item.appendChild(imgContainer);
        galleryElement.appendChild(item);
    });

    // Close lightbox on clicking background
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
});

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox(e) {
    if (e) e.preventDefault();
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const img = document.getElementById('lightbox-img');
    const author = document.getElementById('lightbox-author');
    const desc = document.getElementById('lightbox-desc');
    
    const image = images[currentIndex];
    
    img.src = image.full;
    author.textContent = image.author;
    desc.textContent = image.description;
}

function nextImage(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
}

function prevImage(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
}
