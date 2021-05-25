<template>
  <q-layout view="lHr Lpr fFf">

    <q-header bordered class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Twitter
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
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
          v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="home" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item
          :to="'/about'"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="help" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>


      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
