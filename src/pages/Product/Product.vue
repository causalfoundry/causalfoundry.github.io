<template>
  <div class="products">
    <div class="container">
      <AppHeader current-page="products"><AppMenu /></AppHeader>

      <div class="top-gradients"></div>

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
        <div class="image">
          <img src="../../assets/preview.png" alt="" />
        </div>

        <div class="list">
          <div class="item active">
            <div class="title">Track and label</div>
            <div class="description">
              Our machine learning purposed SDK integrates into provider- and
              patient-facing mobile health apps and platforms and ensures all
              the rich behavioral and clinical information latent in their usage
              is adequately tracked and labeled, it is AI-ready
            </div>
          </div>

          <div class="item">
            <div class="title">Learn</div>
            <div class="description">
              Our use case specific data pipelines and models transform incoming
              data into insights to help understand the past and predict the
              future, allowing to better understand provider and patient
              evolving needs and context
            </div>
          </div>

          <div class="item">
            <div class="title">Nudge</div>
            <div class="description">
              Use all that knowledge to take action through personlised
              recommendations, incentives, content and workflows to empower your
              users and provide them with additional support precisely how and
              when they need it, delivered to them directly in their devices
              through our SDK
            </div>
          </div>
        </div>
      </div>

      <div class="analytics">
        <div class="title">Analytics</div>

        <div class="section">
          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>

          <div class="inner-section">
            <div class="title">Key Features</div>
            <div class="description">
              Visualize your data to understand behavioral and clinical trends,
              and to assess risk and performance
            </div>

            <div class="list">
              <div class="item">
                <div class="title">Use-case specific</div>
                <div class="description">
                  Causal Foundry data pipelines will turn incoming tool usage
                  information into functionality specific traits characterizing
                  meaningful quantities well suited to tackle use cases for
                  patient and condition management, clinical decision support,
                  capacity building and medical supply chain tools
                </div>
              </div>

              <div class="item">
                <div class="title">Cohorts</div>
                <div class="description">
                  Use the resulting traits to easily define cohorts of interest
                  of the different relevant subjects (heltachare facilities and
                  personel, patients, drugs or tests) that will be available
                  throughout the platform to act as basic units of aggregate
                  inspection, modeling and intervention
                </div>
              </div>

              <div class="item">
                <div class="title">Dashboards</div>
                <div class="description">
                  Customize your dashboard to track the evolution of what
                  matters most to you. We provide ways of visualizing data that
                  will allow you to easily compare different cohorts, extract
                  meaning, and guide evidence based decisions, with a strong
                  focus in the dynamic nature of clinical and behavioral traits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="models">
        <div class="title">Models</div>
        <div class="section">
          <div class="inner-section">
            <div class="title">Key Features</div>
            <div class="description">
              Easily deploy predictive and recommendation machine learning
              models to anticipate user behavior, needs and preferences
            </div>

            <div class="list">
              <div class="item">
                <div class="title">Define and deploy models</div>
                <div class="description">
                  Our model management product will allow you to create, compare
                  and deploy recommendation (collaborative filtering with neural
                  embeddings) and user (censoring models) and demand
                  (probabilistic time series) machine learning models. Access
                  state-of-the-art algorithms through our UI in a few steps and
                  deploy them with one click withou writing a single line of
                  code.
                </div>
              </div>

              <div class="item">
                <div class="title">Track model performance</div>
                <div class="description">
                  The Causal Foundry platform offers you full transparency of
                  which models are running and comes with a full model specific
                  verification suite. Understand the tradeoffs between different
                  models and what works best for your use cases and quickly
                  detect any performance degradation
                </div>
              </div>

              <div class="item">
                <div class="title">Machine Learning traits</div>
                <div class="description">
                  Our data pipelines process the outputs of models to build
                  additional traits that characterize recommendations,
                  predictions and their uncertainty that are then available
                  throughout the platform for cohort definition, inspection and
                  as intervention metrics
                </div>
              </div>
            </div>
          </div>

          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>
        </div>
      </div>

      <div class="interventions">
        <div class="title">Interventions</div>
        <div class="section">
          <div class="image">
            <img src="../../assets/fpo.png" alt="" />
          </div>

          <div class="inner-section">
            <div class="title">Key Features</div>
            <div class="description">
              Unleash the potential of data and AI to empower providers and
              patients and furnish them with adequate timely support
            </div>

            <div class="list">
              <div class="item">
                <div class="title">
                  Define and deploy adaptive interventions
                </div>
                <div class="description">
                  Easily create content and message based interventions and
                  select the delivery mechanism from a collection of RL-based
                  algorithms to fit your requirements of personalization (neural
                  bandits) and knowledge extraction (linear bandits) or for
                  resource allocation (restless bandits). Creating and deploynig
                  interventions to nudge your users is minutes away with the
                  Causal Fundry platform
                </div>
              </div>
              <div class="item">
                <div class="title">Experimentation</div>
                <div class="description">
                  All interventions can be run in experiments comparing them to
                  the status quo in order to safely roll them out in production.
                  Our platform allows for a variety of designs: fully randomized
                  and adaptive, with single or multiple assignment per subjec,
                  and including cluster randomization and pairwise matching.
                  Make use of the algorithmic capabilities of our platform to
                  run digital trials that minimise risk and maximise statistical
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

      <div class="testimonials">
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
        <div class="form">
          <div class="title">Request a Demo</div>
          <div class="input">
            <input type="text" placeholder="Your email" />
            <button class="button">Send</button>
          </div>
        </div>
        <div class="image">
          <img src="../../assets/demo.png" alt="" />
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
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";

import "./Product.scss";
</script>
