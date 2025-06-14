// ハンバーガーメニューの動作
const hamburgerMenu = document.getElementById('hamburger-menu');
const navigation = document.getElementById('navigation');

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  navigation.classList.toggle('active');
});

// ナビゲーションアイテムをクリックしたらメニューを閉じる
const navigationItems = document.querySelectorAll('.navigation-item');
navigationItems.forEach(item => {
  item.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    navigation.classList.remove('active');
  });
});

// ウィンドウサイズが変更されたときの処理
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    hamburgerMenu.classList.remove('active');
    navigation.classList.remove('active');
  }
});
