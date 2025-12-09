// recording.js
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let recordingTimer = null;
let recordingStartTime = 0;
let currentRecording = null;

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