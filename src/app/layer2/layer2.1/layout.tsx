export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <div>  <div className="m-4 flex justify-center text-4xl text-pink-500 font-extrabold">
        I'm the top bar of layer 2.1

      </div>
      {children}
      </div>
  );
}
