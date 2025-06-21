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

// モバイル・タブレット用のスクロールアニメーション
function checkInView() {
  // 768px以下の場合のみ実行
  if (window.innerWidth <= 768) {
    const biographyItems = document.querySelectorAll('.biography-content-item');
    const skillsItems = document.querySelectorAll('.skills-content');
    const windowHeight = window.innerHeight;
    const centerThreshold = windowHeight * 0.6; // 画面の60%の位置
    
    biographyItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      
      if (itemCenter <= centerThreshold && itemCenter >= windowHeight * 0.4) {
        item.classList.add('in-view');
      } else {
        item.classList.remove('in-view');
      }
    });
    
    skillsItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      
      if (itemCenter <= centerThreshold && itemCenter >= windowHeight * 0.4) {
        item.classList.add('in-view');
      } else {
        item.classList.remove('in-view');
      }
    });
  } else {
    // PC画面サイズでは in-view クラスを削除
    document.querySelectorAll('.biography-content-item, .skills-content').forEach(item => {
      item.classList.remove('in-view');
    });
  }
}

// スクロールイベントリスナー
window.addEventListener('scroll', checkInView);
window.addEventListener('resize', checkInView);

// 初期チェック
checkInView();
