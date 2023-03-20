<script lang="ts">
  import type { Matrix } from "../activity/Math/Matrix";

  export let matrix: Matrix | undefined;
</script>

{#if matrix}
  <table>
    {#each new Array(matrix.row) as _, i}
      <tr>
        {#each matrix.getRow(i) as v}
          <td>{v.toFixed(2)}</td>
        {/each}
      </tr>
    {/each}
  </table>
{/if}

<style>
  td {
    width: 50px;
    height: 50px;
    text-align: center;
    vertical-align: middle;
  }
  table {
    border: 1px solid #000000;
  }
</style>
