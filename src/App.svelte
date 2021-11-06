<script>
  import { onMount } from "svelte";
  import Dice from "./dice.svelte";
  import Candidate from "./candidate.svelte";
  import Count from "./count.svelte";
  import { rank, random } from "./util";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import { iife } from "iife";
  import { throttle } from "lodash-es";
  const genPeople = (name = "noNamed") => {
    return { name, score: 0, rank: 0 };
  };
  const peopleRandom = throttle(() => {
    people = rank(random(people));
  }, 100);

  let people = [];

  const count = tweened(3, { duration: 1000, easing: cubicInOut });
  let counter$;
  const counterStart = () => {
    count.update((_) => 3, { duration: 0 });
    counter$ = iife(async () => {
      const maxCount = $count;
      for (let i = maxCount; i > 0; i--) {
        await count.set(i);
      }
    });
  };
  count.subscribe(() => {
    peopleRandom();
  });

  onMount(() => {
    people = iife(() => {
      const temp = [];
      for (let i = 0; i < 80; i++) {
        temp.push(genPeople());
      }
      return temp;
    });
  });

  const onClick = () => {
    counterStart();
  };
</script>

<Candidate />

{#await counter$}
  <Count count={$count} />
{/await}

{#each people as person}
  <Dice {person} />
{/each}

<div />

<button on:click={() => onClick()}>random</button>

<style>
  :global(body) {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
