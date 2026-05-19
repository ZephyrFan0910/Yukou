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

// ========== IP授权咨询按钮 ==========
const licenseBtn = document.getElementById('licenseBtn');
if (licenseBtn) {
    licenseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('IP授权合作咨询：请发送邮件至 ip@yukuzhi.com 或致电 0598-1234567，我们将安排专员与您对接。');
    });
}

// ========== 形象演示按钮 ==========
const demoBtn = document.getElementById('demoBtn');
if (demoBtn) {
    demoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('演示模式：IP形象动画与3D模型展示即将开放，敬请期待！');
    });
}

// ========== 合作申请按钮 ==========
const coopBtn = document.getElementById('coopBtn');
if (coopBtn) {
    coopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('感谢您的合作意向！请填写合作表单（即将上线），或直接联系邮箱：coop@yukuzhi.com');
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

// ========== 资金透明公示弹窗 ==========
const fundLink = document.getElementById('fundTransparency');
if (fundLink) {
    fundLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('【资金透明公示】平台所有收益明细将每季度在“关于我们”页面公示，同时反哺非遗传承人及保护工作。详情请关注后续公告。');
    });
}