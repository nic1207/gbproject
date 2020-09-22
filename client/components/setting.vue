<template>
  <v-card min-height="360" dark color="rgba(34, 34, 34,0.9)">
    <v-toolbar dark class="AppBar">
      <v-toolbar-title>
        <v-icon color="black">
          settings
        </v-icon>
        {{ $t('SETTING.SETTING') }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon dark @click="close">
        <v-icon color="black">
          mdi-close
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-row no-gutters dense>
      <v-col cols="3" class="text-center">
        <p style="color:white" class="mt-4">
          {{ $t('SETTING.LANGUAGE') }}
        </p>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectedLanguage"
          :items="availableLocales"
          item-text="name"
          item-value="code"
          filled
          label="Language"
          dense
          background-color="#C4A76E"
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
        <p style="color:white" class="mt-4">
          {{ $t('SETTING.STUDIOSOUND') }}
        </p>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-row no-gutters dense>
          <v-btn icon color="#B98F38" class="mt-2" @click="studioSound==0? studioSound=10: studioSound=0">
            <v-icon v-show="studioSound!=0">
              volume_up
            </v-icon>
            <v-icon v-show="studioSound==0">
              volume_off
            </v-icon>
          </v-btn>
          <v-slider
            v-model="studioSound"
            class="mt-3"
            color="#196260"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-divider />
    <v-row no-gutters dense align="center">
      <v-col cols="3" class="text-center">
        <p style="color:white" class="mt-4">
          {{ $t('SETTING.GAMEVOLUME') }}
        </p>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-row no-gutters dense>
          <v-btn icon color="#B98F38" class="mt-2" @click="gameVolume==0? gameVolume=10: gameVolume=0">
            <v-icon v-show="gameVolume!=0">
              volume_up
            </v-icon>
            <v-icon v-show="gameVolume==0">
              volume_off
            </v-icon>
          </v-btn>
          <v-slider
            v-model="gameVolume"
            class="mt-3"
            color="#196260"
          />
        </v-row>
      </v-col>
      <v-col cols="3">
        <!--
        <v-select
          v-model="selectedLanguage"
          :items="language"
          filled
          label="Language"
          dense
          background-color="#C4A76E"
          color="white"
          full-width
          rounded
          class="mt-2 mr-1"
        />
        -->
      </v-col>
    </v-row>
    <v-divider />
    <v-row no-gutters dense align="center">
      <v-col cols="3" class="text-center">
        <p style="color:white" class="mt-4">
          {{ $t('SETTING.MUSIC') }}
        </p>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-row no-gutters dense>
          <v-btn icon color="#B98F38" class="mt-2" @click="music==0? music=10: music=0">
            <v-icon v-show="music!=0">
              audiotrack
            </v-icon>
            <v-icon v-show="music==0">
              music_off
            </v-icon>
          </v-btn>
          <v-slider
            v-model="music"
            class="mt-3"
            color="#196260"
          />
        </v-row>
      </v-col>
      <v-col cols="3">
        <!--
        <v-select
          v-model="selectedLanguage"
          :items="language"
          filled
          label="Language"
          dense
          background-color="#C4A76E"
          color="white"
          full-width
          rounded
          class="mt-2 mr-1"
        />
        -->
      </v-col>
    </v-row>
    <v-divider />
    <v-card-actions>
      <v-spacer />

      <v-btn
        color="#C4A76E"
        @click="close"
      >
        {{ $t('SETTING.CONFIRM') }}
      </v-btn>

      <v-btn
        color="#404040"
        @click="close"
      >
        {{ $t('SETTING.CANCEL') }}
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      selectedLanguage: '',
      studioSound: 50,
      gameVolume: 30,
      music: 40
    }
  },
  computed: {
    availableLocales () {
      // console.log(this.$i18n.locales.filter(i => i.code !== this.$i18n.locale))
      console.log(this.$i18n.locales)
      return this.$i18n.locales
    }
  },
  mounted () {
    console.log('setting.mounted() this.$i18n.locale=', this.$i18n.locale)
    this.selectedLanguage = this.$i18n.locale
  },
  methods: {
    close () {
      console.log('this.selectedLanguage=', this.selectedLanguage)
      const code = this.selectedLanguage
      // console.log(this.$i18n)
      // this.$i18n.setLocaleCookie(code)
      this.$i18n.setLocale(code)
      // console.log(this.switchLocalePath)
      // this.$i18n.setLocaleMessage(code, module.default)
      // this.switchLocalePath(code)
      // this.$router.push(this.switchLocalePath(code))
      // window.location.reload(true)
      // this.$root.$i18n.switchLocalePath(this.selectedLanguage)
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.AppBar{
  background-image:
  linear-gradient(
      rgb(255, 255, 255) 63%,
      #B98F38
    );
    color:black
}
</style>
