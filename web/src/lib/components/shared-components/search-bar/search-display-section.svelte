<script lang="ts" context="module">
  export interface SearchDisplayFilters {
    isNotInAlbum?: boolean;
    isArchive?: boolean;
    isFavorite?: boolean;
  }
</script>

<script lang="ts">
  import Checkbox from '$lib/components/elements/checkbox.svelte';

  export let filters: SearchDisplayFilters;
</script>

<div id="display-options-selection">
  <fieldset>
    <legend class="immich-form-label">OPTIONS DE TRI</legend>
    <div class="flex flex-wrap gap-x-5 gap-y-2 mt-1">
      <Checkbox id="not-in-album-checkbox" label="Dans aucun album" bind:checked={filters.isNotInAlbum} />
      <Checkbox id="archive-checkbox" label="Archives" bind:checked={filters.isArchive} />
      <Checkbox id="favorite-checkbox" label="Favoris" bind:checked={filters.isFavorite} />
    </div>
  </fieldset>
</div>
