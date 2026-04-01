# Mon Habitat Adapt

Site Next.js 14 (App Router) : homepage statique, simulateur d'aides (UI), guides en MDX.

## Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS + palette projet (sage, terracotta, gold, cream, charcoal)
- Polices : Playfair Display (titres), DM Sans (corps) via `next/font/google`
- Contenu : `next-mdx-remote` (RSC) + `gray-matter` pour le frontmatter
- Guides : fichiers `.mdx` dans `content/guides/`, routes `/guides` et `/guides/[slug]`

## Développement

```bash
npm install
npm run dev
```

Le serveur est configuré pour écouter sur le **port 3000** (`next dev -p 3000`). Ouvrir [http://localhost:3000](http://localhost:3000) ou [http://localhost:3000/fr](http://localhost:3000/fr).

Si le terminal affiche **« Port 3000 is already in use »**, un autre programme (ou un ancien `next dev`) occupe le port : arrête-le ou tue le processus, puis relance. **Ne pas** ouvrir `localhost:3000` si Next a démarré sur un autre port sans que tu le voies : tu verrais alors du HTML sans CSS et des **404** sur `layout.css`, `main-app.js`, etc.

**Préférer Chrome / Edge / Firefox** pour le développement local. Le navigateur intégré à certains outils (ex. aperçu Cursor) peut mal charger les fichiers sous `/_next/static/...` et provoquer les mêmes symptômes.

### Page sans styles (texte noir, liens bleus) ou erreurs 404 sur `/_next/static/...`

Le HTML généré par Next utilise des chemins **absolus** (`/_next/static/...`). Les 404 viennent en général d’un **mauvais port**, d’un **proxy** ou du **navigateur intégré**.

1. Lancer `npm run dev` depuis le dossier du projet (`site_mon-habitat-adapt_REPO`), pas un dossier parent vide.
2. Vérifier dans le terminal l’URL affichée (ex. `Local: http://localhost:3000`) et **utiliser exactement ce port**.
3. Supprimer le cache puis relancer : `Remove-Item -Recurse -Force .next` puis `npm run dev`.
4. Recharger en forçant le cache : **Ctrl+Shift+R** (ou navigation privée).
5. Dans F12 → **Réseau**, les requêtes vers `/_next/static/css/...` et `/_next/static/chunks/...` doivent être en **200**.

## Déploiement (Vercel)

Projet prêt pour Vercel : branche `main`, build `npm run build`, output Next.js par défaut.

## Structure utile

- `app/page.tsx` — homepage
- `components/home/*` — blocs de la maquette
- `lib/mdx.ts` — lecture des guides
- `content/guides/*.mdx` — articles MDX

Les formulaires et le SEO avancé seront branchés ensuite.
