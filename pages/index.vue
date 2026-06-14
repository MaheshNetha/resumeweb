<template>
  <main class="page">
    <Header :name="name" :role="role" />
    <section class="hero container">
      <div class="left">
        <h2>Senior Software Engineer</h2>
        <p class="lead">{{ summary }}</p>
        <div class="cta">
          <a :href="`mailto:${config.public.email}`" class="btn">Email</a>
          <a :href="config.public.portfolio" target="_blank" class="btn ghost">Portfolio</a>
        </div>
      </div>
      <aside class="card contact">
        <ul>
          <li><strong>Location</strong><span>Yousufguda, Hyderabad</span></li>
          <li><strong>Phone</strong><span><a :href="`tel:${config.public.phone}`">{{ config.public.phone }}</a></span></li>
          <li><strong>Email</strong><span><a :href="`mailto:${config.public.email}`">{{ config.public.email }}</a></span></li>
        </ul>
      </aside>
    </section>

    <section id="about" class="container section">
      <h3>Professional Summary</h3>
      <p>{{ summary }}</p>
      <p>Exposed to Javascript based technologies like Angular, Vue, Nuxt.js and Node.js. Experienced with AWS, Plesk, Git, and building CRM/LMS/Time‑tracking systems.</p>
    </section>

    <section id="skills" class="container section">
      <h3>Technical Skills</h3>
      <div class="skills-grid">
        <div class="skill"><h4>Frontend</h4><p>Vue.js · Vuetify · Bootstrap · HTML · CSS · JavaScript</p></div>
        <div class="skill"><h4>Backend</h4><p>Node.js · Express · MySQL · REST APIs</p></div>
        <div class="skill"><h4>Tools</h4><p>Git · AWS · Plesk · NPM · WordPress</p></div>
        <div class="skill"><h4>Languages</h4><p>Java · JavaScript</p></div>
      </div>
    </section>

    <section id="experience" class="container section">
      <h3>Experience</h3>
      <article class="job card">
        <header><h4>Software Developer — Simandhar Education LLP</h4><span class="meta">April 2020 — Present</span></header>
        <ul>
          <li>Led development of LMS, helpdesk and CRM integrations; worked directly with CEO on product design and marketing strategies.</li>
          <li>Integrated payment gateways, IVR systems, and maintained customer portals.</li>
        </ul>
      </article>

      <article class="job card">
        <header><h4>Software Developer — Mantra Technologies Pvt. Ltd.</h4><span class="meta">June 2018 — April 2020</span></header>
        <ul>
          <li>Built employee tracking and project management products using Vue and BootstrapVue.</li>
          <li>Implemented OAuth integrations and microservices.</li>
        </ul>
      </article>
    </section>

    <section id="projects" class="container section">
      <h3>Top Works</h3>
      <div class="projects-grid">
        <ProjectCard title="SLM — Lead Management Software" tech="Vuetify · Vue.js · Node.js">
          Platform to capture, assign and report leads. Built authentication, ACLs, APIs for lead activity publishing and reporting modules.
        </ProjectCard>

        <ProjectCard title="Trackly — Time Tracking" tech="Vue · Electron · AWS · MySQL">
          Automatic time tracking, timesheets, activity reporting and integrations with Jira, Asana, Trello and Zoho CRM.
        </ProjectCard>

        <ProjectCard title="Projectsly — Project Management" tech="Vue · Java · AWS">
          CRUD operations, reports, activity history, OAuth/webhook utilities and email automation imports/exports using CRON and S3.
        </ProjectCard>
      </div>
    </section>

    <section id="contact" class="container section">
      <h3>Contact</h3>
      <p>Reach out for collaboration, freelance work, or full-time roles.</p>
      <ul class="contact-grid">
        <li><strong>Email</strong><a :href="`mailto:${config.public.email}`">{{ config.public.email }}</a></li>
        <li><strong>Phone</strong><a :href="`tel:${config.public.phone}`">{{ config.public.phone }}</a></li>
        <li><strong>Portfolio</strong><a :href="config.public.portfolio" target="_blank">{{ config.public.portfolio }}</a></li>
      </ul>
    </section>

    <footer class="site-footer container">
      <small>© {{ year }} Mahesh Ravirala — Built with Nuxt 3</small>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useHead } from '#imports'
import Header from '~/components/Header.vue'
import ProjectCard from '~/components/ProjectCard.vue'
const config = useRuntimeConfig()
const name = 'Mahesh Ravirala'
const role = 'Senior Software Developer — Vue · JavaScript · Node.js'
const summary = 'Highly-skilled and motivated senior software engineer with 3+ years of experience in web and installable application development. Enhanced performance of applications using the latest web technologies.'
const year = new Date().getFullYear()

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": name,
  "jobTitle": "Senior Software Developer",
  "url": config.public.portfolio,
  "email": `mailto:${config.public.email}`,
  "telephone": config.public.phone,
  "sameAs": [config.public.portfolio]
})

useHead({
  script: [
    { type: 'application/ld+json', children: jsonLd }
  ]
})
</script>
