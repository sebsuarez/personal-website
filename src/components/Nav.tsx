"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { personal } from "@/content/personal";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container nav-inner">
        <Link href="/" className="nav-wordmark">
          {personal.name}
        </Link>

        <ul className="nav-links" role="list">
          <li>
            <Link href="/#work" className="nav-link">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <a
              href={personal.resumeUrl}
              className="nav-link-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
