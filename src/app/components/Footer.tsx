export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-400">
        
        <div>
          <h3 className="text-white text-lg mb-3 font-medium">
            Piccola Rosa
          </h3>
          <p>
            Italiensk restaurang i Hässelby Strand med fokus på kvalitet,
            smak och upplevelse.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Kontakt</h4>
          <ul className="space-y-2">
            <li>📍 Fyrspannsgatan 171</li>
            <li>📞 073-627 60 86</li>
            <li>✉️ nyapiccolarosa@hotmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Öppettider</h4>
          <ul className="space-y-2">
            <li>Mån-Tor: 10:00 - 22:00</li>
            <li>Fre: 10:00 - 23:00</li>
            <li>Lör: 11:00 - 23:00</li>
            <li>Sön: 11:00 - 22:00</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Piccola Rosa. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
