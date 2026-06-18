// ========== 移动端菜单切换 ==========
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// 点击导航链接后自动关闭菜单
const navLinkItems = document.querySelectorAll('.nav-links a');
if (navLinks) {
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });
}

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

// ========== 资金透明公示按钮（页面内） ==========
const fundDetailBtn = document.getElementById('fundDetailBtn');
if (fundDetailBtn) {
    fundDetailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【收支公示】平台收益明细（按季度更新）：\n\n2025年Q1：文创销售 ¥12,340，IP授权 ¥8,000，研学 ¥5,600，合计 ¥25,940。其中30%（¥7,782）已用于传承人补助和工艺抢救。详细报表请访问公示专区（即将上线）。');
    });
}

// ========== 底部资金透明公示弹窗 ==========
const fundTransparency = document.getElementById('fundTransparency');
if (fundTransparency) {
    fundTransparency.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【资金透明公示】平台所有收益明细将每季度在“关于我们”页面公示，同时反哺非遗传承人及保护工作。详情请关注后续公告。');
    });
}