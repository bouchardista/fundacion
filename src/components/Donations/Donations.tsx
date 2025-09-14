import React, { useState } from 'react';
import { copyToClipboard, showNotification } from '../../utils/clipboard';
import './Donations.css';

interface BankInfo {
  label: string;
  value: string;
  type: 'cbu' | 'alias' | 'cuit' | 'name';
}

const bankInfo: BankInfo[] = [
  {
    label: 'CBU',
    value: '0000003100000000000000',
    type: 'cbu'
  },
  {
    label: 'Alias',
    value: 'FUNDACION.LIBERTAD',
    type: 'alias'
  },
  {
    label: 'CUIT',
    value: '30-12345678-9',
    type: 'cuit'
  },
  {
    label: 'Nombre',
    value: 'Fundación La Libertad Avanza Córdoba',
    type: 'name'
  }
];

const Donations: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (value: string, type: string) => {
    const success = await copyToClipboard(value);
    if (success) {
      setCopiedField(type);
      showNotification(`${type.toUpperCase()} copiado al portapapeles`);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <section id="donations" className="donations">
      <div className="container">
        <div className="donations__header">
          <h2 className="donations__title">Hacer una Donación</h2>
          <p className="donations__subtitle">
            Tu apoyo nos permite continuar transformando vidas. Cada donación hace la diferencia.
          </p>
        </div>
        
        <div className="donations__content">
          <div className="donations__info">
            <div className="donations__card">
              <div className="donations__card-header">
                <div className="donations__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="donations__card-title">Información Bancaria</h3>
                <p className="donations__card-subtitle">
                  Utiliza cualquiera de estos datos para realizar tu transferencia
                </p>
              </div>
              
              <div className="donations__bank-info">
                {bankInfo.map((info) => (
                  <div key={info.type} className="donations__bank-item">
                    <div className="donations__bank-content">
                      <div className="donations__bank-label">{info.label}</div>
                      <div className="donations__bank-text">{info.value}</div>
                    </div>
                    <button
                      className={`donations__copy-btn ${copiedField === info.type ? 'donations__copy-btn--copied' : ''}`}
                      onClick={() => handleCopy(info.value, info.type)}
                      title={`Copiar ${info.label}`}
                    >
                      {copiedField === info.type ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Donations;
