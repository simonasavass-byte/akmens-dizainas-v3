# Generated Variant Plan

## Purpose

This file plans an experimental generated-image variant for the Akmens Darbai website.

It does **not** replace the current real-image direction.
It does **not** authorize overwriting production assets.

The current real-image implementation remains the safer launch baseline.

## Must-Keep Images

These should remain real or already accepted as-is in the generated variant:

1. `src/assets/about-history-archive.jpg`
   - Used in `src/components/site/Trust.tsx`
   - Real archive / history context
2. `src/assets/about-values-tulips.jpg`
   - Used in `src/components/site/Trust.tsx`
   - Real human/company-tone context
3. `src/assets/materials-editorial-granite.webp`
   - Used in `src/components/site/Materials.tsx`
   - Used in `src/pages/Medziagos.tsx`
   - Already accepted generated/editorial exception

## Working Rules For The Generated Variant

- Treat generated images as support imagery, not fake documentary proof.
- Avoid anything glossy, too perfect, too symmetrical, too cinematic, or obviously synthetic.
- Prefer cloudy or soft natural light over dramatic sunsets.
- Prefer Lithuanian / Baltic cemetery realism: polished granite, scale-appropriate monuments, subdued flowers, real-weather stone surfaces, believable paths and vegetation.
- Avoid fake faces unless truly necessary.
- Avoid text on stone that looks machine-gibberish.
- Avoid impossible granite reflections, mirrored symmetry, floating flowers, duplicate monuments, and plastic-looking grass.
- When one current asset serves both a card and a hero, generate **separate variants** unless the crop clearly works for both.

## Slot Inventory

| Slot ID | Current file | Usage | Current crop | Generated variant? | Priority | Notes |
|---|---|---|---|---|---|---|
| `home-hero` | `src/assets/home-hero-original.webp` | `src/components/site/Hero.tsx` | `16:10` mobile, `16:8` desktop | Yes | High | Highest-impact comparison slot |
| `trust-archive` | `src/assets/about-history-archive.jpg` | `src/components/site/Trust.tsx` | `4:5` | No, keep real | Locked | Real archive/history image |
| `trust-modern` | `src/assets/about-values-tulips.jpg` | `src/components/site/Trust.tsx` | `4:5` | No, keep real | Locked | Real human/company-tone image |
| `materials-main` | `src/assets/materials-editorial-granite.webp` | `src/components/site/Materials.tsx`, `src/pages/Medziagos.tsx` | `16:9`, `16:8` | No, keep as-is | Locked | Already accepted |
| `gallery-01` | `src/assets/gallery-memorial-01.webp` | Homepage gallery, `/galerija` | `4:5`, `5:6` | Optional | Low | Current real image is credible; generated version may be weaker |
| `gallery-02` | `src/assets/gallery-memorial-02.webp` | Homepage gallery, `/galerija` | `4:5`, `5:6` | Optional | Low | Same note |
| `gallery-03` | `src/assets/gallery-memorial-03.webp` | Homepage gallery, `/galerija` | `4:5`, `5:6` | Optional | Low | Same note |
| `gallery-04` | `src/assets/gallery-memorial-04.webp` | Homepage gallery, `/galerija` | `4:5`, `5:6` | Optional | Medium | If generated, use full-danga composition |
| `paminklai-card` | `src/assets/service-paminklai-card.jpg` | `/paslaugos`, related services, `/galerija` item | `4:5` | Yes | Medium | Separate from hero |
| `paminklai-hero` | `src/assets/service-paminklai-hero.webp` | `/paminklu-gamyba` | `16:9`, `16:8` | Yes | Medium | Current real hero is strong; generated alt may be weaker |
| `projektavimas-card` | `src/assets/service-projektavimas-card.jpg` | `/paslaugos`, related services | `4:5` | Yes | High | One of the best candidates for a clearer generated concept |
| `projektavimas-hero` | `src/assets/service-projektavimas-hero.webp` | `/kapavieciu-projektavimas` | `16:9`, `16:8` | Yes | High | Needs a cleaner planning/design cue |
| `dengimas-card` | `src/assets/service-dengimas-card.jpg` | `/paslaugos`, related services, `/galerija` item | `4:5` | Yes | Medium | Good generated candidate if granite surface remains believable |
| `dengimas-hero` | `src/assets/service-dengimas-hero.webp` | `/kapu-dengimas-plokstemis` | `16:9`, `16:8` | Yes | Medium | Must avoid showroom perfection |
| `restauravimas-card` | `src/assets/service-restauravimas-card.jpg` | `/paslaugos`, related services, `/galerija` item | `4:5` | Yes | Medium | Generated version must read as restoration, not generic memorial |
| `restauravimas-hero` | `src/assets/service-restauravimas-hero.jpg` | `/kapavieciu-restauravimas` | `16:9`, `16:8` | Yes | Medium | Current real image is strong; generated alt is experimental only |
| `graviravimas-shared` | `src/assets/service-graviravimas-original.jpg` | `/paslaugos`, related services, `/paminklu-graviravimas` | `4:5` card, `16:9` hero currently shared | Yes | High | Strong need for separate card + hero generated variants |
| `autoriniai-shared` | `src/assets/service-autoriniai-original.jpg` | `/paslaugos`, related services, `/autoriniai-paminklai`, `/galerija` item | `4:5` card, `16:9` hero currently shared | Yes | Medium | Separate variants recommended |
| `didmenine-shared` | `src/assets/service-didmenine-original.jpg` | `/paslaugos`, related services, `/didmenine-prekyba-paminklais` | `4:5` card, `16:9` hero currently shared | Yes | High | Weakest current semantic match; strongest generated-variant candidate after hero/projektavimas |

## Detailed Briefs

### `home-hero`

- Current file: `src/assets/home-hero-original.webp`
- Usage: `src/components/site/Hero.tsx`
- Replace in generated variant: Yes
- Subject:
  - A believable granite memorial in a real cemetery setting
  - Clean composition with one main monument and a well-kept grave surface
  - Calm trees/background depth, not crowded
- Visual tone:
  - overcast or soft sun
  - grounded and restrained
  - premium but not luxury-ad glossy
- Crop:
  - primary landscape
  - safe area centered for `16:8`
  - enough vertical content to survive `16:10`
- Filename suggestion:
  - `src/assets/home-hero-generated-v1.webp`
- Avoid:
  - dramatic orange sunset
  - angel statues everywhere
  - fake inscription text
  - hyper-symmetry
  - fantasy cemetery lighting
- Prompt:
  - `A realistic Lithuanian cemetery scene with a polished dark granite memorial and a neatly arranged grave surface, subtle flowers, calm trees in the background, overcast natural light, believable scale and stone texture, respectful and understated mood, documentary-style realism, not glossy stock photography, not cinematic fantasy, no readable text on stone, high detail, landscape composition`

### `gallery-01` to `gallery-04`

- Current files:
  - `src/assets/gallery-memorial-01.webp`
  - `src/assets/gallery-memorial-02.webp`
  - `src/assets/gallery-memorial-03.webp`
  - `src/assets/gallery-memorial-04.webp`
- Usage:
  - `src/components/site/Gallery.tsx`
  - `src/pages/Galerija.tsx`
- Replace in generated variant: Optional only
- Honest assessment:
  - The current real gallery set is more trustworthy than a full generated gallery will likely be.
  - If a generated variant is explored, it should be limited to atmospheric support comparisons, not treated as stronger proof.
- Recommended subjects:
  - `gallery-01`: single dark granite monument, upright composition
  - `gallery-02`: wider family monument / double grave arrangement
  - `gallery-03`: lower horizontal memorial composition
  - `gallery-04`: full granite grave covering / danga
- Visual tone:
  - muted natural light
  - slight imperfection in grass, stone, and flowers
  - no spectacle
- Crop:
  - portrait-first
  - target `4:5`
  - safe for `5:6`
- Filename suggestions:
  - `src/assets/gallery-generated-01.webp`
  - `src/assets/gallery-generated-02.webp`
  - `src/assets/gallery-generated-03.webp`
  - `src/assets/gallery-generated-04.webp`
- Avoid:
  - repeated identical monuments
  - oversized flowers
  - mirrored layouts
  - ornamental excess
  - surreal cemetery depth-of-field
- Prompt pattern:
  - `A realistic memorial cemetery photograph in Lithuania, [single/double/horizontal/full-covering] granite grave composition, natural stone texture, subtle flowers, soft cloudy daylight, believable surroundings, respectful and understated mood, not glossy stock, not hyper-symmetrical, no readable inscriptions, portrait composition`

### `paminklai-card`

- Current file: `src/assets/service-paminklai-card.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
  - `src/pages/Galerija.tsx`
- Replace in generated variant: Yes
- Subject:
  - close or mid-range view of a polished granite memorial with clear silhouette
- Tone:
  - classical
  - solid
  - restrained
- Crop:
  - portrait `4:5`
- Filename suggestion:
  - `src/assets/service-paminklai-card-generated.webp`
- Avoid:
  - too much environment
  - wide horizontal compositions
  - fake engraved text
- Prompt:
  - `A realistic portrait-oriented photo of a polished granite memorial monument in a Lithuanian cemetery, clean silhouette, believable stone edges, subtle natural surroundings, soft daylight, restrained and respectful mood, highly realistic, not glossy, not AI-perfect, no readable text on the stone`

### `paminklai-hero`

- Current file: `src/assets/service-paminklai-hero.webp`
- Usage: `src/pages/ServicePage.tsx` for `/paminklu-gamyba`
- Replace in generated variant: Yes, but lower confidence than some other slots
- Subject:
  - wider family monument scene with clean grave composition
- Crop:
  - landscape `16:9`
  - safe for `16:8`
- Filename suggestion:
  - `src/assets/service-paminklai-hero-generated.webp`
- Avoid:
  - overly grand mausoleum feel
  - dramatic sky
- Prompt:
  - `A realistic wide memorial scene with a granite monument and neatly arranged grave design, calm cemetery surroundings, soft natural daylight, believable stone craftsmanship, respectful mood, documentary realism, landscape composition, no readable inscriptions`

### `projektavimas-card`

- Current file: `src/assets/service-projektavimas-card.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
- Replace in generated variant: Yes
- Subject:
  - a designed memorial composition where planning is implied through layout clarity rather than visible software screens
- Crop:
  - portrait `4:5`
- Filename suggestion:
  - `src/assets/service-projektavimas-card-generated.webp`
- Avoid:
  - laptop mockups
  - glowing 3D renders
  - architectural office clichés
- Prompt:
  - `A realistic portrait-oriented memorial design scene in a cemetery, showing a carefully planned granite monument, grave covering, and stone layout with clear composition and balance, soft natural light, believable materials, understated professional tone, not glossy, not futuristic, no text overlays`

### `projektavimas-hero`

- Current file: `src/assets/service-projektavimas-hero.webp`
- Usage: `/kapavieciu-projektavimas`
- Replace in generated variant: Yes
- Subject:
  - a wide, composed grave design with strong layout logic
  - lotus or geometric stone accent is acceptable if subtle
- Crop:
  - landscape `16:9`
- Filename suggestion:
  - `src/assets/service-projektavimas-hero-generated.webp`
- Avoid:
  - obvious CAD view
  - sterile render look
  - impossible stone geometry
- Prompt:
  - `A realistic wide view of a carefully designed memorial grave composition with granite monument, stone surfaces, and balanced layout details, calm cemetery environment, soft cloudy daylight, believable craftsmanship, understated and professional, no glossy render look, no readable inscriptions`

### `dengimas-card`

- Current file: `src/assets/service-dengimas-card.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
  - `src/pages/Galerija.tsx`
- Replace in generated variant: Yes
- Subject:
  - a grave surface with polished granite slabs and a clean edge treatment
- Crop:
  - portrait `4:5`
- Filename suggestion:
  - `src/assets/service-dengimas-card-generated.webp`
- Avoid:
  - mirror-finish impossible reflections
  - perfect showroom stone without weathering
- Prompt:
  - `A realistic portrait-oriented cemetery photo focused on granite grave covering slabs, polished stone surfaces, neat edges, subtle flowers or gravel accents, believable outdoor light, practical and grounded atmosphere, highly realistic, not glossy showroom imagery`

### `dengimas-hero`

- Current file: `src/assets/service-dengimas-hero.webp`
- Usage: `/kapu-dengimas-plokstemis`
- Replace in generated variant: Yes
- Subject:
  - a full covered grave composition with monument, vases, and slab layout
- Crop:
  - landscape `16:9`
- Filename suggestion:
  - `src/assets/service-dengimas-hero-generated.webp`
- Avoid:
  - perfect mirror reflections
  - exaggerated black stone everywhere
- Prompt:
  - `A realistic wide cemetery scene focused on a grave covered with granite slabs, with a memorial monument and subtle floral elements, believable polished stone, calm natural light, practical and respectful mood, no glossy catalog perfection, no readable inscriptions`

### `restauravimas-card`

- Current file: `src/assets/service-restauravimas-card.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
  - `src/pages/Galerija.tsx`
- Replace in generated variant: Yes
- Subject:
  - a restored memorial or sculpture that still feels aged but cared for
- Crop:
  - portrait `4:5`
- Filename suggestion:
  - `src/assets/service-restauravimas-card-generated.webp`
- Avoid:
  - pristine new monument posing as restoration
  - before/after split graphic
- Prompt:
  - `A realistic portrait-oriented cemetery image of a restored memorial or grave sculpture, visible stone age and history but carefully repaired and maintained, natural outdoor light, respectful and grounded mood, believable restoration outcome, not glossy, not overly dramatic`

### `restauravimas-hero`

- Current file: `src/assets/service-restauravimas-hero.jpg`
- Usage: `/kapavieciu-restauravimas`
- Replace in generated variant: Yes, but keep experimental only
- Subject:
  - a restored family grave with visible stone care and renewed structure
- Crop:
  - landscape `16:9`
- Filename suggestion:
  - `src/assets/service-restauravimas-hero-generated.webp`
- Avoid:
  - overly pristine “new build” feel
  - fake antique ruin drama
- Prompt:
  - `A realistic wide cemetery scene showing a restored memorial grave with renewed stone surfaces and carefully maintained structure, believable signs of age preserved, calm natural daylight, respectful and understated realism, not cinematic, no readable inscriptions`

### `graviravimas-shared`

- Current file: `src/assets/service-graviravimas-original.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
  - `/paminklu-graviravimas`
- Replace in generated variant: Yes
- Recommendation:
  - generate two files, not one
- Card subject:
  - close-up of hand, tool, and stone surface
- Hero subject:
  - wider engraving work scene or monument surface in progress
- Crop:
  - card `4:5`
  - hero `16:9`
- Filename suggestions:
  - `src/assets/service-graviravimas-card-generated.webp`
  - `src/assets/service-graviravimas-hero-generated.webp`
- Avoid:
  - sparks like metal welding
  - laser sci-fi look
  - impossible lettering
- Prompt:
  - `A realistic stone engraving work scene, granite memorial surface, craftsman hands or tools visible in a believable way, fine dust and stone texture, calm workshop or cemetery context, documentary realism, not dramatic, not glossy, no readable fake inscription text`

### `autoriniai-shared`

- Current file: `src/assets/service-autoriniai-original.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
  - `/autoriniai-paminklai`
  - `/galerija`
- Replace in generated variant: Yes
- Recommendation:
  - separate card and hero files
- Subject:
  - sculptural but believable custom granite monument
  - unusual form without looking fantasy-like
- Crop:
  - card `4:5`
  - hero `16:9`
- Filename suggestions:
  - `src/assets/service-autoriniai-card-generated.webp`
  - `src/assets/service-autoriniai-hero-generated.webp`
- Avoid:
  - abstract art object disconnected from cemetery context
  - extreme modernist sculpture that looks like public-art render
- Prompt:
  - `A realistic custom-designed granite memorial with a sculptural but believable form in a cemetery setting, refined stone craftsmanship, understated originality, soft natural light, respectful and grounded mood, highly realistic, not surreal, no readable inscriptions`

### `didmenine-shared`

- Current file: `src/assets/service-didmenine-original.jpg`
- Usage:
  - `src/pages/Paslaugos.tsx`
  - `src/components/site/RelatedServices.tsx`
  - `/didmenine-prekyba-paminklais`
- Replace in generated variant: Yes
- Recommendation:
  - separate card and hero files
- Why high priority:
  - This is the weakest current semantic match and the best place to test whether generation can clarify the concept.
- Subject:
  - rows of unfinished or ready-to-supply granite monuments/stone blanks in a yard or workshop display
  - B2B supply tone, not sentimental cemetery storytelling
- Crop:
  - card `4:5`
  - hero `16:9`
- Filename suggestions:
  - `src/assets/service-didmenine-card-generated.webp`
  - `src/assets/service-didmenine-hero-generated.webp`
- Avoid:
  - retail interior showroom
  - fake forklift logistics scene
  - glossy trade-fair vibe
- Prompt:
  - `A realistic stonework supply yard or workshop display with granite memorial blanks and finished monuments prepared for wholesale or partner delivery, practical business atmosphere, orderly but not sterile, natural daylight, believable stone textures, not sentimental, not glossy stock, no readable branding or text`

## Recommended Generation Order

1. `home-hero`
   - biggest visual impact
2. `projektavimas-card` + `projektavimas-hero`
   - one of the few areas where generation may clarify the concept
3. `didmenine-card` + `didmenine-hero`
   - strongest semantic improvement opportunity
4. `graviravimas-card` + `graviravimas-hero`
   - good generated subject if kept realistic and craft-focused
5. `dengimas-card` + `dengimas-hero`
   - useful for system consistency
6. `autoriniai-card` + `autoriniai-hero`
   - only after the simpler subjects work
7. `paminklai-card` + `paminklai-hero`
   - optional; current real images are already strong
8. `restauravimas-card` + `restauravimas-hero`
   - optional; current real images are already strong
9. `gallery-01` to `gallery-04`
   - lowest priority because the current real gallery is more trustworthy

## Safe Implementation Recommendation

- Create the generated variant on a separate branch, for example `codex/generated-image-variant` or another dedicated experiment branch.
- Keep all current real assets untouched.
- Add generated files with separate names only.
- Wire generated assets in code only after enough slots are ready to review as a coherent set.
- Compare the real-image branch and generated-image branch side by side in local preview or Vercel preview deployments.
- Reject any generated image that lowers trust, even if it looks technically polished.

## Recommended Next Step For ChatGPT

Generate only the first batch:

1. homepage hero
2. projektavimas card + hero
3. didmenine card + hero

If that batch fails to look grounded enough, stop the experiment and keep the current real-image direction.
