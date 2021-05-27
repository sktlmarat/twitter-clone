<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md">
        <q-input bottom-slots
                 class="new-tweet"
                 v-model="newTweet"
                 placeholder="What's happening?"
                 counter maxlength="120"
                 autogrow
        >
          <template v-slot:before>
            <q-avatar>
              <img src="https://www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg">
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
          :key="tweet.id"
        >
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg">
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
            <div class="tweet-icons row  q-mt-sm">
              <q-btn
                @click="deleteTweet(tweet)"
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
import db from 'src/boot/firebase'
export default {
  name: 'PageHome',
  data() {
    return {
      newTweet: '',
      tweets: [],
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  },
  mounted() {
    db.collection('tweets').orderBy('date').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let tweetChange = change.doc.data()
        tweetChange.id = change.doc.id
        if(change.type === 'added'){
          this.tweets.unshift(tweetChange);
        }
        if(change.type === 'modified'){

        }
        if(change.type === 'removed'){
          console.log('deleted')
          let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id)
          this.tweets.splice(index, 1)
        }
      })
    })
  },
  methods: {
    addNewTweet() {
      let newtweet = {
        content: this.newTweet,
        date: Date.now()
      }
      db.collection('tweets').add(newtweet)
      this.newTweet = '';
    },
    deleteTweet(tweet) {
      db.collection('tweets').doc(tweet.id).delete().then(() => console.log(tweet.id))
      .catch((e) => console.log(e))
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
