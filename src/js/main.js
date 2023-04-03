// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
		const button = document.querySelector('.button-gift')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
						button.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
						button.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
						button.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

// Swiper 

const swiper = new Swiper ('.swiper', {

	  // Default parameters
		slidesPerView: 2,
		spaceBetween: 35,
		centeredSlides: false,
		loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	//	el: '.swiper-scrollbar',
	// },

//   // Responsive breakpoints
   breakpoints: {
//   // when window width is >= 320px
     1: {
     slidesPerView: 1,
     spaceBetween: 20
   },
//   // when window width is >= 480px
     480: {
     slidesPerView: 2,
     spaceBetween: 30
     },

		 1200: {
			slidesPerView: 3,
     spaceBetween: 20
		 },

		 1421: {
			slidesPerView: 2,
     spaceBetween: 20
		 },
  }
});

// Scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Animations

// If you need scroll animations just uncomment
// В случае если нужны анимации при скролле разкомментировать

gsap.registerPlugin(ScrollTrigger)
// Hero animations (TimeLine example)
const tl = gsap.timeline()
tl.fromTo(
    '.logo',
    {
       // y: -50,
        opacity: 0,
    },
    { 
			opacity: 1, 
			duration: 1 },
    0,
).fromTo(
    '.menu li',
    {
        y: -50,
        opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
    0.3,
)
.fromTo(
	'.hero-button',
	{
		 y: 30,
		 opacity: 0,
		 stagger: 0.25
 },
 { 
	 y: 0,
	 opacity: 1, 
	 duration: 1 },
 0.3,
)



// Scroll animation example
// animation element
gsap.from('.catalog-img', {
	scrollTrigger: {
			trigger: '.catalog', // trigger animation
			start: "-400 center", // the default values
			end: "top",
			scrub: true,
	},
	xPercent: -40,
	duration: 1
	})

	gsap.from('.catalog-title', {
		scrollTrigger: {
				trigger: '.catalog', // trigger animation
				start: "-800", // the default values
				end: "100",
				scrub: true,
		},
		y: -100,
		opacity: 0,
		duration: 1
		})

		gsap.from('.catalog-item', {
			scrollTrigger: {
					trigger: '.catalog', // trigger animation
					start: "-800", // the default values
					end: "center",
					scrub: true,
			},
			yPercent: 100,
			duration: 1
			})

			gsap.from('.order-title', {
				scrollTrigger: {
						trigger: '.order', // trigger animation
						start: "-800", // the default values
						end: "100",
						scrub: true,
				},
				y: -100,
				opacity: 0,
				duration: 1
				})

				gsap.from('.order-img', {
					scrollTrigger: {
							trigger: '.order', // trigger animation
							start: "-1000", // the default values
							end: "top",
							scrub: true,
					},
					xPercent: -100,
					opacity: 0.5,
					duration: 1
					})

					gsap.from('.bestselling-title', {
						scrollTrigger: {
								trigger: '.bestselling', // trigger animation
								start: "-800", // the default values
								end: "100",
								scrub: true,
						},
						y: -100,
						opacity: 0,
						duration: 1
						})
						
						gsap.from('.bestselling-item__img', {
							scrollTrigger: {
									trigger: '.bestselling', // trigger animation
									start: "-300", // the default values
									end: "50",
									scrub: true,
							},
							scale: 0.5,
							duration: 1
							})

												gsap.from('.app-title', {
									scrollTrigger: {
											trigger: '.app', // trigger animation
											start: "-800", // the default values
											end: "100",
											scrub: true,
									},
									y: -100,
									opacity: 0,
									duration: 1
									})

									gsap.from('.left-cup', {
										scrollTrigger: {
												trigger: '.app', // trigger animation
												start: "-400 center", // the default values
												end: "top",
												scrub: true,
										},
										xPercent: -40,
										duration: 1
										})

										gsap.from('.app-image__cards', {
											scrollTrigger: {
													trigger: '.app', // trigger animation
													start: "-1000", // the default values
													end: "top",
													scrub: true,
											},
											xPercent: 100,
											opacity: 0.5,
											duration: 1
											})
										