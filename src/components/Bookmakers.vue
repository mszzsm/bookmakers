
<template>
    <div class="hello">
        {{msg}}
        <p> Bank <input type="number" placeholder="10" step="1" min="5" max="30" v-model="Bank"> </p>
        <p>Team A 
        <input type="text" v-model="TeamA[0]"><input type="number" placeholder="1.0" step="0.01" min="0" max="10" v-model="TeamA[1]"> {{WinA}}
        </p>
        <p>Team B 
        <input type="text" v-model="TeamB[0]"><input type="number" placeholder="1.0" step="0.01" min="0" max="10" v-model="TeamB[1]"> {{WinB}}
        </p>
        <hr>

    </div>
</template>



<script>
export default {
    name: 'Bookmakers',
    props: {
        msg: String
    },
    data: function(){
    return {
        Bank: 0,
        Draw: 0,
        TeamA: ['',0],
        TeamB: ['',0]
    }
    },
    computed: {
    WinA: function () {
        const x = this.TeamA[1] * this.Bank
        return parseFloat(x.toFixed(2))
    },
    WinB: function () {
        const x = this.TeamB[1] * this.Bank
        return parseFloat(x.toFixed(2))
    }
  }
}

</script>