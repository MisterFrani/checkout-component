export const importScript = (src: string): HTMLScriptElement => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  return script;
};

export const removeScript = (script?: HTMLScriptElement): void => {
  if (!script) {
    return;
  }
  document.body.removeChild(script);
};
