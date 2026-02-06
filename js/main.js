console.log("JavaScriptの動作確認");

// 処理に必要な要素の取得============================

// ハンバーガーメニューの要素をJavaScriptでHTMLから取得する
// モバイルナビゲーションの要素をJavaScriptでHTMLから取得する

// ==============================================

// 実際の処理======================================

// ・ハンバーガーメニューがクリックされた時の処理を設定する
// ・モバイルナビゲーションにactiveクラスをつける

// ==============================================

const hamburger = document.getElementById("hamburger")
console.log(hamburger);

const mobileNav = document.getElementById("mobile-nav")
console.log(mobileNav);

hamburger.addEventListener("click", function(){
    // console.log("ハンバーガーメニューがクリックされました");
    hamburger.classList.toggle("active")
    mobileNav.classList.toggle("active")
    
})

document.querySelectorAll(".nav__item").forEach(item => {
  item.addEventListener("click", function(){
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  })
})

// gasp animation
// ヒーローエリア
const heroContainer = document.querySelector(".hero-container");
const heroTitle = document.querySelector(".hero__title");

if (heroContainer && typeof gsap !== "undefined") {
  window.addEventListener("load", () => {
    const tl = gsap.timeline();

    // 1) ヒーロー背景（hero-container）をフェードイン
    tl.to(heroContainer, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power1.out",
    });

    // 2) タイトルを少し遅らせて、下→上に動かしつつフェードイン
    // "-=0.1" は「直前のアニメの終了0.1秒前に開始」(少し重ねる)。
    // 完全に背景の後に出したいなら "+=0.1" にする。
    if (heroTitle) {
      tl.from(heroTitle, {
        autoAlpha: 0,
        y: 16,
        duration: 1,
        ease: "power2.out",
      }, "-=0.1");
    }
  });
}

// 商品ラインナップ
gsap.from(".product-link",{
    scrollTrigger:{
        trigger:".product",
        start: "top 20%", 
        // markers: true,
    },
    opacity: 0, 
    y: 40, 
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
})
