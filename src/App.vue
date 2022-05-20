<template>
  <div id="app">
    <header>
      <h1>Cripto Bullshit</h1>
    </header>
    <div class="coins__wrapper">
      <button class="coins__wrapper--button" v-on:click="setCoin('dacxi')">DACXI</button>
      <button class="coins__wrapper--button" v-on:click="setCoin('bitcoin')">Bitcoin</button>
      <button class="coins__wrapper--button" v-on:click="setCoin('ethereum')">ETH</button>
      <button class="coins__wrapper--button" v-on:click="setCoin('cosmos')">ATOM</button>
      <button class="coins__wrapper--button" v-on:click="setCoin('terra-luna')">LUNA</button>
    </div>
    <div class="history__wrapper">
      <input type="checkbox" placeholder="History" v-on:click="showHistory()">
      <section v-if="callendar">

        <vc-date-picker class="inline-block h-full" v-model="date">
        <template v-slot="{ inputValue, togglePopover }">
          <div class="flex items-center">
            <button
                class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                @click="togglePopover()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-4 h-4 fill-current"
                >
                  <path
                    d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                  ></path>
                </svg>
              </button>
              <input
                :value="inputValue"
                class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                readonly    
            />
          </div>
        </template>
        
      </vc-date-picker>
      <button v-on:click="setSelectedDate(format_date(date))">Search</button>
      </section>
      
    </div>

    <div class="currency" v-if="cryptoCurrency != 'undefined'">
      <h1 class="currency__display">{{cryptoCurrency.name}}  US$ {{cryptoCurrency.market_data}}</h1>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  name: 'App',
  data () {
    return {
      coin: "bitcoin",
      cryptoCurrency : {},
      dateEnv: false,
      selectedDate: null,
      callendar: false,
      date: new Date(),
      testeData: String,
      // Calendar,
      // DatePicker
    }
  }, 
  methods: {
      async fetchCrypto(){
        let response = await fetch(`https://api.coingecko.com/api/v3/coins/${this.coin}`);
        let json = await response.json();
        this.cryptoCurrency = await json;
      },

      setCoin (coinType) {
        console.log(this.inputValue)
        this.coin = coinType;
        return this.fetchCrypto();
      },

      showHistory () {
        if(!this.callendar) {
          this.callendar = true;
        } else {
           this.callendar = false;
        }
        console.log(this.callendar)
      },

      format_date(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY')
          }
      },

      setSelectedDate (value) {
        this.date = value;
        
        console.log(this.date)
      }
    }
    
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;



  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #E9D5DA;
  /* margin-top: 60px; */
}

header {
  background-color: #363062;
}

.coins__wrapper{
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 1rem;

}

.currency__display {
  color:#363062;
}

.coins__wrapper--button {
  display: inline-block;
  padding: 0.5em 1.7em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  background-color: rgb(80, 10, 172);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  }

  button:hover {
  border-color: rgb(255, 255, 255);
}
</style>
