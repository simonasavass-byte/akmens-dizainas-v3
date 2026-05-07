# Materials Image Generation Brief

## Purpose

This handoff brief prepares the first image-generation attempt for the weakest remaining image slot in Akmens Dizainas v3.

Target slot:

- `src/assets/materials.jpg`

Current live usage:

- [src/components/site/Materials.tsx](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/src/components/site/Materials.tsx:1)
- [src/pages/Medziagos.tsx](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/src/pages/Medziagos.tsx:1)

Visual context files in this repo:

- Screenshot: [docs/image-generation/screenshots/medziagos-page.png](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/screenshots/medziagos-page.png)
- Screenshot: [docs/image-generation/screenshots/home-materials-section.png](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/screenshots/home-materials-section.png)
- Tone reference: [docs/image-generation/screenshots/home-hero-tone-reference.png](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/screenshots/home-hero-tone-reference.png)
- Tone reference: [docs/image-generation/screenshots/graviravimas-tone-reference.png](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/screenshots/graviravimas-tone-reference.png)
- Tone reference: [docs/image-generation/screenshots/restauravimas-tone-reference.png](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/screenshots/restauravimas-tone-reference.png)
- Current source reference: [docs/image-generation/references/current-materials.jpg](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/references/current-materials.jpg)
- Reference image: [docs/image-generation/references/reference-home-hero.webp](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/references/reference-home-hero.webp)
- Reference image: [docs/image-generation/references/reference-graviravimas.jpg](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/references/reference-graviravimas.jpg)
- Reference image: [docs/image-generation/references/reference-restauravimas.jpg](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/references/reference-restauravimas.jpg)
- Reference image: [docs/image-generation/references/reference-values-tulips.jpg](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/references/reference-values-tulips.jpg)
- Extra tone reference: [docs/image-generation/references/reference-paminklai-hero.webp](/Users/arvydas/Desktop/Websites/akmens-dizainas-v3/docs/image-generation/references/reference-paminklai-hero.webp)

## Why This Slot Needs Replacement

`materials.jpg` is currently the clearest visual mismatch on the site. It reads more like a polished showroom mockup or rendered product still life than the rest of the site’s grounded, documentary, real-world memorial imagery.

The rest of the website now leans toward:

- calm, real Lithuanian cemetery context
- tactile stone surfaces
- believable daylight
- understated premium tone
- respectful, non-sentimental realism

The materials slot is safe for generated support imagery because it does not need to depict:

- a real founder or real historical person
- a specific workshop/archive scene
- a specific completed client memorial project
- a real identifiable grave with names or dates

This slot can function as an editorial materials still life rather than a documentary claim.

## Exact Recommended Subject

Generate a highly realistic editorial photo of premium granite material samples:

- three to five thick polished granite slabs or sample blocks
- black granite, warm gray granite, and deep dark red granite should be clearly represented
- one additional neutral gray or soft speckled stone is acceptable if composition benefits
- samples should feel heavy, real, tactile, and used for memorial stone selection

Do not include:

- people
- hands
- tools
- cemetery monuments
- readable labels
- branding
- fake showroom signage

## Aspect Ratio And Dimensions

Required working crop behavior:

- homepage materials section: `16:9`
- `/medziagos` hero image area: `16:8`

Recommended output:

- minimum `2560x1440`
- ideal `3000x1688` or larger

Recommended safe framing:

- keep the sample group centered
- leave generous negative space on the left and right edges
- avoid placing key samples too close to top or bottom edges
- make sure a `16:8` crop still keeps all key stones visible

## Crop Requirements By Context

Desktop:

- should read as a refined, wide editorial composition
- all primary stone samples should remain visible

Tablet:

- center-weighted framing should still keep 3 main stones legible

Mobile:

- the image will still be shown wide, so the main stones must be visually strong even when reduced
- avoid tiny details that disappear at small size

## Tone Reference Notes

Use the current real-image website direction as the style reference:

- grounded, calm, believable, premium
- soft daylight or daylight-like studio-natural light
- no dramatic cinematic mood
- tactile stone realism more important than glossy beauty-ad polish
- warm-neutral overall feel is better than cold blue-gray
- black granite should feel deep and premium, but not crushed into featureless black

Good tone references in this repo:

- homepage hero for overall calm premium balance
- graviravimas for tactile craft realism
- restauravimas for restrained documentary credibility
- tulip/about reference for softness and human restraint

## Must Remain Real-Only

Do not generate replacements for:

- archival workshop history imagery
- founder/family/history/company heritage imagery
- real completed memorial gallery work by default
- strongest existing real service hero images
- any image that implies a specific claimed finished client project unless later explicitly approved

## Copy-Ready Prompt

```text
A highly realistic editorial photograph of premium granite material samples for a Lithuanian memorial stonework website: three to five thick polished granite slabs arranged as a calm still life on a warm neutral surface, showing distinct black granite, soft warm gray granite, and deep dark red granite, with subtle natural shadows, soft daylight or daylight-like studio lighting, tactile stone texture, believable weight and thickness, refined negative space, understated premium mood, no branding, no people, no cemetery monuments, no readable text, no CGI look, no perfect symmetry, no glossy luxury advertising style, no dramatic overprocessing, realistic stone color and surface detail, composed to crop safely in a wide 16:9 website banner.
```

## Negative Prompt / Avoid List

```text
CGI, 3D render, fake showroom render, floating objects, luxury kitchen countertop ad, marble veining, fake stone textures, overly glossy reflections, blue or purple color cast, dramatic cinematic contrast, heavy HDR, visible labels, logos, people, hands, cemetery monuments, readable text, perfect artificial symmetry, surreal composition, stock photo cliché, plastic-looking surfaces
```

## Recommended Final Filename And Format

- final filename: `materials-editorial-granite.webp`
- preferred format: `webp`
- export target after selection: around `2200-2800px` wide depending on final crop and compression quality

## Exact Next Step After Candidate Generation

1. Generate 2 to 3 materials candidates only.
2. Compare them side by side against:
   - `medziagos-page.png`
   - `home-materials-section.png`
   - the existing real reference images in `docs/image-generation/references/`
3. Reject any candidate that feels rendered, glossy, too cold, too symmetrical, or too luxury-product-ad-like.
4. Pick the strongest one and test it in both `16:9` and `16:8` crops before replacing `src/assets/materials.jpg`.
5. Only after the materials slot is solved, decide whether secondary slots still need generated support imagery.

## Secondary Lower-Priority Notes

### `/didmenine-prekyba-paminklais`

- Current issue: real image is credible but a little less premium and less intentional than the strongest service pages
- If generation is ever used, it should feel documentary-commercial rather than emotional
- Subject direction: orderly memorial inventory / trade-supply context with multiple granite monuments visible
- Keep it secondary. Do not generate this before materials unless materials fails badly

### `/kapavieciu-projektavimas`

- Current issue: current image is believable but flatter and less elevated than the strongest pages
- If generation is used, the image should show a complete, thoughtfully designed memorial layout from a slightly elevated human viewpoint
- Keep this secondary behind materials

### First Gallery Image

- Only revisit if a later final review still confirms that the current image feels too bright or flare-heavy
- Gallery imagery should remain real-first whenever possible because it implies completed work
- Do not generate a gallery replacement in the first round
