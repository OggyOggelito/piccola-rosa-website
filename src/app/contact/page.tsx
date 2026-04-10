export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto bg-[#F8F5F2]">
      <h1 className="text-4xl md:text-5xl font-semibold mb-10 text-[#7A1E2C]">Kontakt</h1>

      <div className="space-y-6 text-lg bg-white border border-[#7A1E2C]/20 rounded-xl p-6 shadow-sm">
        <p>
          <strong>Adress:</strong> Fyrspannsgatan 171, Hässelby Strand
        </p>

        <p>
          <strong>Telefon:</strong> 08-89 69 19
        </p>

        <p>
          <strong>E-post:</strong> nyapiccolarosa@hotmail.com
        </p>

        <div>
          <strong>Öppettider:</strong>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Måndag – Torsdag: 10:00 – 22:00</li>
            <li>Fredag: 10:00 – 23:00</li>
            <li>Lördag: 11:00 – 23:00</li>
            <li>Söndag: 11:00 – 22:00</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
