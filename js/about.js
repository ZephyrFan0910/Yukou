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

// ========== 通用下拉菜单交互（支持多个 .dropdown）==========
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.dropbtn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // 关闭其他所有下拉菜单
        document.querySelectorAll('.dropdown.open').forEach(d => {
            if (d !== dropdown) d.classList.remove('open');
        });
        dropdown.classList.toggle('open');
    });

    // 点击页面其他区域关闭所有下拉菜单
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    });

    // 阻止下拉内容点击冒泡，防止误关闭
    const content = dropdown.querySelector('.dropdown-content');
    if (content) {
        content.addEventListener('click', e => e.stopPropagation());
    }
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