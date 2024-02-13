import { authenticate } from '$lib/utils/auth';
import { api, ThumbnailFormat } from '@api';
import type { AxiosError } from 'axios';
import type { PageLoad } from './$types';
import { error as throwError } from '@sveltejs/kit';

export const load = (async ({ params }) => {
  const { key } = params;
  await authenticate({ public: true });

  try {
    const { data: sharedLink } = await api.sharedLinkApi.getMySharedLink({ key });

    const assetCount = sharedLink.assets.length;
    const assetId = sharedLink.album?.albumThumbnailAssetId || sharedLink.assets[0]?.id;

    return {
      sharedLink,
      meta: {
        title: sharedLink.album ? sharedLink.album.albumName : 'Partage public',
        description: sharedLink.description || `${assetCount} ressources en partage.`,
        imageUrl: assetId
          ? api.getAssetThumbnailUrl(assetId, ThumbnailFormat.Webp, sharedLink.key)
          : '/feature-panel.png',
      },
    };
  } catch (error) {
    // handle unauthorized error
    // TODO this doesn't allow for 404 shared links anymore
    if ((error as AxiosError).response?.status === 401) {
      return {
        passwordRequired: true,
        sharedLinkKey: key,
        meta: {
          title: 'Mot de passe requis',
        },
      };
    }

    throwError(404, {
      message: 'Lien de partage invalide',
    });
  }
}) satisfies PageLoad;
