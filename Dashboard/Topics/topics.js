            const topics = [
            {
                id: 1,
                title: "Giới thiệu bản thân",
                description: "Học cách nói về tên, tuổi, công việc và sở thích của bạn",
                icon: "👤",
                level: "Cơ bản",
                category: "daily"
            },
            {
                id: 2,
                title: "Đặt phòng khách sạn",
                description: "Thực hành đàm phán giá cả và yêu cầu phòng khách sạn",
                icon: "🏨",
                level: "Trung bình",
                category: "travel"
            },
            {
                id: 3,
                title: "Tại nhà hàng",
                description: "Gọi món ăn, hỏi thực đơn và thanh toán tại nhà hàng",
                icon: "🍽️",
                level: "Cơ bản",
                category: "daily"
            },
            {
                id: 4,
                title: "Phỏng vấn việc làm",
                description: "Chuẩn bị cho buổi phỏng vấn xin việc bằng tiếng Anh",
                icon: "💼",
                level: "Nâng cao",
                category: "work"
            },
            {
                id: 5,
                title: "Du lịch thành phố",
                description: "Hỏi đường, mô tả địa điểm du lịch và trải nghiệm",
                icon: "✈️",
                level: "Trung bình",
                category: "travel"
            },
            {
                id: 6,
                title: "Tại cửa hàng",
                description: "Mua sắm, hỏi giá, đổi trả hàng hóa",
                icon: "🛍️",
                level: "Cơ bản",
                category: "daily"
            },
            {
                id: 7,
                title: "Nói chuyện về công việc",
                description: "Thảo luận về công việc, dự án và đồng nghiệp",
                icon: "📊",
                level: "Trung bình",
                category: "work"
            },
            {
                id: 8,
                title: "Lễ hội và truyền thống",
                description: "Hiểu và nói về các lễ hội truyền thống khác nhau",
                icon: "🎉",
                level: "Trung bình",
                category: "culture"
            },
            {
                id: 9,
                title: "Hỏi thăm sức khỏe",
                description: "Mô tả triệu chứng và giao tiếp với bác sĩ",
                icon: "⚕️",
                level: "Cơ bản",
                category: "daily"
            },
            {
                id: 10,
                title: "Nói về gia đình",
                description: "Giới thiệu các thành viên gia đình và mối quan hệ",
                icon: "👨‍👩‍👧‍👦",
                level: "Cơ bản",
                category: "daily"
            },
            {
                id: 11,
                title: "Văn hóa doanh nghiệp",
                description: "Học cách giao tiếp trong các cuộc họp và thương lượng",
                icon: "🤝",
                level: "Nâng cao",
                category: "work"
            },
            {
                id: 12,
                title: "Nói về sở thích",
                description: "Trao đổi về các hoạt động giải trí và sở thích cá nhân",
                icon: "🎮",
                level: "Cơ bản",
                category: "daily"
            }
        ];

        let filteredTopics = topics;
        let currentCategory = 'all';

        function renderTopics(toRender) {
            const grid = document.getElementById('topicsGrid');
            grid.innerHTML = '';

            if (toRender.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1/-1;">
                        <i class="fas fa-search"></i>
                        <h2>Không tìm thấy chủ đề</h2>
                        <p>Thử tìm kiếm với từ khóa khác</p>
                    </div>
                `;
                return;
            }

            toRender.forEach(topic => {
                const card = document.createElement('div');
                card.className = 'topic-card';
                card.innerHTML = `
                    <div class="topic-icon">${topic.icon}</div>
                    <h3>${topic.title}</h3>
                    <p>${topic.description}</p>
                    <span class="topic-level">${topic.level}</span>
                    <div class="btn-group">
                        <button class="btn-learn" onclick="startLesson(${topic.id})">
                            Học ngay
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        document.getElementById('searchInput').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterTopics();
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.dataset.category;
                filterTopics();
            });
        });

        function filterTopics() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            filteredTopics = topics.filter(topic => {
                const matchesSearch = topic.title.toLowerCase().includes(searchTerm) || 
                                     topic.description.toLowerCase().includes(searchTerm);
                const matchesCategory = currentCategory === 'all' || topic.category === currentCategory;
                return matchesSearch && matchesCategory;
            });

            renderTopics(filteredTopics);
        }

        function startLesson(topicId) {
            const topic = topics.find(t => t.id === topicId);
            alert(`Bắt đầu học: ${topic.title}\n\nTính năng này sẽ được cập nhật!`);
        }

        // Initial render
        renderTopics(topics);