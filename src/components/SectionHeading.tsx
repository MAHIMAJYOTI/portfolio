type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
