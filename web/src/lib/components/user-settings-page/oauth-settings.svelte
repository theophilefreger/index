<script lang="ts">
  import { goto } from '$app/navigation';
  import { featureFlags } from '$lib/stores/server-config.store';
  import { oauth } from '$lib/utils';
  import { type UserResponseDto } from '@immich/sdk';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { handleError } from '../../utils/handle-error';
  import Button from '../elements/buttons/button.svelte';
  import LoadingSpinner from '../shared-components/loading-spinner.svelte';
  import { notificationController, NotificationType } from '../shared-components/notification/notification';

  export let user: UserResponseDto;

  let loading = true;

  onMount(async () => {
    if (oauth.isCallback(window.location)) {
      try {
        loading = true;

        user = await oauth.link(window.location);

        notificationController.show({
          message: 'Compte OAuth lié',
          type: NotificationType.Info,
        });
      } catch (error) {
        handleError(error, 'Impossible de lier le compte OAuth');
      } finally {
        await goto('?open=oauth');
      }
    }

    loading = false;
  });

  const handleUnlink = async () => {
    try {
      user = await oauth.unlink();
      notificationController.show({
        message: 'Compte OAuth désolidarisé',
        type: NotificationType.Info,
      });
    } catch (error) {
      handleError(error, 'Impossible de désolidariser le compte');
    }
  };
</script>

<section class="my-4">
  <div in:fade={{ duration: 500 }}>
    <div class="flex justify-end">
      {#if loading}
        <div class="flex place-content-center place-items-center">
          <LoadingSpinner />
        </div>
      {:else if $featureFlags.oauth}
        {#if user.oauthId}
          <Button size="sm" on:click={() => handleUnlink()}>Désolidariser Oauth</Button>
        {:else}
          <Button size="sm" on:click={() => oauth.authorize(window.location)}>Lien vers OAuth</Button>
        {/if}
      {/if}
    </div>
  </div>
</section>
