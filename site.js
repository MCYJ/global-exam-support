(() => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("app");
  const app = raw && /^[a-z0-9-]{1,40}$/.test(raw) ? raw : null;
  if (!app) return;

  const reference = document.querySelector("#app-reference");
  if (reference) reference.textContent = app;

  const intro = document.querySelector("#support-intro");
  if (intro) intro.textContent = `Help for RushLabs app ${app}.`;
})();
