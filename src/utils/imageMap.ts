/**
 * Centralized product → image mapping.
 *
 * Image files live in  public/assets/images/  and are served as static assets.
 * Filenames are irregular (mixed case, spaces, special chars, double extensions)
 * so we maintain an explicit map rather than relying on auto-matching.
 *
 * When a new product image is added, update ONLY this map.
 */

const imageMap: Record<string, string> = {
  'aam':            '/assets/images/Aam.png',
  'sampurna':       '/assets/images/Sampurna.png.png',
  'sampurna-4g':    '/assets/images/sampurna+.png',
  'banana':         '/assets/images/banana.png',
  'boron-plus':     '/assets/images/boron+.png',
  'boronplus':      '/assets/images/boronplus.png',
  'calbon':         '/assets/images/calbon.png',
  'calon':          '/assets/images/calon.png',
  'citron':         '/assets/images/citron.png',
  'dymond-plus-33': '/assets/images/dymond+33.png',
  'dymond-12':      '/assets/images/dymond.png',
  'dymond-21':      '/assets/images/dymond.png',
  'greenplus':      '/assets/images/GREEN +.png',
  'kalpam':         '/assets/images/kalpam.png',
  'nutri-ferti':    '/assets/images/nutri.png',
  'nutri-ferti2':   '/assets/images/nutri.png',
  'nutri-ferti3':   '/assets/images/nutri.png',
  'nutri-ferti4':   '/assets/images/nutri.png',
  'nutri-ferti5':   '/assets/images/nutri.png',
  'nutri-ferti6':   '/assets/images/nutri.png',
  'nutrichill':     '/assets/images/nutrichill.png',
  'nutriferus-12':  '/assets/images/nutriferus.png',
  'nutrimag':       '/assets/images/nutrimag.png',
  'nutrimix':       '/assets/images/nutrimix.png',
  'pride-x':        '/assets/images/pride-x.png.png',
};

/** Fallback shown when no image is mapped for a product */
const FALLBACK_IMAGE = '';

/**
 * Resolve the correct image URL for a given product ID.
 * Returns an empty string when no image exists (components show a placeholder).
 */
export function resolveProductImage(productId: string): string {
  return imageMap[productId] ?? FALLBACK_IMAGE;
}
