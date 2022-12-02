import { Card } from "flowbite-react";
import Image from "next/image";

export function Profile() {
  return (
    <>
      <section className="content mt-5 mb-1">
        <h2>Profil</h2>
        <div className="md:flex">
          <Card className="md:mr-5">
            <p>
              In meiner beraterischen / therapeutischen Tätigkeit widme ich mich
              mit Leidenschaft, Empathie, Professionalität und Klarheit
              Einzelnen, Paaren, Familien und Teams, die auf der Suche nach
              Veränderung sind. Hierbei ist es mir einerseits wichtig auf
              kreative, unkonventionelle, alltagsnahe Methoden zurück zu
              greifen, mit dem Ziel, dass meine Klienten am Ende einer jeden
              Sitzung etwas Konkretes mit nach Hause nehmen. Zum anderen bin ich
              gern spontan und entwickle gemeinsam mit meinen Klienten
              individuell auf sie zugeschnittene Ideen und Wege.
            </p>
            <p>Lisa Freund, verheiratet, freiberuflich tätig seit 2022</p>
            <strong>Berufliche Erfahrungen</strong>
            <ul className="list-disc list-inside ml-5">
              <li>In Ausbildung zur Systemischen Therapeutin (KiB)</li>
              <li>Ausbildung zur Systemischen Beraterin (KiB)</li>
              <li>Studium der Rehabilitationswissenschaften (M.A.)</li>
              <li>
                Bis heute Pädagogin im Betreuungsdienst und Therapeutin in der
                Kinder- und Jugendpsychiatrie
              </li>
              <li>
                Bis 2016 Pädagogin im Betreuungsdienst in der
                Erwachsenenpsychiatrie
              </li>
              <li>Studium der Rehabilitationspädagogik (B.A.)</li>
            </ul>
          </Card>
          <Image
            className="image"
            src="/img/womandog.webp"
            alt="Foo"
            width={300}
            height={30}
          />
        </div>
      </section>
    </>
  );
}
