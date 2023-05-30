<script>
  import Navbar from "$lib/Navbar.svelte";

</script>


<Navbar/>
<main>
    <slot/>
</main>


<svelte:head>
    <style>
        body{
            margin:0;
        }
    </style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>



<style>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>