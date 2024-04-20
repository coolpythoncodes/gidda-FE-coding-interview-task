import Footer from "@/components/containers/footer";
import Navbar from "@/components/containers/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <>
                    <Navbar />
                    {children}
                    <Footer />
                </>
            </body>
        </html>
    );
}