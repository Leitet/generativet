import { Orbitron } from "next/font/google";

const font = Orbitron({ subsets: ["latin"] });

const className = 'scroll-m-20 font-thin tracking-tight'

export function Header1({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <h1 className={`mt-6 text-4xl text-center lg:text-5xl ${className} ${font.className}`}>
            {children}
        </h1>
    )
}


export function Header2({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h2 className={`text-3xl lg:text-4xl mt-3 ${className} ${font.className}`}>
                {children}
            </h2>
            <hr className="mb-4"></hr>
        </div>
    )
}

export function Header3({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
          <h2 className={`text-2xl lg:text-3xl mt-3 ${className} ${font.className}`}>
              {children}
          </h2>
          <hr className="mb-4"></hr>
      </div>
  )
}