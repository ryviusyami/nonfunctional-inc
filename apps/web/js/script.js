console.log('Frontend is connected to script.js!');

// 发送一个请求到后端 API
fetch('https://nonfunctional-company.onrender.com/api/appointment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Test', // 传递的名字
        date: '2024-12-21' // 传递的日期
    }),
})
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data) => {
    console.log('Response from server:', data);

    // 显示返回的数据到页面上
    document.body.insertAdjacentHTML('beforeend', `<p>后端返回的消息: ${data.message || '没有返回消息'}</p>`);
})
/* 灰色注释：以下代码暂时禁用
.catch((error) => {
    console.error('Error:', error);
    document.body.insertAdjacentHTML(
        'beforeend',
        `<p style="color:red;">网络请求失败，请检查网络连接或后端服务是否正常运行。</p>`
    );
// 灰色注释结束 */

// 我们的第一个JavaScript魔法！
document.addEventListener('DOMContentLoaded', function() {
    // 1. 找到我们的元素
    const magicText = document.getElementById('magic-text');
    const magicButton = document.getElementById('magic-button');
    // 2. 准备一些魔法文字
    const messages = [
        '🎉 哇！JavaScript真的很神奇！',
        '🌟 你刚刚触发了一个事件！',
        '🚀 我们正在学习编程！',
        '💖 你做得太棒了！',
        '🎯 点击按钮看看还会发生什么！'
    ];

    let currentIndex = 0;
    // 3. 给按钮添加点击事件
    magicButton.addEventListener('click', function() {
        // 改变文字内容
        magicText.textContent = messages[currentIndex];

        // 改变文字颜色
        const colors = ['red', 'blue', 'green', 'purple', 'orange'];
        magicText.style.color = colors[currentIndex];

        // 下次显示下一条消息
        currentIndex = (currentIndex + 1) % messages.length;
    });

});