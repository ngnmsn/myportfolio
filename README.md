# My Portfolio Website

Shin Naganuma（長沼 伸）のポートフォリオサイトです。バックエンドエンジニアとしての経歴、スキル、アカウント情報を紹介しています。

## 🌐 サイト概要

レスポンシブデザインに対応したシングルページアプリケーション（SPA）形式のポートフォリオサイトです。PC、タブレット、スマートフォンの全デバイスで最適な表示を実現しています。

## 🎨 デザイン仕様

### カラーパレット
- **プライマリカラー**: `hsl(215 32% 37%)` - 落ち着いたブルーグレー
- **背景色**: `hsl(0 0% 100%)` - ピュアホワイト
- **グラデーション**: 90度線形グラデーション（プライマリカラーベース）

### タイポグラフィ
- **フォントファミリー**: Roboto, Noto Sans JP
- **文字間隔**: 0.1rem（基本）
- **フォントウェイト**: 400（標準）, 600（中太）, 700（太字）

### レイアウト
- **最大コンテンツ幅**: 47rem（752px）
- **境界線半径**: 1rem（基本）
- **シャドウ**: `0rem 0.25rem 0.25rem hsl(0 0% 0% / 25%)`

## 📱 レスポンシブデザイン

### ブレイクポイント
- **デスクトップ・タブレット**: 769px以上
- **スマートフォン（大）**: 480px〜768px
- **スマートフォン（小）**: 480px以下

### 主な対応内容
- **ナビゲーション**: スマートフォンではハンバーガーメニューに変更
- **レイアウト**: 縦配置への変更、適切な余白調整
- **フォントサイズ**: 画面サイズに応じた最適化
- **コンテンツ**: グリッドレイアウトの列数調整

## 🛠 技術スタック

### フロントエンド
- **HTML5**: セマンティックなマークアップ
- **CSS3**: CSS変数、Flexbox、Grid Layout、Media Queries
- **JavaScript**: ES6+、DOM操作

### 特徴
- **完全レスポンシブ**: 全デバイス対応
- **軽量**: 外部ライブラリ不使用
- **アクセシブル**: セマンティックHTML使用
- **高速**: 最適化されたCSS

## 📁 ファイル構成

```
myportfolio/
├── index.html          # メインHTMLファイル
├── main.css            # スタイルシート
├── main.js             # JavaScript
├── README.md           # このファイル
└── img/                # 画像アセット
    └── *.*             # プロフィール画像、 技術スキルアイコン、SNSアイコン
```

## 🎯 セクション構成

### 1. ヘッダー
- ナビゲーションバー
- レスポンシブハンバーガーメニュー

### 2. ポートレート
- プロフィール画像
- 名前（日本語・英語）
- 職業

### 3. About
- 自己紹介文（日本語・英語）

### 4. Biography
- タイムライン形式の経歴
- 縦線と円形ポイントによる視覚的表現

### 5. Skills
- 技術スキル一覧
- 経験年数バー表示
- 技術アイコン

### 6. Accounts
- GitHub、Twitter、Qiitaリンク

### 7. フッター
- コピーライト表示

## 🚀 特別な機能

### インタラクティブ要素
- **ハンバーガーメニュー**: スムーズなアニメーション
- **レスポンシブナビゲーション**: 画面サイズに応じた表示切り替え
- **スキル経験バー**: 視覚的な経験年数表示

### デザインハイライト
- **タイムライン**: Biography セクションの動的縦線
- **グラデーション**: ヘッダー・フッターの美しいグラデーション
- **シャドウエフェクト**: 立体感のあるデザイン

## 🔧 カスタマイズ

### CSS変数を使用した簡単なテーマ変更
```css
:root {
    --primary-color: hsl(215 32% 37%);
    --content-width: 47rem;
    --border-radius: 1rem;
    /* その他の変数... */
}
```

## 📄 ライセンス

© 2025 Shin Naganuma. All Rights Reserved

---

**開発者**: Shin Naganuma  
**更新日**: 2025年6月14日

---

# English / 英語版

## 🌐 Overview

This is a portfolio website for Shin Naganuma, showcasing his career, skills, and account information as a backend engineer. The site is built as a responsive Single Page Application (SPA) that provides optimal viewing experience across PC, tablet, and smartphone devices.

## 🎨 Design Specifications

### Color Palette
- **Primary Color**: `hsl(215 32% 37%)` - Calm blue-gray
- **Background**: `hsl(0 0% 100%)` - Pure white
- **Gradient**: 90-degree linear gradient (primary color based)

### Typography
- **Font Family**: Roboto, Noto Sans JP
- **Letter Spacing**: 0.1rem (default)
- **Font Weight**: 400 (normal), 600 (semi-bold), 700 (bold)

### Layout
- **Max Content Width**: 47rem (752px)
- **Border Radius**: 1rem (default)
- **Shadow**: `0rem 0.25rem 0.25rem hsl(0 0% 0% / 25%)`

## 📱 Responsive Design

### Breakpoints
- **Desktop・Tablet**: 769px and above
- **Smartphone (Large)**: 480px〜768px
- **Smartphone (Small)**: 480px and below

### Key Responsive Features
- **Navigation**: Hamburger menu for smartphones
- **Layout**: Vertical orientation with appropriate spacing
- **Font Sizes**: Optimized for each screen size
- **Content**: Grid layout column adjustments

## 🛠 Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: CSS Variables, Flexbox, Grid Layout, Media Queries
- **JavaScript**: ES6+, DOM manipulation

### Features
- **Fully Responsive**: Cross-device compatibility
- **Lightweight**: No external libraries
- **Accessible**: Semantic HTML usage
- **Fast**: Optimized CSS

## 🎯 Section Structure

### 1. Header
- Navigation bar
- Responsive hamburger menu

### 2. Portrait
- Profile image
- Name (Japanese & English)
- Job title

### 3. About
- Self-introduction (Japanese & English)

### 4. Biography
- Timeline-style career history
- Visual representation with vertical line and circular points

### 5. Skills
- Technical skills list
- Experience years bar display
- Technology icons

### 6. Accounts
- GitHub, Twitter, Qiita links

### 7. Footer
- Copyright notice

## 🚀 Special Features

### Interactive Elements
- **Hamburger Menu**: Smooth animations
- **Responsive Navigation**: Display switching based on screen size
- **Skill Experience Bars**: Visual representation of experience years

### Design Highlights
- **Timeline**: Dynamic vertical line in Biography section
- **Gradients**: Beautiful gradients in header and footer
- **Shadow Effects**: Three-dimensional design

## 🔧 Customization

### Easy theme changes using CSS variables
```css
:root {
    --primary-color: hsl(215 32% 37%);
    --content-width: 47rem;
    --border-radius: 1rem;
    /* Other variables... */
}
```

## 📄 License

© 2025 Shin Naganuma. All Rights Reserved

---

**Developer**: Shin Naganuma  
**Last Updated**: June 14, 2025