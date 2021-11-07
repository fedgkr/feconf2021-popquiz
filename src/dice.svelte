<script>
  import Modal from "./modal.svelte";
  import { firstGoods, secondGoods } from "./mention";
  import { maskingEmail } from "./util.js";
  export let person;
  let modal;
  const onClick = () => {
    if (isFirst || isSecond) modal.setActive();
  };
  $: isFirst = person.rank === 1;
  $: isSecond = person.rank === 2 || person.rank === 3 || person.rank === 4;
</script>

<Modal bind:this={modal}>
  <div
    class="modal__goods_wrap"
    style="background-image: url({isFirst
      ? firstGoods.goodsUrl
      : secondGoods.goodsUrl});"
  />
  <div class="modal__comment">축하합니다!!<span use:maskingEmail>{person.name}</span>님</div>
</Modal>

<div
  class="dice"
  class:first={isFirst}
  class:second={isSecond}
  on:click={onClick}
/>

<style>
  .dice {
    cursor: pointer;
    display: inline-block;
    width: 100px;
    height: 100px;
    transition: 1s background-color;
    background-color: rgb(245, 245, 245);
    border-radius: 100%;
  }
  .first {
    background-color: red;
    color: white;
  }
  .second {
    background-color: blue;
    color: white;
  }
  .modal__goods_wrap {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    background-position: center;
    background-size: contain;
    background-color: white;
  }
  .modal__comment{
    font-size: 30px;
    font-weight: bold;
  }
</style>
