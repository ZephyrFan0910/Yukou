// 移动端菜单切换
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// 购物车按钮提示（演示模式）
const cartBtns = document.querySelectorAll('.cart-btn');
cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('演示模式：文创商品即将上线，敬请期待正版购买渠道。');
    });
});

// 资金透明公示弹窗
const fundLink = document.getElementById('fundTransparency');
if (fundLink) {
    fundLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【资金透明公示】平台所有收益明细将每季度在“关于我们”页面公示，同时反哺非遗传承人及保护工作。详情请关注后续公告。');
    });
}

/*
// Banner 鼠标滚动跳过效果：向下滚动时自动滚动到下一个模块
const bannerSection = document.querySelector('.hero-banner');
const nextSection = document.querySelector('.role-section');  // “我是谁？”模块

if (bannerSection && nextSection) {
    let scrollTimer = null;

    bannerSection.addEventListener('wheel', function(e) {
        // 只处理向下滚动（deltaY > 0）
        if (e.deltaY > 0) {
            e.preventDefault();  // 阻止默认滚动
            if (scrollTimer) return;  // 防抖，避免多次触发

            scrollTimer = setTimeout(() => {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                scrollTimer = null;
            }, 100);
        }
    }, { passive: false });  // 必须设置 passive: false 才能调用 preventDefault
}
*/

// ========== Banner 轮播 ==========
// ========== Banner 纯图片轮播（无视频） ==========
(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
        initCarousel();
    }

    function initCarousel() {
        const slides = document.querySelectorAll('.hero-carousel-slide');
        const dotsContainer = document.querySelector('.hero-carousel-dots');
        if (!slides.length || !dotsContainer) return;

        let currentIndex = 0;
        let autoTimer = null;
        const delay = 4000;

        // 生成轮播点
        dotsContainer.innerHTML = '';
        const dots = [];
        slides.forEach((slide, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', (function(index) {
                return function() {
                    stopAutoPlay();
                    goToSlide(index);
                    startAutoPlay();
                };
            })(idx));
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        // 切换函数（无视频控制）
        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            currentIndex = index;
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function startAutoPlay() {
            if (autoTimer) clearInterval(autoTimer);
            autoTimer = setInterval(nextSlide, delay);
        }

        function stopAutoPlay() {
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
        }

        // 鼠标悬停控制
        const carouselContainer = document.querySelector('.hero-carousel');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoPlay);
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
            carouselContainer.addEventListener('touchstart', stopAutoPlay);
            carouselContainer.addEventListener('touchend', startAutoPlay);
        }

        // ⭐ 关键：立即显示第一张幻灯片
        goToSlide(0);

        // 启动自动轮播
        startAutoPlay();

        // 页面可见性变化处理（仅恢复自动播放，无视频逻辑）
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });
    }
})();

// ========== 通用下拉菜单交互（支持多个 .dropdown）==========
// ========== 三创赛电商标准：下拉菜单丝滑防抖交互 ==========
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const content = dropdown.querySelector('.dropdown-content');
    if (!content) return;

    let hideTimeoutId;

    // 鼠标移入：立即显示
    dropdown.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeoutId);

        // 第一步：让元素存在于页面流中
        content.style.display = 'block';

        // 第二步：使用一个小延迟触发重绘，从而激活 CSS 的 active 动画
        setTimeout(() => {
            content.classList.add('active');
        }, 10);
    });

    // 鼠标移出：防抖延迟隐藏
    dropdown.addEventListener('mouseleave', function() {
        hideTimeoutId = setTimeout(() => {
            // 第一步：移除 active 类，触发 CSS 下沉变透明动画
            content.classList.remove('active');

            // 第二步：等动画播完（300ms），彻底隐藏元素避免阻挡鼠标
            setTimeout(() => {
                if (!content.classList.contains('active')) {
                    content.style.display = 'none';
                }
            }, 300);
        }, 150); // 150ms 的防抖时间
    });
});