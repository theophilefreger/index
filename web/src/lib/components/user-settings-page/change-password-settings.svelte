<script lang="ts">
  import {
    notificationController,
    NotificationType,
  } from '$lib/components/shared-components/notification/notification';
  import { changePassword } from '@immich/sdk';
  import { fade } from 'svelte/transition';
  import SettingInputField, { SettingInputFieldType } from '../admin-page/settings/setting-input-field.svelte';
  import Button from '../elements/buttons/button.svelte';
  import type { HttpError } from '@sveltejs/kit';

  let password = '';
  let newPassword = '';
  let confirmPassword = '';

  const handleChangePassword = async () => {
    try {
      await changePassword({ changePasswordDto: { password, newPassword } });

      notificationController.show({
        message: 'Mot de passe modifié',
        type: NotificationType.Info,
      });

      password = '';
      newPassword = '';
      confirmPassword = '';
    } catch (error) {
      console.error('Error [user-profile] [changePassword]', error);
      notificationController.show({
        message: (error as HttpError)?.body?.message || 'Impossible de changer le mot de passe',
        type: NotificationType.Error,
      });
    }
  };
</script>

<section class="my-4">
  <div in:fade={{ duration: 500 }}>
    <form autocomplete="off" on:submit|preventDefault>
      <div class="ml-4 mt-4 flex flex-col gap-4">
        <SettingInputField
          inputType={SettingInputFieldType.PASSWORD}
          label="MOT DE PASSE"
          bind:value={password}
          required={true}
        />

        <SettingInputField
          inputType={SettingInputFieldType.PASSWORD}
          label="NOUVEAU MOT DE PASSE"
          bind:value={newPassword}
          required={true}
        />

        <SettingInputField
          inputType={SettingInputFieldType.PASSWORD}
          label="CONFIRMER LE MOT DE PASSE"
          bind:value={confirmPassword}
          required={true}
        />

        <div class="flex justify-end">
          <Button
            type="submit"
            size="sm"
            disabled={!(password && newPassword && newPassword === confirmPassword)}
            on:click={() => handleChangePassword()}>Terminer</Button
          >
        </div>
      </div>
    </form>
  </div>
</section>
