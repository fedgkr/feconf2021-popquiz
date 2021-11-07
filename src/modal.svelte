<script>
  let _active = false;
  export const setActive = (newActive = true) => (_active = newActive);
</script>

{#if _active}
  <div class="modal__wrap" on:click={() => setActive(false)}>
    <div class="modal__body">
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal__wrap {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .modal__body {
    position: absolute;
    min-height: 300px;
    padding: 30px;
  }
  .modal__content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
