export default function ContextSection({
  id = "context",
  title = "Context",
  duration, // ex: "2 months and 18 days"
  contextText, // string
  team = [], // array de strings
  tools = [], // array de strings
  media, // url image/vidéo (pour l’instant image)
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="grid gap-6 md:grid-cols-12 items-stretch">
        {/* Carte gauche */}
        <div className="md:col-span-7 flex">
          <div className="rounded-xl bg-[#FFF3EF] p-5 md:p-6 shadow-sm border border-black/10 w-full h-full flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-semibold">{title}</h2>
              {duration ? (
                <span className="text-xs md:text-sm font-bold text-black/70">
                  {duration}
                </span>
              ) : null}
            </div>

            {/* Texte de contexte */}
            {contextText ? (
              <p className="text-sm text-black/80 leading-relaxed flex-1">
                {contextText}
              </p>
            ) : null}

            {/* Team / Tools */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div>
                <h3 className="font-semibold mb-2 text-xl">Team</h3>
                <ul className="space-y-1 text-sm">
                  {team.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-xl">Tools</h3>
                <ul className="space-y-1 text-sm">
                  {tools.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Média droite */}
        <div className="md:col-span-5">
          <div className="rounded-lg border border-black/10 bg-white/60 aspect-video overflow-hidden grid place-items-center h-full">
            {media ? (
              <img
                src={media}
                alt="Project media"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-black/50">Media placeholder</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
