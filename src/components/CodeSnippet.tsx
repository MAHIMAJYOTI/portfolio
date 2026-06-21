import { codeSnippet } from "@/data/portfolio";

export function CodeSnippet() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#12121a] shadow-2xl shadow-violet-900/20">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-sm text-zinc-500">
            {codeSnippet.filename}
          </span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-7">
          {codeSnippet.lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-6 inline-block w-6 select-none text-right text-zinc-600">
                {i + 1}
              </span>
              <code
                className={
                  line.startsWith("#")
                    ? "text-zinc-500"
                    : line.includes("@app")
                      ? "text-violet-400"
                      : line.includes("async")
                        ? "text-cyan-300"
                        : "text-zinc-300"
                }
              >
                {line}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </section>
  );
}
