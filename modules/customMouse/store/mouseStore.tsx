'use client';

import { create } from 'zustand';

import { MouseVariant } from '../types/mouse.types';

interface MouseStore {
  variant: MouseVariant;
  text: string;
  setText: (text: string) => void;
  setVariant: (variant: MouseVariant) => void;
}

export const useMouseStore = create<MouseStore>((set) => ({
  variant: MouseVariant.DEFAULT,
  text: '',
  setText: (text: string) => {
    set({ text });
  },
  setVariant: (variant: MouseVariant) => {
    set({ variant });
  },
}));
