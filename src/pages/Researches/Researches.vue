<template>
  <div class="research">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img src="../../assets/gradient-top-blue.png" class="app__gradient-top-blue" />

    <app-header current-page="research">
      <app-menu />
    </app-header>

    <div class="jumbotron">
      <div class="jumbotron__title">Research</div>
      <div class="jumbotron__description">
        A brief description about our team and why someone would want
        to join us. And what kind of profiles we want for our team.
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">Title</div>
      <div class="diagram__description">
       Description text here
      </div>
      <div class="diagram__image">
        <img src="../../assets/research_diagram.png" />
      </div>
    </div>

    <div class="posts">
      <div class="controls">
        <input placeholder="Search" type="text" class="search-field">
        <div class="control filter">Filter</div>
        <div class="control view">View</div>
      </div>

      <div class="title">Research Papers</div>

      <div class="view-list">
        <div class="post">
          <div class="date">March 26, 2020</div>
          <div class="title">Research Paper A</div>
        </div>
        <div class="post">
          <div class="date">March 26, 2020</div>
          <div class="title">Research Paper A</div>
        </div>
        <div class="post">
          <div class="date">March 26, 2020</div>
          <div class="title">Research Paper A</div>
        </div>
        <div class="post">
          <div class="date">March 26, 2020</div>
          <div class="title">Research Paper A</div>
        </div>
      </div>

      <div class="pagination">
        <div class="info">1-4 of 4</div>
        <div class="prev">Previous page</div>
        <div class="next">Next page</div>
      </div>
    </div>

    <app-footer />

    <img
      src="../../assets/gradient-bottom-yellow.png"
      class="app__gradient-bottom-yellow"
    />
    <img
      src="../../assets/gradient-bottom-blue.png"
      class="app__gradient-bottom-blue"
    />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";

import './Researches.scss';
</script>
