document.addEventListener("DOMContentLoaded", () => {
  // ================== PROJECT FILTER + SWIPER ==================
  const buttons = document.querySelectorAll('.projects-section .filter-btn');
  const lists = document.querySelectorAll('.projects-section .project-list');

  function initSwipers(section) {
    const thumbs = section.querySelector('.mySwiper');
    const main = section.querySelector('.mySwiper2');

    if (thumbs && main) {
      // Xóa instance cũ nếu có
      if (main.swiper) main.swiper.destroy(true, true);
      if (thumbs.swiper) thumbs.swiper.destroy(true, true);

      const swiperThumbs = new Swiper(thumbs, {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 6,   // Thumbnail hiển thị nhiều ảnh nhỏ
        freeMode: true,
        watchSlidesProgress: true,
      });

      new Swiper(main, {
        loop: false,
        slidesPerView: 1,   // ✅ Chỉ 1 ảnh lớn mỗi lần
        centeredSlides: true, // ✅ Căn giữa ảnh lớn
        spaceBetween: 10,
        navigation: {
          nextEl: section.querySelector('.swiper-button-next'),
          prevEl: section.querySelector('.swiper-button-prev'),
        },
        thumbs: { swiper: swiperThumbs },
      });
    }
  }

  // Gán sự kiện filter
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      // Ẩn tất cả section
      lists.forEach(list => list.classList.remove('active'));

      // Hiện section mục tiêu
      const targetList = document.getElementById(target);
      if (targetList) {
        targetList.classList.add('active');
        initSwipers(targetList);
      }

      // Active nút filter
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Load mặc định section đầu tiên
  if (lists.length > 0) {
    lists[0].classList.add('active');
    buttons[0].classList.add('active');
    initSwipers(lists[0]);
  }

  // ================== SLIDER KINH NGHIỆM ==================
  let expIndex = 0;
  const expItems = document.querySelectorAll('.experience-slider .exp-item');

  window.moveExp = function (direction) {
    if (expItems.length === 0) return;

    expItems[expIndex].classList.remove('active');
    expIndex = (expIndex + direction + expItems.length) % expItems.length;
    expItems[expIndex].classList.add('active');
  };

  // ================== REVEAL ON SCROLL ==================
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }

  // Khi load thì hiện tất cả .reveal
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('active');
  });

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // ================== SLIDER MÔ TẢ RESTAURANT ==================
  new Swiper(".restaurantDescSwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".restaurantDescSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".restaurantDescSwiper .swiper-button-next",
      prevEl: ".restaurantDescSwiper .swiper-button-prev",
    }
  });
});
// ================== SLIDER MÔ TẢ BEE ==================
new Swiper(".beeDescSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".beeDescSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".beeDescSwiper .swiper-button-next",
    prevEl: ".beeDescSwiper .swiper-button-prev",
  }
});

// ================== SLIDER MÔ TẢ PIA ==================
new Swiper(".piaDescSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".piaDescSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".piaDescSwiper .swiper-button-next",
    prevEl: ".piaDescSwiper .swiper-button-prev",
  }
});

