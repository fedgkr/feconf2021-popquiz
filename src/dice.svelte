<script>
  import Modal from "./modal.svelte";
  import { firstGoods } from "./mention";
  export let person;
  let modal;
  $: isFirst = person.rank === 1;
  $: isSecond = person.rank === 2 || person.rank === 3 || person.rank === 4;
</script>

<Modal bind:this={modal}>
  <img src={firstGoods.goodsUrl} alt="" class="modal__goods" />
  <div>축하합니다!!<span></span>님
  </div>
</Modal>
<div
  class="dice"
  class:first={isFirst}
  class:second={isSecond}
  on:click={() => modal.setActive()}
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
  .modal__goods {
    width: 100%;
  }
</style>
