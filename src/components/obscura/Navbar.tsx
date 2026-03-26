"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="navbar-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        padding: "1rem 2rem",
      }}
    >
      {/* Left: Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image 
          src="/ctf/wicys-logo.png" 
          alt="WiCyS Logo" 
          width={200}
          height={70}
          priority
          className="navbar-logo"
          style={{ width: "auto", objectFit: "contain" }} 
        />
      </Link>
    </header>
  );
}
