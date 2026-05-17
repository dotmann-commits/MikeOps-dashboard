import { useEffect, useState } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

type ConsentChoice = 'accepted' | 'rejected' | null;

const CONSENT_KEY = 'mikeops_cookie_consent';

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY) as ConsentChoice;
    if (saved === 'accepted' || saved === 'rejected') {
      setChoice(saved);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  function saveChoice(value: Exclude<ConsentChoice, null>) {
    localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
    setVisible(false);

    window.dispatchEvent(
      new CustomEvent('mikeops-cookie-consent', {
        detail: { consent: value },
      })
    );
  }

  if (!visible || choice) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-300/20 bg-slate-950/95 shadow-2xl shadow-blue-950/60 backdrop-blur-xl">
        <div className="relative p-5 sm:p-6">
          <button
            onClick={() => saveChoice('rejected')}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-slate-300 transition hover:bg-white/20 hover:text-white"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <Cookie size={24} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-white">
                    MikeOps uses cookies
                  </h3>
                  <ShieldCheck size={18} className="text-cyan-300" />
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  We use essential storage to keep the site working properly. With your permission,
                  we may also use analytics later to understand how visitors use the site and improve
                  the MikeOps experience.
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  You can accept or reject optional cookies. Essential site functionality will still work.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:min-w-48">
              <button
                onClick={() => saveChoice('accepted')}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
              >
                Accept
              </button>

              <button
                onClick={() => saveChoice('rejected')}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
