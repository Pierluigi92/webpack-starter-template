# Webpack 5 Modern Starter Template

Template di partenza leggero e ottimizzato per progetti JavaScript moderni, basato su Webpack 5 nativo (senza Babel) con separazione degli ambienti di sviluppo e produzione.

## Struttura del progetto

```text
├── dist/                  # File compilati per la produzione (ignorati da Git)
├── src/                   # Codice sorgente
│   ├── assets/            # Immagini, icone e font
│   ├── js/                # Moduli JavaScript aggiuntivi
│   ├── styles/            # Fogli di stile CSS
│   ├── index.html         # Template HTML principale
│   └── index.js           # Entry point JavaScript
├── .gitignore
├── package.json
├── webpack.common.js      # Configurazione condivisa e cache su disco
├── webpack.dev.js         # Server di sviluppo con Hot Reload
└── webpack.prod.js        # Build ottimizzata (minificazione, code splitting, CSS estratto)
```

## Come iniziare un nuovo progetto

1. Clicca su **Use this template** su GitHub per creare un nuovo repository.
2. Clona il nuovo repository sul tuo computer:
   ```bash
   git clone https://github.com
   cd NOME-NUOVO-PROGETTO
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```

## Comandi disponibili

- **`npm run dev`**: avvia il server di sviluppo locale su `http://localhost:8080` con Hot Reload attivo.
- **`npm run build`**: compila, ottimizza e minifica il progetto nella cartella `dist/` per la pubblicazione online.
- **`npm run preview`**: avvia un server locale sulla cartella `dist/` per testare la build di produzione prima di pubblicarla.

## Ottimizzazioni incluse

- **ES Modules nativi:** supporto completo a `import` / `export`.
- **Filesystem Cache:** build incrementali ultra-rapide salvate in `node_modules/.cache`.
- **Asset Modules:** gestione nativa di immagini e font (incorporamento automatico in base64 sotto gli 8 KB).
- **Estrazione e minificazione CSS:** tramite `MiniCssExtractPlugin` e `CssMinimizerPlugin`.
- **Ottimizzazione JS:** rimozione automatica dei `console.log`, Tree Shaking e separazione dei pacchetti `vendors` per massimizzare la cache del browser.
