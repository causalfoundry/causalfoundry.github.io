<template>
  <div class="member">
    <div class="avatar">
      <img :src="member.imageUrl" alt="" />
      <div class="description">text:{{ member.description }}</div>
    </div>
    <div class="info">
      <div class="name">{{ member.name }}</div>
      <div class="role">{{ member.role }}</div>
      <div class="links">
        <a
          v-if="member.links.linkedin"
          :href="member.links.linkedin"
          target="_blank"
        >
          <img
            src="../../../../assets/linkedin-about.png"
            class="link linkedin"
          />
        </a>
        <a
          v-if="member.links.twitter"
          :href="member.links.twitter"
          target="_blank"
        >
          <img
            src="../../../../assets/twitter-about.png"
            class="link twitter"
          />
        </a>
        <a
          v-if="member.links.github"
          :href="member.links.github"
          target="_blank"
        >
          <img src="../../../../assets/github-about.png" class="link github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./team-member.scss";
interface MemberLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface TeamMemberProps {
  member: {
    imageUrl: string;
    description: string;
    name: string;
    role: string;
    links: MemberLinks;
  };
}

const props = defineProps<TeamMemberProps>();
</script>
