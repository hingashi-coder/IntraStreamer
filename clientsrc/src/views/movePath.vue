<template>
  <v-app>
    <v-card width="90vw" class="mx-auto mt-5" max-width="800">
      <v-form>
        <v-card-title>パスを入力してください。</v-card-title>
        <v-container>
          <v-text-field label="パスを入力" v-model="path" />
        </v-container>
        <v-card-actions>
          <v-btn color="primary" @click="move">ここに移動</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-alert
      :value="alert"
      type="error"
      dismissible
    >何か文字を入力してください。</v-alert>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      path: '',
      alert: false
    }
  },
  methods: {
    move () {
      if (this.path === '') {
        this.alert = true
      } else {
        this.$router.push('/' + this.path)
      }
    }
  }
}
</script>

<style>

</style>
