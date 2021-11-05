<script>
  export let count;
</script>

<div class="count__wrap">
  <div class="count__content">
    {Math.round(count)}
  </div>
</div>

<style>
  .count__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .count__content {
    font-size: 200px;
    color: white;
  }
</style>
