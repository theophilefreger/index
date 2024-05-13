<script>
  import { page } from '$app/stores';
  import Icon from '$lib/components/elements/icon.svelte';
  import ImmichLogo from '$lib/components/shared-components/immich-logo.svelte';
  import CircleIconButton from '$lib/components/elements/buttons/circle-icon-button.svelte';
  import { copyToClipboard } from '$lib/utils';
  import { mdiCodeTags, mdiContentCopy, mdiMessage, mdiPartyPopper } from '@mdi/js';

  const handleCopy = async () => {
    //
    const error = $page.error || null;
    if (!error) {
      return;
    }

    await copyToClipboard(`${error.message} - ${error.code}\n${error.stack}`);
  };
</script>

<div class="h-screen w-screen">
  <section class="bg-immich-bg dark:bg-immich-dark-bg">
    <div class="flex place-items-center border-b px-6 py-4 dark:border-b-immich-dark-gray">
      <a class="flex place-items-center gap-2 hover:cursor-pointer" href="/photos">
        <ImmichLogo width="55%" />
      </a>
    </div>
  </section>

  <div class="fixed top-0 flex h-full w-full place-content-center place-items-center overflow-hidden bg-black/50">
    <div>
      <div
        class="w-[500px] max-w-[95vw] rounded-3xl border bg-immich-bg shadow-sm dark:border-immich-dark-gray dark:bg-immich-dark-gray dark:text-immich-dark-fg"
      >
        <div>
          <div class="flex items-center justify-between gap-4 px-4 py-4">
            <h1 class="font-medium text-immich-primary dark:text-immich-dark-primary">
              🚨 Erreur - Quelque chose s'est mal passé
            </h1>
            <div class="flex justify-end">
              <CircleIconButton
                color="primary"
                icon={mdiContentCopy}
                title="Copy error"
                on:click={() => handleCopy()}
              />
            </div>
          </div>

          <hr />

          <div class="immich-scrollbar max-h-[75vh] min-h-[300px] gap-4 overflow-y-auto p-4 pb-4">
            <div class="flex w-full flex-col gap-2">
              <p class="text-red-500">{$page.error?.message} ({$page.error?.code})</p>
              {#if $page.error?.stack}
                <label for="stacktrace">Stacktrace</label>
                <pre id="stacktrace" class="text-xs">{$page.error?.stack || 'No stack'}</pre>
              {/if}
            </div>
          </div>

          <hr />

          <div class="flex place-content-center place-items-center justify-around">
            <!-- href="mailto:tfreger@rfstudio.fr" -->
            <a
              href="https://rfstudio.fr"
              target="_blank"
              rel="noopener noreferrer"
              class="flex grow basis-0 justify-center p-4"
            >
              <button class="flex flex-col place-content-center place-items-center gap-2">
                <Icon path={mdiMessage} size={24} />
                <p class="text-sm">Obtenir de l'aide</p>
              </button>
            </a>

            <a
              href="https://github.com/theophilefreger"
              target="_blank"
              rel="noopener noreferrer"
              class="flex grow basis-0 justify-center p-4"
            >
              <button class="flex flex-col place-content-center place-items-center gap-2">
                <Icon path={mdiPartyPopper} size={24} />
                <p class="text-sm">Lire la note de mise à jour</p>
              </button>
            </a>

            <a
              href="https://github.com/theophilefreger"
              target="_blank"
              rel="noopener noreferrer"
              class="flex grow basis-0 justify-center p-4"
            >
              <button class="flex flex-col place-content-center place-items-center gap-2">
                <Icon path={mdiCodeTags} size={24} />
                <p class="text-sm">Lire les changements</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
