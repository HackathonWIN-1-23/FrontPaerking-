<template>
  <!-- <router-link to="/logIn">ok</router-link> -->
  <div class="main-wrapper">
    <div class="form-wrap">
      <div class="nammm">
        <h2>Регистрация</h2>
      </div>
      <form class="double-wrap" @submit.prevent="register">
        <div class="inp-wrap">
          <label for="inp3">Имя</label>
          <input id="inp3" v-model="formData.email" type="email" required>
          <p v-if="errors.email.length">{{ errors.email }}</p>
          <label for="inp4">Пароль</label>
          <input id="inp4" required v-model="formData.password" :type="show2 ? 'text' : 'password'">
          <p v-if="errors.password.length">{{ errors.password }}</p>
        </div>
        <div class="show">
          <input @change="show2 = !show2" class="chinp" type="checkbox">
          <label>Показать пароль</label>
        </div>
        <div class="btn-wrap">
          <button class="btn1" @click="register">Зарегистрироваться</button>
          <div class="exx">
            <button  class="btn2"> <img src="../assets/google_icon.png" alt="logo of google "> Зарегистрироваться через Google</button>
          </div>
        </div>
        <div class="rout">
          <router-link class="okk" to="/login">Войти </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show2: false,
      formData: {
        email: '',
        password: '',
        returnSecureToken: true
      },
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      localStorage.setItem('email', this.formData.email)
      this.$router.push('/parkings')
    }
  },
}
</script>

<style scoped>
form {
  width: 100%;
}

.okk {
  position: relative;
}

.okk::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #985ACE;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.double-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300%;
}

.okk:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.rout a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-family: "Gill Sans", sans-serif;
}

.rout {
  padding-top: 10px;
}

.exx {
  width: 100%;
}

.btn-wrap {
  width: 70%;
  border-bottom: 1px solid black;
  margin: 15px 0;
}

.btn2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: none;
  border: 1px solid #985ACE;
}

.btn1 {
  background: #985ACE;
  color: white;
  text-transform: uppercase;
  font-family: "Gill Sans", sans-serif;
  font-weight: 350;
  border-bottom: 1px solid black;
  border: 1px solid #985ACE;
}

.btn2 img {
  width: 20px;
}

.btn1,
.btn2 {
  /* border: none ; */
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  border-radius: 4px;
}

.inp-wrap input {
  height: 32px;
  padding: 0 10px;
  border: none;
  background: #F8F1FF;
  margin-bottom: 10px;
  border-radius: 6px;
}

.inp-wrap {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.main-wrapper {
  height: 100vh;
  background: #1a1a1a ;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrap {
  background: white;

  height: 60vh;
  width: 50%;

  width: 90%;
  padding: 0 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 29px -31px 87px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 29px -31px 87px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 29px -31px 87px 0px rgba(34, 60, 80, 0.2);
}

label {
  color: rgba(0, 0, 0, 0.567);
}

.nammm {
  padding: 30px 0 25px 0;
}

.nammm h2 {
  text-transform: uppercase;
  font-family: "Gill Sans", sans-serif;
  font-weight: 600;

}

img {
  transform: translateX(10px);

}
</style>
