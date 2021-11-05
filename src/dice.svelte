<script>
  export let person;
</script>

<div
  class="dice"
  class:first={person.rank === 1}
  class:second={person.rank === 2 || person.rank === 3 || person.rank === 4}
>
  <!-- <div>{person.name}</div> -->
  <!-- <div>{person.score}</div>
  <div>rank : {person.rank}</div> -->
</div>

<style>
  .dice {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: white;
    transition: 1s background-color;
  }
  .first {
    background-color: red;
    color: white;
  }
  .second {
    background-color: blue;
    color: white;
  }
</style>
