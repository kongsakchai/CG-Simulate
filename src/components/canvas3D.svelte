<script lang="ts">
  import { onMount } from "svelte";
  import { createScene } from "../utils/canvas3D";
  import type * as THREE from "three";

  let canvas: HTMLCanvasElement;
  export let scene3D: THREE.Scene;

  onMount(() => {
    const { scene } = createScene(canvas);
    scene3D = scene;
  });
</script>

<canvas bind:this={canvas} width="600" height="600" />

<style>
  canvas {
    background-color: #97c0fe;
  }
</style>
