export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {" "}
      <div className="m-4 flex justify-center text-4xl font-extrabold text-pink-500">
        I'm the top or side navbar or layout inside the dashabord
      </div>
      {children}
    </div>
  );
}
