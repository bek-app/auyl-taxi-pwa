<template>
  <b-container class="container">
    <b-row>
      <b-col class="mb-3 logo"
        ><a href="#"><img src="~/assets/img/logo-main.svg" alt="" /></a>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col class="verify__code">
        <span>Кодты растау </span>

        <span>
          Өтінеміз SMS тексеріңіз. <br />
          Біз растау пәрненін сізге жбердік
          <br />
          + 7 (771) 000-9998
        </span>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col class="form">
        <b-form-input
          v-model.number="number"
          class="form-input mb-2"
          type="tel"
          placeholder="----"
          maxlength="4"
        ></b-form-input>
        <div class="form__text">
          Код келмеді ме? <span>Басынан көріңіз! </span>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mb-3"
        ><b-button shadow-none class="btn" block variant="warning"
          >Растау</b-button
        >
      </b-col>
    </b-row>
    <Privacy />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 425px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.verify__code {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.form-input {
  border: none;
  border-bottom: 1px solid #000;
  text-align: center;
}

.form-input:hover,
.form-input:focus,
.form-input:active {
  box-shadow: none !important;

  border-radius: 4px;
}

.form__text span {
  color: #ffc107;
}
.btn {
  padding: 15px 10px;
  text-transform: uppercase;
}
.btn:hover {
  background-color: #000;
  color: #fff;
}
.btn:hover,
.btn:focus,
.btn:active {
  box-shadow: none !important;
  border: none;
}
</style>
