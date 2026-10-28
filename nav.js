// 加载导航
fetch('nav.html')
.then(res => res.text())
.then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
})

// 加载页脚
fetch('footer.html')
.then(res => res.text())
.then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
})
