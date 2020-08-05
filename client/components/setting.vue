<template>
  <v-card min-height="360">
    <v-toolbar dark color="#7A6445">
      <v-toolbar-title>
        <v-icon>mdi-setting</v-icon>
        Setting
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row no-gutters dense>
      <v-col cols="3" class="text-center">
        <p style="color:#876f4d" class="mt-4">
          Language
        </p>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectedLanguage"
          :items="language"
          filled
          label="Language"
          dense
          background-color="#7A6445"
          color="white"
          full-width
          rounded
          class="mt-2"
          prepend-inner-icon="language"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row no-gutters dense align="center">
      <v-col cols="3" class="text-center">
        <p style="color:#876f4d" class="mt-4">
          Studio Sound
        </p>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-row no-gutters dense>
          <v-btn icon color="#876f4d" class="mt-2">
            <v-icon>volume_up</v-icon>
            <!-- <v-icon>volume_off</v-icon> -->
          </v-btn>
          <v-slider
            v-model="studioSound"
            class="mt-3"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-divider />
    <v-row no-gutters dense align="center">
      <v-col cols="3" class="text-center">
        <p style="color:#876f4d" class="mt-4">
          Game Volume
        </p>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-row no-gutters dense>
          <v-btn icon color="#876f4d" class="mt-2">
            <v-icon>volume_up</v-icon>
            <!-- <v-icon>volume_off</v-icon> -->
          </v-btn>
          <v-slider
            v-model="gameVolume"
            class="mt-3"
          />
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectedLanguage"
          :items="language"
          filled
          label="Language"
          dense
          background-color="#7A6445"
          color="white"
          full-width
          rounded
          class="mt-2"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row no-gutters dense align="center">
      <v-col cols="3" class="text-center">
        <p style="color:#876f4d" class="mt-4">
          Music
        </p>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-row no-gutters dense>
          <v-btn icon color="#876f4d" class="mt-2">
            <v-icon>volume_up</v-icon>
            <!-- <v-icon>volume_off</v-icon> -->
          </v-btn>
          <v-slider
            v-model="music"
            class="mt-3"
          />
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectedLanguage"
          :items="language"
          filled
          label="Language"
          dense
          background-color="#7A6445"
          color="white"
          full-width
          rounded
          class="mt-2"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-card-actions>
      <v-spacer />

      <v-btn
        color="#7A6445"
        @click="close"
      >
        Confirm
      </v-btn>

      <v-btn
        color="#7A6445"
        @click="close"
      >
        Cancel
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      language: ['English', 'Chinese', 'Thai', 'Malaysia'],
      selectedLanguage: 'English',
      studioSound: 50,
      gameVolume: 30,
      music: 40
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
