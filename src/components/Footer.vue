<script >

</script>
<template>
    <footer class="footer">
        <p class="firma2">@Derechos-Reservados-2023</p>
        <p class="firma">#Armando-Amezquita </p>
        <ul class="social__network">
            <p class="span">1</p>
            <p class="span">2</p>
            <p class="span">3</p>
        </ul>
    </footer>
</template>

<style>
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 40vh;
    width: 100%;
    background-color: #110F2A ;
}
.firma2{
    font-size: 1.7rem;
    color: #fff;
  text-shadow: 0 0 10px #00ff95, 0 0 40px #00ff95;
}
.firma{
    margin: 1rem 0;
    font-size: 5rem;
    color: #fff;
    font-style: italic;
}
.social__network{
    display: flex;
}
.span{
    min-height: 3rem;
    min-width: 3rem;
    margin: 1rem 3rem;
    border-radius: 50%;
    background-color: transparent;
  box-shadow: 0 0 10px #00ff95, 0 0 10px #00ff95;
}

</style>