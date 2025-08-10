export default function ProjectSummaryCard({
  title,
  tags = [],
  points = [],
  engineIcon,
  toolIcon,
  summary,
  thumb,
  onMoreInfo,
}) {
  return (
    <article className="relative rounded-xl border border-black/30 bg-[#F6D0BB] shadow-[0_4px_0_#00000033] p-4 md:p-5 flex flex-col">
      {/* vignette */}
      <div className="aspect-[4/3] rounded-md bg-white/60 border border-black/10 grid place-items-center mb-4">
        {thumb && (
          <img
            src={thumb}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#FFF3EF] border border-black/20"
          >
            {t}
          </span>
        ))}
      </div>

      {/* ======= CONTENU EN 2 COLONNES (VERSION FLEX) ======= */}
      <div className="flex gap-4 mb-4">
        {/* Colonne gauche : texte */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>

          <ul className="list-disc list-inside text-sm space-y-1 mb-3">
            {points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>

          <p className="text-sm text-black/70">{summary}</p>
        </div>

        {/* Colonne droite : logos */}
        <div className="w-16 shrink-0 flex flex-col items-end gap-2">
          {engineIcon ? (
            <img
              src={engineIcon}
              alt="Engine"
              className="w-16 h-16 object-contain"
            />
          ) : null}
          {toolIcon ? (
            <img
              src={toolIcon}
              alt="Tool"
              className="w-16 h-16 object-contain"
            />
          ) : null}
        </div>
      </div>
      {/* ======= FIN 2 COLONNES ======= */}

      {/* Footer : statut + bouton */}
      <div className="mt-auto flex items-center justify-end gap-2">
        <button
          onClick={onMoreInfo}
          className="px-3 py-1 rounded-full text-xs bg-[#89A9FF] border border-black/30 hover:brightness-105 transition"
        >
          More info
        </button>
      </div>
    </article>
  );
}
