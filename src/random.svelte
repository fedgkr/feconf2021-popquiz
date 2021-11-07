<script>
  import Dice from "./dice.svelte";
  import Count from "./count.svelte";
  import { rank, random } from "./util";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import { throttle } from "lodash-es";

  export let people = [];
  let displayPeople = [];
  const count = tweened(3, { duration: 1000, easing: cubicInOut });
  const peopleRandom = throttle(() => displayPeople = rank(random(displayPeople)), 100);
  count.subscribe(() => peopleRandom());
  const genPeople = (name = "noNamed") => {
    return { name, score: 0, rank: 0 };
  };

  $: if (people.length > 0) {
    displayPeople = people.map((person) => genPeople(person["이메일 주소"]));
  }

  const counterStart$ = async () => {
    count.update((_) => 3, { duration: 0 });
    const maxCount = $count;
    for (let i = maxCount; i > 0; i--) {
      await count.set(i);
    }
  };
</script>

{#await counterStart$()}
  <Count count={$count} />
{/await}

{#each displayPeople as person}
  <Dice {person} />
{/each}

<style>
  :global(body) {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
