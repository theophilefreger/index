<script lang="ts">
  import CircleIconButton from '$lib/components/elements/buttons/circle-icon-button.svelte';
  import { getKey } from '$lib/utils';
  import { handleError } from '$lib/utils/handle-error';
  import { removeSharedLinkAssets, type SharedLinkResponseDto } from '@immich/sdk';
  import { mdiDeleteOutline } from '@mdi/js';
  import ConfirmDialogue from '../../shared-components/confirm-dialogue.svelte';
  import { NotificationType, notificationController } from '../../shared-components/notification/notification';
  import { getAssetControlContext } from '../asset-select-control-bar.svelte';

  export let sharedLink: SharedLinkResponseDto;

  let removing = false;

  const { getAssets, clearSelect } = getAssetControlContext();

  const handleRemove = async () => {
    try {
      const results = await removeSharedLinkAssets({
        id: sharedLink.id,
        assetIdsDto: {
          assetIds: [...getAssets()].map((asset) => asset.id),
        },
        key: getKey(),
      });

      for (const result of results) {
        if (!result.success) {
          continue;
        }

        sharedLink.assets = sharedLink.assets.filter((asset) => asset.id !== result.assetId);
      }

      const count = results.filter((item) => item.success).length;

      notificationController.show({
        type: NotificationType.Info,
        message: `${count} ressources supprimées`,
      });

      clearSelect();
    } catch (error) {
      handleError(error, 'Impossible de retirer les ressources du lien partagé');
    }
  };
</script>

<CircleIconButton title="Retirer du lien partagé" on:click={() => (removing = true)} icon={mdiDeleteOutline} />

{#if removing}
  <ConfirmDialogue
    title="Retirer les ressources?"
    prompt="Êtes-vous sûr de vouloir retirer {getAssets().size} ressource(s) de ce lien partagé ?"
    confirmText="Retirer"
    on:confirm={() => handleRemove()}
    on:cancel={() => (removing = false)}
  />
{/if}
