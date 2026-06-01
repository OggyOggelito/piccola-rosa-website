export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 md:px-6 py-10 md:py-16 max-w-6xl mx-auto bg-[#F8F5F2]">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-10 text-[#7A1E2C]">
            Kontakt
          </h1>

          <div className="space-y-6 text-lg bg-white border border-[#7A1E2C]/20 rounded-2xl p-6 shadow-sm">
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
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-[#7A1E2C]/20 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7A1E2C] mb-6">
            Kontakta oss
          </h2>

          <form
            action="https://formsubmit.co/nyapiccolarosa@hotmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Nytt meddelande från hemsidan"
            />

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Namn
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]"
                placeholder="Ditt namn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                E-post
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]"
                placeholder="dinmail@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Meddelande
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A1E2C] resize-none"
                placeholder="Skriv ditt meddelande här..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7A1E2C] text-white py-3 rounded-xl font-medium hover:bg-[#5c1622] transition"
            >
              Skicka meddelande
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
