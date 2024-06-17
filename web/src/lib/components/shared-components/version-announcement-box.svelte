<script lang="ts">
  import { websocketStore } from '$lib/stores/websocket';
  import type { ServerVersionResponseDto } from '@immich/sdk';
  import Button from '../elements/buttons/button.svelte';
  import FullScreenModal from './full-screen-modal.svelte';
  import { t } from 'svelte-i18n';

  let showModal = false;

  const { release } = websocketStore;

  const semverToName = ({ major, minor, patch }: ServerVersionResponseDto) => `v${major}.${minor}.${patch}`;

  $: releaseVersion = $release && semverToName($release.releaseVersion);
  $: serverVersion = $release && semverToName($release.serverVersion);
  $: $release?.isAvailable && handleRelease();

  const onAcknowledge = () => {
    localStorage.setItem('appVersion', releaseVersion);
    showModal = false;
  };

  const handleRelease = () => {
    try {
      if (localStorage.getItem('appVersion') === releaseVersion) {
        return;
      }

      showModal = true;
    } catch (error) {
      console.error('Error [VersionAnnouncementBox]:', error);
    }
  };
</script>

{#if showModal}
  <FullScreenModal title="🎉 Nouvelle version disponible" onClose={() => (showModal = false)}>
    <div>
      Une nouvelle mise à jour de l'application est en cours de déploiement
      <span class="font-medium underline"
        ><a href="https://github.com/theophilefreger" target="_blank" rel="noopener noreferrer"
          >Notes de mises à jour</a
        ></span
      >
      et assurez-vous que votre configuration <code>docker-compose</code> et <code>.env</code> est à jour pour éviter toute
      mauvaise configuration, en particulier si vous utilisez WatchTower ou un mécanisme qui gère la mise à jour de votre
      application automatiquement. Pour admnistrateurs uniquement
    </div>

    <div class="mt-4 font-medium">Théophile</div>

    <div class="font-sm mt-8">
      <code>Version du serveur: {serverVersion}</code>
      <br />
      <code>Version en déploiement: {releaseVersion}</code>
    </div>

    <svelte:fragment slot="sticky-bottom">
      <Button fullwidth on:click={onAcknowledge}>{$t('acknowledge')}</Button>
    </svelte:fragment>
  </FullScreenModal>
{/if}
