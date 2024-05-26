
export default function BottonNav() { 
    return (
      <div className="mt-10 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <a
        href="/podcast"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
        <h2 className="mb-3 text-2xl font-semibold">
            Podcast{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Med någorlunda regelbundenhet pratar vi om allt som rör generativ AI.
        </p>
        </a>

        <a
        href="/forelasningar"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
        >
        <h2 className="mb-3 text-2xl font-semibold">
            Föreläsningar{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Vi i Generativet annordnar föreläsningar och workshops. Läs mer...
        </p>
        </a> 

        <a
        href="https://generativet.myspreadshop.se/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
        <h2 className="mb-3 text-2xl font-semibold">
            Shop{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Varför inte glassa runt i lite skön Genereativetmerch?
        </p>
        </a>

        <a
        href="https://discord.gg/4F7hUtbfdm"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        >
        <h2 className="mb-3 text-2xl font-semibold">
            Discord{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            I vår Discord diskuteras allt som rör generativ AI
        </p>
        </a>
        </div>
    )
}