import { getAssetThumbnailUrl } from '$lib/utils';
import { authenticate } from '$lib/utils/auth';
import { ThumbnailFormat, getMySharedLink, isHttpError } from '@immich/sdk';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const { key } = params;
  await authenticate({ public: true });

  try {
    const sharedLink = await getMySharedLink({ key });
    const assetCount = sharedLink.assets.length;
    const assetId = sharedLink.album?.albumThumbnailAssetId || sharedLink.assets[0]?.id;

    return {
      sharedLink,
      meta: {
        title: sharedLink.album ? sharedLink.album.albumName : 'Partage public',
        description: sharedLink.description || `${assetCount} ressources en partage.`,
        imageUrl: assetId ? getAssetThumbnailUrl(assetId, ThumbnailFormat.Webp) : '/feature-panel.png',
      },
    };
  } catch (error) {
    if (isHttpError(error) && error.data.message === 'Invalid password') {
      return {
        passwordRequired: true,
        sharedLinkKey: key,
        meta: {
          title: 'Mot de passe requis',
        },
      };
    }

    throw error;
  }
}) satisfies PageLoad;
