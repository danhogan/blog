<template>
    <section class="project-section py-12 bg-blue-950">
        <div class="container px-4">
            <figure v-for="project in projects" :key="project.title" class="project-card mx-4 mb-8 w-full mx-auto">
                <div class="image-container mx-auto mb-4">
                    <img :src="project.image" :alt="`image-${project.title}`" class="image rounded-lg shadow-lg" />
                </div>
                <figcaption class="text-center">
                    <a href="https://sultansofstats.com" target="_blank" rel="noopener">
                        <h2 class="text-white text-2xl mt-3">{{ project.title }}</h2>
                    </a>
                    <blockquote class="blockquote p-2 rounded-lg text-white">
                        {{ project.description }}
                    </blockquote>
                </figcaption>
            </figure>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectsSection',
    data() {
        return {
            projects: [
                {
                    title: 'Sultans of Stats Website',
                    description: 'Fantasy baseball site with aggregate roto leaderboard for Sultans of Stats league of leagues (~300 teams).',
                    image: 'sos.png'
                }
            ]
        };
    }
};
</script>

<style scoped>
.project-card {
    padding: 20px;
    background-color: rgba(128, 128, 128, 0.05);
    background-image: linear-gradient(-25deg, rgba(128, 128, 128, 0.05) 0%, rgba(128, 128, 128, 0.02) 100%);
    box-sizing: border-box;
}

.project-card .image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.project-card .image-container {
    max-width: 70%;
}
</style>
