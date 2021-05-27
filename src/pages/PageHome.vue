<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md">
        <q-input bottom-slots
                 class="new-tweet"
                 v-model="newTweet"
                 placeholder="What's happening?"
                 counter maxlength="120"
                 :dense="dense"
                 autogrow
        >
          <template v-slot:before>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>

          <template v-slot:after>
            <q-btn
              @click="addNewTweet"
              :disable="!newTweet"
              color="primary"
              label="Tweet"
              rounded no-caps unelevated/>
          </template>
        </q-input>
      </div>

      <!-- separator -->
      <q-separator class="divider" size="10px" color="grey-2"/>
      <q-list separator>
        <q-item
          class="q-py-md"
          v-for="tweet in tweets"
        >
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong>Marat Turlubayev</strong>
              <span class="text-grey-7">@sktlmarat</span>
            </q-item-label>
            <q-item-label class="text-body1">
              {{ tweet.content }}
            </q-item-label>
            <div class="tweet-icons row justify-between q-mt-sm">
              <q-btn
                color="grey"
                icon="far fa-comment"
                size="sm"
                flat
                round/>
              <q-btn
                color="grey"
                icon="fas fa-retweet"
                size="sm"
                flat
                round/>
              <q-btn
                color="grey"
                icon="far fa-heart"
                size="sm"
                flat
                round/>
              <q-btn
                @click="deleteTweet"
                color="grey"
                icon="fas fa-trash"
                size="sm"
                flat
                round/>
            </div>
          </q-item-section>


          <q-item-section side top>
            {{ tweet.date | relativeDate }}
          </q-item-section>
        </q-item>

        <q-separator inset="item"/>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import {formatDistance} from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newTweet: '',
      tweets: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequatur eos necessitatibus non omnis perspiciatis placeat vero voluptatem voluptates.',
          date: 1622042788407
        },
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequatur eos necessitatibus non omnis perspiciatis placeat vero voluptatem voluptates.',
          date: 1622042788409
        }
      ]
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  },
  methods: {
    addNewTweet() {
      let newtweet = {
        content: this.newTweet,
        date: Date.now()
      }
      this.tweets.unshift(newtweet);
      this.newTweet = '';
    },
    deleteTweet(tweet) {

    }
  }
}
</script>

<style lang="scss">
.new-tweet {
  font-size: 19px;

  textarea {
    line-height: 1.4 !important;
  }
}

.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $grey-4;
}

.tweet-icons {
  margin-left: -5px;
}
</style>
