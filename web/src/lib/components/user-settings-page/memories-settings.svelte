<script lang="ts">
  import {
    notificationController,
    NotificationType,
  } from '$lib/components/shared-components/notification/notification';
  import { updateMyUser, type UserAdminResponseDto } from '@immich/sdk';
  import { fade } from 'svelte/transition';
  import { handleError } from '../../utils/handle-error';

  import SettingSwitch from '$lib/components/shared-components/settings/setting-switch.svelte';
  import Button from '../elements/buttons/button.svelte';

  export let user: UserAdminResponseDto;

  const handleSave = async () => {
    try {
      const data = await updateMyUser({ userUpdateMeDto: { memoriesEnabled: user.memoriesEnabled } });

      Object.assign(user, data);

      notificationController.show({ message: 'Paramètres sauvegardés', type: NotificationType.Info });
    } catch (error) {
      handleError(error, "Impossible d'enregistrer les paramètres");
    }
  };
</script>

<section class="my-4">
  <div in:fade={{ duration: 500 }}>
    <form autocomplete="off" on:submit|preventDefault>
      <div class="ml-4 mt-4 flex flex-col gap-4">
        <div class="ml-4">
          <SettingSwitch
            id="time-based-memories"
            title="Souvenirs basés sur le temps"
            subtitle="Photos des années précédentes"
            bind:checked={user.memoriesEnabled}
          />
        </div>
        <div class="flex justify-end">
          <Button type="submit" size="sm" on:click={() => handleSave()}>Sauvegarder</Button>
        </div>
      </div>
    </form>
  </div>
</section>
