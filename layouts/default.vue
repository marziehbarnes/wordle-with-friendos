<template>
    <div>
        <header>
            <nav>
              <ul>
                <li><NuxtLink to="/">home</NuxtLink></li>
                <li><NuxtLink to="/giver">giver</NuxtLink></li> <!-- MUTEX? LOCK? something.. -->
              </ul>
            </nav>
          </header>

          <!-- pages content goes into slot below navs-->
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        align-items: center;
        color: rgb(27, 53, 167);
        text-decoration: none;   /* underline */
        font-weight: bold;     

        margin: 0 8px;          /* Space between each link */
        padding: 5 10px;      /* Padding around the link text */
    }
</style>