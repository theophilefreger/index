<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ConfirmDialogue from '../shared-components/confirm-dialogue.svelte';
  import { showDeleteModal } from '$lib/stores/preferences.store';
  import Checkbox from '$lib/components/elements/checkbox.svelte';

  export let size: number;

  let checked = false;

  const dispatch = createEventDispatcher<{
    confirm: void;
    cancel: void;
  }>();

  const handleConfirm = () => {
    if (checked) {
      $showDeleteModal = false;
    }
    dispatch('confirm');
  };
</script>

<ConfirmDialogue
  id="permanently-delete-asset-modal"
  title="Supprimer Définitivement l'Actif{size > 1 ? 's' : ''}"
  confirmText="Supprimer"
  onConfirm={handleConfirm}
  onClose={() => dispatch('cancel')}
>
  <svelte:fragment slot="prompt">
    <p>
      Êtes-vous sûr de vouloir supprimer définitivement
      {#if size > 1}
        ces <b>{size}</b> actifs ? Cela les supprimera également de leurs albums.
      {:else}
        cet actif ? Cela le supprimera également de ses albums.
      {/if}
    </p>
    <p><b>Vous ne pouvez pas annuler cette action !</b></p>

    <div class="pt-4 flex justify-center items-center">
      <Checkbox id="confirm-deletion-input" label="Ne plus afficher ce message" bind:checked />
    </div>
  </svelte:fragment>
</ConfirmDialogue>
