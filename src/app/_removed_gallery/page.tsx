// This route was intentionally removed (the Gallery section only ever held
// placeholder graphics, not real photography). The folder is prefixed with
// `_` so Next.js excludes it from routing — this file is dead code kept only
// because the sandbox environment used to build this site can't delete files
// on this filesystem. Its previous content imported a component that was
// renamed away, which broke `next build`'s type-checking (which still
// type-checks non-route files under `src/`). Safe to delete this whole
// `_removed_gallery` folder and `src/components/graphics/_removed_GalleryPlate.tsx`
// whenever convenient — nothing references either of them.
export {};
