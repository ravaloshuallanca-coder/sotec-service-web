"use client";
import { useState } from "react";
import Image from "next/image";

const links = ["Servicios", "Productos", "Nosotros", "Contacto"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-20 text-white"><nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"><a href="#inicio" className="flex items-center gap-2.5"><Image src="/sotec-mark.svg" alt="SOTEC Service" width={42} height={42} priority /><span className="text-xl font-black tracking-tight">SOTEC <span className="text-xs font-bold tracking-[.18em] text-slate-300">SERVICE</span></span></a><div className="hidden items-center gap-8 md:flex">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-slate-200 transition hover:text-white">{link}</a>)}<a href="#contacto" className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold transition hover:bg-orange-500">Cotizar ahora</a></div><button onClick={() => setOpen(!open)} className="rounded-md border border-white/30 px-3 py-1.5 text-sm md:hidden" aria-expanded={open}>Menú</button></nav>{open && <div className="mx-5 mb-5 rounded-xl bg-white p-5 text-ink shadow-card md:hidden">{links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block border-b border-slate-100 py-3 font-semibold last:border-0">{link}</a>)}</div>}</header>;
}
