        // Simulate loading progress
        function simulateLoading() {
            let progress = 0;
            const bar = document.getElementById('loading-bar');
            const interval = setInterval(() => {
                progress += Math.random() * 10;
                if (progress > 100) {
                    progress = 100;
                    clearInterval(interval);
                    setTimeout(hideLoader, 200);
                }
                bar.style.width = progress + '%';
            }, 200);
        }
        
        function hideLoader() {
            const loader = document.querySelector('.loading-screen');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 200);
        }
        
        // Start loading simulation when page loads
        window.addEventListener('load', simulateLoading);
