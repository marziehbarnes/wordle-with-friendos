<template>
    <div>
        <header>
            <nav>
              <ul>
                <li><NuxtLink to="/">home</NuxtLink></li>
                <li><NuxtLink to="/giver">giver</NuxtLink></li> <!-- MUTEX? LOCK? something.. -->
                <li><NuxtLink to="/guesser">guesser</NuxtLink></li>
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
        color: rgb(18, 52, 199)
    }
</style>