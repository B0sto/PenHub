'use client';

import { useEffect } from 'react';

export default function FontSwitcher() {
  useEffect(() => {
    const isGeorgian = /[\u10A0-\u10FF\u1C90-\u1CBF\u2D00-\u2D2F]/.test(
      document.body.innerText
    );

    document.body.classList.toggle('use-georgian', isGeorgian);
  }, []);

  return null;
}
