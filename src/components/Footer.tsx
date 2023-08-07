import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-10">
      <div className="max-w-7xl mx-auto px-5 flex items-start justify-between">
        <div>
          <Link href="/">
            <h3 className="font-bold text-2xl uppercase">
              Jobs<span className="">Ahoy</span>
            </h3>
          </Link>
          <p className="text-sm text-secondary-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            eum.
          </p>
        </div>

        <div>Links</div>
      </div>
    </footer>
  );
}
