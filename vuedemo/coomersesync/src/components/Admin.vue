<script>


</script>

<template>
     <div class="container">
        <div class="row">
            <div class="col col-md-lg-10 col-xl-xxl-8  my-2 mx-1 p-2 text">
               <samp>Üdv újra itt Adminisztrátor! <br> Lépj be és kezd el a munkát.</samp>
           </div>
        </div>
    </div>
   <div class="container">
    <div class="row">
        <div class="col col-md-lg-10 col-xl-xxl-8">
            <form>
                <div class="mt-3 mx-1">
                    <label for="Email" class="form-label mx-1">Email</label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp">
                </div>
                <div class="mt-3 mx-1">
                    <label for="Password" class="form-label mx-1">Jelszó</label>
                    <input type="password" class="form-control" id="Password">
                </div>
                <div class="mt-2 mx-1 form-check">
                    <input type="checkbox" class="form-check-input" id="Check">
                    <label class="form-check-label" for="Check">Emlékezz rám!</label>
                </div>
                <button type="submit" class="btn btn-danger my-2 ms-4">Belépek</button>
            </form>
        </div>
    </div>
   </div>
</template>

<style scoped>
.text
{
    background: hsla(233, 20%, 55%, .7);
    color: hsl(195, 20%, 96%);
    text-align: center;
    width: 20%;
    border-radius: 10px;
}


</style>