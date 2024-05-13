<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../elements/buttons/button.svelte';
  import FullScreenModal from '../shared-components/full-screen-modal.svelte';
  import { mdiFolderRemove } from '@mdi/js';
  import { onMount } from 'svelte';

  export let exclusionPattern: string;
  export let exclusionPatterns: string[] = [];
  export let isEditing = false;
  export let submitText = 'Submit';

  onMount(() => {
    if (isEditing) {
      exclusionPatterns = exclusionPatterns.filter((pattern) => pattern !== exclusionPattern);
    }
  });

  $: isDuplicate = exclusionPattern !== null && exclusionPatterns.includes(exclusionPattern);
  $: canSubmit = exclusionPattern && !exclusionPatterns.includes(exclusionPattern);

  const dispatch = createEventDispatcher<{
    cancel: void;
    submit: { excludePattern: string };
    delete: void;
  }>();
  const handleCancel = () => dispatch('cancel');
  const handleSubmit = () => dispatch('submit', { excludePattern: exclusionPattern });
</script>

<FullScreenModal
  id="add-exclusion-pattern-modal"
  title="Add exclusion pattern"
  icon={mdiFolderRemove}
  onClose={handleCancel}
>
  <form on:submit|preventDefault={() => handleSubmit()} autocomplete="off" id="add-exclusion-pattern-form">
    <p class="py-5 text-sm">
      Les motifs d'exclusion vous permettent d'ignorer des fichiers et des dossiers lors de la numérisation de votre
      bibliothèque. Cela est utile si vous avez des dossiers contenant des fichiers que vous ne souhaitez pas importer,
      tels que des fichiers RAW.
      <br /><br />
      Ajoutez des motifs d'exclusion. La recherche avec , ** et ? est prise en charge. Pour ignorer tous les fichiers dans
      un répertoire nommé 'Raw', utilisez '/Raw/'. Pour ignorer tous les fichiers se terminant par '.tif', utilisez '**/.tif'.
      Pour ignorer un chemin absolu, utilisez '/chemin/à/ignorer'.
    </p>
    <div class="my-4 flex flex-col gap-2">
      <label class="immich-form-label" for="exclusionPattern">Pattern</label>
      <input
        class="immich-form-input"
        id="exclusionPattern"
        name="exclusionPattern"
        type="text"
        bind:value={exclusionPattern}
      />
    </div>
    <div class="mt-8 flex w-full gap-4">
      {#if isDuplicate}
        <p class="text-red-500 text-sm">Ce motif d'exclusion existe déjà.</p>
      {/if}
    </div>
  </form>
  <svelte:fragment slot="sticky-bottom">
    <Button color="gray" fullwidth on:click={() => handleCancel()}>Annuler</Button>
    {#if isEditing}
      <Button color="red" fullwidth on:click={() => dispatch('delete')}>Supprimer</Button>
    {/if}
    <Button type="submit" disabled={!canSubmit} fullwidth form="add-exclusion-pattern-form">{submitText}</Button>
  </svelte:fragment>
</FullScreenModal>
