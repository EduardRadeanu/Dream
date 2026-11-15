import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Legal.scss";

const EMAIL = "ediradeanu12345@gmail.com";
const UPDATED = "15 noiembrie 2026";

const Page = ({ title, updated = `Ultima actualizare: ${UPDATED}`, other, children }) => (
  <>
    <Navbar />
    <div className="legal">
      {other && <p className="legal_lang"><a href={other.href}>{other.label}</a></p>}
      <h1>{title}</h1>
      <p className="legal_updated">{updated}</p>
      {children}
    </div>
    <Footer />
  </>
);

export const Privacy = () => (
  <Page title="Politica de confidențialitate" other={{ href: "/en/privacy", label: "English version" }}>
    <h2>1. Cine administrează site-ul</h2>
    <p>
      Acest site este o previzualizare publică a proiectului meu de licență „Dream”, administrat de Liviu-Eduard Rădeanu,
      persoană fizică cu domiciliul în Leeuwarden, Țările de Jos. Pentru orice întrebare sau cerere privind datele personale:{" "}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>

    <h2>2. Anunțurile sunt demonstrative</h2>
    <p>
      Toate anunțurile, prețurile, adresele și numele afișate sunt fictive și servesc doar la prezentarea aplicației.
      Nu sunt oferte reale de vânzare sau închiriere.
    </p>

    <h2>3. Ce date se colectează</h2>
    <ul>
      <li><b>Fără conturi și formulare:</b> în previzualizare nu există înregistrare, autentificare sau publicare de anunțuri.</li>
      <li><b>Fără analytics și tracking:</b> nu folosesc instrumente de statistici, pixeli de urmărire sau reclame.</li>
      <li><b>Nimic salvat în browser:</b> site-ul nu folosește cookie-uri și nu salvează date pe dispozitivul tău.</li>
      <li>
        <b>Jurnalele serverului:</b> furnizorul de găzduire înregistrează datele tehnice ale fiecărei cereri (adresa IP, tipul
        de browser, pagina accesată, ora), pentru securitate și diagnostic. Nu le folosesc ca să identific vizitatori.
      </li>
    </ul>

    <h2>4. Găzduire și terți</h2>
    <p>
      Site-ul este găzduit de <b>Vercel Inc.</b> (SUA), care primește datele tehnice de mai sus când deschizi o pagină. Vercel
      acționează ca persoană împuternicită, iar transferul către SUA se face în baza EU–US Data Privacy Framework și a
      clauzelor contractuale standard; vezi{" "}
      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politica de confidențialitate Vercel</a>.
    </p>
    <p>
      Fonturile și imaginile sunt găzduite chiar pe acest site, așa că deschiderea unei pagini nu contactează Google sau alte
      servicii. Fotografiile provin de pe Unsplash și sunt folosite conform licenței Unsplash.
    </p>

    <h2>5. Temeiul legal</h2>
    <p>
      Prelucrarea datelor tehnice din jurnalele serverului se bazează pe interesul legitim de a opera și de a proteja site-ul
      (art. 6 alin. (1) lit. f) din Regulamentul (UE) 2016/679, GDPR).
    </p>

    <h2>6. Drepturile tale</h2>
    <p>
      Ai dreptul de acces, rectificare, ștergere, restricționare și opoziție, precum și dreptul de a depune o plângere la o
      autoritate de supraveghere: Autoriteit Persoonsgegevens (Țările de Jos) sau ANSPDCP (România). Pentru cereri, scrie-mi la{" "}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>

    <h2>7. Păstrarea datelor</h2>
    <p>
      Eu nu stochez date despre vizitatori. Jurnalele serverului sunt păstrate de Vercel conform politicii sale. Mesajele
      trimise prin email sunt păstrate cât e nevoie pentru a răspunde.
    </p>

    <h2>8. Modificări</h2>
    <p>Dacă politica se schimbă, versiunea nouă este publicată pe această pagină, cu data actualizării de mai sus.</p>
  </Page>
);

export const Cookies = () => (
  <Page title="Politica privind cookie-urile" other={{ href: "/en/cookies", label: "English version" }}>
    <h2>1. Folosește site-ul cookie-uri?</h2>
    <p>
      <b>Nu.</b> Această previzualizare nu setează cookie-uri și nu salvează date în browser (nici localStorage, nici
      sessionStorage). Nu există conturi, statistici sau reclame.
    </p>

    <h2>2. Cookie-uri de la terți</h2>
    <p>
      Niciunul. Fonturile și imaginile sunt găzduite pe acest site, deci niciun serviciu terț nu este contactat la încărcarea
      paginilor. De aceea nu este nevoie de un banner de consimțământ.
    </p>

    <h2>3. Cum controlezi cookie-urile</h2>
    <p>Poți șterge sau bloca oricând cookie-urile din setările browserului; site-ul funcționează la fel și fără ele.</p>

    <h2>4. Contact</h2>
    <p>
      Întrebări: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Detalii despre datele personale găsești în{" "}
      <a href="/confidentialitate">Politica de confidențialitate</a>.
    </p>
  </Page>
);

const EN = { updated: "Last updated: 15 November 2026" };

export const PrivacyEn = () => (
  <Page title="Privacy Policy" updated={EN.updated} other={{ href: "/confidentialitate", label: "Versiunea în română" }}>
    <h2>1. Who runs this site</h2>
    <p>
      This site is a public preview of my bachelor's thesis project "Dream", run by Liviu-Eduard Rădeanu, a private
      individual based in Leeuwarden, the Netherlands. For any question or request about personal data:{" "}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>

    <h2>2. The listings are demo content</h2>
    <p>
      All listings, prices, addresses and names shown are fictional and only demonstrate the application. They are not
      real offers to sell or rent.
    </p>

    <h2>3. What data is collected</h2>
    <ul>
      <li><b>No accounts or forms:</b> the preview has no registration, login or listing submission.</li>
      <li><b>No analytics or tracking:</b> no statistics tools, tracking pixels or advertising.</li>
      <li><b>Nothing stored in your browser:</b> the site sets no cookies and stores no data on your device.</li>
      <li>
        <b>Server logs:</b> the hosting provider records the technical data of each request (IP address, browser type,
        page visited, time) for security and diagnostics. I do not use them to identify visitors.
      </li>
    </ul>

    <h2>4. Hosting and third parties</h2>
    <p>
      The site is hosted by <b>Vercel Inc.</b> (United States), which receives the technical data above when you open a
      page. Vercel acts as a processor and transfers data to the US under the EU–US Data Privacy Framework and Standard
      Contractual Clauses; see the{" "}
      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
    </p>
    <p>
      Fonts and images are served from this site itself, so opening a page does not contact Google or any other service.
      Photos are from Unsplash, used under the Unsplash License.
    </p>

    <h2>5. Legal basis</h2>
    <p>
      Processing the technical data in the server logs is based on the legitimate interest in operating and securing the
      site (Art. 6(1)(f) of Regulation (EU) 2016/679, GDPR).
    </p>

    <h2>6. Your rights</h2>
    <p>
      You have the right of access, rectification, erasure, restriction and objection, and the right to lodge a complaint
      with a supervisory authority: the Autoriteit Persoonsgegevens (Netherlands) or ANSPDCP (Romania). For requests,
      email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>

    <h2>7. Data retention</h2>
    <p>
      I store no data about visitors. Server logs are kept by Vercel under its own policy. Emails you send are kept only
      as long as needed to answer them.
    </p>

    <h2>8. Changes</h2>
    <p>If this policy changes, the new version is published on this page with the date above updated.</p>
  </Page>
);

export const CookiesEn = () => (
  <Page title="Cookie Policy" updated={EN.updated} other={{ href: "/cookies", label: "Versiunea în română" }}>
    <h2>1. Does this site use cookies?</h2>
    <p>
      <b>No.</b> This preview sets no cookies and stores nothing in your browser (no localStorage or sessionStorage). There
      are no accounts, statistics or ads.
    </p>

    <h2>2. Third-party cookies</h2>
    <p>
      None. Fonts and images are served from this site, so no third-party service is contacted when pages load. That is why
      no consent banner is needed.
    </p>

    <h2>3. How to control cookies</h2>
    <p>You can delete or block cookies in your browser settings at any time; the site works the same without them.</p>

    <h2>4. Contact</h2>
    <p>
      Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Details about personal data are in the{" "}
      <a href="/en/privacy">Privacy Policy</a>.
    </p>
  </Page>
);
