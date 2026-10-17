const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../../fe-shroomsync/src/components/DeviceBarcodeStickerModal.jsx');
if (!fs.existsSync(targetPath)) {
  console.error('Target file not found at:', targetPath);
  process.exit(1);
}

let content = fs.readFileSync(targetPath, 'utf8');

// 1. Add FileJson to imports
if (!content.includes('FileJson,')) {
  content = content.replace('Layers,', 'Layers,\n  FileJson,');
}

// 2. Add identity state and handlers
const stateMarker = 'const [isGeneratingPng, setIsGeneratingPng] = useState(false);';
const identityStateLogic = `const [isGeneratingPng, setIsGeneratingPng] = useState(false);
  const [jsonCopied, setJsonCopied] = useState(false);`;

if (!content.includes('jsonCopied')) {
  content = content.replace(stateMarker, identityStateLogic);
}

const hwFwMarker = "const fwVersion = device?.firmwareVersion || '2.1.0';";
const identityObjLogic = `const fwVersion = device?.firmwareVersion || '1.1.0';
  const macAddress = device?.deviceIdentity?.mac_address || device?.macAddress || '80:B5:4E:DB:85:38';
  const manufacturedAt = device?.deviceIdentity?.manufactured_at || (device?.createdAt ? new Date(device.createdAt).toISOString() : new Date().toISOString());

  const deviceIdentity = device?.deviceIdentity || {
    device_id: serialNumber,
    hardware_version: hwVersion,
    firmware_version: fwVersion,
    mac_address: macAddress,
    manufactured_at: manufacturedAt,
  };`;

if (!content.includes('const deviceIdentity =')) {
  content = content.replace(hwFwMarker, identityObjLogic);
}

// 3. Add handleDownloadIdentityJson & handleCopyIdentityJson
const copyMarker = '// Salin Serial Number & Kode Aktivasi';
const identityHandlers = `  // Unduh File JSON Identitas ESP32
  const handleDownloadIdentityJson = () => {
    try {
      const blob = new Blob([JSON.stringify(deviceIdentity, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = \`\${serialNumber}.json\`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      onNotification?.(\`V File identitas \${serialNumber}.json berhasil diunduh untuk di-inject ke ESP32!\`, 'success');
    } catch (err) {
      console.error('Failed to download identity JSON:', err);
      onNotification?.('Gagal mengunduh file JSON identitas.', 'error');
    }
  };

  // Salin JSON Identitas ESP32
  const handleCopyIdentityJson = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(JSON.stringify(deviceIdentity, null, 2));
      setJsonCopied(true);
      setTimeout(() => setJsonCopied(false), 2000);
      onNotification?.(\`V JSON identitas \${serialNumber} disalin ke clipboard! Siap di-inject ke ESP32.\`, 'success');
    }
  };

  // Salin Serial Number & Kode Aktivasi`;

if (!content.includes('handleDownloadIdentityJson')) {
  content = content.replace(copyMarker, identityHandlers);
}

// 4. Add tab for Identity JSON
const tabTarget = `<button 
              className={\`sticker-tab-btn \${stickerMode === 'barcode' ? 'active' : ''}\`}
              onClick={() => setStickerMode('barcode')}
            >
              <ScanLine size={14} />
              <span>Hanya Barcode 1D</span>
            </button>`;

const identityTab = `<button 
              className={\`sticker-tab-btn \${stickerMode === 'barcode' ? 'active' : ''}\`}
              onClick={() => setStickerMode('barcode')}
            >
              <ScanLine size={14} />
              <span>Hanya Barcode 1D</span>
            </button>
            <button 
              className={\`sticker-tab-btn \${stickerMode === 'identity' ? 'active' : ''}\`}
              onClick={() => setStickerMode('identity')}
            >
              <FileJson size={14} />
              <span>JSON Identitas (ESP32)</span>
            </button>`;

if (!content.includes('JSON Identitas (ESP32)')) {
  content = content.replace(tabTarget, identityTab);
}

// 5. Add identity view in preview wrapper
const previewTarget = `<div 
            ref={stickerRef}
            className="supaku-physical-sticker supaku-sticker-print-area"
          >`;

const identityPreview = `{stickerMode === 'identity' ? (
            <div style={{ padding: '20px', background: '#0f172a', borderRadius: '14px', border: '1px solid #1e293b', color: '#f8fafc', textAlign: 'left', fontFamily: 'Consolas, monospace', fontSize: '0.86rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
                <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.84rem' }}>📄 {serialNumber}.json (ESP32 Identity)</span>
                <button
                  type="button"
                  onClick={handleCopyIdentityJson}
                  style={{ background: 'rgba(56, 189, 248, 0.15)', border: '1px solid #38bdf8', color: '#38bdf8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  {jsonCopied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{jsonCopied ? 'Tersalin!' : 'Salin JSON'}</span>
                </button>
              </div>
              <pre style={{ margin: 0, overflowX: 'auto', lineHeight: '1.5', color: '#67e8f9', background: '#020617', padding: '14px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                {JSON.stringify(deviceIdentity, null, 2)}
              </pre>
              <p style={{ marginTop: '14px', marginBottom: 0, fontSize: '0.76rem', color: '#94a3b8', lineHeight: '1.4' }}>
                💡 <strong>Injeksi ESP32:</strong> Simpan file ini ke filesystem internal ESP32 (LittleFS/SPIFFS/SD Card) sebagai identitas hardware mikrokontroler saat booting.
              </p>
            </div>
          ) : (
          <div 
            ref={stickerRef}
            className="supaku-physical-sticker supaku-sticker-print-area"
          >`;

if (!content.includes("stickerMode === 'identity' ? (")) {
  content = content.replace(previewTarget, identityPreview);
  content = content.replace(
    '          </div>\n        </div>\n\n        {/* Canvas Tersembunyi',
    '          </div>\n          )}\n        </div>\n\n        {/* Canvas Tersembunyi'
  );
}

// 6. Add action button for Download Identity JSON
const actionsTarget = `<button 
            type="button" 
            className="secondary-button"
            onClick={handleCopy}
            title="Salin Serial Number dan Kode Aktivasi"
          >`;

const identityActionBtn = `<button 
            type="button" 
            className="secondary-button"
            onClick={handleDownloadIdentityJson}
            style={{ background: 'rgba(36, 94, 61, 0.12)', borderColor: 'var(--primary)', color: 'var(--primary)', fontWeight: 600 }}
            title="Unduh file JSON identitas untuk di-inject ke ESP32"
          >
            <FileJson size={16} />
            <span>Unduh {serialNumber}.json</span>
          </button>
          <button 
            type="button" 
            className="secondary-button"
            onClick={handleCopy}
            title="Salin Serial Number dan Kode Aktivasi"
          >`;

if (!content.includes('Unduh {serialNumber}.json')) {
  content = content.replace(actionsTarget, identityActionBtn);
}

fs.writeFileSync(targetPath, content, 'utf8');
console.log('DeviceBarcodeStickerModal.jsx updated successfully!');
