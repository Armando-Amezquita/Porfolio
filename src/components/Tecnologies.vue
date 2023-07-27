<script setup>
import { ref, onMounted } from 'vue';

const observer = ref(null);

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const animateElement = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  };

  const elementsToAnimate = document.querySelectorAll('.bubble-container');
  observer.value = new IntersectionObserver(animateElement, options);
  elementsToAnimate.forEach((element) => {
    observer.value.observe(element);
  });
});
</script>
<template>
    <section class="tecnologies__container">
       <div class="tecnologies__container--main">
            <div class="container__color title">
                <h2 class="tecnologies__title">Habilidades</h2>
            </div>
       </div> 
       <div class="tecnology one">
            <div class="tecnology__subcontainer">
                <div class="container__color yellow">
                    <p class="text-3d">JS</p>
                </div>
            </div>
       </div>
       <div class="tecnology two">
            <div class="tecnology__subcontainer">
                <div class="container__color vue">
                    <img class="icons__tecnnologies" src="../assets/icons/nodejs1.png" alt="">
                </div>
            </div>
        </div>
        <div class="tecnology three">
            <div class="tecnology__subcontainer">
                <div class="container__color react">
                    <img class="icons__tecnnologies" src="../assets/icons/react.png" alt="">
                </div>
            </div>
        </div>
       <div class="tecnology four">
            <div class="tecnology__subcontainer">
                <div class="container__color vue">
                    <img class="icons__tecnnologies" src="../assets/icons/vue.png" alt="">
                </div>
            </div>
        </div>
        <div class="tecnology five">
            <div class="tecnology__subcontainer">
                <div class="container__color mongodb">
                    <img class="icons__tecnnologies" src="../assets/icons/mongodb.png" alt="">
                </div>
            </div>
        </div>
        <div class="tecnology six">
            <div class="tecnology__subcontainer container--html">
                <div class="container__color html">
                    <img class="icons__tecnnologies--two" src="../assets/icons/html.png" alt="">
                </div>
            </div>
        </div>
        <div class="tecnology seven ">
            <div class="tecnology__subcontainer container--html">
                <div class="container__color css">
                    <img class="icons__tecnnologies--two" src="../assets/icons/css.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.tecnologies__container{
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #110F2A;
}
.tecnologies__container--main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;
    padding: 2rem;
    border-radius: 50%;
    /* background: linear-gradient(to right, #ffffff, #e2e2e2, #ffffff); */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
.tecnologies__title{
    font-size: 2rem;
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
}
.title{
    box-shadow: 0 0 10px 5px rgba(189, 147, 249, 0.7);
}

.tecnology{
    position: absolute;
    top: 2rem;
    width: 12rem;
    height: 12rem;
    /* border-radius: 50%; */
    padding: .5rem;
}
.tecnology__subcontainer{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    padding: 1rem;
}
.container__color{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    /* border: 3px solid #367d73; */
    /* box-shadow: 0 0 10px rgba(54, 125, 115, 1); */
}
.icons__tecnnologies{
    width: 5rem;
    height: 5rem;
}
.yellow{
    box-shadow: 0 0 10px rgba(240, 220, 23, 1);
    border: 5px solid #f0dc17;
}
.vue{
    box-shadow: 0 0 10px rgba(54, 125, 115, 1);
    border: 5px solid #367d73;  
}
.react{
    box-shadow: 0 0 10px  rgba(37, 138, 239, 1);
    border: 5px solid  rgba(37, 138, 239, 1);;
}
.mongodb{
    box-shadow: 0 0 10px  rgba(0, 237, 100, 1);
    border: 5px solid  rgba(0, 237, 100, 1);
}
.container--html{
    width: 50%;
    height: 50%;
}
.html{
    box-shadow: 0 0 10px  rgba(247, 84, 33, 1);
    border: 1px solid  rgba(247, 84, 33, 1);
}
.css{
    box-shadow: 0 0 10px  rgba(49, 164, 213, 1);
    border: 1px solid  rgba(49, 164, 213, 1);
}

.text-3d {
  font-size: 4rem;
  color: #f0dc17;
  text-shadow: 3px 3px 5px #f0dc17;
  transform: rotateX(30deg) rotateY(20deg);
}
.one{
    animation: heartbeat 3s infinite;
}
.two{
    right: 22rem;
    top: 10rem;
}
.three{
    left: 22rem;
    top: 10rem;
}
.four{
    left: 12rem;
    top: 25rem;
    /* animation: bubbleAnimation3 2s ease-in-out forwards ; */
}
.five{
    right: 12rem;
    top: 25rem;
    /* animation: bubbleAnimation2 2s ease-in-out forwards ;     */
}
.six{
    right: 20rem;
    top: 35rem;
    animation: heartbeat 3s infinite;
}
.seven{
    left: 25rem;
    top: 35rem;
    animation: heartbeat 3s infinite;
}
.icons__tecnnologies--two{
    width: 3rem;
    height: 3rem;
}

.bubble-container {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  animation: heartbeat 2s ease-in-out forwards ;
}
@keyframes bubbleAnimation {
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes bubbleAnimation2 {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes bubbleAnimation3 {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>