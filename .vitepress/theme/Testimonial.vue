<template>
    <section class="testimonial-section py-12 bg-blue-950">
      <div class="container mx-auto flex flex-wrap justify-center">
        <figure v-for="testimonial in testimonials" :key="testimonial.author" class="snip1390 mx-4 mb-8 max-w-md">
          <img :src="testimonial.image" :alt="`profile-${testimonial.author}`" class="profile mx-auto mb-4" />
          <figcaption class="text-center">
            <h2 class="text-white text-2xl">{{ testimonial.name }}</h2>
            <h4 class="text-gray-400 text-xl mb-2">{{ testimonial.title }}</h4>
            <blockquote class="blockquote p-8 rounded text-left text-white relative">
              {{ testimonial.quote }}
            </blockquote>
          </figcaption>
        </figure>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialSection',
    data() {
      return {
        testimonials: [
          {
            name: 'Jack Moser',
            title: 'NASA Rocket Scientist',
            quote: 'Never ceased to be amazed with your internet abilities, Dan.',
            image: 'jack.jpg'
          },
          {
            name: 'Dave Dreiser',
            title: 'Epic Dude',
            quote: 'I think your job title on the aforementioned online resume should be internet wizard. Maybe level 12 internet wizard.',
            image: 'david.jpg'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  figure.snip1390 {
    position: relative;
    overflow: hidden;
    padding: 30px;
    background-color: rgba(128, 128, 128, 0.05);
    background-image: linear-gradient(-25deg, rgba(128, 128, 128, 0.05) 0%, rgba(128, 128, 128, 0.02) 100%);
    box-sizing: border-box;
  }
  figure.snip1390 blockquote:before {
    font-family: 'FontAwesome';
    content: "\201C";
    position: absolute;
    font-size: 70px;
    opacity: 0.25;
    font-style: normal;
    top: -20px;
    left: 20px;
  }
  figure.snip1390 .profile {
    width: 100px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.4);
    border: solid 5px var(--c-brand);
  }
  </style>
  