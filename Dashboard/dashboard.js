// dashboard.js
const userSection = document.getElementById('userSection');
const userMenu = document.getElementById('userMenu');
const chevronIcon = document.getElementById('chevronIcon');

// Toggle user menu
userSection.addEventListener('click', function(e) {
    e.stopPropagation();
    userMenu.classList.toggle('active');
    chevronIcon.style.transform = userMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!userSection.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.remove('active');
        chevronIcon.style.transform = 'rotate(0deg)';
    }
});

// Handle menu item clicks
document.querySelectorAll('.user-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        if (this.classList.contains('logout')) {
            handleLogout();
        } else {
            // Xử lý thông tin cá nhân
            window.location.href = 'profile.html'; // Hoặc link đến trang thông tin cá nhân
        }
    });
});

// Hàm xử lý đăng xuất
async function handleLogout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        try {
            // Gọi API đăng xuất
            const response = await fetch('http://localhost:8000/api/v1/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Thêm token nếu cần
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                credentials: 'include' // Nếu sử dụng cookie
            });

            if (response.ok) {
                // Xóa token hoặc session
                localStorage.removeItem('token');
                sessionStorage.clear();
                
                // Chuyển hướng về trang đăng nhập
                window.location.href = '../Register_Login/dang-nhap.html';
            } else {
                const error = await response.json();
                alert('Đăng xuất thất bại: ' + error.message);
            }
        } catch (error) {
            console.error('Lỗi khi đăng xuất:', error);
            alert('Có lỗi xảy ra khi đăng xuất. Vui lòng thử lại!');
        }
    }
}