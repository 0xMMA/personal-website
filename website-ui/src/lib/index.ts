// place files you want to import through the `$lib` alias in this folder.

import { writable } from 'svelte/store';

/** Controls whether the nav bar is visible (used by home page intro sequence) */
export const navVisible = writable(true);

/** Tracks whether the home intro animation has already played this session */
export const introPlayed = writable(false);
