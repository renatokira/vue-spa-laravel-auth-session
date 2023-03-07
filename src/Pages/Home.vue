<script setup>
import Layout from "../Layouts/Layout.vue";
import Jumbotron from "../components/Jumbotron.vue";
</script>

<template>
  <Layout>
    <Jumbotron titlePage="Home">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aspernatur dicta veniam nihil nemo facilis?
        Asperiores laudantium eaque soluta dicta aut? Perferendis ea aliquam, laboriosam minima unde libero. Tenetur,
        amet.
      </p>
      <hr class="my-6 border-gray-300" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus perferendis assumenda culpa atque
        ducimus repudiandae id, incidunt nostrum iusto labore eum. Assumenda soluta, repudiandae aliquid reiciendis
        necessitatibus voluptate dolorum.
      </p>

      <template #button>
        Learn More
      </template>
    </Jumbotron>

  </Layout>
</template>
