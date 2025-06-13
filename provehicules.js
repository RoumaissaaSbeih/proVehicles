// Données des véhicules
const vehicleData = {
    'renault-master': {
        title: 'Renault Master L2H2 Grand Confort',
        price: '35 900 €',
        year: '2022',
        km: '25 000 km',
        fuel: 'Diesel',
        location: 'Paris, France',
        image: 'https://via.placeholder.com/400x300'
    },
    'mercedes-sprinter': {
        title: 'Mercedes Sprinter 319 CDI',
        price: '42 500 €',
        year: '2023',
        km: '12 000 km',
        fuel: 'Diesel',
        location: 'Lyon, France',
        image: 'https://via.placeholder.com/400x300'
    },
    'volkswagen-crafter': {
        title: 'Volkswagen Crafter 35 TDI',
        price: '38 900 €',
        year: '2024',
        km: '0 km',
        fuel: 'Diesel',
        location: 'Marseille, France',
        image: 'https://via.placeholder.com/400x300'
    },
    'peugeot-boxer': {
        title: 'Peugeot Boxer L3H2 Premium',
        price: '33 500 €',
        year: '2022',
        km: '35 000 km',
        fuel: 'Diesel',
        location: 'Toulouse, France',
        image: 'https://via.placeholder.com/400x300'
    },
    'mercedes-actros': {
        title: 'Mercedes Actros 1845 LS',
        price: '89 900 €',
        year: '2021',
        km: '150 000 km',
        fuel: 'Diesel',
        location: 'Lille, France',
        image: 'https://via.placeholder.com/400x300'
    },
    'bmw-320d': {
        title: 'BMW 320d Berline Business',
        price: '28 500 €',
        year: '2021',
        km: '45 000 km',
        fuel: 'Diesel',
        location: 'Nice, France',
        image: 'https://via.placeholder.com/400x300'
    }
};

// Fonctions pour les modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openVehicleModal(vehicleId) {
    const vehicle = vehicleData[vehicleId];
    if (vehicle) {
        document.getElementById('vehicleTitle').textContent = vehicle.title;
        document.getElementById('vehiclePrice').textContent = vehicle.price;
        document.getElementById('vehicleYear').textContent = vehicle.year;
        document.getElementById('vehicleKm').textContent = vehicle.km;
        document.getElementById('vehicleFuel').textContent = vehicle.fuel;
        document.getElementById('vehicleLocation').textContent = vehicle.location;
        document.getElementById('vehicleDetailImage').src = vehicle.image;
        document.getElementById('vehicleDetailImage').alt = vehicle.title;
    }
    openModal('vehicleModal');
}

function openLoginModal() {
    openModal('loginModal');
}

function openRegisterModal() {
    openModal('registerModal');
}

function switchToRegister() {
    closeModal('loginModal');
    openModal('registerModal');
}

function switchToLogin() {
    closeModal('registerModal');
    openModal('loginModal');
}

// Gestion des menus déroulants
function initDropdownMenus() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(navItem => {
        const navLink = navItem.querySelector('.nav-link');
        const megaMenu = navItem.querySelector('.mega-menu');
        
        if (navLink && megaMenu) {
            // Initialiser le menu comme masqué
            megaMenu.style.display = 'none';
            megaMenu.style.opacity = '0';
            megaMenu.style.transform = 'translateY(-10px)';
            megaMenu.style.transition = 'all 0.3s ease';
            
            // Variables pour gérer les timeouts
            let showTimeout;
            let hideTimeout;
            
            // Afficher le menu au survol de l'élément parent
            navItem.addEventListener('mouseenter', function() {
                clearTimeout(hideTimeout);
                showTimeout = setTimeout(() => {
                    megaMenu.style.display = 'block';
                    setTimeout(() => {
                        megaMenu.style.opacity = '1';
                        megaMenu.style.transform = 'translateY(0)';
                    }, 10);
                }, 100);
            });
            
            // Masquer le menu quand on quitte la zone
            navItem.addEventListener('mouseleave', function() {
                clearTimeout(showTimeout);
                hideTimeout = setTimeout(() => {
                    megaMenu.style.opacity = '0';
                    megaMenu.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        megaMenu.style.display = 'none';
                    }, 300);
                }, 100);
            });
            
            // Empêcher la fermeture quand on survole le mega-menu
            megaMenu.addEventListener('mouseenter', function() {
                clearTimeout(hideTimeout);
            });
            
            // Reprendre la fermeture quand on quitte le mega-menu
            megaMenu.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(() => {
                    megaMenu.style.opacity = '0';
                    megaMenu.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        megaMenu.style.display = 'none';
                    }, 300);
                }, 100);
            });
        }
    });
}

// Fermer les modals en cliquant à l'extérieur
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les menus déroulants
    initDropdownMenus();
    
    // Gestion des onglets de filtrage
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Gestion des formulaires
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Ici vous pouvez ajouter la logique de soumission
            alert('Fonctionnalité en cours de développement');
        });
    });

    // Gestion des boutons d'action des véhicules
    const contactButtons = document.querySelectorAll('.btn-contact-seller, .btn-send-message');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Fonctionnalité de contact en cours de développement');
        });
    });
});

// Animation au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});
