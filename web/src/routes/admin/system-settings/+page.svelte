<script lang="ts">
  import AdminSettings from '$lib/components/admin-page/settings/admin-settings.svelte';
  import FFmpegSettings from '$lib/components/admin-page/settings/ffmpeg/ffmpeg-settings.svelte';
  import JobSettings from '$lib/components/admin-page/settings/job-settings/job-settings.svelte';
  import LibrarySettings from '$lib/components/admin-page/settings/library-settings/library-settings.svelte';
  import LoggingSettings from '$lib/components/admin-page/settings/logging-settings/logging-settings.svelte';
  import MachineLearningSettings from '$lib/components/admin-page/settings/machine-learning-settings/machine-learning-settings.svelte';
  import MapSettings from '$lib/components/admin-page/settings/map-settings/map-settings.svelte';
  import NewVersionCheckSettings from '$lib/components/admin-page/settings/new-version-check-settings/new-version-check-settings.svelte';
  import OAuthSettings from '$lib/components/admin-page/settings/oauth/oauth-settings.svelte';
  import PasswordLoginSettings from '$lib/components/admin-page/settings/password-login/password-login-settings.svelte';
  import ServerSettings from '$lib/components/admin-page/settings/server/server-settings.svelte';
  import NotificationSettings from '$lib/components/admin-page/settings/notification-settings/notification-settings.svelte';
  import SettingAccordion from '$lib/components/shared-components/settings/setting-accordion.svelte';
  import StorageTemplateSettings from '$lib/components/admin-page/settings/storage-template/storage-template-settings.svelte';
  import ThemeSettings from '$lib/components/admin-page/settings/theme/theme-settings.svelte';
  import ImageSettings from '$lib/components/admin-page/settings/image/image-settings.svelte';
  import TrashSettings from '$lib/components/admin-page/settings/trash-settings/trash-settings.svelte';
  import UserSettings from '$lib/components/admin-page/settings/user-settings/user-settings.svelte';
  import LinkButton from '$lib/components/elements/buttons/link-button.svelte';
  import Icon from '$lib/components/elements/icon.svelte';
  import UserPageLayout from '$lib/components/layouts/user-page-layout.svelte';
  import { downloadManager } from '$lib/stores/download';
  import { featureFlags } from '$lib/stores/server-config.store';
  import { copyToClipboard } from '$lib/utils';
  import { downloadBlob } from '$lib/utils/asset-utils';
  import { mdiAlert, mdiContentCopy, mdiDownload, mdiUpload } from '@mdi/js';
  import type { PageData } from './$types';
  import SettingAccordionState from '$lib/components/shared-components/settings/setting-accordion-state.svelte';
  import { QueryParameter } from '$lib/constants';
  import type { SystemConfigDto } from '@immich/sdk';

  export let data: PageData;

  let config = data.configs;
  let handleSave: (update: Partial<SystemConfigDto>) => Promise<void>;

  type Settings =
    | typeof JobSettings
    | typeof LibrarySettings
    | typeof LoggingSettings
    | typeof MachineLearningSettings
    | typeof MapSettings
    | typeof OAuthSettings
    | typeof PasswordLoginSettings
    | typeof ServerSettings
    | typeof StorageTemplateSettings
    | typeof ThemeSettings
    | typeof ImageSettings
    | typeof TrashSettings
    | typeof NewVersionCheckSettings
    | typeof NotificationSettings
    | typeof FFmpegSettings
    | typeof UserSettings;

  const downloadConfig = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const downloadKey = 'immich-config.json';
    downloadManager.add(downloadKey, blob.size);
    downloadManager.update(downloadKey, blob.size);
    downloadBlob(blob, downloadKey);
    setTimeout(() => downloadManager.clear(downloadKey), 5000);
  };

  let inputElement: HTMLInputElement;
  const uploadConfig = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }
    const reader = async () => {
      const text = await file.text();
      const newConfig = JSON.parse(text);
      await handleSave(newConfig);
    };
    reader().catch((error) => console.error('Error handling JSON config upload', error));
  };

  const settings: Array<{
    item: Settings;
    title: string;
    subtitle: string;
    key: string;
  }> = [
    {
      item: ImageSettings,
      title: 'Image Settings',
      subtitle: 'Manage the quality and resolution of generated images',
      key: 'image',
    },
    {
      item: JobSettings,
      title: 'Paramètres de travail',
      subtitle: 'Gérer la concurrence des travaux',
      key: 'job',
    },
    {
      item: LibrarySettings,
      title: 'Bibliothèque Externe',
      subtitle: 'Gérer les paramètres de la bibliothèque externe',
      key: 'external-library',
    },
    {
      item: LoggingSettings,
      title: 'Journalisation',
      subtitle: 'Gérer les paramètres des journaux',
      key: 'logging',
    },
    {
      item: MachineLearningSettings,
      title: "Paramètres d'Apprentissage Automatique",
      subtitle: "Gérer les fonctionnalités et les paramètres d'apprentissage automatique",
      key: 'machine-learning',
    },
    {
      item: MapSettings,
      title: 'Paramètres de Carte & GPS',
      subtitle: 'Gérer les fonctionnalités et les paramètres liés à la carte',
      key: 'location',
    },
    {
      item: NotificationSettings,
      title: 'Notification Settings',
      subtitle: 'Manage notification settings, including email',
      key: 'notifications',
    },
    {
      item: OAuthSettings,
      title: 'Authentification OAuth',
      subtitle: 'Gérer les paramètres de connexion avec OAuth',
      key: 'oauth',
    },
    {
      item: PasswordLoginSettings,
      title: 'Authentification par Mot de Passe',
      subtitle: 'Gérer les paramètres de connexion avec mot de passe',
      key: 'password',
    },
    {
      item: ServerSettings,
      title: 'Paramètres du Serveur',
      subtitle: 'Gérer les paramètres du serveur',
      key: 'server',
    },
    {
      item: StorageTemplateSettings,
      title: 'Modèle de Stockage',
      subtitle: 'Gérer la structure des dossiers et le nom des fichiers des actifs téléchargés',
      key: 'storage-template',
    },
    {
      item: ThemeSettings,
      title: 'Paramètres de Thème',
      subtitle: "Gérer la personnalisation de l'interface web Immich",
      key: 'theme',
    },
    {
      item: TrashSettings,
      title: 'Paramètres de la Corbeille',
      subtitle: 'Gérer les paramètres de la corbeille',
      key: 'trash',
    },
    {
      item: UserSettings,
      title: 'Paramètres Utilisateur',
      subtitle: 'Gérer les paramètres utilisateur',
      key: 'user-settings',
    },
    {
      item: NewVersionCheckSettings,
      title: 'Vérification de Version',
      subtitle: 'Activer/désactiver la notification de nouvelle version',
      key: 'version-check',
    },
    {
      item: FFmpegSettings,
      title: 'Paramètres de Transcodage Vidéo',
      subtitle: "Gérer la résolution et les informations d'encodage des fichiers vidéo",
      key: 'video-transcoding',
    },
  ];
</script>

<input bind:this={inputElement} type="file" accept=".json" style="display: none" on:change={uploadConfig} />

<div class="h-svh flex flex-col overflow-hidden">
  {#if $featureFlags.configFile}
    <div class="flex flex-row items-center gap-2 bg-gray-100 p-3 dark:bg-gray-800">
      <Icon path={mdiAlert} class="text-yellow-400" size={18} />
      <h2 class="text-md text-immich-primary dark:text-immich-dark-primary">
        La configuration est gérée par un fichier JSON
      </h2>
    </div>
  {/if}

  <UserPageLayout title={data.meta.title} admin>
    <div class="flex justify-end gap-2" slot="buttons">
      <LinkButton on:click={() => copyToClipboard(JSON.stringify(config, null, 2))}>
        <div class="flex place-items-center gap-2 text-sm">
          <Icon path={mdiContentCopy} size="18" />
          Placer dans le presse papier
        </div>
      </LinkButton>
      <LinkButton on:click={() => downloadConfig()}>
        <div class="flex place-items-center gap-2 text-sm">
          <Icon path={mdiDownload} size="18" />
          Exporter en JSON
        </div>
      </LinkButton>
      <LinkButton on:click={() => inputElement?.click()}>
        <div class="flex place-items-center gap-2 text-sm">
          <Icon path={mdiUpload} size="18" />
          Import from JSON
        </div>
      </LinkButton>
    </div>

    <AdminSettings bind:config let:handleReset bind:handleSave let:savedConfig let:defaultConfig>
      <section id="setting-content" class="flex place-content-center sm:mx-4">
        <section class="w-full pb-28 sm:w-5/6 md:w-[850px]">
          <SettingAccordionState queryParam={QueryParameter.IS_OPEN}>
            {#each settings as { item, title, subtitle, key }}
              <SettingAccordion {title} {subtitle} {key}>
                <svelte:component
                  this={item}
                  on:save={({ detail }) => handleSave(detail)}
                  on:reset={({ detail }) => handleReset(detail)}
                  disabled={$featureFlags.configFile}
                  {defaultConfig}
                  {config}
                  {savedConfig}
                />
              </SettingAccordion>
            {/each}
          </SettingAccordionState>
        </section>
      </section>
    </AdminSettings>
  </UserPageLayout>
</div>
