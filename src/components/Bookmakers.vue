
<template>
    <div class="hello">
        <h1> {{msg}} </h1>

        <div class="row">
            <div class="match" v-for="Teams in MatchA">
                <p>Match A</p>
                <p> TeamA <input type="checkbox"><input type="text" v-model="TeamA[0]"><input type="number" placeholder="1.0" step="0.01" min="0" max="10" v-model="TeamA[1]"> {{WinA}} </p>
                <p> TeamB <input type="checkbox"> <input type="text" v-model="TeamB[0]"><input type="number" placeholder="1.0" step="0.01" min="0" max="10" v-model="TeamB[1]"> {{WinB}}</p>
            </div>
            <div class="match">
                <p>Match B</p>
                <p> Team A <input type="checkbox"><input type="text" v-model="TeamA[0]"><input type="number" placeholder="1.0" step="0.01" min="0" max="10" v-model="TeamA[1]"> {{WinA}} </p>
                <p> Team B <input type="checkbox"> <input type="text" v-model="TeamB[0]"><input type="number" placeholder="1.0" step="0.01" min="0" max="10" v-model="TeamB[1]"> {{WinB}}</p>
            </div>
        <table style="width:100%">
            <tr>
                <th>Match</th>
                <th>Bank<th>
                <th>Play<th>
                <th>F  F</th>
                <th>F Nf</th> 
                <th>Nf F</th>
                <th>Nf Nf</th>
            </tr>
        <tr>
            <td>MatchA</td>
            <td><input type="number" placeholder="10" step="1" min="5" max="30" v-model="Bank"></td>
            <td></td> 
            <td></td>
        </tr>
        <tr>
            <td><input type="number" placeholder="10" step="1" min="5" max="30" v-model="Bank"></td>
            <td></td> 
            <td></td>
        </tr>
        </table>
         <h3> {{ Bank }} </h3>
     </div>
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
        Play: 0,
        Draw: 0,
        MatchA: {TeamA: ['',0,0],TeamB: ['',0,0],},
        MatchB: {TeamA: ['',0,0],TeamB: ['',0,0],},
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
    },
    WinC: function () {
        const x = this.TeamC[1] * this.Bank
        return parseFloat(x.toFixed(2))
    },
    WinD: function () {
        const x = this.TeamD[1] * this.Bank
        return parseFloat(x.toFixed(2))
    },

    Favorite: function () {
        const x =  this.TeamB[1] * this.Bank
        return parseFloat(x.toFixed(2))
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

.row {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.match {
  flex: 50%;
  padding: 20px;
  height: 300px; /* Should be removed. Only for demonstration */
}
</style>