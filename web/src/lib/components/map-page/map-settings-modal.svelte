<script lang="ts">
  import FullScreenModal from '$lib/components/shared-components/full-screen-modal.svelte';
  import type { MapSettings } from '$lib/stores/preferences.store';
  import { Duration } from 'luxon';
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import Button from '../elements/buttons/button.svelte';
  import LinkButton from '../elements/buttons/link-button.svelte';
  import SettingSelect from '$lib/components/shared-components/settings/setting-select.svelte';
  import SettingSwitch from '$lib/components/shared-components/settings/setting-switch.svelte';
  import DateInput from '../elements/date-input.svelte';

  export let settings: MapSettings;
  let customDateRange = !!settings.dateAfter || !!settings.dateBefore;

  const dispatch = createEventDispatcher<{
    close: void;
    save: MapSettings;
  }>();

  const handleClose = () => dispatch('close');
</script>

<FullScreenModal id="map-settings-modal" title="Map settings" onClose={handleClose}>
  <form
    on:submit|preventDefault={() => dispatch('save', settings)}
    class="flex flex-col gap-4 text-immich-primary dark:text-immich-dark-primary"
    id="map-settings-form"
  >
    <SettingSwitch id="allow-dark-mode" title="Autoriser le mode sombre" bind:checked={settings.allowDarkMode} />
    <SettingSwitch id="only-favorites" title="Seulement les favoris" bind:checked={settings.onlyFavorites} />
    <SettingSwitch id="include-archived" title="Inclure les archives" bind:checked={settings.includeArchived} />
    <SettingSwitch
      id="include-shared-partner-assets"
      title="Inclure les partages"
      bind:checked={settings.withPartners}
    />
    <SettingSwitch
      id="include-shared-albums"
      title="Inclure les albums partagés"
      bind:checked={settings.withSharedAlbums}
    />
    {#if customDateRange}
      <div in:fly={{ y: 10, duration: 200 }} class="flex flex-col gap-4">
        <div class="flex items-center justify-between gap-8">
          <label class="immich-form-label shrink-0 text-sm" for="date-after">Date après</label>
          <DateInput
            class="immich-form-input w-40"
            type="date"
            id="date-after"
            max={settings.dateBefore}
            bind:value={settings.dateAfter}
          />
        </div>
        <div class="flex items-center justify-between gap-8">
          <label class="immich-form-label shrink-0 text-sm" for="date-before">Date avant</label>
          <DateInput class="immich-form-input w-40" type="date" id="date-before" bind:value={settings.dateBefore} />
        </div>
        <div class="flex justify-center text-xs">
          <LinkButton
            on:click={() => {
              customDateRange = false;
              settings.dateAfter = '';
              settings.dateBefore = '';
            }}
          >
            Ne pas utiliser une plage de dates personnalisée.
          </LinkButton>
        </div>
      </div>
    {:else}
      <div in:fly={{ y: -10, duration: 200 }} class="flex flex-col gap-1">
        <SettingSelect
          label="Plage de dates"
          name="date-range"
          bind:value={settings.relativeDate}
          options={[
            {
              value: '',
              text: 'Tout',
            },
            {
              value: Duration.fromObject({ hours: 24 }).toISO() || '',
              text: 'Dernières 24 heures',
            },
            {
              value: Duration.fromObject({ days: 7 }).toISO() || '',
              text: 'Dernière semaine',
            },
            {
              value: Duration.fromObject({ days: 30 }).toISO() || '',
              text: 'Dernier mois',
            },
            {
              value: Duration.fromObject({ years: 1 }).toISO() || '',
              text: 'Dernière année',
            },
            {
              value: Duration.fromObject({ years: 3 }).toISO() || '',
              text: 'Dernières 3 années',
            },
          ]}
        />
        <div class="text-xs">
          <LinkButton
            on:click={() => {
              customDateRange = true;
              settings.relativeDate = '';
            }}
          >
            Utiliser plutôt une plage de date
          </LinkButton>
        </div>
      </div>
    {/if}
  </form>
  <svelte:fragment slot="sticky-bottom">
    <Button color="gray" size="sm" fullwidth on:click={handleClose}>Annuler</Button>
    <Button type="submit" size="sm" fullwidth form="map-settings-form">Sauvegarder</Button>
  </svelte:fragment>
</FullScreenModal>
