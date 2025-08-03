import { c as createComponent, m as maybeRenderHead, d as renderTemplate } from './astro/server_D2jBEop0.mjs';
import 'kleur/colors';
import 'clsx';

const $$Stock = createComponent(async ($$result, $$props, $$slots) => {
  const a = await fetch("http://localhost:3000");
  const b = await a.json();
  return renderTemplate`${maybeRenderHead()}<span>stock: ${b.stock}</span>`;
}, "C:/Users/migue/Desktop/dev/personal/projects/astro-on-server/src/components/Stock.astro", void 0);

const $$file = "C:/Users/migue/Desktop/dev/personal/projects/astro-on-server/src/components/Stock.astro";
const $$url = undefined;

export { $$Stock as default, $$file as file, $$url as url };
