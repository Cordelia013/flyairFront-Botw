// Dans app/page.tsx ou toute autre page principale
export default function Page() {
  // Ajoute temporairement ce commentaire dans ta console
  console.log('Page principale rendue');
  
  return (
    <div>
      <h1>Page de test d'hydratation</h1>
      {/* Supprime temporairement tous les autres composants */}
    </div>
  );
}