<template>
  <div class="careers">
    <div class="container">
      <img
          src="../../assets/gradient-top-yellow.png"
          class="app__gradient-top-yellow"
      />
      <img
          src="../../assets/gradient-top-blue.png"
          class="app__gradient-top-blue"
      />

      <app-header current-page="careers">
        <app-menu/>
      </app-header>

      <div class="jumbotron">
        <div class="title">
          <AppTitle>AI for Equity:</AppTitle>
          Build the<br />Unbuilt with Us
        </div>

        <div class="description">
          We are at the forefront of crafting advanced machine learning software
          to reshape global equity. Join us to pioneer new frontiers and shape a
          future where technology empowers all
        </div>

        <div class="circle top">
          <img src="../../assets/pattern-circle.png" alt="" />
        </div>
      </div>

      <!-- <intersection-observer @intersect="handleIntersect(Section.Jobs, $event)"> -->
      <div class="jobs">
        <div class="jobs__title">Current Job Openings</div>

        <div class="job">
          <div class="job__titles">
            <div class="job__title">Machine Learning Scientist</div>
            <div class="job__sub-title">Barcelona, Full-time</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              We seek machine learning scientists to push the boundaries of artificial intelligence in global health
              including its application in low-income settings. We are interested in individuals with solid knowledge
              and experience in developing and evaluating different architectures and algorithms, and their applications
              in experimentation and causal inference. We value positively those who have research experience. You will
              have the unique opportunity of, together with our data science and engineering teams, defining and
              building features for our machine learning platform for equitable healthcare.
            </div>
            <a
                target="_blank"
                href="https://causalfoundry.notion.site/Machine-Learning-Scientist-91b9e5aa4e2f48b09e689ff0533f0632"
            >
              <div class="job__link">Learn more</div>
            </a
            >
          </div>
        </div>

        <div class="job">
          <div class="job__titles">
            <div class="job__title">Back-end Engineer</div>
            <div class="job__sub-title">Barcelona, Full-time</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              We seek Back-end developers to join our engineering team. We are looking for hardworking and reliable
              individuals with strong software developer backgrounds, and who are knowledgeable about building scalable
              and robust architecture, tools, data products and critical data pipelines optimized for ML applications.
              You will have the rare opportunity of building resilient and scalable machine learning products from
              scratch, together with other talented engineers, to boost global health via cutting-edge machine learning
              solutions.
            </div>
            <a
                target="_blank"
                href="https://causalfoundry.notion.site/Back-end-Engineer-1030c2a38a7e80c6a74efe3ac35c791a"
            >
              <div class="job__link">Learn more</div>
            </a
            >
          </div>
        </div>

        <div class="job">
          <div class="job__titles">
            <div class="job__title">Mobile Engineer (React Native)</div>
            <div class="job__sub-title">Barcelona, Full-time</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              We are seeking an experienced React Native Developer to focus on SDK and app development, driving the
              integration of our machine-learning products with partner applications. In this role, you will design and
              optimize SDKs, ensuring performance, scalability, and seamless integration, while also building
              high-quality, responsive applications for multiple platforms. This is a unique opportunity to work on both
              SDK and app development, collaborating closely with cross-functional teams to deliver innovative,
              impactful solutions in the Global Health space. Prior experiences working in a similar role with start-ups
              is a strong plus.
            </div>
            <a
                target="_blank"
                href="https://causalfoundry.notion.site/Mobile-Engineer-React-Native-2f9bd200ae354dbabe068eae69f78f8c"
            >
              <div class="job__link">Learn more</div>
            </a
            >
          </div>
        </div>
      </div>
      <!-- </intersection-observer> -->

      <div class="careers__culture">
        Discover Our
        <a
            target="_blank"
            href="https://causalfoundry.notion.site/Our-Interview-Process-1040c2a38a7e8017bbc4c8fbb3d1e085"
        >Interview Approach and Culture Overview</a
        >
        <div class="careers__culture__info">
          To apply, please email us your CV in PDF format along with a brief
          statement explaining your interest in working with our team to
          <a href="mailto:hello@causalfoundry.ai">hello@causalfoundry.ai</a>
        </div>
      </div>

      <div class="pattern-wave">
        <img src="../../assets/pattern-wave.png"/>
      </div>

      <app-footer/>

      <img
          src="../../assets/gradient-bottom-yellow.png"
          class="app__gradient-bottom-yellow"
      />
      <img
          src="../../assets/gradient-bottom-blue.png"
          class="app__gradient-bottom-blue"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";
import "./Careers.scss";
import {PRODUCT_DESCRIPTION} from "@/pages/Product/constants";

</script>
