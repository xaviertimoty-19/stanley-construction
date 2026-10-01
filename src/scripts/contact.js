// src/scripts/contact.js
export function initContactForm() {
  const form = document.getElementById('devis-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.innerText = "Envoi en cours...";

    const formData = new FormData(form);

    try {
      // Si une action valide est configurée, envoie les données; sinon simule une promesse résolue
      const endpoint = form.action && form.action !== window.location.href 
        ? form.action 
        : null;

      let response;
      if (endpoint) {
        response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
      } else {
        // Simulation asynchrone réaliste (réseau ~600ms)
        await new Promise(resolve => setTimeout(resolve, 600));
        response = { ok: true };
      }

      if (response.ok) {
        form.reset();
        submitBtn.innerText = "Demande envoyée avec succès !";
        submitBtn.classList.replace('bg-amber-500', 'bg-emerald-600');
        
        // Déclenche l'événement personnalisé pour informer l'UI
        const event = new CustomEvent('devis-submitted', { detail: Object.fromEntries(formData) });
        window.dispatchEvent(event);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      submitBtn.innerText = "Erreur. Réessayez ou appelez-nous.";
      submitBtn.classList.replace('bg-amber-500', 'bg-red-600');
      submitBtn.disabled = false;
    }
  });
}

// Auto-initialisation si exécuté en script direct ou chargement de document
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
}
