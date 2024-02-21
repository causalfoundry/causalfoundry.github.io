<template>
  <div class="products">
    <div class="container">
      <img
        src="../../assets/gradient-top-yellow.png"
        class="app__gradient-top-yellow"
      />
      <img
        src="../../assets/gradient-top-blue.png"
        class="app__gradient-top-blue"
      />
      <AppHeader current-page="products"><AppMenu /></AppHeader>

      <div class="jumbotron">
        <div class="title">Our Products</div>
        <div class="description">
          The Causal Foundry platform seamlessly integrates into healthcare
          digital tools and uses AI to unlock the power of data-driven knowledge
          extraction and adaptive interventions to improve health outcomes for
          all
        </div>
      </div>

      <div class="features">
        <div class="images">
          <div class="image first active">
            <img src="../../assets/preview.png" alt="" />
          </div>
          <div class="image second">
            <img src="../../assets/preview.png" alt="" />
          </div>
          <div class="image third">
            <img src="../../assets/preview.png" alt="" />
          </div>
        </div>

        <div class="list">
          <div class="item first active">
            <div class="title">Track and label</div>
            <div class="description">
              Our machine learning purposed SDK integrates into provider- and
              patient-facing mobile health apps and platforms and ensures all
              the rich behavioral and clinical information latent in their usage
              is adequately tracked and labeled, it is AI-ready
            </div>
          </div>

          <div class="item second">
            <div class="title">Learn</div>
            <div class="description">
              Our use case specific data pipelines and models transform incoming
              data into insights to help understand the past and predict the
              future, allowing to better understand provider and patient
              evolving needs and context
            </div>
          </div>

          <div class="item third">
            <div class="title">Nudge</div>
            <div class="description">
              Use all that knowledge to take action through personalized
              recommendations, incentives, content and workflows to empower your
              users and provide them with additional support precisely how and
              when they need it, delivered to them directly in their devices
              through our SDK
            </div>
          </div>
        </div>
      </div>

      <div v-for="section of sections" class="section">
        <div class="title">{{ section.title }}</div>
        <div class="description">{{ section.description }}</div>

        <div class="desktop-body">
          <div class="images">
            <Hooper>
              <Slide v-for="imageUrl of section.imageUrls">
                <div class="image">
                  <img :src="imageUrl" alt="" />
                </div>
              </Slide>
            </Hooper>
          </div>

          <div class="features">
            <div v-for="feature of section.features" class="item">
              <div class="title">{{ feature.title }}</div>
              <div class="description">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-body">
          <div class="images">
            <Swiper :modules="modules" :slides-per-view="1" :pagination="true">
              <SwiperSlide v-for="imageUrl of section.imageUrls">
                <div class="image">
                  <img :src="imageUrl" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div class="features">
            <Swiper :modules="modules" :slides-per-view="1" :pagination="true">
              <SwiperSlide v-for="feature of section.features">
                <div class="item">
                  <div class="title">{{ feature.title }}</div>
                  <div class="description">
                    {{ feature.description }}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <!-- <div class="analytics">
        <div class="title">Analytics</div>
        <div class="description">
          Visualize your data to understand behavioral and clinical trends, and
          to assess risk and performance
        </div>

        <div class="section">
          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>

          <div class="inner-section">
            <div class="list">
              <Swiper
                :modules="modules"
                :slides-per-view="1"
                :pagination="true"
              >
                <SwiperSlide>
                  <div class="item">
                    <div class="title">Use-case specific</div>
                    <div class="description">
                      Causal Foundry data pipelines will turn incoming tool
                      usage information into functionality specific traits
                      characterizing meaningful quantities well suited to tackle
                      use cases for patient and condition management, clinical
                      decision support, capacity building and medical supply
                      chain tools
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="item">
                    <div class="title">Cohorts</div>
                    <div class="description">
                      Use the resulting traits to easily define cohorts of
                      interest of the different relevant subjects (healthcare
                      facilities and personel, patients, drugs or tests) that
                      will be available throughout the platform to act as basic
                      units of aggregate inspection, modeling and intervention
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="item">
                    <div class="title">Dashboards</div>
                    <div class="description">
                      Customize your dashboard to track the evolution of what
                      matters most to you. We provide ways of visualizing data
                      that will allow you to easily compare different cohorts,
                      extract meaning, and guide evidence based decisions, with
                      a strong focus in the dynamic nature of clinical and
                      behavioral traits
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="models">
        <div class="title">Models</div>
        <div class="description">
          Easily deploy predictive and recommendation machine learning models to
          anticipate user behavior, needs and preferences
        </div>

        <div class="section">
          <div class="inner-section">
            <div class="list">
              <Swiper
                :modules="modules"
                :slides-per-view="1"
                :pagination="true"
              >
                <SwiperSlide>
                  <div class="item">
                    <div class="title">Define and deploy models</div>
                    <div class="description">
                      Our model management product will allow you to create,
                      compare and deploy recommendation (collaborative filtering
                      with neural embeddings) and user (censoring models) and
                      demand (probabilistic time series) machine learning
                      models. Access state-of-the-art algorithms through our UI
                      in a few steps and deploy them with one click without
                      writing a single line of code
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="item">
                    <div class="title">Track model performance</div>
                    <div class="description">
                      The Causal Foundry platform offers you full transparency
                      of which models are running and comes with a full model
                      specific verification suite. Understand the tradeoffs
                      between different models and what works best for your use
                      cases and quickly detect any performance degradation
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="item">
                    <div class="title">Machine Learning traits</div>
                    <div class="description">
                      Our data pipelines process the outputs of models to build
                      additional traits that characterize recommendations,
                      predictions and their uncertainty that are then available
                      throughout the platform for cohort definition, inspection
                      and as intervention metrics
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>
        </div>
      </div> -->

      <!-- <div class="interventions">
        <div class="title">Interventions</div>
        <div class="description">
          Unleash the potential of data and AI to empower providers and patients
          and furnish them with adequate timely support
        </div>

        <div class="section">
          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>

          <div class="inner-section">
            <div class="list">
              <div class="item">
                <div class="title">
                  Define and deploy adaptive interventions
                </div>
                <div class="description">
                  Easily create content and message based interventions and
                  select the delivery mechanism from a collection ofRL-based
                  algorithms to fit your requirements of personalization(neural
                  bandits) and knowledge extraction (linear bandits) or for
                  resource allocation (restless bandits). Creating and deploying
                  interventions to nudge your users is minutes away with the
                  Causal Foundry platform
                </div>
              </div>
              <div class="item">
                <div class="title">Experimentation</div>
                <div class="description">
                  All interventions can be run in experiments comparing them to
                  the status quo in order to safely roll them out in production.
                  Our platform allows for a variety of designs: fully randomized
                  and adaptive, with single or multiple assignment per subject,
                  and including cluster randomization and pairwise matching.
                  Make use of the algorithmic capabilities of our platform to
                  run digital trials that minimize risk and maximize statistical
                  power
                </div>
              </div>
              <div class="item">
                <div class="title">Measure and track impact</div>
                <div class="description">
                  Experiments and interventions running in production come with
                  near real time monitoring and thorough statistical analyses to
                  measure and track their impact, and to understand for which
                  users and in which contexts they are working better.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="models">
        <div class="title">Large Language Models</div>
        <div class="description">
          Get access to your data, results of interventions, predictions and
          insights with the LL-based assistant to query any information and to
          enhance platform capabilities, even send interventions with a sentence
        </div>

        <div class="section">
          <div class="inner-section">
            <div class="list">
              <div class="item">
                <div class="title">
                  LLM-based assistant for patients and providers
                </div>
                <div class="description">
                  Large Language Models can also be integrated within digital
                  applications to support patients and providers with trustful
                  and real-time information. They can access data about their
                  own health and support the self-management of diseases or to
                  providers to get information about their patients and help
                  prioritize within a chatbot format, as well as to get access
                  to workflow procedures information or public health policies
                </div>
              </div>

              <div class="item">
                <div class="title">Speech-to-Text Hands-Free Assistant</div>
                <div class="description">
                  Our LLM-based product, MedScribe is a notes assistant
                  integrated into electronic health records and digital tools
                  that enhance patient-provider conversations using data like
                  clinic visits, diagnostic codes, and patient history.
                  Providers start recording conversations with patient consent,
                  using deviceless interactions for a more personal connection.
                  The conversations are transcribed and combined with data from
                  the Causal Foundry platform, which feeds into an LLM to
                  generate a visit summary. This summary is then reviewed and
                  edited by the provider. Additionally, the system creates a
                  simplified summary and care plan takeaways, which can be
                  communicated to patients via SMS or WhatsApp, aiding in
                  patient engagement and health management.
                </div>
              </div>
            </div>
          </div>

          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>
        </div>
      </div> -->

      <!-- <div class="testimonials">
        <div class="title">Testimonials</div>

        <div class="comments">
          <div class="comment">
            <div class="body">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con Duis aute irure dolor in reprehenderit in.”
            </div>

            <div class="user">
              <div class="avatar">
                <img src="" alt="" />
              </div>
              <div class="info">
                <div class="name">Client Name</div>
                <div class="role">Role</div>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="body">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con Duis aute irure dolor in reprehenderit in.”
            </div>

            <div class="user">
              <div class="avatar">
                <img src="" alt="" />
              </div>
              <div class="info">
                <div class="name">Client Name</div>
                <div class="role">Role</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="demo">
        <div class="card">
          <div class="title">Request a Demo</div>
          <div class="input">
            <input type="text" placeholder="Your email" />
            <button class="button">Send</button>
          </div>
        </div>
      </div>

      <div class="hex">
        <img src="../../assets/pattern-hex.png" alt="" />
      </div>

      <div class="circle top">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>

      <div class="circle bottom">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>

      <div class="bottom-gradients"></div>

      <AppFooter />

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

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";

import "./Product.scss";

const modules = [Pagination];

import { Hooper, Slide } from "hooper";

const sections = [
  {
    title: "Analytics",
    description:
      "Visualize your data to understand behavioral and clinical trends, and to assess risk and performance",
    imageUrls: [
      "/images/products/analytics1.gif",
      "/images/products/analytics2.gif",
    ],
    features: [
      {
        title: "Use-case specific",
        description:
          "Causal Foundry data pipelines will turn incoming tool usage information into functionality specific traits characterizing meaningful quantities well suited to tackle use cases for patient and condition management, clinical decision support, capacity building and medical supply chain tools",
      },
      {
        title: "Cohorts",
        description:
          "Use the resulting traits to easily define cohorts of interest of the different relevant subjects (healthcare facilities and personel, patients, drugs or tests) that will be available throughout the platform to act as basic units of aggregate inspection, modeling and intervention",
      },
      {
        title: "Dashboards",
        description:
          "Customize your dashboard to track the evolution of what matters most to you. We provide ways of visualizing data that will allow you to easily compare different cohorts, extract meaning, and guide evidence based decisions, with a strong focus in the dynamic nature of clinical and behavioral traits",
      },
    ],
  },
];
</script>
