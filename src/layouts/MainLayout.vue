<template>
  <q-layout view="lHr Lpr fFf">

    <q-header bordered class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title>
          <span class="gt-sm">Twitter</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            size="sm"
            name="fas fa-dove"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-icon
        class="q-pa-md"
        size="lg"
        name="fas fa-dove"
        color="primary"
      />
      <q-list>
        <q-item
          :to="'/'"
          clickable
          v-ripple
          exact>
          <q-item-section avatar>
            <q-icon color="primary" name="home" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item
          :to="'/about'"
          clickable
          v-ripple
          exact>
          <q-item-section avatar>
            <q-icon color="primary" name="help" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>


      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        placeholder="Search Twitter"
        outlined rounded dense
        class="q-ma-md" v-model="text" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
      </q-input>
      <q-list bordered padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="scss">
.header-icon{
  position: absolute;
  botton: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
