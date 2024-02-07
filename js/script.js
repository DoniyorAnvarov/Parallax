let cloud = document.querySelectorAll('.cloud')
let boat = document.querySelector('.boat')
let fantasy = document.querySelector('.fantasy')
window.addEventListener('scroll', () => {
  // console.log(this.scrollY);


  let windowY = this.scrollY

  fantasy.style.objectPosition = `0 ${windowY / 10}%`

  cloud.forEach(clouds => {

    const speed = clouds.getAttribute('data-speed')

    clouds.style.transform = `translateX(${windowY * speed}px)`
  });


  const speedBoat = boat.getAttribute('data-speed')

  boat.style.transform = `translateX(${windowY * speedBoat}px)`

  // cloud.forEach((el, i, arr) => {
  //   console.log(el, i, arr);
  // });

})


let parallaxBox = document.querySelector('.parallax__box')
let parallaxBall = document.querySelectorAll('.parallax__ball')

parallaxBox.addEventListener('mousemove', (e) => {

  // console.log(e.pagex);

  parallaxBall.forEach(layers => {

    const speed = layers.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    layers.style.transform = `translate(${x}px, ${y}px)`

  })

})


let timerNum = document.querySelectorAll('.timer__num')
let timer = document.querySelector('.timer')


// console.log(timer.getBoundingClientRect().top); 
// console.log(timer.offsetHeight); 350
// console.log(1938 - 350 * 2); 1238
// console.log(timer.offsetTop);

window.addEventListener('scroll', function () {

  // console.log(this.pageYOffset) 1319

  if (pageYOffset >= (timer.offsetTop - timer.offsetHeight * 2)) {
    timer.style.background = 'red'
    for (let i = 0; i < timerNum.length; i++) {

      const count = +timerNum[i].dataset.num
      // console.log(count)
      timerNum[i].innerHTML = 0

      function getTimer() {

        timerNum[i].innerHTML++

        if (timerNum[i].innerHTML < count) {


          setTimeout(() => {
            getTimer()
          }, 20);
        }
      }
      getTimer()
    }
    this.removeEventListener('scroll', onscroll)
  }

})

let timerBtn = document.querySelectorAll('.timer__btn')

timerBtn.forEach(btns => {
  btns.addEventListener('mousemove', function (e) {

    const x = e.pageX - this.offsetLeft
    const y = e.pageY - this.offsetTop

    this.style.setProperty('--x', `${x}px`)
    this.style.setProperty('--y', `${y}px`)
  })

})


let card = document.querySelectorAll('.card')

card.forEach(cards => {

  cards.addEventListener('mousemove', rotate)
  cards.addEventListener('mouseout', rotateNone)

})

function rotate(e) {

  const item = this.querySelector('.card__item')
  const halfHeight = item.offsetHeight / 2 /* 125 */
  // item.innerHTML = e.offsetY - halfHeight

  item.style.transform = `rotateX(${-(e.offsetY - halfHeight) / 5}deg) rotateY(${(e.offsetX - halfHeight) / 5}deg)`

}

function rotateNone(e) {

  const item = this.querySelector('.card__item')
  item.style.transform = `rotate(0)`

}