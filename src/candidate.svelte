<script>
  import { convertFileToxlsx } from "./util.js";
  let inputFile;
  let candidates = [];
  const onChange = async (event) => {
    const file = event.target.files[0];
    candidates = file && (await convertFileToxlsx(file));
  };
</script>

{#if candidates.length > 1}
  <slot {candidates} />
{:else}
  <div class="candidate__wrap">
    <div
      class="candidate__button"
      on:click={() => {
        inputFile.click();
      }}
    >
      추첨
    </div>
    <input type="file" bind:this={inputFile} hidden on:change={onChange} />
  </div>
{/if}

<style>
  .candidate__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 100px;
  }
  .candidate__button {
    cursor: pointer;
    transition: 0.5s background-color;
  }
  .candidate__button:hover {
    background-color: rgb(245, 245, 245);
    transition: 0.5s background-color;
    border-radius: 10%;
  }
</style>
