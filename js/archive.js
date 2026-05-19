// ========== 移动端菜单切换 ==========
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// 点击导航链接后自动关闭菜单
const navLinkItems = document.querySelectorAll('.nav-links a, .dropdown-content a');
if (navLinks) {
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });
}

// ========== 非遗项目详情按钮（演示） ==========
const hakkaLinks = document.querySelectorAll('.hakka-link');
hakkaLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = link.closest('.hakka-info')?.querySelector('h3')?.innerText || '该项目';
        alert(`【演示模式】“${projectName}”的完整数字化档案正在建设中，敬请期待后续开放。`);
    });
});

// ========== 入驻申请按钮 ==========
const joinBtn = document.getElementById('joinBtn');
if (joinBtn) {
    joinBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('入驻申请通道即将开放，请发送邮件至 join@yukuzhi.com 或致电 0598-1234567 提前咨询。');
    });
}

// ========== 资金透明公示弹窗 ==========
const fundLink = document.getElementById('fundTransparency');
if (fundLink) {
    fundLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【资金透明公示】平台所有收益明细将每季度在“关于我们”页面公示，同时反哺非遗传承人及保护工作。详情请关注后续公告。');
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