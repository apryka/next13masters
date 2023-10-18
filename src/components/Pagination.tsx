'use client'

import { ActiveLink } from "./ActiveLink"

const TOTAL_PAGES = 5;

const generateLinks = () => Array(TOTAL_PAGES).fill(1).map((i, idx) => <ActiveLink key={`pagination-link-${i+idx}`} href={`/products/${i+idx}`} className="text-sm-font-light border border-slate-600 rounded-sm flex items-center justify-center w-8 aspect-square" activeClassName="text-slate-600">{i+idx}</ActiveLink>);

export const Pagination = () => {
  return (
    <div className="flex items-center gap-4" aria-label="pagination">
      {generateLinks()}
    </div>
  )
}