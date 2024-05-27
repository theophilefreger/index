<script lang="ts">
  import { copyToClipboard } from '$lib/utils';
  import { mdiKeyVariant } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';
  import Button from '../elements/buttons/button.svelte';
  import FullScreenModal from '../shared-components/full-screen-modal.svelte';

  export let secret = '';

  const dispatch = createEventDispatcher<{
    done: void;
  }>();
  const handleDone = () => dispatch('done');
</script>

<FullScreenModal id="api-key-secret-modal" title="API key" icon={mdiKeyVariant} onClose={() => handleDone()}>
  <div class="text-immich-primary dark:text-immich-dark-primary">
    <p class="text-sm dark:text-immich-dark-fg">
      Cette valeur ne sera affichée qu'une seule fois. Assurez-vous de la copier avant de fermer la fenêtre.
    </p>
  </div>

  <div class="my-4 flex flex-col gap-2">
    <!-- <label class="immich-form-label" for="secret">API Key</label> -->
    <textarea class="immich-form-input" id="secret" name="secret" readonly={true} value={secret} />
  </div>

  <svelte:fragment slot="sticky-bottom">
    <Button on:click={() => copyToClipboard(secret)} fullwidth>Copier la clé</Button>
    <Button on:click={() => handleDone()} fullwidth>Terminé</Button>
  </svelte:fragment>
</FullScreenModal>
