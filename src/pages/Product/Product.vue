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
        <div class="title">
          <AppTitle>Reinforcement learning</AppTitle><br />and AI as a Service
        </div>

        <div class="description">
          The Causal Foundry platform seamlessly integrates into healthcare
          digital tools and uses AI to unlock the power of data-driven knowledge
          extraction and adaptive interventions to improve health outcomes for
          all
        </div>
        <div class="circle top">
          <img src="../../assets/pattern-circle.png" alt="" />
        </div>
      </div>

      <div class="features">
        <div class="desktop-body">
          <div class="images">
            <div class="image">
              <img src="../../assets/preview.png" alt="" />
            </div>
          </div>

          <div class="list">
            <div
              v-for="item of features"
              :class="[`item`, { active: item.active }]"
            >
              <div class="title">{{ item.title }}</div>
              <div class="description">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-body">
          <div class="images">
            <div class="image">
              <img src="../../assets/preview.png" alt="" />
            </div>
          </div>

          <div class="list">
            <Carousel :items-to-show="1">
              <Slide v-for="item of features" :key="item.title" class="slide">
                <div class="item active">
                  <div class="title">{{ item.title }}</div>
                  <div class="description">
                    {{ item.description }}
                  </div>
                </div>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>

      <div v-for="section of sections" class="section">
        <div class="title">{{ section.title }}</div>
        <div class="description">{{ section.description }}</div>

        <div class="desktop-body">
          <div class="images">
            <Carousel :items-to-show="1">
              <Slide
                v-for="feature of section.features"
                :key="feature.imageUrl"
                class="slide"
              >
                <div class="image">
                  <img :src="feature.imageUrl" alt="" />
                </div>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>

          <div class="features-list">
            <div v-for="feature of section.features" class="item">
              <div class="title">{{ feature.title }}</div>
              <div class="description">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-body">
          <div class="features-list">
            <Carousel :items-to-show="1">
              <Slide
                v-for="feature of section.features"
                :key="feature.title"
                class="slide"
              >
                <div class="mobile-slide">
                  <div class="image">
                    <img :src="feature.imageUrl" alt="" />
                  </div>
                  <div class="item">
                    <div class="title">{{ feature.title }}</div>
                    <div class="description">
                      {{ feature.description }}
                    </div>
                  </div>
                </div>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>

      <div v-if="false" class="testimonials">
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
      </div>

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

      <div class="circle bottom">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>

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
import { Carousel, Slide, Pagination } from "vue3-carousel";

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";

import { features, sections } from "@/data/products";

import "./Product.scss";
</script>
