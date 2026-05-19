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

// 移动端侧边栏打开时，如果有点击父级，也要支持（上面的逻辑通用）

// ========== 课程链接演示提示 ==========
const courseLinks = document.querySelectorAll('.course-link');
courseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('演示模式：课程内容即将上线，敬请期待完整慕课系统。');
    });
});

// ========== 直播提醒按钮 ==========
const liveReminder = document.querySelector('.live-reminder');
if (liveReminder) {
    liveReminder.addEventListener('click', () => {
        alert('预约功能即将上线，开播前将通过短信/邮件通知您。');
    });
}

// ========== 传承者计划报名按钮 ==========
const planBtn = document.querySelector('.plan-btn');
if (planBtn) {
    planBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('演示模式：非遗传承者计划报名通道即将开放，请关注后续公告。');
    });
}

// ========== 研学预约按钮 ==========
const reserveBtn = document.querySelector('.reserve-btn');
if (reserveBtn) {
    reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('研学预约：请拨打 0598-1234567 或发送邮件至 study@yukuzhi.com 进行预约。');
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