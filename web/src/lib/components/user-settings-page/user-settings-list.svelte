<script lang="ts">
  import { page } from '$app/stores';
  import { OpenSettingQueryParameterValue, QueryParameter } from '$lib/constants';
  import { featureFlags } from '$lib/stores/server-config.store';
  import { user } from '$lib/stores/user.store';
  import { oauth } from '$lib/utils';
  import { type ApiKeyResponseDto, type SessionResponseDto } from '@immich/sdk';
  import SettingAccordionState from '../shared-components/settings/setting-accordion-state.svelte';
  import SettingAccordion from '../shared-components/settings/setting-accordion.svelte';
  import AppSettings from './app-settings.svelte';
  import ChangePasswordSettings from './change-password-settings.svelte';
  import DeviceList from './device-list.svelte';
  import MemoriesSettings from './memories-settings.svelte';
  import OAuthSettings from './oauth-settings.svelte';
  import PartnerSettings from './partner-settings.svelte';
  import UserAPIKeyList from './user-api-key-list.svelte';
  import UserProfileSettings from './user-profile-settings.svelte';

  export let keys: ApiKeyResponseDto[] = [];
  export let sessions: SessionResponseDto[] = [];

  let oauthOpen =
    oauth.isCallback(window.location) ||
    $page.url.searchParams.get(QueryParameter.OPEN_SETTING) === OpenSettingQueryParameterValue.OAUTH;
</script>

<SettingAccordionState queryParam={QueryParameter.IS_OPEN}>
  <SettingAccordion key="app-settings" title="Paramètres de l'app" subtitle="Configuration de l'app">
    <AppSettings />
  </SettingAccordion>

  <SettingAccordion key="account" title="Compte" subtitle="Changer les paramètres du compte">
    <UserProfileSettings />
  </SettingAccordion>

  <SettingAccordion key="api-keys" title="Clés API" subtitle="Paramètres des clés API">
    <UserAPIKeyList bind:keys />
  </SettingAccordion>

  <SettingAccordion key="authorized-devices" title="Appareils autorisés" subtitle="Voir les appareils utilisés">
    <DeviceList bind:devices={sessions} />
  </SettingAccordion>

  <SettingAccordion
    key="memories"
    title="Retour dans le temps"
    subtitle="Paramètres des images du même jour il y a quelques années."
  >
    <MemoriesSettings user={$user} />
  </SettingAccordion>

  {#if $featureFlags.loaded && $featureFlags.oauth}
    <SettingAccordion
      key="oauth"
      title="OAuth"
      subtitle="Paramètres de connexion OAuth"
      isOpen={oauthOpen || undefined}
    >
      <OAuthSettings user={$user} />
    </SettingAccordion>
  {/if}

  <SettingAccordion key="password" title="Mot de passe" subtitle="Changer le mot de passe">
    <ChangePasswordSettings />
  </SettingAccordion>

  <SettingAccordion key="partner-sharing" title="Partage" subtitle="Réglage des paramètres du partage">
    <PartnerSettings user={$user} />
  </SettingAccordion>
</SettingAccordionState>
