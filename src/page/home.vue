<template>
  <div>
    <nav class="navbar is-info " role="navigation" aria-label="dropdown navigation">
      <a class="navbar-item  is-hoverable">
        <img src="../assets/logo-me.png" alt="Bulma: a modern CSS framework based on Flexbox" width="150" height="30">
      </a>

      <div class="navbar-item ">
        <div class="field is-grouped">
          <p class="control">
            <a class=" button  ">
              home
            </a>
          </p>

          <a class=" button  ">
            about
          </a>
        </div>
      </div>
    </nav>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentUser: localStorage.getItem('currentUser')
      }
    }
  }
</script>

<style>
  .navbarColor {
    background-color: #139b36;
    position: relative;
  }

  .txtHead {
    padding-left: 10px;
    font-size: 20px;
    color: #ffffff;
  }

  @media screen and (min-width: 1088px) {
    .navbar {
      align-items: stretch;
      display: flex;
      flex-shrink: 0;
      min-height: 3.25rem;
    }
  }
</style>