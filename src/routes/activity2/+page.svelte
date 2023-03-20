<script lang="ts">
  import Canvas3D from "../../components/canvas3D.svelte";
  import * as THREE from "three";
  import { createBall, createLine } from "../../utils/object3D";
  import { points, secretMatrix } from "../../activity/activity2";
  import MatrixTable from "../../components/matrixTable.svelte";
  import { onMount } from "svelte";

  let scene: THREE.Scene;
  let step = 0;
  let prevPoint: THREE.Vector3;

  onMount(() => {
    const start = new THREE.Vector3(2, 2, 2);
    const end = new THREE.Vector3(7, 8, 9);
    const line = createLine(start, end, 500);
    scene.add(line);
  });

  const onNext = () => {
    if (step === points.length) return;
    step++;
    const point = new THREE.Vector3(...points[step - 1].toArray());
    const ball = createBall(point);
    scene.add(ball);
    if (prevPoint) {
      const line = createLine(prevPoint, point.clone(), 500);
      scene.add(line);
    }
    prevPoint = point;
  };
</script>

<div class="content">
  <Canvas3D bind:scene3D={scene} />
  <div class=" content-column">
    <button on:click={onNext}>Next Step</button>
    <div class=" content-row">
      <section>
        <h2>Secret Matrix</h2>
        <MatrixTable matrix={secretMatrix ?? undefined} />
      </section>
      <section>
        <h2>Point</h2>
        <MatrixTable matrix={points[step - 1]?.toMatrix()} />
      </section>
    </div>
    <div class=" content-row">
      {#each points.slice(0, step) as p, i}
        {#if i !== step - 1}
          <section>
            <h3>Point#{i + 1}</h3>
            <MatrixTable matrix={p.toMatrix()} />
          </section>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .content {
    width: 90vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 10px;
  }

  .content-column {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }

  .content-row {
    flex: 1 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
  }
</style>
