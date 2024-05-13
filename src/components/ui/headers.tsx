
export function Header1({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <h1 className="scroll-m-20 text-4xl font-thin tracking-tight lg:text-5xl">
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
            <h2 className="scroll-m-20 text-3xl font-thin tracking-tight lg:text-4xl mt-3">
                {children}
            </h2>
            <hr className="mb-4"></hr>
        </div>
    )
}