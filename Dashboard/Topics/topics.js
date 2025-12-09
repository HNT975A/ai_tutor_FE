const topics = [
    {
        id: 1,
        title: "Giới thiệu bản thân",
        description: "Học cách nói về tên, tuổi, công việc và sở thích của bạn",
        icon: "👤",
        level: "Cơ bản",
        category: "daily",
        words: [
            {"word": "Xin chào", "meaning": "Hello"},
            {"word": "Tên", "meaning": "Name"},
            {"word": "Tuổi", "meaning": "Age"},
            {"word": "Quê quán", "meaning": "Hometown"},
            {"word": "Nghề nghiệp", "meaning": "Occupation"},
            {"word": "Sở thích", "meaning": "Hobby"},
            {"word": "Gia đình", "meaning": "Family"},
            {"word": "Quốc tịch", "meaning": "Nationality"},
            {"word": "Ngôn ngữ", "meaning": "Language"},
            {"word": "Trình độ", "meaning": "Education level"}
        ]
    },
    {
        id: 2,
        title: "Đặt phòng khách sạn",
        description: "Thực hành đàm phán giá cả và yêu cầu phòng khách sạn",
        icon: "🏨",
        level: "Trung bình",
        category: "travel",
        words: [
            {"word": "Khách sạn", "meaning": "Hotel"},
            {"word": "Đặt phòng", "meaning": "Book a room"},
            {"word": "Phòng đơn", "meaning": "Single room"},
            {"word": "Phòng đôi", "meaning": "Double room"},
            {"word": "Ngày nhận phòng", "meaning": "Check-in date"},
            {"word": "Ngày trả phòng", "meaning": "Check-out date"},
            {"word": "Giá phòng", "meaning": "Room rate"},
            {"word": "Bao gồm", "meaning": "Include"},
            {"word": "Dịch vụ", "meaning": "Service"},
            {"word": "Nhân viên", "meaning": "Staff"}
        ]
    },
    {
        id: 3,
        title: "Tại nhà hàng",
        description: "Gọi món ăn, hỏi thực đơn và thanh toán tại nhà hàng",
        icon: "🍽️",
        level: "Cơ bản",
        category: "daily",
        words: [
            {"word": "Nhà hàng", "meaning": "Restaurant"},
            {"word": "Thực đơn", "meaning": "Menu"},
            {"word": "Gọi món", "meaning": "Order food"},
            {"word": "Món khai vị", "meaning": "Appetizer"},
            {"word": "Món chính", "meaning": "Main course"},
            {"word": "Món tráng miệng", "meaning": "Dessert"},
            {"word": "Đồ uống", "meaning": "Beverage"},
            {"word": "Nước lọc", "meaning": "Water"},
            {"word": "Rượu vang", "meaning": "Wine"},
            {"word": "Bia", "meaning": "Beer"}
        ]
    },
    {
        id: 4,
        title: "Phỏng vấn việc làm",
        description: "Chuẩn bị cho buổi phỏng vấn xin việc bằng tiếng Anh",
        icon: "💼",
        level: "Nâng cao",
        category: "work",
        words: [
            {"word": "Phỏng vấn", "meaning": "Interview"},
            {"word": "CV", "meaning": "CV/Resume"},
            {"word": "Kinh nghiệm", "meaning": "Experience"},
            {"word": "Kỹ năng", "meaning": "Skill"},
            {"word": "Mức lương", "meaning": "Salary"},
            {"word": "Công ty", "meaning": "Company"},
            {"word": "Vị trí", "meaning": "Position"},
            {"word": "Điểm mạnh", "meaning": "Strength"},
            {"word": "Điểm yếu", "meaning": "Weakness"},
            {"word": "Phúc lợi", "meaning": "Benefits"}
        ]
    },
    {
        id: 5,
        title: "Du lịch thành phố",
        description: "Hỏi đường, mô tả địa điểm du lịch và trải nghiệm",
        icon: "✈️",
        level: "Trung bình",
        category: "travel",
        words: [
            {"word": "Du lịch", "meaning": "Travel"},
            {"word": "Thành phố", "meaning": "City"},
            {"word": "Địa điểm", "meaning": "Place"},
            {"word": "Tham quan", "meaning": "Sightseeing"},
            {"word": "Hướng dẫn viên", "meaning": "Tour guide"},
            {"word": "Bản đồ", "meaning": "Map"},
            {"word": "Phương tiện", "meaning": "Transportation"},
            {"word": "Xe buýt", "meaning": "Bus"},
            {"word": "Tàu điện", "meaning": "Train"},
            {"word": "Taxi", "meaning": "Taxi"}
        ]
    },
    {
        id: 6,
        title: "Tại cửa hàng",
        description: "Mua sắm, hỏi giá, đổi trả hàng hóa",
        icon: "🛍️",
        level: "Cơ bản",
        category: "daily",
        words: [
            {"word": "Cửa hàng", "meaning": "Shop"},
            {"word": "Mua sắm", "meaning": "Shopping"},
            {"word": "Mua", "meaning": "Buy"},
            {"word": "Bán", "meaning": "Sell"},
            {"word": "Giá", "meaning": "Price"},
            {"word": "Giảm giá", "meaning": "Discount"},
            {"word": "Thanh toán", "meaning": "Payment"},
            {"word": "Tiền mặt", "meaning": "Cash"},
            {"word": "Thẻ", "meaning": "Card"},
            {"word": "Hóa đơn", "meaning": "Bill"}
        ]
    },
    {
        id: 7,
        title: "Chuyện công việc",
        description: "Thảo luận về công việc, dự án và đồng nghiệp",
        icon: "📊",
        level: "Trung bình",
        category: "work",
        words: [
            {"word": "Công việc", "meaning": "Work"},
            {"word": "Dự án", "meaning": "Project"},
            {"word": "Đồng nghiệp", "meaning": "Colleague"},
            {"word": "Sếp", "meaning": "Boss"},
            {"word": "Cuộc họp", "meaning": "Meeting"},
            {"word": "Thời hạn", "meaning": "Deadline"},
            {"word": "Báo cáo", "meaning": "Report"},
            {"word": "Kế hoạch", "meaning": "Plan"},
            {"word": "Mục tiêu", "meaning": "Goal"},
            {"word": "Thành công", "meaning": "Success"}
        ]
    },
    {
        id: 8,
        title: "Lễ hội và truyền thống",
        description: "Hiểu và nói về các lễ hội truyền thống khác nhau",
        icon: "🎉",
        level: "Trung bình",
        category: "culture",
        words: [
            {"word": "Lễ hội", "meaning": "Festival"},
            {"word": "Tết", "meaning": "Lunar New Year"},
            {"word": "Trung thu", "meaning": "Mid-Autumn Festival"},
            {"word": "Bánh chưng", "meaning": "Chung cake"},
            {"word": "Múa lân", "meaning": "Lion dance"},
            {"word": "Pháo hoa", "meaning": "Fireworks"},
            {"word": "Lì xì", "meaning": "Lucky money"},
            {"word": "Chúc Tết", "meaning": "New Year wishes"},
            {"word": "Hoa đào", "meaning": "Peach blossom"},
            {"word": "Câu đối", "meaning": "Parallel sentences"}
        ]
    }
];

let filteredTopics = topics;
let currentCategory = 'all';
let currentTopic = null;
let selectedWord = null;
let selectedMeaning = null;
let userMatches = [];

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
                <button class="btn-learn" onclick="startMatchingGame(${topic.id})">
                    Học ngay
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function startMatchingGame(topicId) {
    currentTopic = topics.find(t => t.id === topicId);
    if (!currentTopic) return;

    document.getElementById('modalTopicName').textContent = currentTopic.title;
    document.getElementById('learningModal').style.display = 'block'; // ĐỔI matchingModal -> learningModal
    
    // Mặc định hiển thị tab nối từ
    showGameTab('matching');
}
function closeLearningModal() { // ĐỔI TÊN HÀM
    document.getElementById('learningModal').style.display = 'none'; // ĐỔI matchingModal -> learningModal
    resetGame();
}

function initWordMatchingGame() {
    const wordsColumn = document.getElementById('wordsColumn');
    const meaningsColumn = document.getElementById('meaningsColumn');
    const connectionsDisplay = document.getElementById('connectionsDisplay');
    
    wordsColumn.innerHTML = '';
    meaningsColumn.innerHTML = '';
    connectionsDisplay.innerHTML = '<p>Chọn từ tiếng Việt và nghĩa tiếng Anh tương ứng</p>';
    
    selectedWord = null;
    selectedMeaning = null;
    userMatches = [];

    // Shuffle words
    const shuffledWords = [...currentTopic.words].sort(() => Math.random() - 0.5);
    const shuffledMeanings = [...currentTopic.words].sort(() => Math.random() - 0.5);

    // Create word items
    shuffledWords.forEach((wordObj, index) => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.textContent = wordObj.word;
        wordItem.dataset.word = wordObj.word;
        wordItem.onclick = () => selectWord(wordItem, wordObj.word);
        wordsColumn.appendChild(wordItem);
    });

    // Create meaning items
    shuffledMeanings.forEach((wordObj, index) => {
        const meaningItem = document.createElement('div');
        meaningItem.className = 'meaning-item';
        meaningItem.textContent = wordObj.meaning;
        meaningItem.dataset.meaning = wordObj.meaning;
        meaningItem.onclick = () => selectMeaning(meaningItem, wordObj.meaning);
        meaningsColumn.appendChild(meaningItem);
    });

    // Clear result message
    document.getElementById('resultMessage').innerHTML = '';
}

function selectWord(wordElement, word) {
    // Reset previous selection
    document.querySelectorAll('.word-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    wordElement.classList.add('selected');
    selectedWord = word;
    
    checkForMatch();
}

function selectMeaning(meaningElement, meaning) {
    // Reset previous selection
    document.querySelectorAll('.meaning-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    meaningElement.classList.add('selected');
    selectedMeaning = meaning;
    
    checkForMatch();
}

function checkForMatch() {
    if (selectedWord && selectedMeaning) {
        // Find the correct word object
        const correctWord = currentTopic.words.find(w => w.word === selectedWord);
        
        if (correctWord && correctWord.meaning === selectedMeaning) {
            // Correct match
            userMatches.push({ word: selectedWord, meaning: selectedMeaning });
            
            // Mark items as matched
            document.querySelectorAll('.word-item').forEach(item => {
                if (item.dataset.word === selectedWord) {
                    item.classList.add('matched');
                    item.classList.remove('selected');
                }
            });
            
            document.querySelectorAll('.meaning-item').forEach(item => {
                if (item.dataset.meaning === selectedMeaning) {
                    item.classList.add('matched');
                    item.classList.remove('selected');
                }
            });
            
            // Update connections display
            updateConnectionsDisplay();
            
            // Reset selections
            selectedWord = null;
            selectedMeaning = null;
            
            // Check if all matches are done
            if (userMatches.length === currentTopic.words.length) {
                document.getElementById('resultMessage').innerHTML = 
                    '<div class="result-message result-success">Chúc mừng! Bạn đã nối đúng tất cả! 🎉</div>';
            }
        } else {
            // Wrong match - show error temporarily
            document.querySelectorAll('.word-item.selected, .meaning-item.selected').forEach(item => {
                item.classList.add('error');
            });
            
            setTimeout(() => {
                document.querySelectorAll('.word-item.selected, .meaning-item.selected').forEach(item => {
                    item.classList.remove('selected', 'error');
                });
                selectedWord = null;
                selectedMeaning = null;
            }, 1000);
        }
    }
}

function updateConnectionsDisplay() {
    const connectionsDisplay = document.getElementById('connectionsDisplay');
    connectionsDisplay.innerHTML = '';
    
    if (userMatches.length === 0) {
        connectionsDisplay.innerHTML = '<p>Chọn từ tiếng Việt và nghĩa tiếng Anh tương ứng</p>';
        return;
    }
    
    userMatches.forEach(match => {
        const connectionPair = document.createElement('div');
        connectionPair.className = 'connection-pair';
        connectionPair.textContent = `${match.word} = ${match.meaning}`;
        connectionsDisplay.appendChild(connectionPair);
    });
}

function checkMatches() {
    const resultMessage = document.getElementById('resultMessage');
    
    if (userMatches.length === currentTopic.words.length) {
        resultMessage.innerHTML = '<div class="result-message result-success">Chúc mừng! Tất cả đều đúng! 🎉</div>';
    } else {
        const remaining = currentTopic.words.length - userMatches.length;
        resultMessage.innerHTML = `<div class="result-message result-error">Còn ${remaining} từ chưa được nối. Hãy tiếp tục!</div>`;
    }
}

function resetGame() {
    initWordMatchingGame();
}

// Event Listeners
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

// Close modal when clicking outside
document.getElementById('learningModal').addEventListener('click', function(e) { // ĐỔI matchingModal -> learningModal
    if (e.target === this) {
        closeLearningModal(); // ĐỔI closeMatchingGame -> closeLearningModal
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLearningModal(); // ĐỔI closeMatchingGame -> closeLearningModal
    }
});
// Initial render
renderTopics(topics);
// ========== PHẦN PHÁT ÂM ==========

let currentWordIndex = 0;

// Hàm chuyển tab giữa nối từ và phát âm
function showGameTab(tabName) {
    console.log('Chuyển sang tab:', tabName);
    
    // Cập nhật tab active
    document.querySelectorAll('.game-tab').forEach(tab => {
        tab.classList.remove('active');
    });
        document.querySelectorAll('.game-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === tabName) {
            tab.classList.add('active');
        }
    });
    
    // Cập nhật nội dung active
    document.querySelectorAll('.game-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}Game`).classList.add('active');
    
    // Khởi tạo game tương ứng - THÊM ĐOẠN NÀY
    if (tabName === 'matching') {
        initWordMatchingGame();
    } else if (tabName === 'pronunciation') {
        initPronunciationGame();
    }
    document.querySelectorAll('.game-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === tabName) {
            tab.classList.add('active');
        }
    });
    
    // Cập nhật nội dung active
    document.querySelectorAll('.game-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}Game`).classList.add('active');
    
    // Khởi tạo game tương ứng
    if (tabName === 'matching') {
        initWordMatchingGame();
    } else if (tabName === 'pronunciation') {
        initPronunciationGame();
    }
}
// Khởi tạo phát âm
function initPronunciationGame() {
    console.log('Đang khởi tạo game phát âm...');
    
    const wordsList = document.getElementById('wordsList');
    if (!wordsList) {
        console.error('Không tìm thấy danh sách từ!');
        return;
    }
    
    wordsList.innerHTML = '';

    // Reset recording khi chuyển từ - THÊM DÒNG NÀY
    deleteRecording();

    // Tạo danh sách từ
    currentTopic.words.forEach((wordObj, index) => {
        const wordItem = document.createElement('div');
        wordItem.className = 'list-word-item';
        wordItem.textContent = wordObj.word;
        wordItem.onclick = () => {
            showWordDetails(index);
            deleteRecording(); // Reset recording khi chuyển từ mới - THÊM DÒNG NÀY
        };
        wordsList.appendChild(wordItem);
    });

    // Hiển thị từ đầu tiên
    showWordDetails(0);
}
// Hiển thị chi tiết từ
function showWordDetails(index) {
    currentWordIndex = index;
    const wordObj = currentTopic.words[index];

    // Cập nhật thẻ từ
    document.getElementById('currentEnglish').textContent = wordObj.meaning;
    document.getElementById('currentVietnamese').textContent = wordObj.word;
    document.getElementById('currentMeaning').textContent = getWordExample(wordObj.word);

    // Cập nhật trạng thái active trong danh sách
    document.querySelectorAll('.list-word-item').forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    // Cập nhật tiến độ
    document.getElementById('progressInfo').textContent = 
        `${index + 1} / ${currentTopic.words.length}`;
}

// Lấy ví dụ cho từ
function getWordExample(word) {
    const examples = {
        "Xin chào": "Xin chào, rất vui được gặp bạn",
        "Tên": "Tên tôi là Minh",
        "Tuổi": "Tôi 25 tuổi",
        "Quê quán": "Quê tôi ở Hà Nội",
        "Nghề nghiệp": "Tôi là giáo viên",
        "Sở thích": "Sở thích của tôi là đọc sách",
        "Gia đình": "Gia đình tôi có 4 người",
        "Quốc tịch": "Tôi là người Việt Nam",
        "Ngôn ngữ": "Tôi nói được tiếng Anh và tiếng Nhật",
        "Trình độ": "Tôi có bằng đại học",
        "Khách sạn": "Khách sạn này rất đẹp",
        "Đặt phòng": "Tôi muốn đặt phòng 2 đêm",
        "Phòng đơn": "Cho tôi một phòng đơn",
        "Phòng đôi": "Chúng tôi cần phòng đôi",
        "Nhà hàng": "Nhà hàng này phục vụ rất tốt",
        "Thực đơn": "Cho tôi xem thực đơn",
        "Gọi món": "Chúng tôi đã sẵn sàng gọi món",
        "Phỏng vấn": "Tôi có buổi phỏng vấn vào sáng mai",
        "Kinh nghiệm": "Tôi có 5 năm kinh nghiệm",
        "Du lịch": "Tôi thích đi du lịch nước ngoài",
        "Mua sắm": "Tôi thích đi mua sắm vào cuối tuần",
        "Cửa hàng": "Cửa hàng này bán quần áo đẹp",
        "Giá": "Giá cả rất hợp lý",
        "Giảm giá": "Đang có chương trình giảm giá",
        "Thanh toán": "Tôi thanh toán bằng thẻ tín dụng",
        "Công việc": "Công việc của tôi rất thú vị",
        "Dự án": "Chúng tôi đang làm dự án mới",
        "Đồng nghiệp": "Đồng nghiệp của tôi rất thân thiện",
        "Lễ hội": "Lễ hội này rất đặc sắc",
        "Tết": "Tết là dịp sum họp gia đình",
        "Trung thu": "Trẻ em thích rước đèn Trung thu"
    };
    
}

// Phát âm tiếng Anh
function speakEnglish() {
    // Kiểm tra nếu đang phát thì không làm gì cả
    if (speechSynthesis.speaking) {
        console.log('Đang phát âm thanh, không phát lại');
        return;
    }
    
    const wordObj = currentTopic.words[currentWordIndex];
    const text = wordObj.meaning;
    const btn = document.getElementById('englishBtn');
    
    if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn không hỗ trợ chức năng phát âm.');
        return;
    }
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner audio-loading"></i> Đang phát...';
    
    // Dừng phát âm cũ
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Tìm giọng đọc tiếng Anh
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => 
        voice.lang === 'en-US' || voice.lang.startsWith('en-')
    );
    
    if (englishVoice) {
        utterance.voice = englishVoice;
    }
    
    utterance.onend = function() {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-volume-up"></i> Phát âm';
    };
    
    utterance.onerror = function(event) {
        console.error('Lỗi phát âm:', event);
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-volume-up"></i> Phát âm';
        
        // Chỉ hiện lỗi nếu không phải do cancel
        if (event.error !== 'interrupted') {
            alert('Có lỗi khi phát âm. Vui lòng thử lại.');
        }
    };
    
    speechSynthesis.speak(utterance);
    
    // Timeout an toàn - GIẢM XUỐNG 2 GIÂY
    setTimeout(() => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-volume-up"></i> Phát âm';
        }
    }, 2000);
}

// Chuyển từ tiếp theo
function nextWord() {
    if (currentWordIndex < currentTopic.words.length - 1) {
        showWordDetails(currentWordIndex + 1);
    } else {
        // Quay lại từ đầu
        showWordDetails(0);
    }
}

// Chuyển từ trước đó
function prevWord() {
    if (currentWordIndex > 0) {
        showWordDetails(currentWordIndex - 1);
    } else {
        // Chuyển đến từ cuối
        showWordDetails(currentTopic.words.length - 1);
    }
}

// Load voices
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = function() {
        console.log('Đã tải giọng đọc:', speechSynthesis.getVoices().length);
    };
}

// Đóng modal
function closeMatchingGame() {
    document.getElementById('matchingModal').style.display = 'none';
    resetGame();
}
// ========== BIẾN CHO PHẦN GHI ÂM ==========
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let recordingTimer = null;
let recordingStartTime = 0;
let currentRecording = null;

// ========== HÀM GHI ÂM ==========

function startRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Trình duyệt của bạn không hỗ trợ ghi âm. Vui lòng dùng Chrome, Firefox hoặc Edge.');
        return;
    }

    const recordBtn = document.getElementById('recordBtn');
    const playBtn = document.getElementById('playRecordBtn');
    const deleteBtn = document.getElementById('deleteRecordBtn');
    const timer = document.getElementById('recordingTimer');
    const feedback = document.getElementById('recordingFeedback');

    if (isRecording) {
        stopRecording();
        return;
    }

    // Reset
    audioChunks = [];
    currentRecording = null;

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                currentRecording = URL.createObjectURL(audioBlob);
                
                // Cập nhật UI
                recordBtn.innerHTML = '<i class="fas fa-microphone"></i> Ghi âm lại';
                recordBtn.classList.remove('recording');
                playBtn.disabled = false;
                deleteBtn.disabled = false;
                
                // Hiển thị feedback
                const duration = Math.round((Date.now() - recordingStartTime) / 1000);
                feedback.innerHTML = `
                    <p class="feedback-text">✅ Đã ghi âm thành công!</p>
                    <p class="feedback-time">Thời lượng: ${duration} giây</p>
                    <p class="feedback-time">Hãy nghe lại và so sánh với phát âm mẫu</p>
                `;
                feedback.className = 'recording-feedback recorded';
                
                // Dừng stream
                stream.getTracks().forEach(track => track.stop());
            };

            // Bắt đầu ghi âm
            mediaRecorder.start();
            isRecording = true;
            recordingStartTime = Date.now();
            
            // Cập nhật UI
            recordBtn.innerHTML = '<i class="fas fa-stop"></i> Dừng ghi âm';
            recordBtn.classList.add('recording');
            playBtn.disabled = true;
            deleteBtn.disabled = true;
            feedback.innerHTML = '<p class="feedback-text">🎤 Đang ghi âm... Nói từ vào micro</p>';
            feedback.className = 'recording-feedback recording';
            
            // Bắt đầu đếm thời gian
            startTimer();
            startVisualizer();
        })
        .catch(error => {
            console.error('Lỗi truy cập micro:', error);
            alert('Không thể truy cập micro. Vui lòng cho phép quyền sử dụng micro và thử lại.');
        });
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        stopTimer();
        stopVisualizer();
    }
}

function playRecording() {
    if (!currentRecording) return;

    const audio = new Audio(currentRecording);
    const playBtn = document.getElementById('playRecordBtn');
    
    playBtn.innerHTML = '<i class="fas fa-pause"></i> Đang phát...';
    playBtn.disabled = true;

    audio.onended = () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i> Nghe lại';
        playBtn.disabled = false;
    };

    audio.play();
}

function deleteRecording() {
    if (currentRecording) {
        URL.revokeObjectURL(currentRecording);
        currentRecording = null;
    }

    const recordBtn = document.getElementById('recordBtn');
    const playBtn = document.getElementById('playRecordBtn');
    const deleteBtn = document.getElementById('deleteRecordBtn');
    const feedback = document.getElementById('recordingFeedback');
    const timer = document.getElementById('recordingTimer');

    // Reset UI
    recordBtn.innerHTML = '<i class="fas fa-microphone"></i> Bắt đầu ghi âm';
    recordBtn.classList.remove('recording');
    playBtn.disabled = true;
    deleteBtn.disabled = true;
    timer.textContent = '00:00';
    feedback.innerHTML = '<p>Ghi âm để so sánh với phát âm chuẩn</p>';
    feedback.className = 'recording-feedback';
}

// ========== TIMER & VISUALIZER ==========

function startTimer() {
    const timer = document.getElementById('recordingTimer');
    recordingStartTime = Date.now();
    
    recordingTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        timer.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    if (recordingTimer) {
        clearInterval(recordingTimer);
        recordingTimer = null;
    }
}

function startVisualizer() {
    const bars = document.querySelectorAll('.visualizer-bar');
    let animationFrame;
    let startTime = Date.now();
    
    function updateVisualizer() {
        if (!isRecording) {
            cancelAnimationFrame(animationFrame);
            bars.forEach(bar => {
                bar.style.height = '5px';
                bar.classList.remove('active');
            });
            return;
        }
        
        const elapsed = (Date.now() - startTime) * 0.001; // Thời gian tính bằng giây
        
        bars.forEach((bar, index) => {
            // Mỗi bar có frequency và phase khác nhau
            const frequency = 1 + index * 0.3;
            const phase = index * 0.5;
            
            // Sử dụng multiple sine waves để tạo hiệu ứng tự nhiên
            const wave1 = Math.sin(elapsed * frequency + phase);
            const wave2 = Math.sin(elapsed * (frequency + 0.7) + phase * 2);
            const wave3 = Math.sin(elapsed * (frequency + 1.2) + phase * 3);
            
            const combinedWave = (wave1 + wave2 + wave3) / 3;
            const normalizedWave = (combinedWave + 1) / 2; // Chuyển từ [-1,1] sang [0,1]
            
            const height = 5 + normalizedWave * 40;
            bar.style.height = `${height}px`;
            
            // Đổi màu dựa trên intensity
            if (normalizedWave > 0.7) {
                bar.classList.add('active');
            } else {
                bar.classList.remove('active');
            }
        });
        
        animationFrame = requestAnimationFrame(updateVisualizer);
    }
    
    animationFrame = requestAnimationFrame(updateVisualizer);
}

function stopVisualizer() {
    const bars = document.querySelectorAll('.visualizer-bar');
    
    // Smooth transition khi dừng
    bars.forEach((bar, index) => {
        const currentHeight = parseInt(bar.style.height) || 5;
        const targetHeight = 5;
        const duration = 400 + index * 30; // Stagger effect
        
        bar.style.transition = `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        bar.style.height = `${targetHeight}px`;
        bar.classList.remove('active');
    });
    
    // Reset transition
    setTimeout(() => {
        bars.forEach(bar => {
            bar.style.transition = '';
        });
    }, 800);
}