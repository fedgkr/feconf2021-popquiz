<script>
  import Candidate from "./candidate.svelte";
  import Grading from "./grading.svelte";
  import Random from "./random.svelte";
</script>

<Candidate let:candidates>
  <Grading {candidates} let:elects>
    <Random people={elects} />
  </Grading>
</Candidate>
<div />

<style>
  :global(body) {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
