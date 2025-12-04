import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { useUser } from "@clerk/nextjs";


export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  // const { user } = useUser();
 
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default Provider;