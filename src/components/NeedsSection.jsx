export default function NeedsSection({
  id = "needs",
  title = "Needs",
  items = [], // [{label:"...", desc:"..."}, ...] ou ["texte simple", ...]
}) {
  return (
    <section id={id} className="scroll-mt-28 mt-8">
      <div className="rounded-xl bg-[#FFF3EF] p-5 md:p-6 shadow-sm border border-black/10">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>

        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
          {items.map((it, i) => {
            if (typeof it === "string") {
              return <li key={i}>{it}</li>;
            }
            const { label, desc } = it || {};
            return (
              <li key={i}>
                {label && <strong className="font-semibold">{label}</strong>}
                {label && desc ? " : " : null}
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
